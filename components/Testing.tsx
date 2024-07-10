"use client";

import React, { Fragment, useEffect, useRef, useState } from "react";
import { useUnityContext, Unity } from "react-unity-webgl";
import { useActiveAddress } from "arweave-wallet-kit";
import { createDataItemSigner, message, result } from "@permaweb/aoconnect";
import { useToast } from "@/components/ui/use-toast";
import BalanceButton from "./BalanceButton";

export function Testing() {
  const { unityProvider, loadingProgression, isLoaded, requestFullscreen } = useUnityContext({
    loaderUrl: "https://dimension-travellers-086fae.spheron.app/Build/New2.loader.js",
    dataUrl: "https://dimension-travellers-086fae.spheron.app/Build/New2.data.unityweb",
    frameworkUrl: "https://dimension-travellers-086fae.spheron.app/Build/New2.framework.js.unityweb",
    codeUrl: "https://dimension-travellers-086fae.spheron.app/Build/New2.wasm.unityweb",
  });

  const canvasRef = useRef(null);
  const activeAddress = useActiveAddress();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const processId = "RdiOs7wNV7g-rZfb2IpnnrzTAMpljSwZZRNQOx8-cR8";
  const [updateTrigger, setUpdateTrigger] = useState(0);
  const [gameSessionActive, setGameSessionActive] = useState(false);
  const [sessionTimer, setSessionTimer] = useState(60);
  const [isAddingTime, setIsAddingTime] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  function handleClickEnterFullscreen() {
    requestFullscreen(true);
  }

  const startGameSession = async () => {
    if (!activeAddress) {
      toast({
        title: "Wallet not connected",
        description: "Please connect your wallet to start a game session.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      const res = await message({
        process: processId,
        tags: [
          { name: "Action", value: "Transfer" },
          { name: "Recipient", value: "5f9UIOFAKmf8kTmiTg_9ScuE330l6kdmu3zUO7Yv_68" },
          { name: "Quantity", value: "1" }
        ],
        data: "",
        signer: createDataItemSigner(window.arweaveWallet),
      });

      const transferResult = await result({
        process: processId,
        message: res,
      });

      console.log("Transfer result:", transferResult);
      toast({
        title: "Game Session Started",
        description: "1 token has been transferred to start the game session.",
      });
      setUpdateTrigger(prev => prev + 1); // Trigger balance update
      
      // Start the game session
      setGameSessionActive(true);
      setSessionTimer(60);

      // Start the countdown
      const timer = setInterval(() => {
        setSessionTimer((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timer);
            setIsPaused(true);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);

    } catch (error) {
      console.error("Transfer error:", error);
      toast({
        title: "Error",
        description: "Failed to start game session. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const addMoreSeconds = async () => {
    setIsAddingTime(true);
    const success = await transferToken();
    if (success) {
      setSessionTimer(prevTime => prevTime + 30);
      if (isPaused) {
        setIsPaused(false);
        startCountdown();
      }
    }
    setIsAddingTime(false);
  };

  const transferToken = async () => {
    if (!activeAddress) {
      toast({
        title: "Wallet not connected",
        description: "Please connect your wallet to add more time.",
        variant: "destructive",
      });
      return false;
    }

    try {
      const res = await message({
        process: processId,
        tags: [
          { name: "Action", value: "Transfer" },
          { name: "Recipient", value: "5f9UIOFAKmf8kTmiTg_9ScuE330l6kdmu3zUO7Yv_68" },
          { name: "Quantity", value: "1" }
        ],
        data: "",
        signer: createDataItemSigner(window.arweaveWallet),
      });

      const transferResult = await result({
        process: processId,
        message: res,
      });

      console.log("Transfer result:", transferResult);
      toast({
        title: "Time Added",
        description: "1 token has been transferred to add more time.",
      });
      setUpdateTrigger(prev => prev + 1); // Trigger balance update
      return true;
    } catch (error) {
      console.error("Transfer error:", error);
      toast({
        title: "Error",
        description: "Failed to add more time. Please try again.",
        variant: "destructive",
      });
      return false;
    }
  };

  const startCountdown = () => {
    const timer = setInterval(() => {
      setSessionTimer((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          setIsPaused(true);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
  };

  return (
    <div className="bg-gradient-to-r from-purple-800 to-indigo-900 min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-black rounded-xl shadow-lg overflow-hidden">
        <div className="p-8">
          <h1 className="text-4xl font-bold text-center text-neon-blue mb-8">Dimension Travellers Arcade</h1>
          
          {!gameSessionActive ? (
            <div className="text-center">
              <div className="relative w-full h-64 bg-gray-800 rounded-lg overflow-hidden mb-6">
                <img 
                  src="/game-preview.jpg" 
                  alt="Game Preview" 
                  className="w-full h-full object-cover opacity-50"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button 
                    onClick={startGameSession}
                    disabled={isLoading || !activeAddress}
                    className="px-8 py-4 bg-neon-green text-black font-bold rounded-full text-xl hover:bg-neon-green-bright transition-colors duration-300"
                  >
                    {isLoading ? "Processing..." : "Start Game Session"}
                  </button>
                </div>
              </div>
              <p className="text-neon-blue mb-4">Connect your wallet and start a game session to play!</p>
            </div>
          ) : (
            <div>
              <div className="relative">
                <Unity
                  unityProvider={unityProvider}
                  ref={canvasRef}
                  className="w-full h-96 rounded-lg"
                />
                {isPaused && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <p className="text-white text-2xl font-bold">Game Paused</p>
                  </div>
                )}
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="text-neon-blue">
                  {isPaused ? "Game Paused" : `Time remaining: ${sessionTimer} seconds`}
                </div>
                <button
                  onClick={handleClickEnterFullscreen}
                  className="px-4 py-2 bg-neon-purple text-white rounded-md hover:bg-neon-purple-bright transition-colors duration-300"
                >
                  Play in Full Screen
                </button>
              </div>
              <div className="mt-4">
                <button
                  onClick={addMoreSeconds}
                  disabled={isAddingTime}
                  className="w-full py-3 bg-neon-orange text-black font-bold rounded-md hover:bg-neon-orange-bright transition-colors duration-300"
                >
                  {isAddingTime ? "Processing..." : "Add 30 seconds"}
                </button>
              </div>
            </div>
          )}
          
          <div className="mt-8">
            <BalanceButton triggerUpdate={updateTrigger} />
          </div>
        </div>
      </div>
    </div>
  );
}
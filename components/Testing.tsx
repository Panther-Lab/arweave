"use client";

import React, { useRef, useState } from "react";
import { useUnityContext, Unity } from "react-unity-webgl";
import { useActiveAddress } from "arweave-wallet-kit";
import { createDataItemSigner, message, result } from "@permaweb/aoconnect";
import { useToast } from "@/components/ui/use-toast";
import BalanceButton from "./BalanceButton";

export function Testing() {
  const { unityProvider, requestFullscreen } = useUnityContext({
    loaderUrl: "https://dimension-travellers-086fae.spheron.app/Build/New2.loader.js",
    dataUrl: "https://dimension-travellers-086fae.spheron.app/Build/New2.data.unityweb",
    frameworkUrl: "https://dimension-travellers-086fae.spheron.app/Build/New2.framework.js.unityweb",
    codeUrl: "https://dimension-travellers-086fae.spheron.app/Build/New2.wasm.unityweb",
  });

  const canvasRef = useRef(null);
  const activeAddress = useActiveAddress();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [gameSessionActive, setGameSessionActive] = useState(false);
  const [sessionTimer, setSessionTimer] = useState(60);
  const [updateTrigger, setUpdateTrigger] = useState(0);
  const processId = "RdiOs7wNV7g-rZfb2IpnnrzTAMpljSwZZRNQOx8-cR8";

  const startGameSession = async () => {
    if (!activeAddress) {
      toast({
        title: "Wallet not connected",
        description: "Please connect your wallet to start a game session.",
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

      await result({ process: processId, message: res });

      toast({ title: "Game Session Started", description: "1 token has been transferred to start the game session." });
      setGameSessionActive(true);
      startCountdown();
    } catch (error) {
      console.error("Transfer error:", error);
      toast({
        title: "Error",
        description: "Failed to start game session. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const startCountdown = () => {
    const timer = setInterval(() => {
      setSessionTimer((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          setGameSessionActive(false);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
  };

  const addThirtySeconds = async () => {
    if (!activeAddress) {
      toast({
        title: "Wallet not connected",
        description: "Please connect your wallet to add time.",
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

      await result({ process: processId, message: res });

      toast({ title: "Time Added", description: "30 seconds have been added to your session." });
      setSessionTimer(prevTime => prevTime + 30);
      setUpdateTrigger(prev => prev + 1); // Trigger balance update
    } catch (error) {
      console.error("Transfer error:", error);
      toast({
        title: "Error",
        description: "Failed to add time. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Dimension Travellers</h1>
      
      {!gameSessionActive ? (
        <div className="text-center">
          <button 
            onClick={startGameSession}
            disabled={isLoading || !activeAddress}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            {isLoading ? "Processing..." : "Start Game Session"}
          </button>
          <p className="mt-2">Connect your wallet and start a game session to play!</p>
        </div>
      ) : (
        <div>
          <Unity
            unityProvider={unityProvider}
            ref={canvasRef}
            className="w-full h-96 rounded"
          />
          <div className="flex justify-between items-center mt-4">
            <div>Time remaining: {sessionTimer} seconds</div>
            <button
              onClick={addThirtySeconds}
              disabled={isLoading}
              className="px-4 py-2 bg-green-500 text-white rounded mr-2"
            >
              Add 30 Seconds
            </button>
            <button
              onClick={() => requestFullscreen(true)}
              className="px-4 py-2 bg-gray-500 text-white rounded"
            >
              Fullscreen
            </button>
          </div>
        </div>
      )}
      
      <div className="mt-4">
        <BalanceButton triggerUpdate={updateTrigger} />
      </div>
    </div>
  );
}
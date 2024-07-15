"use client";

import React, { useRef, useState } from "react";
import { useUnityContext, Unity } from "react-unity-webgl";
import { useActiveAddress } from "arweave-wallet-kit";
import { createDataItemSigner, message, result } from "@permaweb/aoconnect";
import { useToast } from "@/components/ui/use-toast";
import BalanceButton from "./BalanceButton";

export function TestingFive() {
  const { unityProvider, requestFullscreen } = useUnityContext({
    loaderUrl: "https://soulsavior-6b23fa.spheron.app/Build/WebGL.loader.js",
    dataUrl: "https://soulsavior-6b23fa.spheron.app/Build/WebGL.data",
    frameworkUrl: "https://soulsavior-6b23fa.spheron.app/Build/WebGL.framework.js",
    codeUrl: "https://soulsavior-6b23fa.spheron.app/Build/WebGL.wasm",
  });

  const canvasRef = useRef(null);
  const activeAddress = useActiveAddress();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [gameSessionActive, setGameSessionActive] = useState(false);
  const [sessionTimer, setSessionTimer] = useState(600);
  const [updateTrigger, setUpdateTrigger] = useState(0);
  const processId = "RdiOs7wNV7g-rZfb2IpnnrzTAMpljSwZZRNQOx8-cR8";

  const startGameSession = async () => {
  
      toast({ title: "Game Started", description: "Free Session is started" });
      setGameSessionActive(true);
  }
    

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Soul Savior</h1>
      
      <div className="mb-6">
        {!gameSessionActive ? (
          <>
            <img src="/soul-game.png" alt="Soul Savior" className="w-full h-64 object-cover rounded-lg mb-4" />
            <p className="text-lg mb-4">
              Embark on a spiritual journey in Soul Savior. Guide lost souls to their rightful place in the afterlife.
            </p>
            <div className="flex items-center space-x-2 mb-4">
              <span className="font-bold">Game Type:</span>
              <span>Adventure</span>
            </div>
            <div className="text-center">
              <button 
                onClick={startGameSession}
                disabled={isLoading || !activeAddress}
                className="px-6 py-3 bg-blue-500 text-white font-bold text-lg hover:bg-blue-600 transition-colors rounded-xl"
              >
                {isLoading ? "Processing..." : "Start Game Free"}
              </button>
              <p className="mt-2">Connect your wallet and start a game session to play!</p>
            </div>
          </>
        ) : (
          <div>
            <Unity
              unityProvider={unityProvider}
              ref={canvasRef}
              className="w-full h-96 rounded-lg"
            />
            <div className="flex justify-between items-center mt-4">
              <button
                onClick={() => requestFullscreen(true)}
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
              >
                Fullscreen
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
"use client";

import React, { Fragment, useEffect, useRef, useState } from "react";
import { useUnityContext, Unity } from "react-unity-webgl";
import { useActiveAddress } from "arweave-wallet-kit";
import { createDataItemSigner, message, result } from "@permaweb/aoconnect";
import { useToast } from "@/components/ui/use-toast";

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

  return (
    <div>
      <Fragment>
        <Unity
          unityProvider={unityProvider}
          ref={canvasRef}
          className="relative w-[70%] h-[35%] top-[20%] left-[15%] z-10 right-[10px] mt-[50px] rounded-xl"
        />

        <div className="flex items-center justify-center gap-8">
          <button
            onClick={handleClickEnterFullscreen}
            className="relative top-0 rounded-xl bg-black p-3 mt-10"
          >
            Play in Full Screen
          </button>

          <button 
            onClick={startGameSession}
            disabled={isLoading || !activeAddress}
            className="mt-10 mr-8 rounded-xl bg-black p-3"
          >
            {isLoading ? "Processing..." : "Start Game Session"}
          </button>
        </div>
      </Fragment>
    </div>
  );
}
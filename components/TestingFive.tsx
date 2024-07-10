"use client";

import React, { Fragment, useEffect, useRef } from "react";
import { useUnityContext, Unity } from "react-unity-webgl";

export function TestingFive() {
  const { unityProvider, loadingProgression, isLoaded ,requestFullscreen} = useUnityContext({
    loaderUrl: "https://soulsavior-6b23fa.spheron.app/Build/WebGL.loader.js",
    dataUrl: "https://soulsavior-6b23fa.spheron.app/Build/WebGL.data",
    frameworkUrl: "https://soulsavior-6b23fa.spheron.app/Build/WebGL.framework.js",
    codeUrl: "https://soulsavior-6b23fa.spheron.app/Build/WebGL.wasm",
  });

  const canvasRef = useRef(null);

  function handleClickEnterFullscreen() {
    requestFullscreen(true);
  }
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

      <button className="mt-10 mr-8 rounded-xl bg-black p-3">Start Game Session</button>
      </div>
    </Fragment>
    </div>
  );
}

function requestFullscreen(arg0: boolean) {
    throw new Error("Function not implemented.");
}

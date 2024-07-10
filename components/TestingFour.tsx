"use client";

import React, { Fragment, useEffect, useRef } from "react";
import { useUnityContext, Unity } from "react-unity-webgl";

export function TestingFour() {
  const { unityProvider, loadingProgression, isLoaded ,requestFullscreen} = useUnityContext({
    loaderUrl: "https://cinemare-9d4062.spheron.app/Build/WebGL.loader.js",
    dataUrl: "https://cinemare-9d4062.spheron.app/Build/WebGL.data",
    frameworkUrl: "https://cinemare-9d4062.spheron.app/Build/WebGL.framework.js",
    codeUrl: "https://cinemare-9d4062.spheron.app/Build/WebGL.wasm",
  });

  const canvasRef = useRef(null);

  function handleClickEnterFullscreen() {
    requestFullscreen(true);
  }
  return (
    <div className="relative">
    <Fragment>
      <Unity
        unityProvider={unityProvider}
        ref={canvasRef}
        style={{
          width: "70%",
          height: "35%",
          top: 0,
          left: "30%",
          zIndex: 1,
          position:"relative",
          right:10
        }}
      />
      <button
        onClick={handleClickEnterFullscreen}
        style={{
          top: 0,
          left: "30%",
          position:"relative"
        }}
      >
        Play in Full Screen
      </button>
    </Fragment>
    </div>
  );
}

function requestFullscreen(arg0: boolean) {
    throw new Error("Function not implemented.");
}

"use client";

import React, { Fragment, useEffect, useRef } from "react";
import { useUnityContext, Unity } from "react-unity-webgl";

export function TestingThree() {
    const { unityProvider, loadingProgression, isLoaded ,requestFullscreen} = useUnityContext({
        loaderUrl: "https://yk-tennis-0ef0a1.spheron.app/Build/BuildGame_YkTennis.loader.js",
        dataUrl: "https://yk-tennis-0ef0a1.spheron.app/Build/BuildGame_YkTennis.data",
        frameworkUrl: "https://yk-tennis-0ef0a1.spheron.app/Build/BuildGame_YkTennis.framework.js",
        codeUrl: "https://yk-tennis-0ef0a1.spheron.app/Build/BuildGame_YkTennis.wasm",
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

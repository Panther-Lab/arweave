"use client";

import React, { Fragment, useEffect, useRef } from "react";
import { useUnityContext, Unity } from "react-unity-webgl";

export function TestingTwo() {
  const { unityProvider, loadingProgression, isLoaded ,requestFullscreen} = useUnityContext({
    loaderUrl: "https://out-of-sight-23b09e.spheron.app/Build/Out%20of%20Sight.loader.js",
    dataUrl: "https://out-of-sight-23b09e.spheron.app/Build/Out%20of%20Sight.data",
    frameworkUrl: "https://out-of-sight-23b09e.spheron.app/Build/Out%20of%20Sight.framework.js",
    codeUrl: "https://out-of-sight-23b09e.spheron.app/Build/Out%20of%20Sight.wasm",
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

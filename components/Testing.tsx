"use client";

import React, { Fragment, useEffect, useRef } from "react";
import { useUnityContext, Unity } from "react-unity-webgl";

export function Testing() {
  const { unityProvider, loadingProgression, isLoaded ,requestFullscreen} = useUnityContext({
    loaderUrl: "https://dimension-travellers-086fae.spheron.app/Build/New2.loader.js",
    dataUrl: "https://dimension-travellers-086fae.spheron.app/Build/New2.data.unityweb",
    frameworkUrl: "https://dimension-travellers-086fae.spheron.app/Build/New2.framework.js.unityweb",
    codeUrl: "https://dimension-travellers-086fae.spheron.app/Build/New2.wasm.unityweb",
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
          width: "80%",
          height: "40%",
          top: 0,
          left: 0,
          zIndex: 1,
          position:"relative",
          right:10
        }}
      />
      <button
        onClick={handleClickEnterFullscreen}
        style={{
          top: "",
          right: "10px",
          zIndex: 2,
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

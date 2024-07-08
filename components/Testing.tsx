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

  function focusCanvas() {
    if (canvasRef.current) {
      canvasRef.current.focus();
    }
  }

  return (
    <Fragment>
      <Unity
        unityProvider={unityProvider}
        ref={canvasRef}
        devicePixelRatio={window.devicePixelRatio}
        style={{
          width: "80%",
          height: "40%",
          top: 0,
          left: 0,
          zIndex: 1,
          right:10
        }}
      />
      <button
        onClick={handleClickEnterFullscreen}
        style={{
          top: "10px",
          right: "10px",
        }}
      >
        Play in Full Screen
      </button>
    </Fragment>
  );
}

function requestFullscreen(arg0: boolean) {
    throw new Error("Function not implemented.");
}

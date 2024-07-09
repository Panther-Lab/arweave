"use client";

import React, { Fragment, useEffect, useRef } from "react";
import { useUnityContext, Unity } from "react-unity-webgl";

export function TestingThree() {
  const { unityProvider, loadingProgression, isLoaded ,requestFullscreen} = useUnityContext({
    loaderUrl: "https://gateway.pinata.cloud/ipfs/QmWnFkgUxCvYBtn5ixaMCHZj7kC3m1om9h93qrMzM1ZSSt/Build/UnityLoader.js",
    dataUrl: "https://gateway.pinata.cloud/ipfs/QmWnFkgUxCvYBtn5ixaMCHZj7kC3m1om9h93qrMzM1ZSSt/Build/karting-microgame.data.unityweb",
    frameworkUrl: "https://gateway.pinata.cloud/ipfs/QmWnFkgUxCvYBtn5ixaMCHZj7kC3m1om9h93qrMzM1ZSSt/Build/karting-microgame.wasm.framework.unityweb",
    codeUrl: "https://gateway.pinata.cloud/ipfs/QmWnFkgUxCvYBtn5ixaMCHZj7kC3m1om9h93qrMzM1ZSSt/Build/karting-microgame.wasm.code.unityweb",
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

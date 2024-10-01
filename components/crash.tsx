"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";

const GAME_DURATION = 10000; // 10 seconds
const UPDATE_INTERVAL = 100; // 100 milliseconds
const MAX_MULTIPLIER = 10; // Maximum multiplier

export default function StakeCrash() {
  const [betAmount, setBetAmount] = useState(10);
  const [targetMultiplier, setTargetMultiplier] = useState(2);
  const [balance, setBalance] = useState(1000);
  const [gameState, setGameState] = useState("waiting"); // 'waiting', 'playing', 'ended'
  const [currentMultiplier, setCurrentMultiplier] = useState(1);
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION / 1000);
  const [result, setResult] = useState({ type: null, amount: 0 });
  const canvasRef = useRef(null);
  const graphHistory = useRef([]);
  const gameInterval = useRef(null);
  const startTime = useRef(null);

  const startNewRound = () => {
    setCurrentMultiplier(1);
    graphHistory.current = [1];
    setGameState("playing");
    startTime.current = Date.now();
    setTimeLeft(GAME_DURATION / 1000);
    setResult({ type: null, amount: 0 });
  };

  useEffect(() => {
    if (gameState === "playing") {
      gameInterval.current = setInterval(() => {
        const elapsedTime = Date.now() - startTime.current;
        const remainingTime = Math.max(0, GAME_DURATION - elapsedTime);
        setTimeLeft(remainingTime / 1000);

        if (remainingTime <= 0 || currentMultiplier >= targetMultiplier) {
          clearInterval(gameInterval.current);
          setGameState("ended");
          const finalMultiplier = Math.min(currentMultiplier, targetMultiplier);
          const winnings = betAmount * (finalMultiplier - 1);
          setResult({
            type: finalMultiplier >= targetMultiplier ? "win" : "loss",
            amount: Math.abs(winnings),
          });
          setBalance((prev) => prev + betAmount * finalMultiplier);
          return;
        }

        setCurrentMultiplier((prev) => {
          const change = (Math.random() - 0.3) * 0.1; // Slightly biased towards increase
          const newMultiplier = Math.max(
            0.1,
            Math.min(MAX_MULTIPLIER, prev + change)
          );
          graphHistory.current.push(newMultiplier);
          return newMultiplier;
        });
      }, UPDATE_INTERVAL);

      return () => clearInterval(gameInterval.current);
    }
  }, [gameState, betAmount, targetMultiplier, currentMultiplier]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw background
    ctx.fillStyle = "#1a202c";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw grid lines
    ctx.strokeStyle = "#2d3748";
    ctx.lineWidth = 1;
    for (let i = 1; i < 5; i++) {
      const y = canvas.height - (i / 5) * canvas.height;
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }

    // Draw target line
    ctx.strokeStyle = "yellow";
    ctx.lineWidth = 2;
    ctx.setLineDash([5, 5]);
    const targetY =
      canvas.height - (targetMultiplier / MAX_MULTIPLIER) * canvas.height;
    ctx.beginPath();
    ctx.moveTo(0, targetY);
    ctx.lineTo(canvas.width, targetY);
    ctx.stroke();
    ctx.setLineDash([]);

    // Draw graph
    ctx.beginPath();
    ctx.moveTo(0, canvas.height);
    for (let i = 0; i < graphHistory.current.length; i++) {
      const x = (i / (GAME_DURATION / UPDATE_INTERVAL)) * canvas.width;
      const y =
        canvas.height -
        (graphHistory.current[i] / MAX_MULTIPLIER) * canvas.height;
      ctx.lineTo(x, y);
    }
    ctx.strokeStyle = "white";
    ctx.lineWidth = 2;
    ctx.stroke();

    // Fill area under the graph
    ctx.lineTo(canvas.width, canvas.height);
    ctx.closePath();
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, "rgba(49, 196, 141, 0.4)");
    gradient.addColorStop(1, "rgba(49, 196, 141, 0)");
    ctx.fillStyle = gradient;
    ctx.fill();

    // Draw current multiplier and time left
    ctx.font = "48px Arial";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText(
      `${currentMultiplier.toFixed(2)}x`,
      canvas.width / 2,
      canvas.height / 2 - 30
    );
    ctx.font = "24px Arial";
    ctx.fillText(
      `Time: ${timeLeft.toFixed(1)}s`,
      canvas.width / 2,
      canvas.height / 2 + 30
    );

    // Draw result if game ended
    if (gameState === "ended") {
      ctx.font = "36px Arial";
      ctx.fillStyle = result.type === "win" ? "green" : "red";
      ctx.fillText(
        `${result.type === "win" ? "Won" : "Lost"}: $${result.amount.toFixed(
          2
        )}`,
        canvas.width / 2,
        canvas.height / 2 + 80
      );
    }
  }, [currentMultiplier, gameState, timeLeft, result, targetMultiplier]);

  const handleBet = () => {
    if (betAmount > balance || betAmount <= 0) return;
    setBalance((prev) => prev - betAmount);
    startNewRound();
  };

  return (
    <div className="flex flex-col md:flex-row bg-gray-900 text-white m-10">
      <div className="md:w-1/4 p-4 border-b md:border-r border-gray-700 max-w-4xl">
        <h2 className="text-2xl mb-4">Stake Crash</h2>
        <div className="space-y-4">
          <div>
            <label className="block mb-2">Bet Amount</label>
            <Input
              type="number"
              value={betAmount}
              onChange={(e) => setBetAmount(Number(e.target.value))}
              className="w-full bg-gray-800 text-white"
            />
          </div>
          <div>
            <label className="block mb-2">
              Target Multiplier: {targetMultiplier.toFixed(2)}x
            </label>
            <Slider
              min={1}
              max={MAX_MULTIPLIER}
              step={0.1}
              value={[targetMultiplier]}
              onValueChange={(value) => setTargetMultiplier(value[0])}
              className="w-full"
            />
          </div>
          <Button
            onClick={handleBet}
            className="w-full bg-green-500 hover:bg-green-600"
            disabled={gameState === "playing"}
          >
            Place Bet
          </Button>
          <div>Balance: ${balance.toFixed(2)}</div>
          {gameState === "ended" && (
            <div
              className={
                result.type === "win" ? "text-green-500" : "text-red-500"
              }
            >
              {result.type === "win" ? "Won" : "Lost"}: $
              {result.amount.toFixed(2)}
            </div>
          )}
        </div>
      </div>
      <div className="flex-1 p-4">
        <canvas
          ref={canvasRef}
          width={800}
          height={400}
          className="w-full h-full"
        />
      </div>
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Bomb, Diamond } from "lucide-react";

const GRID_SIZE = 5;
const MAX_MINES = 24;

export default function StakeMinesGame() {
  const [grid, setGrid] = useState<Array<number>>([]);
  const [mineCount, setMineCount] = useState(3);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [revealedCells, setRevealedCells] = useState<Array<boolean>>([]);
  const [betAmount, setBetAmount] = useState("0.00000000");
  const [isAuto, setIsAuto] = useState(false);

  useEffect(() => {
    initializeGame();
  }, [mineCount]);

  const initializeGame = () => {
    const newGrid = Array(GRID_SIZE * GRID_SIZE).fill(0);
    let mines = 0;
    while (mines < mineCount) {
      const randomIndex = Math.floor(Math.random() * newGrid.length);
      if (newGrid[randomIndex] === 0) {
        newGrid[randomIndex] = 1;
        mines++;
      }
    }
    setGrid(newGrid);
    setGameOver(false);
    setScore(0);
    setRevealedCells(Array(GRID_SIZE * GRID_SIZE).fill(false));
  };

  const handleCellClick = (index: number) => {
    if (gameOver || revealedCells[index]) return;

    const newRevealedCells = [...revealedCells];
    newRevealedCells[index] = true;
    setRevealedCells(newRevealedCells);

    if (grid[index] === 1) {
      setGameOver(true);
      setRevealedCells(Array(GRID_SIZE * GRID_SIZE).fill(true));
    } else {
      setScore(score + 1);
    }
  };

  const handleBet = () => {
    initializeGame();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground p-4">
      <div className="w-full max-w-4xl">
        {/* <div className="flex justify-between mb-4">
          <h1 className="text-3xl font-bold">Stake</h1>
          <div>
            <Button variant="outline" className="mr-2">
              Sign In
            </Button>
            <Button>Register</Button>
          </div>
        </div> */}
        <div className="flex gap-8">
          <div className="w-1/3 space-y-4">
            <div className="flex rounded-full bg-[#1c3a47] p-1">
              <Button
                variant={isAuto ? "ghost" : "secondary"}
                className="w-1/2 rounded-full"
                onClick={() => setIsAuto(false)}
              >
                Manual
              </Button>
              <Button
                variant={isAuto ? "secondary" : "ghost"}
                className="w-1/2 rounded-full"
                onClick={() => setIsAuto(true)}
              >
                Auto
              </Button>
            </div>
            <div>
              <Label htmlFor="betAmount">Bet Amount</Label>
              <div className="flex items-center mt-1">
                <Input
                  id="betAmount"
                  type="text"
                  value={betAmount}
                  onChange={(e) => setBetAmount(e.target.value)}
                  className="bg-[#1c3a47] border-none"
                />
                <Button variant="outline" className="ml-2">
                  ½
                </Button>
                <Button variant="outline" className="ml-2">
                  2x
                </Button>
              </div>
            </div>
            <div>
              <Label htmlFor="mineCount">Mines</Label>
              <Select
                onValueChange={(value: any) => setMineCount(Number(value))}
              >
                <SelectTrigger className="w-full bg-[#1c3a47] border-none">
                  <SelectValue placeholder="Select mine count" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: MAX_MINES }, (_, i) => i + 1).map(
                    (num) => (
                      <SelectItem key={num} value={num.toString()}>
                        {num}
                      </SelectItem>
                    )
                  )}
                </SelectContent>
              </Select>
            </div>
            <Button
              className="w-full bg-green-500 hover:bg-green-600"
              onClick={handleBet}
            >
              Bet
            </Button>
            <div className="text-center text-2xl font-bold">Score: {score}</div>
          </div>
          <div className="w-2/3">
            <div className="grid grid-cols-5 gap-2">
              {grid.map((cell, index) => (
                <button
                  key={index}
                  className={`w-full pt-[100%] relative rounded-lg ${
                    revealedCells[index]
                      ? "bg-[#1c3a47]"
                      : "bg-[#1c3a47] hover:bg-[#2a4d5d]"
                  } transition-colors duration-300 ease-in-out`}
                  onClick={() => handleCellClick(index)}
                  disabled={gameOver}
                >
                  {revealedCells[index] && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      {cell === 1 ? (
                        <Bomb className="w-3/4 h-3/4 text-red-500" />
                      ) : (
                        <Diamond className="w-3/4 h-3/4 text-green-500" />
                      )}
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

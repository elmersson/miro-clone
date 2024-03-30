"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface TimerProps {
  startTimer: (duration: number) => void;
  pauseTimer: () => void;
}

export const Timer = ({ startTimer, pauseTimer }: TimerProps) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [seconds, setSeconds] = useState<number>(60);
  const audioRef = useRef(new Audio("/sounds/jordnära.mp3"));

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    audioRef.current.loop = true;

    if (isPlaying) {
      startTimer(seconds);
      interval = setInterval(() => {
        setSeconds((prevSeconds) => {
          const newSeconds = prevSeconds - 1;
          if (newSeconds <= 0) {
            clearInterval(interval!);
            setIsPlaying(false);
          }
          return newSeconds;
        });
      }, 1000);
    } else {
      clearInterval(interval!);
      audioRef.current.pause();
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, pauseTimer, startTimer, seconds]);

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const parts = value.split(":").map(Number);
    const newSeconds = parts[0] * 60 + parts[1];
    setSeconds(newSeconds);
  };

  const formatTime = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  const toggleTimer = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((error) => console.error("Error playing the sound.", error));
    }
    setIsPlaying(!isPlaying);
  };

  const Icon = isPlaying ? <Pause size={16} /> : <Play size={16} />;

  return (
    <div className="absolute h-12 top-16 right-2 bg-white dark:bg-black rounded-md p-3 flex items-center shadow-md">
      <div className="flex gap-x-2 items-center">
        <Input type="time" value={formatTime(seconds)} onChange={handleTimeChange} />
        <Button variant="outline" size="sm" onClick={toggleTimer}>
          {Icon}
        </Button>
      </div>
    </div>
  );
};

export const TimerSkeleton = () => {
  return (
    <div className="absolute h-12 top-16 right-2 bg-white dark:bg-black rounded-md p-3 flex items-center shadow-md w-[100px]" />
  );
};

import { useCallback, useEffect, useRef } from "react";

export function calcRemainingTime(isDebug: Boolean, birthDate: string) {
  const presentTime = new Date().getTime();
  const birthDayTime = isDebug
    ? presentTime + 1000 * 10
    : new Date(birthDate).getTime();
  return birthDayTime - presentTime;
}

function convertMsToDateInfo(inputTime: number) {
  const diffSec = Math.floor(inputTime / 1);
  const date = Math.floor(diffSec / 86400000);
  const hour = Math.floor(diffSec / 3600000) % 24;
  const min = Math.floor(diffSec / 60000) % 60;
  const sec = (diffSec % 60000) / 1000;
  return { date, hour, min, sec, diffSec };
}

export function formatTimeToString(ms: number) {
  const { date, hour, min, sec, diffSec } = convertMsToDateInfo(Math.abs(ms));
  const hmsText = `${hour}時間${min}分${sec}秒`;
  return date === 0 ? hmsText : `${date}日${hmsText}`;
}

// https://bom-shibuya.hatenablog.com/entry/2020/10/27/182226
export const useAnimationFrame = (callback: () => void) => {
  const requestRef = useRef<ReturnType<typeof requestAnimationFrame>>();

  const animate = useCallback(() => {
    callback();
    requestRef.current = requestAnimationFrame(animate);
  }, [callback]);

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) {
        return cancelAnimationFrame(requestRef.current);
      }
    };
  }, [animate]);
};

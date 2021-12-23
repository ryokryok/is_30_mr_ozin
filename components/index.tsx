import { useState, useEffect } from "react";
import { IconContext } from "react-icons";
import { FaTwitter, FaGithub } from "react-icons/fa";
import {
  calcRemainingTime,
  formatTimeToString,
  useAnimationFrame,
} from "../lib";

const twitterUrl = "https://mobile.twitter.com/mr_ozin";
const gitHubUrl = "https://github.com/ryokryok/is_30_mr_ozin";

export const NameLogo = ({ name }: { name: string }) => {
  return (
    <h1 className="bg-clip-text text-transparent text-4xl font-bold bg-gradient-to-r from-pink-500  to-violet-500">
      {name}
    </h1>
  );
};

export const CountDownTimer = ({
  isDebug = false,
  birthDayDate,
}: {
  isDebug?: Boolean;
  birthDayDate: string;
}) => {
  const remainingTime = calcRemainingTime(isDebug, birthDayDate);

  const [time, setTime] = useState(remainingTime);
  const is30 = time <= 30;
  useAnimationFrame(() => {
    setTime(calcRemainingTime(isDebug, birthDayDate));
  });
  return (
    <div className="p-2 w-full">
      <div className="text-xl md:text-2xl lg:text-3xl text-gray-50">
        <p>
          おじんさん (
          <a
            href={twitterUrl}
            target="_blank"
            rel="noreferrer"
            className="p-1 text-blue-400"
          >
            @Mr_ozin
          </a>
          )が
        </p>
        {is30 ? (
          <>
            <p>三十路になってから</p>
            <TimeDisplay time={time} />
            <p>経過しました。</p>
          </>
        ) : (
          <>
            <p>20代の残り時間</p>
            <TimeDisplay time={time} />
            <p>です</p>
          </>
        )}
      </div>
    </div>
  );
};

const TimeDisplay = ({ time }: { time: number }) => {
  return (
    <p className="text-2xl md:text-4xl lg:text-6xl text-gray-50 font-bold font-mono">
      {formatTimeToString(time)}
    </p>
  );
};

export const Links = () => {
  return (
    <IconContext.Provider value={{ size: "2em" }}>
      <div className="p-4 text-xl text-blue-50 flex justify-center justify-items-center">
        <a href={twitterUrl} target="_blank" rel="noreferrer" className="p-1">
          <FaTwitter />
        </a>

        <a href={gitHubUrl} target="_blank" rel="noreferrer" className="p-1">
          <FaGithub />
        </a>
      </div>
    </IconContext.Provider>
  );
};

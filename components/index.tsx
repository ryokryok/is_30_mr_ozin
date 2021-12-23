import { useState } from "react";
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
            <TweetLink
              text={`おじんさんが三十路になってから ${formatTimeToString(
                time
              )} 経過しました。`}
            />
          </>
        ) : (
          <>
            <p>20代である期間は</p>
            <TimeDisplay time={time} />
            <p>です</p>
            <TweetLink
              text={`おじんさんが20代である期間は ${formatTimeToString(
                time
              )} です`}
            />
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
      <div className="p-4 text-2xl text-white">
        <a href={gitHubUrl} target="_blank" rel="noreferrer" className="p-1">
          <FaGithub />
        </a>
      </div>
    </IconContext.Provider>
  );
};

const TweetLink = ({ text }: { text: string }) => {
  return (
    <IconContext.Provider value={{ size: "2em" }}>
      <p>
        <a
          href={`https://twitter.com/intent/tweet?text=${text}&url=https://is-30-mr-ozin.vercel.app/`}
          target="_blank"
          rel="noreferrer"
          className="p-1 underline underline-offset-2 text-blue-400 self-center"
        >
          <FaTwitter />
        </a>
      </p>
    </IconContext.Provider>
  );
};

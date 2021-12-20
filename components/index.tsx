import { useState, useEffect } from "react";
import { FaTwitter, FaGithub } from "react-icons/fa";
import { calcRemainingTime, formatTimeToString } from "../lib";

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
  const [is_30, setIs_30] = useState(false);
  useEffect(() => {
    const id = setInterval(() => {
      setTime((time) => time - 1000);
    }, 1000);

    if (time <= 0) {
      setIs_30(true);
    }

    return () => {
      clearInterval(id);
    };
  }, [time]);
  return (
    <div className="p-2">
      <div className="text-3xl text-gray-50">
        {is_30 ? (
          <>
            <p>三十路になってから</p>
            <p className="text-6xl text-gray-50 font-mono">
              {formatTimeToString(time)}
            </p>
            <p>経過しました。</p>
          </>
        ) : (
          <>
            <p>20代の残り時間</p>
            <p className="text-6xl text-gray-50 font-mono">
              {formatTimeToString(time)}
            </p>
            <p>です</p>
          </>
        )}
      </div>
    </div>
  );
};

export const Links = () => {
  return (
    <div className="p-4 text-xl text-blue-50 flex justify-center justify-items-center	">
      <a href={twitterUrl} target="_blank" rel="noreferrer" className="p-1">
        <FaTwitter />
      </a>
      <a href={gitHubUrl} target="_blank" rel="noreferrer" className="p-1">
        <FaGithub />
      </a>
    </div>
  );
};

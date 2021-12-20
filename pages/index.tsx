import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { FaTwitter, FaGithub } from "react-icons/fa";

const birthName = "Mr_ozin";
const ThirtiesBirthDay = "2021-12-20T00:00:00+09:00";
const twitterUrl = "https://mobile.twitter.com/mr_ozin";
const gitHubUrl = "https://github.com/ryokryok/is_30_mr_ozin";

const Home: NextPage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-neutral-900">
      <Head>
        <title>is_30_Mr_ozin?</title>
        <meta name="description" content="Mr_ozin は三十路なのか?" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <NameLogo name={birthName} />
        <CountDownTimer />
        <Links />
      </main>
    </div>
  );
};

const NameLogo = ({ name }: { name: string }) => {
  return (
    <h1 className="bg-clip-text text-transparent text-4xl font-bold bg-gradient-to-r from-pink-500  to-violet-500">
      {name}
    </h1>
  );
};

function calcRemainingTime(isDebug: Boolean) {
  const presentTime = new Date().getTime();
  const birthDatTime = isDebug
    ? presentTime + 1000 * 10
    : new Date(ThirtiesBirthDay).getTime();
  return birthDatTime - presentTime;
}

const CountDownTimer = ({ isDebug = false }: { isDebug?: Boolean }) => {
  const remainingTime = calcRemainingTime(isDebug);

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
              {new Date(Math.abs(time)).toISOString().slice(11, 19)}
            </p>
            <p>経過しました。</p>
          </>
        ) : (
          <>
            <p>20代の残り時間</p>
            <p className="text-6xl text-gray-50 font-mono">
              {new Date(Math.abs(time)).toISOString().slice(11, 19)}
            </p>
            <p>です</p>
          </>
        )}
      </div>
    </div>
  );
};

const Links = () => {
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

export default Home;

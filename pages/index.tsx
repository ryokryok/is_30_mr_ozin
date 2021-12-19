import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-neutral-900">
      <Head>
        <title>is_30_Mr_ozin?</title>
        <meta name="description" content="Mr_ozin は三十路なのか?" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-4xl font-bold text-white">Mr_ozin</h1>
        <div className="p-2">
          <CountDownTimer />
        </div>
        <div className="p-4 text-xl text-blue-50">
          <a href="https://mobile.twitter.com/mr_ozin" target={"_blank"}>
            Twitter
          </a>
        </div>
      </main>
    </div>
  );
};

const ThirtiesBirthDay = "2021-12-20T00:00:00+09:00";
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
    return () => {
      clearInterval(id);
    };
  }, []);
  useEffect(() => {
    if (time <= 0) {
      setIs_30(true);
    }
    return () => {};
  }, [time]);
  return (
    <div>
      <p className="text-8xl text-gray-50">
        {new Date(Math.abs(time)).toISOString().slice(11, 19)}
      </p>
      <p className="text-4xl text-gray-50">{is_30 ? "三十路" : "まだ20代"}</p>
    </div>
  );
};

export default Home;

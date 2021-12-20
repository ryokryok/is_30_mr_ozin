import type { NextPage } from "next";
import Head from "next/head";
import { NameLogo, CountDownTimer, Links } from "../components";

const birthName = "Mr_ozin";
const thirtiesBirthDay = "2021-12-20T00:00:00+09:00";
const siteTitle = "is_30_Mr_ozin?";
const siteDesc = "Mr_ozin 三十路タイマー";

const Home: NextPage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-neutral-900">
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDesc} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <NameLogo name={birthName} />
        <CountDownTimer birthDayDate={thirtiesBirthDay} />
        <Links />
      </main>
    </div>
  );
};

export default Home;

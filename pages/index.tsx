import type { NextPage } from "next";
import Head from "next/head";
import { NameLogo, CountDownTimer, Links } from "../components";

const birthName = "Mr_ozin";
const thirtiesBirthDay = "2021-12-20T00:00:00+09:00";
const siteTitle = "Mr_ozin 三十路タイマー";
const siteDesc = "Mr_ozin が三十路になってからの経過時間をカウントします";
const siteImage = "/og-image.jpg";
const siteUrl = "https://is-30-mr-ozin.vercel.app/";
const siteType = "website";

const Home: NextPage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-neutral-900">
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDesc} />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:site_name" content={siteTitle} />
        <meta property="og:type" content={siteType} />
        <meta property="og:description" content={siteDesc} />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:image" content={siteImage} />
        <meta name="twitter:card" content={"summary_large_image"} />
        <meta name="twitter:creator" content="@Mr_ozin" />
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

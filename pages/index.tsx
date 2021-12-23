import type { NextPage } from "next";
import Head from "next/head";
import { CountDownTimer, Links } from "../components";

const thirtiesBirthDay = "2021-12-20T00:00:00+09:00";
const siteTitle = "Mr_ozin 三十路タイマー";
const siteDesc = "Mr_ozin が三十路になってからの経過時間をカウントします";
const siteImage = `https://res.cloudinary.com/dvhazxdof/image/upload/c_scale,w_1920/co_rgb:EEFF44,l_text:Verdana_150_bold:${encodeURIComponent(
  "Mr_ozin\n三十路\nタイマー"
)}/fl_layer_apply,g_west,x_50/birthday_site/og-image_lyx5wv.jpg`;
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

      <main className="flex flex-col items-center justify-center w-full flex-1 px-5 mb:px-10 lg:px-20">
        <CountDownTimer birthDayDate={thirtiesBirthDay} />
        <Links />
      </main>
    </div>
  );
};

export default Home;

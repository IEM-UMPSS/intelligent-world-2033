import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const LandingPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Huawei Day: Intelligent World 2030</title>
        <meta
          name="description"
          content="Join us at Huawei Day on May 9, 2023, from 9 am to 5 pm to learn about the Intelligent World 2030"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center ">
        <div className=" opacity-10">
          <video
            src="https://www.huawei.com/mediafiles/MediaFiles/2/1/2/%7B2121536E-2920-4260-AAEE-59DD37B7ECEB%7Dintelligent-2030-en-720.mp4"
            autoPlay
            muted
            loop
            className="fixed left-0 top-0 z-[-1] h-full w-full object-cover "
          ></video>
        </div>
        <div className="container relative z-10 flex flex-col items-center justify-center gap-12 px-4 py-16">
          <h1 className="text-center text-5xl font-extrabold tracking-tight text-red-600 sm:text-[5rem]">
            Huawei Open Day: <br />
            Intelligent World 2030
          </h1>
          <h2 className="text-2xl font-bold text-black">
            9<sup>th</sup> May 2023, 9 am to 5 pm, Auditorium Library UMP Pekan
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-black/10 p-4 text-black hover:bg-black/20"
              href="#register"
            >
              <Link
                className="flex max-w-xs flex-col gap-4 rounded-xl bg-black/10 p-4 text-black hover:bg-black/20"
                href="https://forms.gle/nbGZ7E6JJQMpbbmR8"
                target="_blank"
              >
                <h3 className="text-2xl font-bold">Register now →</h3>
              </Link>
              <div className="text-lg">
                Join us at Huawei Day and learn about the Intelligent World
                2030.
              </div>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-black/10 p-4 text-black hover:bg-black/20"
              href="https://www.huawei.com/en/giv"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">Learn more →</h3>
              <div className="text-lg">
                Discover the latest technologies and trends shaping the future
                of the Intelligent World.
              </div>
            </Link>
          </div>
          <div className="flex flex-col items-center gap-2" id="register">
            <p className="text-2xl text-black">
              Made with 💕 by Technical Team
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default LandingPage;

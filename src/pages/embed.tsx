import Head from "next/head";
import Nav from "../components/Nav";

export default function Embed() {
  return (
    <>
      <Head>
        <title>Modelo Embed Demo</title>
        <meta name="description" content="Modelo Embed Demo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Nav />
        <div className="flex justify-center items-center">
          <div className="modelo-wrapper w-3/4">
            <div className="w-full pb-[56.25%] relative">
              <div className="absolute inset-0">
                <iframe
                  src="
    https://app.modelo.io/embedded/1614065208851152896?viewport=false&autoplay=false&autorotate=false&hideTools=false&showBIM=false&showBBoxSize=false&showKooRender=false&showSettings=false"
                  className="w-full h-full border-0"
                  allowFullScreen={true}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

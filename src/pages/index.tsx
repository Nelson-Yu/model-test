import Head from "next/head";
import Nav from "../components/Nav";

export default function Home() {
  return (
    <>
      <Head>
        <title>Model Demo</title>
        <meta name="description" content="Model Demo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Nav />
      </main>
    </>
  );
}

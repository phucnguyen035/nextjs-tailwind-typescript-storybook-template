import { useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="container mx-auto">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div data-testid="count">{count}</div>
      <button
        className="rounded bg-indigo-500 py-2 px-4 text-white"
        onClick={() => setCount(count + 1)}
      >
        Add
      </button>
    </div>
  );
}

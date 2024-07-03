import { useState } from "react";
import reactLogo from "./assets/react.svg";
import biomeLogo from "./assets/biome.svg";
import tailwindLogo from "./assets/tailwind.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-800 font-normal text-white leading-6 text-opacity-90">
      <div className="m-0 flex min-w-[320px] max-w-screen-xl flex-col place-items-center justify-between p-8 text-center">
        <div className="flex flex-row justify-center">
          <a
            href="https://vitejs.dev"
            target="_blank"
            rel="noreferrer"
            className="font-medium"
          >
            <img
              src={viteLogo}
              alt="Vite logo"
              className="h-32 p-6 transition-all duration-300 ease-in-out hover:scale-110 hover:drop-shadow-2xl hover:filter"
            />
          </a>
          <a
            href="https://react.dev"
            target="_blank"
            rel="noreferrer"
            className="font-medium"
          >
            <img
              src={reactLogo}
              alt="React logo"
              className="h-32 p-6 transition-all duration-300 ease-in-out hover:scale-110 hover:drop-shadow-2xl hover:filter"
            />
          </a>
          <a
            href="https://biomejs.dev/"
            target="_blank"
            rel="noreferrer"
            className="font-medium"
          >
            <img
              src={biomeLogo}
              alt="Biome logo"
              className="h-32 p-6 transition-all duration-300 ease-in-out hover:scale-110 hover:drop-shadow-2xl hover:filter"
            />
          </a>
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noreferrer"
            className="font-medium"
          >
            <img
              src={tailwindLogo}
              alt="TailwindCSS logo"
              className="h-32 p-6 transition-all duration-300 ease-in-out hover:scale-110 hover:drop-shadow-2xl hover:filter"
            />
          </a>
        </div>
        <h1 className="p-8 font-bold text-5xl">
          Vite + React + Biome + Tailwind
        </h1>
        <div className="p-8">
          <button
            onClick={() => setCount((count) => count + 1)}
            type="button"
            className="cursor-pointer rounded-md border border-transparent bg-gray-900 px-3 py-2 font-medium text-base transition-colors duration-200 hover:border-indigo-500"
          >
            count is {count}
          </button>
          <p className="p-6">
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="text-gray-400">
          Click on the Vite, React, Biome and Tailwind logos to learn more
        </p>
      </div>
    </div>
  );
}

export default App;

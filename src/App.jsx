// rafce

import { useState } from "react";

const App = () => {
  //const [count, setstate] = useState(initialValue);
  const [count, setCount] = useState(0);

  function pluse() {
    setCount(count + 1);
  }
  function minus() {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount(0);
    };
  }
  function reset() {
    setCount(0);
  };

  return (
    <div className="flex justify-center items-center  h-[100vh]">
      <div className="flex flex-col">
        <div className="flex flex-col items-center space-y-3">
          <h1 className="text-4xl mb-12  font-semibold">Counter Application</h1>
          <span className="w-[100px] h-[100px] mb-8 flex justify-center items-center rounded-full text-4xl border border-4 border-yellow-400 ">
            {count}
          </span>
        </div>
        <div className="flex flex-col space-y-4 items-center">
          <div className="space-x-2">
            {/* pluse button */}
            <button
              className="bg-sky-600 cursor-pointer  text-white rounded-full font-semibold px-10 py-2 shadow-gray-500"
              onClick={pluse}
            >
              <i class="fa-solid fa-plus"></i>
            </button>
            <button
              className="bg-green-600 cursor-pointer  font-semibold text-white rounded-full px-10 py-2 shadow-gray-500 "
              onClick={minus}
            >
              <i class="fa-solid fa-minus"></i>
            </button>
          </div>
          <div>
            <button
              className="bg-rose-600 cursor-pointer   font-semibold text-white rounded-full px-10 py-2 shadow-gray-500 "
              onClick={reset}
            >
              Reset
            </button>
          </div>
        </div>
        <p className="text-center mt-8 text-[14px]">
          Made By:{" "}
          <a className="text-blue-900 font-semibold">Hussen Md. Tanim</a>
        </p>
      </div>
    </div>
  );
};

export default App;

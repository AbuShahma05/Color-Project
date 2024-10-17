import { useState } from "react";

export default function Color() {
  const [colorTemp, setColorTemp] = useState("lavender");
  return (
    <div
      className="w-full min-h-screen duration-200 "
      style={{ backgroundColor: colorTemp }}
    >
      <div
        className="fixed *: flex flex-wrap justify-center
        bottom-12 inset-x-0 px-2"
      >
        <div
          className="flex *: flex-wrap justify-center gap-3
            shadow-lg bg-white px-3 py-2 rounded-3xl"
        >
          <button
            onClick={() => setColorTemp("red")}
            className="outline-none px-4 py-1 rounded-full
                     text-white shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColorTemp("green")}
            className="outline-none px-4 py-1 rounded-full
                     text-white shadow-lg"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColorTemp("blue")}
            className="outline-none px-4 py-1 rounded-full
                     text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => setColorTemp("olive")}
            className="outline-none px-4 py-1 rounded-full
                     text-white shadow-lg"
            style={{ backgroundColor: "olive" }}
          >
            olive
          </button>
          <button
            onClick={() => setColorTemp("gray")}
            className="outline-none px-4 py-1 rounded-full
                     text-white shadow-lg"
            style={{ backgroundColor: "gray" }}
          >
            Gray
          </button>
          <button
            onClick={() => setColorTemp("yellow")}
            className="outline-none px-4 py-1 rounded-full
                     text-white shadow-lg"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>
          <button
            onClick={() => setColorTemp("pink")}
            className="outline-none px-4 py-1 rounded-full
                     text-white shadow-lg"
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>
          <button
            onClick={() => setColorTemp("purple")}
            className="outline-none px-4 py-1 rounded-full
                     text-white shadow-lg"
            style={{ backgroundColor: "purple" }}
          >
            Purple
          </button>
          <button
            onClick={() => setColorTemp("white")}
            className="outline-none px-4 py-1 rounded-full
                     text-black shadow-lg"
            style={{ backgroundColor: "white" }}
          >
            White
          </button>
          <button
            onClick={() => setColorTemp("black")}
            className="outline-none px-4 py-1 rounded-full
                     text-white shadow-lg"
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>
        </div>
      </div>
    </div>
  );
}


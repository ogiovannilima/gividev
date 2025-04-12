import { JetBrains_Mono } from "next/font/google";
import Image from "next/image";
import {
  DiJsBadge,
  DiReact,
  DiNodejsSmall,
  DiDotnet,
  DiDatabase,
  DiCode,
} from "react-icons/di";
// import { CiMapPin } from "react-icons/ci";
import TypingEffect from "./components/typer";

// const majorMono = Major_Mono_Display({
//   weight: "400",
//   subsets: ["latin"],
// });

const JetBrainsMono = JetBrains_Mono({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`flex flex-col h-full px-8 py-16 bg-(--background-black) text-(--font-white) ${JetBrainsMono.className}`}
    >
      <div className="flex justify-between items-end">
        <div>
          <p className="text-(--font-red) thames-font text-5xl font-bold tracking-[-3px]">
            Giovanni Lima
          </p>
          <div className="flex items-center gap-2 my-1">
            <TypingEffect />
          </div>
        </div>
        <div className="p-2 flex">
          <p className="-rotate-90 font-bold relative -right-4">開発者</p>
          <DiJsBadge className="w-10 h-10 text-(--font-red)" />
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center border-t-2 border-b-2 py-3 px-2 mt-1">
          <div>Javascript | Typescript | React.js | Node.js</div>
          <div className="flex items-center gap-2">
            <DiReact className="w-8 h-8 text-(--font-red)" />
            <DiNodejsSmall className="w-8 h-8 text-(--font-red)" />
          </div>
          <div>5 years</div>
        </div>
        {/* <hr className="border-t-2 border-(--font-white) my-4" /> */}
        <div className="mt-4 flex justify-between items-center px-2">
          <div className="w-[425px]">.Net Framework | .Net Core | SQL</div>
          <div className="flex items-center gap-2">
            <DiDotnet className="w-8 h-8 text-(--font-red)" />
            <DiDatabase className="w-8 h-8 text-(--font-red)" />
          </div>
          <div>4 years</div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mt-9 gap-8">
        <Image
          src={"/profile1.png"}
          alt="profile"
          width={300}
          height={300}
          className="rounded-full object-cover"
        />
        {/* <p className="flex items-center gap-2 w-full justify-end mr-8">
          <CiMapPin className="w-7 h-7 text-(--font-red)" />
          Brazil - 2025
        </p> */}
      </div>

      <div className="flex items-center gap-2 mt-6 cursor-pointer">
        <DiCode className="w-36 h-36 text-(--font-white) bg-(--font-red)" />
        <div className={`flex flex-col gap-5`}>
          <p>My Work</p>
          <p>私のプロジェクト</p>
          <p>Everything here is constantly changing</p>
        </div>
      </div>
    </div>
  );
}

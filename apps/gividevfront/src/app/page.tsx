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
import { AiFillMail, AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import { SiDevdotto } from "react-icons/si";
// import { CiMapPin } from "react-icons/ci";
import TypingEffect from "./components/typerText/typer";
import { FadeText } from "./components/fadeText";

// const majorMono = Major_Mono_Display({
//   weight: "400",
//   subsets: ["latin"],
// });

const JetBrainsMono = JetBrains_Mono({
  weight: "400",
  subsets: ["latin"],
});

type SkillList = {
  front: string[];
  back: string[];
};

export default function Home() {
  const skills: SkillList = {
    front: ["React.js", "Next.js", "TypeScript", "Javascript"],
    back: ["Node.js", ".NET", "C#", "SQL"],
  };

  return (
    <div
      className={`flex flex-col h-full px-8 py-10 bg-(--background-black) text-(--font-white) ${JetBrainsMono.className}`}
    >
      <div className="flex justify-between items-centern">
        <div>
          <p className="text-(--font-red) thames-font text-5xl font-bold tracking-[-3px]">
            Giovanni Lima
          </p>
          <div className="flex items-center gap-2 my-1">
            <TypingEffect />
          </div>
        </div>
        <div className="p-2 hidden items-center sm:flex gap-2">
          <p className="-rotate-90 font-bold relative -right-4">開発者</p>
          <DiJsBadge className="w-10 h-10 text-(--font-red)" />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between border-t-2 border-b-2 py-3 px-2 mt-1 shrink-0">
          <div className="flex items-start flex-col sm:flex-row sm:gap-4">
            {skills.front.map((skill) => (
              <p key={skill}>{skill}</p>
            ))}
          </div>
          <div className="flex shrink-0 gap-14 items-center sm:gap-8">
            <div className="flex items-center gap-2 flex-col sm:flex-row">
              <DiReact className="w-8 h-8 text-(--font-red)" />
              <DiNodejsSmall className="w-8 h-8 text-(--font-red)" />
            </div>
            <div>5 years</div>
          </div>
        </div>

        <div className="mt-4 flex justify-between items-center px-2 shrink-0">
          <div className="flex items-start flex-col w-[105px] sm:flex-row sm:gap-4">
            {skills.back.map((skill) => (
              <p key={skill}>{skill}</p>
            ))}
          </div>
          <div className="flex shrink-0 gap-14 items-center sm:gap-8">
            <div className="flex items-center gap-2 flex-col sm:flex-row">
              <DiDotnet className="w-8 h-8 text-(--font-red)" />
              <DiDatabase className="w-8 h-8 text-(--font-red)" />
            </div>
            <div>4 years</div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="flex items-center justify-center mt-5 mb-5 gap-8 relative w-[220px] h-[220px] sm:w-[350px] sm:h-[350px]">
          <Image
            src={"/profile1.png"}
            alt="profile"
            fill
            className="rounded-full object-cover "
          />
        </div>
      </div>

      <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-4 mt-6 cursor-pointer">
          <DiCode className="w-36 h-36 text-(--font-white) bg-(--font-red) shrink-0" />
          <div className="flex flex-col gap-6">
            <p className="font-bold">My Work</p>
            <p>Whats&apos;s new ?</p>
            <FadeText />
          </div>
        </div>

        <div className="flex items-center justify-between sm:flex-col sm:justify-normal sm:gap-2">
          <div className="flex items-center sm:border-b-1">
            <span className="-rotate-90 text-[50px] font-bold tracking-[-4px]">
              GET
            </span>
            <div className="flex flex-col items-start">
              <span className="flex">in</span>
              <span className="text-[50px] font-bold tracking-[-4px] text-(--font-red)">
                TOUCH
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center flex-col gap-2 sm:flex-row">
              <span className="w-[32px] h-[32px]">
                <a
                  className="cursor-pointer"
                  href="https://www.linkedin.com/in/giovannilimaa/"
                  target="_blank"
                >
                  <AiFillLinkedin className="w-full h-full" />
                </a>
              </span>
              <span className="w-[32px] h-[32px]">
                <a
                  className="cursor-pointer"
                  href="mailto:ogiovannilima@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillMail className="w-full h-full" />
                </a>
              </span>
            </div>
            <div className="flex items-center flex-col gap-2 sm:flex-row">
              <span className="w-[32px] h-[32px]">
                <a
                  className="cursor-pointer"
                  href="https://github.com/ogiovannilima"
                  target="_blank"
                >
                  <AiOutlineGithub className="w-full h-full" />
                </a>
              </span>

              <span className="w-[32px] h-[32px]">
                <a
                  className="cursor-pointer"
                  href="https://dev.to/giva"
                  target="_blank"
                >
                  <SiDevdotto className="w-full h-full" />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

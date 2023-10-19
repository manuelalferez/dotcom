/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export default function Header() {
  return (
    <div
      class={tw`flex justify-center items-center gap-2 h-[110px] sm:h-[144px] w-full bg-gradient-to-b from-opacity-0 via-opacity-70 to-opacity-100 bg-cover bg-no-repeat relative`}
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1)), url("https://ik.imagekit.io/manuelalferez/dotcom/SCR-20231006-m0q_tMgYWp4D-.jpeg?updatedAt=1696600301943")`,
      }}
    ></div>
  );
}

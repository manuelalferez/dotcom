/** @jsx h */
import { h } from "preact";
import { tw } from "twind";
import { LoveIcon } from "./Icons.tsx";

export default function Footer() {
  const today = new Date();
  return (
    <div class={tw`text-gray-500 mt(20) text-center`}>
      <p>
        © {today.getFullYear()} Made with <LoveIcon /> by Manuel
      </p>
    </div>
  );
}

/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import {
  GitHubIcon,
  IconLink,
  InstagramIcon,
  LinkedinIcon,
  MediumIcon,
  TelegramIcon,
  TwitterIcon,
  UnsplashIcon,
} from "./Icons.tsx";

export function SocialLinks(props: { class?: string; tight?: boolean }) {
  return (
    <div
      class={tw`${props.class} flex ${
        props.tight ? "gap-2" : "gap-4"
      } justify-center`}
    >
      <IconLink
        href="https://github.com/manuelalferez"
        title="GitHub"
        icon={GitHubIcon}
      />
      <IconLink
        href="https://twitter.com/manuelalferez"
        title="Twitter"
        icon={TwitterIcon}
      />
      <IconLink
        href="https://t.me/manuelalferez"
        title="Telegram"
        icon={TelegramIcon}
      />
      <IconLink
        href="https://medium.com/@manuelalferez"
        title="Medium"
        icon={MediumIcon}
      />
      <IconLink
        href="https://www.linkedin.com/in/manuelalferez"
        title="Linkedin"
        icon={LinkedinIcon}
      />
      <IconLink
        href="https://unsplash.com/@manuelalferez"
        title="Unsplash"
        icon={UnsplashIcon}
      />
      <IconLink
        href="https://www.instagram.com/manuelalferez_/"
        title="Instagram"
        icon={InstagramIcon}
      />
    </div>
  );
}

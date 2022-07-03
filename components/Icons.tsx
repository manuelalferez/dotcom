/** @jsx h */
import { ComponentType, h } from "preact";
import { tw } from "@twind";

export function GitHubIcon() {
  return (
    <svg class={tw`h-7 w-7 inline`} fill="currentColor" viewBox="0 0 23 23">
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function TwitterIcon() {
  return (
    <svg class={tw`h-6 w-6 inline`} fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" />
    </svg>
  );
}

export function TelegramIcon() {
  return (
    <svg class={tw`h-6 w-6 inline`} fill="currentColor" viewBox="0 0 27 27">
      <path d="M13 0C20.1797 0 26 5.8203 26 13C26 20.1797 20.1797 26 13 26C5.8203 26 0 20.1797 0 13C0 5.8203 5.8203 0 13 0ZM18.774 7.8C18.2787 7.80879 17.5189 8.06963 13.8621 9.57125C12.5813 10.0972 10.0217 11.1857 6.18305 12.8368C5.55972 13.0815 5.23319 13.321 5.20346 13.555C5.14639 14.0045 5.80179 14.1444 6.62641 14.409C7.29872 14.6248 8.2031 14.8772 8.67325 14.8872C9.09973 14.8963 9.57572 14.7228 10.1012 14.3665C13.6878 11.9763 15.5392 10.7682 15.6554 10.7421C15.7374 10.7238 15.851 10.7007 15.928 10.7682C16.005 10.8358 15.9974 10.9637 15.9893 10.9981C15.9241 11.2725 12.5549 14.298 12.361 14.4968L12.2681 14.5903C11.5536 15.2959 10.8315 15.7567 12.0774 16.5672C13.2024 17.2991 13.8571 17.766 15.016 18.516C15.7566 18.9953 16.3373 19.5637 17.1019 19.4942C17.4538 19.4622 17.8172 19.1356 18.0018 18.1614C18.438 15.8591 19.2955 10.8707 19.4936 8.81513C19.511 8.63504 19.4892 8.40455 19.4716 8.30337C19.4541 8.20219 19.4174 8.05803 19.2842 7.95132C19.1265 7.82493 18.8829 7.79828 18.774 7.8Z" />
    </svg>
  );
}
export function MediumIcon() {
  return (
    <svg class={tw`h-6 w-6 inline`} fill="currentColor" viewBox="0 0 19 19">
      <path d="M18.75 5S18 5 18 5.75v8.5s0 .75.75.75H19v2h-6v-2h1V5.7h-.1L10.835 17H8.137L5.1 5.7H5V15h1v2H1v-2h.25S2 15 2 14.25v-8.5S2 5 1.25 5H1V3h6.634l2.327 8.66h.077L12.386 3H19v2h-.25z" />
    </svg>
  );
}

export function LinkedinIcon() {
  return (
    <svg class={tw`h-6 w-6 inline`} fill="currentColor" viewBox="0 0 22 22">
      <path d="M4.655 6.43408H0.639963C0.46177 6.43408 0.317383 6.57853 0.317383 6.75666V19.6552C0.317383 19.8334 0.46177 19.9778 0.639963 19.9778H4.655C4.83319 19.9778 4.97758 19.8334 4.97758 19.6552V6.75666C4.97758 6.57853 4.83319 6.43408 4.655 6.43408Z" />
      <path d="M2.64942 0.0219727C1.18852 0.0219727 0 1.2092 0 2.66849C0 4.12842 1.18852 5.3161 2.64942 5.3161C4.10916 5.3161 5.29671 4.12836 5.29671 2.66849C5.29677 1.2092 4.10916 0.0219727 2.64942 0.0219727Z" />
      <path d="M14.8675 6.11353C13.255 6.11353 12.0629 6.80675 11.3399 7.59443V6.75669C11.3399 6.57856 11.1955 6.43411 11.0173 6.43411H7.17219C6.994 6.43411 6.84961 6.57856 6.84961 6.75669V19.6553C6.84961 19.8335 6.994 19.9778 7.17219 19.9778H11.1784C11.3566 19.9778 11.501 19.8335 11.501 19.6553V13.2735C11.501 11.1229 12.0852 10.2851 13.5843 10.2851C15.2169 10.2851 15.3466 11.6282 15.3466 13.3841V19.6553C15.3466 19.8335 15.491 19.9779 15.6692 19.9779H19.677C19.8552 19.9779 19.9995 19.8335 19.9995 19.6553V12.5802C19.9995 9.38249 19.3898 6.11353 14.8675 6.11353Z" />
    </svg>
  );
}

export function UnsplashIcon() {
  return (
    <svg class={tw`h-6 w-6 inline`} fill="currentColor" viewBox="0 0 26 26">
      <path d="M7.5 6.75V0h9v6.75h-9zm9 3.75H24V24H0V10.5h7.5v6.75h9V10.5z" />
    </svg>
  );
}

export function InstagramIcon() {
  return (
    <svg class={tw`h-6 w-6 inline`} fill="currentColor" viewBox="0 0 25 25">
      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
    </svg>
  );
}

export function RepoIcon() {
  return (
    <svg class={tw`h-4 inline`} fill="currentColor" viewBox="0 0 16 16">
      <path
        fill-rule="evenodd"
        d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"
      ></path>
    </svg>
  );
}

export function StarIcon() {
  return (
    <svg class={tw`h-4 inline`} fill="currentColor" viewBox="0 0 16 16">
      <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z" />
    </svg>
  );
}

export function ForkIcon() {
  return (
    <svg class={tw`h-4 inline`} fill="currentColor" viewBox="0 0 16 16">
      <path d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z" />
    </svg>
  );
}
export function LoveIcon() {
  return (
    <svg class={tw`h-4 inline`} fill="#c94042" viewBox="0 0 14 14">
      <path d="m9 .5-3 2-3-2L0 3v3.5l6 5 6-5V3L9 .5z" />
    </svg>
  );
}

export function ResumeIcon() {
  return (
    <svg class={tw`h-8 w-8 inline`} fill="currentColor" viewBox="0 0 32 32">
      <path d="M6.33082 0.456743C4.90682 0.866663 3.76314 2.15434 3.56154 3.59274C3.4681 4.27594 3.4681 27.7239 3.56154 28.4071C3.71994 29.515 4.54682 30.7015 5.53946 31.2267C6.4457 31.7012 5.89913 31.6798 16.0047 31.6798C24.118 31.6798 25.2041 31.6654 25.5996 31.5646C26.8655 31.2411 27.8796 30.2628 28.3615 28.8961C28.4694 28.5796 28.4838 27.6948 28.4982 18.2295C28.5196 8.46922 28.5126 7.89386 28.3974 7.67786C28.2895 7.49098 22.9382 2.27626 21.2623 0.729702L20.8169 0.320102L13.7897 0.327461C7.35929 0.327461 6.72666 0.341543 6.33082 0.456743ZM19.5295 3.75114C19.5295 5.59946 19.6086 6.11754 19.9683 6.85834C20.2703 7.4625 21.0041 8.21066 21.5939 8.51274C22.3923 8.91562 22.6729 8.95146 24.7587 8.95146H26.6505V18.5748C26.6505 29.2558 26.6793 28.5582 26.1686 29.1553C26.0319 29.3207 25.7513 29.5438 25.543 29.6516L25.1763 29.8459L16.1567 29.8673C8.31673 29.8817 7.07962 29.8673 6.76314 29.7739C6.28826 29.6372 5.79226 29.2055 5.54746 28.7166L5.35994 28.3425V16.0001V3.65738L5.54682 3.2833C5.7769 2.82282 6.28762 2.36266 6.7193 2.23306C6.99258 2.14666 8.12922 2.12522 13.2934 2.12522L19.5295 2.11818V3.75114V3.75114Z" />
      <path d="M10.7902 4.30465C10.3947 4.49153 9.88398 4.94465 9.71854 5.26849C9.5387 5.62081 9.4523 6.11713 9.5243 6.41921C9.57454 6.65665 9.56014 6.71425 9.4379 6.78593C9.3227 6.86497 9.3083 6.92993 9.34446 7.17441C9.37326 7.33985 9.4811 7.67073 9.5963 7.90817C9.7115 8.14561 9.85518 8.46913 9.90574 8.62017C9.95598 8.77121 10.1214 9.03745 10.2725 9.20993C10.6248 9.60545 11.0421 9.77089 11.6104 9.72769C12.308 9.67745 12.7829 9.27457 12.9985 8.55521C13.0488 8.39681 13.171 8.18849 13.2792 8.08769C13.5093 7.86465 13.7035 7.13825 13.5813 6.95137C13.5454 6.87937 13.5237 6.54849 13.5454 6.17441C13.5813 5.42625 13.4664 5.05953 13.1355 4.89409C13.0347 4.83649 12.8693 4.70721 12.7688 4.59905C12.3294 4.11777 11.459 3.98817 10.7902 4.30465Z" />
      <path d="M9.30884 10.0878C8.93476 10.2746 8.48164 10.4906 8.3018 10.5697C7.95652 10.7351 7.69764 11.0586 7.59684 11.4615C7.561 11.6055 7.5034 12.1015 7.48164 12.562L7.4314 13.4106H11.4736H15.5159L15.4871 12.4542C15.4656 11.5982 15.4439 11.4545 15.2784 11.138C15.0772 10.7425 14.9834 10.6919 12.9696 9.7572C12.9408 9.7428 12.7322 10.3182 12.5092 11.0302C12.2791 11.7495 12.0704 12.3319 12.049 12.3319C12.0276 12.3319 11.9338 12.1377 11.8548 11.9076L11.7037 11.4833L11.8762 11.138C12.0848 10.7207 12.0919 10.649 11.905 10.4618C11.6317 10.1886 10.97 10.3466 10.97 10.6919C10.97 10.771 11.042 10.9796 11.1284 11.1524C11.2794 11.4615 11.2794 11.4689 11.1498 11.9006C11.0778 12.145 10.9988 12.3537 10.97 12.3681C10.9412 12.3825 10.8621 12.2097 10.7975 11.987C10.3229 10.4478 10.0855 9.7428 10.0423 9.75016C10.0208 9.74952 9.68996 9.90056 9.30884 10.0878Z" />
      <path d="M8.13626 15.137C7.69754 15.2737 7.39546 15.7412 7.4745 16.1729C7.53914 16.5108 7.92762 16.8417 8.32314 16.8993C8.49562 16.9207 12.0991 16.9351 16.3286 16.9207C24.902 16.8993 24.3411 16.9351 24.5929 16.403C24.7366 16.0935 24.7366 15.9066 24.5929 15.5975C24.3411 15.0654 24.9238 15.1012 16.1846 15.0868C11.8694 15.0794 8.25146 15.1009 8.13626 15.137Z" />
      <path d="M7.97808 18.8698C7.74064 18.9777 7.65456 19.0711 7.55376 19.33C7.40272 19.7328 7.48912 20.0708 7.81264 20.3514L8.03568 20.5312H16.0555C23.4856 20.5312 24.0898 20.5242 24.2837 20.409C24.5067 20.2794 24.708 19.9271 24.708 19.6682C24.708 19.4237 24.4994 19.0426 24.2907 18.8986C24.1035 18.7764 23.6792 18.7693 16.1848 18.7546C8.56784 18.7332 8.2584 18.7402 7.97808 18.8698Z" />
      <path d="M7.97086 22.5165C7.3811 22.8042 7.30206 23.5882 7.81278 24.0199L8.03582 24.1997H16.0845H24.1331L24.392 23.9623C24.8595 23.5379 24.7587 22.8042 24.2051 22.5309C23.9677 22.4087 23.4355 22.4013 16.0774 22.4013C9.0499 22.4013 8.1795 22.4157 7.97086 22.5165Z" />
      <path d="M7.87728 26.1992C7.34512 26.4581 7.24432 27.1342 7.6616 27.6018L7.86288 27.8318L12.5454 27.8533L17.228 27.8677L17.4869 27.6302C17.9762 27.1842 17.8539 26.4219 17.2638 26.1701C17.0552 26.0837 16.2786 26.0693 12.5742 26.0693C8.48848 26.0696 8.10736 26.077 7.87728 26.1992Z" />
    </svg>
  );
}

export function IconLink(props: {
  href: string;
  title: string;
  rel?: string;
  icon: ComponentType;
}) {
  return (
    <a
      class={tw`text-gray(500 hover:900) transition duration-75 ease-in-out`}
      href={props.href}
      title={props.title}
      rel={props.rel}
      target="_blank"
    >
      <span class={tw`sr-only`}>{props.title}</span>
      {h(props.icon, {}, null)}
    </a>
  );
}

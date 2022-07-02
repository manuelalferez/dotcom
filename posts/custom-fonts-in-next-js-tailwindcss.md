---
title: "Custom fonts in Next.js + Tailwindcss"
publish_date: "2021-11-21"
---

To add fonts to your Next.js project you do not need any extra dependency: 

1) Download your fonts and add them to the `public/fonts` directory. 

2) Tailwindcss tells us in their [guide](https://tailwindcss.com/docs/guides/nextjs) the fastest way to include Tailwind if we do not plan to write any custom CSS in our project is to import it directly into `pages/_app.js`:

```
// pages/_app.js

- import '../styles/globals.css'
+ import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
   return <Component {...pageProps} />
}

export default MyApp
```

However, this is not our case and therefore we maintain `styles/globals.css`:

```
// styles/globals.css

@tailwind base;
@tailwind components;
@tailwind utilities;
```

3) Declare your fonts in `style/globals.css`:

```
// styles/globals.css

@tailwind base;
@tailwind components;
@tailwind utilities;

@font-face {
  font-family: 'MyFont';
  font-style: normal;
  font-weight: 400;
  src: local(''), url('/fonts/MY-FONT.woff') format('woff');
}

@font-face {
  font-family: 'MyFont';
  font-style: bold;
  font-weight: 600;
  src: local(''), url('/fonts/MY-FONT-BOLD.woff') format('woff');
}
```

4) Configure Tailwindcss to add the fonts you have imported: 

```
// tailwind.config.js 

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'

  theme: {
    extend: {
      fontFamily: {
        myfont: ['MyFont'],
        sans: ['MyFont', 'sans-serif'],
      },
    },
  },

  variants: {
    extend: {
      fontFamily: ['hover', 'focus'],
    },
  },

  plugins: [],
  corePlugins: {
    fontFamily: true,
  },
};
```

5) Use your font 😊

```
// components/MyComponent.js
   
export default function MyComponent() {
  return (
    <div className="font-myfont">
      Hello World
    </div>
  );
}
```

Any questions about the post? Feel free to contact me through social media.
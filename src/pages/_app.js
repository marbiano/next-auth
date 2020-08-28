import React from "react";
import whyDidYouRender from "@welldone-software/why-did-you-render";
import { ReactQueryDevtools } from "react-query-devtools";

if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
  whyDidYouRender(React);
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen />
    </>
  );
}

export default MyApp;

import { Html, Head, Main, NextScript } from "next/document";
import Header from './header'
import GridComponent from "./Grid";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Header />

        <Main />
        <NextScript />
        <div>Footer</div>
      </body>
    </Html>
  );
}

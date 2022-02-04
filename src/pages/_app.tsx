import { AppProps } from "next/app";
import { Header } from "../components/Header";
import "../styles/global.scss";

// _app renderiza toda vez que a aplicação é recarregada

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

import { AppProps } from "next/app";
import "../styles/global.scss";

// _app renderiza toda vez que a aplicação é recarregada

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;

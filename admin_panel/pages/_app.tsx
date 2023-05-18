import "../styles/globals.css";
import type { AppProps } from "next/app";
import Sidebar from "../components/SideBar";

function App({ Component, pageProps }: AppProps) {
  return (
    <Sidebar>
      <Component {...pageProps} />
    </Sidebar>
  )
}

export default App;

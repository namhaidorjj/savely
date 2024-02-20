import "@/styles/globals.css";
import { NewRecordDisplayFunction } from "@/context";

export default function App({ Component, pageProps }) {
  return (
    <NewRecordDisplayFunction>
      <Component {...pageProps} />
    </NewRecordDisplayFunction>
  );
}

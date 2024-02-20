import { Inter } from "next/font/google";
import { Login } from "@/pages/login";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  console.log("clg brach");
  return (
    <div>
      <Login />
      <p>console</p>
    </div>
  );
}

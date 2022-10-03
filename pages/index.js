// import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/globals.css";
import Card from "./components/card.js";
export default function Home() {
  return (
    <div className="max-w-7xl mx-auto p-vw grid grid-cols-1 md:grid-cols-3 gap-4">
      <div>
        <Card />
      </div>
      <div>
        <Card />
      </div>
      <div>
        <Card />
      </div>
    </div>
  );
}

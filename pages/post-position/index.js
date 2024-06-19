import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Employee() {
  return (
    <>
      <main className={`${inter.className}`}>
        <h1>Анкета какая-то</h1>
        Здесь что-то будет
      </main>
    </>
  );
}

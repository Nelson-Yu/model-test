import Link from "next/link";

export default function Nav() {
  return (
    <div className="flex flex-col font-semibold text-xl justify-center items-center">
      <Link href="/embed">Modelo Embed Demo</Link>
      <Link href="/cardiac">Cardiac Demo</Link>
      <Link href="/cardiac2">Cardiac (Tet-Shell) Demo</Link>
      <Link href="/duck">Duck Demo</Link>
    </div>
  );
}

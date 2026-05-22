'use client';
import Link from 'next/link';

const navLink =
  'border-2 p-2 rounded-2xl bg-blue-100 shadow-[0_0_15px_rgba(100,100,200,0.75)] cursor-pointer hover:bg-sky-300 min-w-1/10 text-center';

export default function NavPage() {
  return (
    <nav className="p-5 flex flex-row items-center content-center justify-around decoration">
      <Link href="/" className={navLink}>
        Accueil
      </Link>

      <Link href="/addPost" className={navLink}>
        Poster
      </Link>

      <Link href="/categoryPost/all" className={navLink}>
        Tous les posts
      </Link>
      <Link href="/categoryPost/famille" className={navLink}>
        Famille
      </Link>
      <Link href="/categoryPost/ami" className={navLink}>
        Amis
      </Link>
      <Link href="/categoryPost/voyage" className={navLink}>
        Voyage
      </Link>
      <Link href="/categoryPost/dossier" className={navLink}>
        Dossier 🧧
      </Link>
    </nav>
  );
}

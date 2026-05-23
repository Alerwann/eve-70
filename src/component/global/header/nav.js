"use client";
import Link from "next/link";
import { useState } from "react";

const navLink =
	"w-full  border-2 p-2 rounded-2xl bg-blue-100 shadow-[0_0_15px_rgba(100,100,200,0.75)] cursor-pointer hover:bg-sky-300 min-w-1/10 text-center";

export default function NavPage() {
	const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => {
      setIsOpen(false);
    };
  
  return (
		<nav className="mb-2 px-10 flex flex-row content-center  relative z-50 gap-5 ">
			<div className="md:hidden flex justify-end px-6">
				<button
					type="button"
					onClick={() => setIsOpen(!isOpen)}
					className="text-2xl p-2 border-2 border-black rounded-lg bg-[#F1DA07]"
					aria-label="Toggle menu"
				>
					{isOpen ? "✕" : "☰"}
				</button>
			</div>
			<div
				className={`
        ${isOpen ? "flex" : "hidden"} 
        flex-col items-center gap-2 p-5  absolute top-full left-0  shadow-2xl rounded-2xl
        md:static md:grid md:grid-cols-7 md:gap-5  md:shadow-none md:bg-purple-50/10 
        transition-all bg-purple-300
      `}
			>
				<Link href="/" className={navLink} onClick={closeMenu}>
					Accueil
				</Link>

				<Link href="/addPost" className={navLink} onClick={closeMenu}>
					Poster
				</Link>

				<Link href="/categoryPost/all" className={navLink} onClick={closeMenu}>
					Tous les posts
				</Link>
				<Link
					href="/categoryPost/famille"
					className={navLink}
					onClick={closeMenu}
				>
					Famille
				</Link>
				<Link href="/categoryPost/ami" className={navLink} onClick={closeMenu}>
					Amis
				</Link>
				<Link
					href="/categoryPost/voyage"
					className={navLink}
					onClick={closeMenu}
				>
					Voyage
				</Link>
				<Link
					href="/categoryPost/dossier"
					className={navLink}
					onClick={closeMenu}
				>
					Dossier 🧧
				</Link>
			</div>
		</nav>
	);
}

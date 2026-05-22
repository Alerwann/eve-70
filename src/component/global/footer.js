
import Link from "next/link"
export default function FooterPage() {
    return <footer className="p-10  w-full flex flex-col md:flex-row bg-blue-200 place-content-evenly text-xl ">
        <p>
            ©️ Marie Guehl - 2026
        </p>
        <a href="mailto:marieguehl@gmail.com?subject=Aide%20Site%20annivEve" className="cursor-pointer underline underline-offset-2 ">Contactez nous </a>
        <Link href="/pageLegale" className="cursor-pointer underline underline-offset-2">Informations sur les données partagées</Link>
    </footer>
}
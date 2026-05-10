'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import FormulaireMdp from './formulairemdp';

const MDPENTRE = process.env.NEXT_PUBLIC_MDPENTER;
  
export default function VerifAcces({ children }) {
  const [autorise, setAutorise] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();



  useEffect(() => {
    console.log(`use effect mdpentre = ${MDPENTRE}`)
    const codeUrl = searchParams.get('pass');
    const codeStocke = localStorage.getItem('site_access');

    if (codeUrl === MDPENTRE || codeStocke === MDPENTRE) {
      console.log('acces autorisé');

      setAutorise(true);
      localStorage.setItem('site_access', MDPENTRE);
      if (codeUrl) {
        router.replace(pathname);
      }
    }
  }, [searchParams]);

  if (!autorise) {
    return (
      <div className="p-5 h-full w-full flex flex-col gap-5  bg-amber-100 ">
        <div className="w-full">
          <h1 className="text-center">Accès réservé</h1>
          <p className="text-center">Veuillez saisir le mot de passe.</p>
        </div>

        <FormulaireMdp onSucces={() => setAutorise(true)} />
      </div>
    );
  }

  // Si autorisé, on affiche le contenu du site
  return <>{children}</>;
}

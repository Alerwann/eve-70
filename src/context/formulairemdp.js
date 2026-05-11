'use client';
import { useState } from 'react';

export default function FormulaireMdp({ onSucces }) {
  const MDPENTRE = process.env.NEXT_PUBLIC_MDPENTER;
  const [saisie, setSaisie] = useState('');
  const [erreur, setErreur] = useState(false);
  const [show, setShow] = useState(false);

  const verifierMdp = (e) => {
    e.preventDefault();
  
    if (saisie === MDPENTRE) {
      localStorage.setItem('site_access', MDPENTRE);
      onSucces();
    } else {
      setErreur(true);
    }
  };

  return (
    <form
      onSubmit={verifierMdp}
      className="flex flex-col h-full w-full gap-3 items-center "
    >
      <div className="flex flex-row gap-10">
        <input
          type={show ? 'text' : 'password'}
          value={saisie}
          onChange={(e) => setSaisie(e.target.value)}
          placeholder="Mot de passe"
          className="border-2 p-2 rounded-2xl"
        />
        <button
          type="button"
          onClick={() => setShow(!show)}
          className="cursor-pointer "
        >
          {show ? <p>🕶️</p> : <p>👀</p>}
        </button>
      </div>

      {erreur && <p style={{ color: 'red' }}>Code incorrect</p>}
      <div className="flex flex-row w-full gap-2 items-center justify-around ">
        <button
          type="submit"
          className="border-2 rounded-2xl border-green-600 p-2 cursor-pointer "
        >
          Entrer
        </button>
      </div>
    </form>
  );
}

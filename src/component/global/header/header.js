'use client';

import NavPage from './nav';

export default function HeaderPage() {
  return (
    <header className="bg-purple-200 pt-3 flex flex-row md:flex-col justify-center items-center">
      <h2 className="text-center text-3xl ">Partage de la vie d'Eve</h2>
      <NavPage />
    </header>
  );
}

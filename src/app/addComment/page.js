'use client';
import { useState } from 'react';
import {
  uploadImage,
  insertPostBase,
  selectAllPost,
} from '@/app/utils/post_info_database_funciton';

export default function AddComment() {
  const [file, setFile] = useState(null);
  const [userName, setUserName] = useState('');
  const [legend, setLegend] = useState('');
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState([]);
  const [title, setTitle] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    if (!legend && !file)
      return alert('Ajoute au moins un texte ou une photo !');

    setLoading(true);
    try {
      let publicUrl = null;
      if (file) {
        publicUrl = await uploadImage(file);
      }

      await insertPostBase(userName, title, legend, category, publicUrl);

      const updatedData = await selectAllPost();
      setAllPosts(updatedData);

      alert('Post publié !');
      setDescription('');
    } catch (error) {
      alert('Erreur : ' + error.message);
    } finally {
      setLoading(false);
    }
  }
  if (loading) {
    return <p>En chargement ...</p>;
  }
  return (
    <div className=" p-2  flex flex-col gap 5 items-center content-center justify-center">
      <h2 className="text-3xl mb-5">Formulaire d'ajout de posts </h2>
      <form className="flex flex-col items-center" onSubmit={handleSubmit}>
        <div className=" p-2 m-1 grid grid-cols-[1fr_2fr] gap-10 bg-purple-100">
          <label className="text-center">Nom ou surnom </label>
          <input
            id="userName"
            name="userName"
            type="text"
            className="p-2 flex-2 border-2 bg-gray-50 rounded-2xl "
            onChange={(e) => setUserName(e.target.value)}
            required
          />
          <label className="text-center">Titre du post </label>
          <input
            id="title"
            name="title"
            type="text"
            className="p-2 flex-2 border-2 bg-gray-50 rounded-2xl "
            onChange={(e) => setUserName(e.target.value)}
            required
          />

          <label className="text-center">
            Ajout d'une photo (format Jpeg ou png)
          </label>
          <input
            type="file"
            className="bg-gray-50 cursor-pointer rounded-2xl p-2"
            id="upload"
            accept="image/png, image/jpeg"
            onChange={(e) => {
              setFile(e.target.files[0]);
            }}
          />

          <label className="text-center">Catégorie</label>
          <select onChange={(e) => setCategory(e.target.value)}>
            <option value={''}>--Veuillez choisir une catégorie--</option>
            <option value={'ami'}>Amis</option>
            <option value={'famille'}>Famille</option>
            <option value={'dossiers'}>Photos dossier</option>
            <option value={'voyage'}>Voyage</option>
          </select>

          <label className="text-center">Légende / Annecdotes</label>
          <textarea
            className="  bg-gray-50 p-2"
            onChange={(e) => setLegend(e.target.value)}
          ></textarea>
        </div>
        <div className="w-full flex flex-row  justify-around">
          <div>
            <button
              type="submit"
              className="p-5 border-2 bg-green-400 cursor-pointer  rounded-3xl"
            >
              Envoyer
            </button>
          </div>
          <div>
            <button
              type="button"
              className="p-5 border-2 bg-red-400 cursor-pointer  rounded-3xl"
            >
              Annuler
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

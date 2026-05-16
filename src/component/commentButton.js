'use client';

import { insertCommentBase } from '@/app/utils/comment_database_function';
import { useState, useEffect } from 'react';



export default function CommentButton({ idPost }) {
  const [showComment, setShowComment] = useState(false);
  const [comment, setComment] = useState('');
  const [loading, setLoading] = useState(false);
  const [userName, setUserName] = useState('');

  const handleClick = () => {
    const showChange = !showComment;
    setShowComment(showChange);
      setComment('');
      setUserName('');
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log("submit")
    if (!comment || !userName) {
      alert('Merci de remplir le nom et le commentaire avant de valider');
    }
    setLoading(true);
    try {
        insertCommentBase(userName, comment, idPost);
        alert('Commentaire publié !');
        setShowComment(false)
        
          setComment('');
          setUserName('');
    } catch (error) {
         alert('Erreur : ' + error.message);
    } finally {
      setLoading(false);
    }
  };
    
  if(loading) return <p>en court de chargement</p>
  return (
    <div className=" w-full  flex flex-col items-center">
      <div className="">
        {!showComment && (
          <button
            onClick={handleClick}
            className="border border-blue-300 p-2 rounded-3xl bg-blue-800 text-white cursor-pointer"
          >
            Commenter
          </button>
        )}
      </div>
      <div className="w-full ">
        {showComment && (
          <form
            className="w-full flex flex-col  gap-2 "
            onSubmit={handleSubmit}
          >
            <input
              id="userName"
              name="userName"
              onChange={(e) => setUserName(e.target.value)}
              className="bg-white flex-2 p-2 rounded-2xl"
              placeholder="Nom / Surnom"
            />

            <textarea
              className="p-3 mt-3 bg-white rounded-2xl flex-2"
              placeholder="Saisis ton commentaire"
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
            <div className="flex flex-col gap-2">
              <button
                type="submit"
                className="bg-green-300 p-3 rounded-2xl cursor-pointer"
              >
                Envoyer
              </button>
              <button
                onClick={handleClick}
                className="p-3 bg-red-400 rounded-2xl  cursor-pointer"
              >
                Annuler
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

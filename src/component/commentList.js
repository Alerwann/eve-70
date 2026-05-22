'use client';
import { selectCommentBase } from '@/app/utils/comment_database_function';
import concatText from '@/app/utils/concat_text';
import { useState, useEffect, useCallback } from 'react';

export default function CommentList({ idComment, setRefreshTrigger }) {
  const [allComment, setAllComment] = useState([]);



  const loadData = useCallback(async () => {
    try {
      const dataComment = await selectCommentBase(idComment);

      setAllComment(dataComment);
    } catch (error) {
      console.error('Erreur chargement:', error.message);
    }
  }, [idComment]);


  useEffect(() => {
    loadData();

    if (setRefreshTrigger) {
      setRefreshTrigger(() => loadData);
    }
  }, [loadData, setRefreshTrigger]);

  if (allComment.length === 0) {
    return <p>Pas encore de commentaire</p>;
  }

  return (
    <div className='bg-amber-200/30 w-full overflow-y-auto h-75 p-3 rounded-l-2xl'>
      <span className='font-bold'>Commentaires :</span>
      {allComment.map((comments) => {
        const {textOut, isConcat}=concatText(comments.content,200)
        return (
          <div key={comments.id} className='bg-amber-50 m-1 flex flex-col rounded-xl'>
            <span className='font-bold text-l p-2 '>{comments.user_name }</span>
            <span className='p-2 bg-amber-100/55'>{textOut}</span>
            {isConcat && <Link href={`/post/${idComment}`}>Voir plus</Link>}
          </div>
        );
      })}
    </div>
  );
}
'use client'
import { selectCommentBase } from '@/app/utils/comment_database_function';
import { useState, useEffect } from 'react';
export default function CommentList(idComment) {
    const [allComment, setAllComment]=useState([])
    useEffect(() => {
      async function loadData() {
        try {
          const data = await selectCommentBase(idComment);
          setAllComment(data);
        } catch (error) {
          console.error('Erreur chargement:', error.message);
        }
      }
      loadData();
    }, []);
    if (allComment.length===0) {
        return <p>Pas encore de commentaire</p>
    }

    return (
        <div>
            {allComment.map((comments) => {
                return <li>
                    {comments.userName}
                </li>
            })

            }

        </div>
    )
}
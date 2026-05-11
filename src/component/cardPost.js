'use client';

import { useState, useEffect } from 'react';
import CommentButton from './commentButton';
import CommentList from './commentList';

export default function CardPost({ allPosts }) {
  return (
    <div className=" p-5 gap-3 flex flex-col content-center items-center">
      {allPosts.map((post) => (
        <div
          key={post.id}
          className="border w-2/3 p-4 rounded-2xl shadow bg-purple-100"
        >
          <div>
            {post.image_url && (
              <img
                src={post.image_url}
                alt="Post"
                className="mt-2 rounded max-w-full h-auto"
              />
            )}
            <h2 className="font-bold">{post.user_name}</h2>
            <p>{post.description}</p>
          </div>
          <CommentList />
          <CommentButton idPost={post.id} />
        </div>
      ))}
    </div>
  );
}


import CommentButton from './commentButton';
import CommentList from './commentList';

export default function CardPost({ allPosts }) {
  
  return (
    <div className=" p-5 gap-3 flex flex-col content-center items-center">
      {allPosts.map((post) => (
        <div
          key={post.id}
          className="border w-2/3 p-4 rounded-2xl shadow bg-purple-100 flex flex-col items-start"
        >
          <div className="w-full flex flex-col items-center justify-center">
            {post.image_url && (
              <img
                src={post.image_url}
                alt={post.description}
                className="mt-2 rounded max-w-full h-auto  "
                width={200}
              />
            )}
            <div  >
              <h2 className="font-bold">{post.user_name}</h2>
              <p>{post.description}</p>
            </div>
          </div>
          <CommentList idComment={post.id} />
          <CommentButton idPost={post.id} />
        </div>
      ))}
    </div>
  );
}

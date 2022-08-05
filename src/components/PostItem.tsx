import { FC, MouseEvent } from "react";
import { IPost } from "../models/IPost";

interface PostItemProps {
  post: IPost;
  removePost: (post: IPost) => void;
  updatePost: (post: IPost) => void;
}

const PostItem: FC<PostItemProps> = ({ post, removePost, updatePost }) => {
  const handleRemovePost = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    removePost(post);
  };

  const handleUpdatePost = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    const title = prompt() || "";
    updatePost({ ...post, title });
  };

  return (
    <div className="post" onClick={handleUpdatePost}>
      <p>{post.id}</p>
      <p>{post.title}</p>
      <p>{post.body}</p>
      <button onClick={handleRemovePost}>Delete</button>
    </div>
  );
};

export default PostItem;

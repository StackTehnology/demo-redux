import { FC, useState, useEffect, MouseEvent } from "react";
import { postAPI } from "../services/postService";
import { IPost } from "../models/IPost";
import PostItem from "./PostItem";

const PostContainer: FC = () => {
  const [limitPosts, setLimitPosts] = useState<number>(100);
  const {
    data: posts,
    isSuccess,
    isLoading,
    isError,
  } = postAPI.useFetchAllPostsQuery(limitPosts);

  const [
    createPost,
    { error: errorCreatePost, isLoading: isLoadingCreatePost },
  ] = postAPI.useCreatePostMutation();

  const [
    updatePost,
    { error: errorUpdatePost, isLoading: isLoadingUpdatePost },
  ] = postAPI.useUpdatePostMutation();
  const [
    removePost,
    { error: errorDeletePost, isLoading: isLoadingDeletePost },
  ] = postAPI.useDeletePostMutation();

  const handleCreatePost = async (e: MouseEvent<HTMLButtonElement>) => {
    const title = prompt();
    await createPost({ title, body: "this is body" } as IPost);
  };

  const handleRemovePost = (post: IPost) => {
    removePost(post);
  };
  const handleUpdatePost = (post: IPost) => {
    updatePost(post);
  };

  return (
    <div>
      <div className="post_list">
        <button onClick={handleCreatePost}>Add new Post</button>
        {isLoading && <h1>Loading....</h1>}
        {isError && <h1>Something went wrong...</h1>}
        {posts &&
          posts.map((post: IPost) => (
            <PostItem post={post} key={post.id} removePost={handleRemovePost} updatePost={handleUpdatePost} />
          ))}
      </div>
    </div>
  );
};

export default PostContainer;

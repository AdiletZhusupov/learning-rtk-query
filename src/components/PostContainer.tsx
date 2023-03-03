import { useEffect, useState } from "react";
import { IPost } from "../models/types";
import { postAPI } from "../services/PostService";
import { PostItem } from "./PostItem";

export const PostContainer = () => {
  const [limit, setLimit] = useState(100);
  const {
    data: posts,
    error,
    isLoading,
    // refetch,
  } = postAPI.useFetchAllPostsQuery(limit);

  const [createPost, {}] = postAPI.useCreatePostMutation();
  const [updatePost, {}] = postAPI.useUpdatePostMutation();
  const [deletePost, {}] = postAPI.useDeletePostMutation();


  useEffect(() => {
    // setTimeout(() => {
    //   setLimit(3)
    // }, 2000);
  }, []);

  const handleCreate = async () => {
    const title = prompt();
    await createPost({ title, body: title } as IPost);
  };

  const handleRemove = (post: IPost) => {
    deletePost(post)
  }
  const handleUpdate = (post: IPost) => {
    updatePost(post)
  }


  return (
    <div>
      <div className="post__list">
        <button onClick={handleCreate}>Add new post</button>
        {isLoading && <h2>Loading...</h2>}
        {error && <h2>Ooops, Something went wrong!!!</h2>}
        {posts &&
          posts.map((post) => {
            return <PostItem remove={handleRemove} update={handleUpdate} key={post.id} post={post} />;
          })}
        {/* <button onClick={() => refetch()} style={{ marginTop: "20px" }}>
          REFETCH
        </button> */}
      </div>
    </div>
  );
};

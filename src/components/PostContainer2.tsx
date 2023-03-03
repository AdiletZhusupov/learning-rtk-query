import { postAPI } from "../services/PostService";
import { PostItem } from "./PostItem";

export const PostContainer2 = () => {
  const { data: posts, error, isLoading } = postAPI.useFetchAllPostsQuery(100);

  return (
    <div>
      <div className="post__list">
        {isLoading && <h2>Loading...</h2>}
        {error && <h2>Ooops, Something went wrong!!!</h2>}
        {/* {posts &&
          posts.map((post) => {
            return <PostItem key={post.id} post={post} />;
          })} */}
      </div>
    </div>
  );
};

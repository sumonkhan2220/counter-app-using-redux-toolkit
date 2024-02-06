import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./postSlice";

const PostsView = () => {
  const { isLoaing, posts, error } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  return (
    <div>
      {isLoaing && <h3>Loading...</h3>}
      {error && <h3>{error}</h3>}
      <section>
        {posts &&
          posts.map((post) => {
            return (
              <article>
                <h5>{post.title}</h5>
                <p>{post.body}</p>
              </article>
            );
          })}
      </section>
    </div>
  );
};

export default PostsView;

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from '../../actions/PostsAction';
import PostItem from './PostItem';

function Post(props) {
  let dispatch = useDispatch();
  const posts = useSelector(state => state.PostRD);

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <div className="row m-0">
      {posts.map(post => {
        return <PostItem key={posts.id} posts={post} />
      })}
    </div>
  );
}

export default Post;
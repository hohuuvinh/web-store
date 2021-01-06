import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from '../../actions/PostsAction';
import Page_RelatePost_Item from './Page_RelatePost_Item';

function Page_RelatePost(props) {
    let dispatch = useDispatch();
    const posts = useSelector(state => state.PostRD);
    console.log(posts);
    useEffect(() => {
        dispatch(getPosts());
    }, []);
    return (
        <div className="mt-3" style={{ width: '95%', margin: 'auto' }}>
            <p className="font-weight-bold ml-2" style={{ fontSize: '130%' }}>Các mẫu Website khác</p>
            <div className="row m-0">
                {posts.map(post => {
                    return <Page_RelatePost_Item key={posts.id} posts={post}/>
                })}

            </div>
        </div>
    );
}

export default Page_RelatePost;
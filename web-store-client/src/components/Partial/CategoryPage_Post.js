import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CategoryPage_Post_Item from './CategoryPage_Post_Item';
import { getCategorisPage } from './../../actions/CategorysAction';

function CategoryPage_Post() {
    const { slug } = useParams();
    let dispatch = useDispatch();
    const CategoryPost = useSelector(state => state.CategoryPageRD);
    useEffect(() => {
        dispatch(getCategorisPage(slug));
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="row m-0">
           
            {CategoryPost.map(CategoryPost => {
                return  <CategoryPage_Post_Item key={CategoryPost.id} CategoryPost={CategoryPost} />
            })}
        </div>
    );
}

export default CategoryPage_Post;
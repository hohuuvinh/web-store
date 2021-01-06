import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";
import { getCategorisPage } from './../../actions/CategorysAction';

function CategoryItem({ categorys }) {
    let dispatch = useDispatch();

    function dispatchToAction(slug){      
        dispatch(getCategorisPage(slug));
        window.scrollTo(0, 0);
    }
    return (
        <NavLink exact to={`/danh-muc/${categorys.slug}`} style={{textDecoration:'none',color:'black'}} >
        <p onClick={() => dispatchToAction(categorys.slug)} class="font-weight-bold ml-4">{categorys.title}</p>
        </NavLink>
    );
}

export default CategoryItem;
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCategoris } from '../../actions/CategorysAction';
import CategoryItem from './CategoryItem';
import * as ImageRoot from './../../config/ImageRoot';


function Category(props) {
    let dispatch = useDispatch();
    const categorys = useSelector(state => state.CategoryRD);

    useEffect(() => {
        dispatch(getCategoris());
    }, []);
    return (
        
        <div id="category--box" className="p-3 float-left" style={{width: '180px', height: 'calc(100vh - 70px)', background: '#fff', position: 'fixed'}}>
            <p className="font-weight-bold cl" style={{fontSize: '130%'}}><img src={ImageRoot.ImageRoot+"icon/menu.svg"} /> Danh mục</p>
            {categorys.map(category => {
                    return <CategoryItem key={categorys.id} categorys={category} />
                })}
          </div>
    );
}

export default Category;
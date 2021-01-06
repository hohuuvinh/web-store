import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCategoris } from '../../actions/CategorysAction';
import Category2Item from './Category2Item';

function Category2(props) {
  let dispatch = useDispatch();
  const categorys = useSelector(state => state.CategoryRD);

  useEffect(() => {
    dispatch(getCategoris());
  }, []);
  return (
    <div className="row m-0">
      {categorys.map(category => {
        return <Category2Item key={categorys.id} categorys={category} />
      })}
    </div>
  );
}

export default Category2;
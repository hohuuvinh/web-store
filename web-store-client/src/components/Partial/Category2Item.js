import React from 'react';

function Category2Item({categorys}) {
    return (
        <div className="col-6 col-sm-4 col-md-3 col-xl-2 p-2">
            <div className="category--button" style={{ width: '100%', height: '50px', background: '#fff' }}>
                <p className="font-weight-bold text-center" style={{ lineHeight: '50px' }}>{categorys.title}</p>
            </div>
        </div>
    );
}

export default Category2Item;
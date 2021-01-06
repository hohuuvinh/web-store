import React from 'react';
import Header from '../Partial/Header';
import Category from '../Partial/Category';
import Category3 from '../Partial/Category3';
import CategoryPage_Post from '../Partial/CategoryPage_Post';

function CategoryPage(props) {
    return (
        <div>
            <Header />
            <div style={{ paddingTop: '70px' }}>
                <Category />
                <div id="content--box" className="p-2 float-right" style={{ width: 'calc(100% - 140px)', background: '#f7f7f7', marginLeft: '180px' }}>
                    <div id="body--box" className="mt-2" style={{ width: '90%', margin: 'auto', minHeight: 'calc(100vh - 110px)' }}>
                        <Category3/>
                        <CategoryPage_Post/>
                    </div>
                </div>
            </div>
            <div style={{ clear: 'both' }} />
        </div>
    );
}

export default CategoryPage;
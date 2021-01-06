import React from 'react';
import Banner from '../Partial/Banner';
import Category from '../Partial/Category';
import Card from '../Partial/Card';
import Category2 from '../Partial/Category2';
import Post from '../Partial/Post';
import Header from '../Partial/Header';

function Home(props) {
    return (
        <div>
        <Header/>
        <div style={{paddingTop: '70px'}}>
          <Category/>
          <div id="content--box" className="p-2 float-right" style={{width: 'calc(100% - 180px)', background: '#f7f7f7', marginLeft: '180px'}}>
            <Banner/>
            <div id="body--box" className="mt-3" style={{width: '90%', margin: 'auto'}}>				
              <Card />
              <Category2/>
              <Post/>
            </div>
          </div>
        </div>
        <div style={{clear: 'both'}} />
      </div>
    );
}

export default Home;
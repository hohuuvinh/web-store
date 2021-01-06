import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Header from '../Partial/Header';
import Page_ContentPost from '../Partial/Page_ContentPost';
import Page_ImageDevice from '../Partial/Page_ImageDevice';
import Page_ImagePost from '../Partial/Page_ImagePost';
import Page_RelatePost from '../Partial/Page_RelatePost';
import { getPostDetail } from './../../actions/PostDetailAction';

function Page() {
    const { slug } = useParams();
    let dispatch = useDispatch();
    const postDetail = useSelector(state => state.PostDetailRD);
    useEffect(() => {
        dispatch(getPostDetail(slug));
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
        <Header/>
        <div style={{paddingTop: '70px'}}>	
          <div id="content--box" className="p-2 float-right" style={{width: '100%', background: '#fff', marginLeft: '180px'}}>
            <div id="content" style={{background: '#fff', width: '100%'}}>
              <div id="page--content__box" className="mt-4" style={{width: '90%', margin: 'auto'}}>
                <div className="row m-0">
                  <Page_ImagePost postDetail={postDetail}/>
                  <Page_ContentPost postDetail={postDetail}/>
                </div>
              </div>
              <Page_ImageDevice postDetail={postDetail}/>
            </div>
            <style type="text/css" dangerouslySetInnerHTML={{__html: "\n\t\t\t\t.item--box{\n\t\t\t\t\tborder: 1px solid #f9f9f9;\n\t\t\t\t}\n\t\t\t\t.item--box:hover{\n\t\t\t\t\tborder: 1px solid #ff5c01;\n\t\t\t\t\ttransition: 0.6s\n\t\t\t\t}\n\t\t\t" }} />
            <Page_RelatePost/>
          </div>
        </div>
        <div style={{clear: 'both'}} />
      </div>
    );
}

export default Page;
import React, { useEffect, useState } from 'react';
import * as ImageRoot from './../../config/ImageRoot';
import Page_ImagePost_Thumbar from './Page_ImagePost_Thumbar';

function Page_ImagePost({ postDetail }) {
    const image = postDetail.image;
    var imageCut=[];
    if(image !==undefined){
         imageCut = image.split(",");
         imageCut = image.split(",",imageCut.length-1);
    }

    const [imagePreview, setImagePreview] = useState(imageCut[0]);
    return (
        <div id="page--content--image__box" className="col-12 col-md-4 col-lg-4 p-3 mt-4 mb-5">
            <div style={{ width: '100%', height: '400px', overflowY: 'auto' }}>
                <img src={ImageRoot.ImageRoot + 'post/'+imagePreview} width="100%" />
            </div>
            <div className="mt-3" style={{ width: '100%', display: 'flex' }}>

                {imageCut.map(imageCut => {
                    return <Page_ImagePost_Thumbar images={imageCut} setImagePreview={setImagePreview}  />
                })}
            </div>
        </div>
    );
}

export default Page_ImagePost;
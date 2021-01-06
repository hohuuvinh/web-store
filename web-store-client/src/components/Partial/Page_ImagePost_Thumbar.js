import React from 'react';
import * as ImageRoot from './../../config/ImageRoot';

function Page_ImagePost_Thumbar({images, setImagePreview}) {
    return (
        <div className="p-1" style={{ width: '33%' }}  onClick={() => setImagePreview(images)}>
            <div style={{ height: '90px' }}>
                <img src={ImageRoot.ImageRoot + 'post/'+images} width="100%" height="100%" style={{ objectFit: 'cover' }} />
            </div>
        </div>
    );
}

export default Page_ImagePost_Thumbar;
import React from 'react';
import * as ImageRoot from './../../config/ImageRoot';

function Page_ImageDevice({postDetail}) {
    return (
        <div className="row m-0">
            <div className="col-12">
                <div className="p-4" style={{ width: '80%', margin: 'auto', position: 'relative' }}>
                    <img src={ImageRoot.ImageRoot+"device/"+postDetail.image2} style={{ width: '100%' }} />
                </div>
            </div>
            <div className="col-12 col-md-6">
                <div className="p-4" style={{ width: '80%', margin: 'auto' }}>
                    <img src={ImageRoot.ImageRoot+"device/"+postDetail.image3} style={{ width: '100%' }} />
                </div>
            </div>
            <div className="col-12 col-md-6">
                <div className="p-4" style={{ width: '60%', margin: 'auto' }}>
                    <img src={ImageRoot.ImageRoot+"device/"+postDetail.image1} style={{ width: '100%' }} />
                </div>
            </div>
        </div>
    );
}

export default Page_ImageDevice;
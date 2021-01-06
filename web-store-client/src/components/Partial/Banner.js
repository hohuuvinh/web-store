import React from 'react';
import * as ImageRoot from './../../config/ImageRoot';

function Banner() {
    return (
        <div id="banner--box" style={{height: '340px', width: '100%'}}>
              <img src={ImageRoot.ImageRoot+"banner/bg_home.jpg"} width="100%" height="100%" style={{objectFit: 'cover'}} />
            </div>
    );
}

export default Banner;
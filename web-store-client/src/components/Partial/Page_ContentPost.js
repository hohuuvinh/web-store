import React from 'react';

function Page_ContentPost({postDetail}) {
    return (
        <div id="page--content--text__box" className="col-12 col-md-8 col-lg-8 p-3 mt-2 mb-5 pl-4">
            <div className="p-2">
                <p className="font-weight-bold mb-0" style={{ fontSize: '150%' }}>{postDetail.title}</p>
                <p className="mb-2 cl font-weight-bold">{postDetail.note}</p>
                <p className="mb-2">{postDetail.content}</p>
            </div>
            <div className="row m-0">
                <div className="col-6 col-md-6 col-lg-3 p-2">
                    <div className="btn btn-danger" style={{ width: '100%' }}><i className="fa fa-eye mr-3" aria-hidden="true" />Xem trước</div>
                </div>
                <div className="col-6 col-md-6 col-lg-3 p-2">
                    <div className="btn btn-danger bg" style={{ width: '100%' }}><i className="fa fa-shopping-cart mr-3" aria-hidden="true" />Đặt mua</div>
                </div>
                <div className="col-6 col-md-6 col-lg-3 p-2">
                    <div className="btn btn-danger" style={{ width: '100%' }}><i className="fa fa-phone mr-3" aria-hidden="true" />Gọi</div>
                </div>
                <div className="col-6 col-md-6 col-lg-3 p-2">
                    <div className="btn btn-danger " style={{ width: '100%' }}><i className="fa fa-envelope mr-3" aria-hidden="true" />Nhắn tin</div>
                </div>
            </div>
            <div className="row m-0 mt-3">
                <div className="col-12 col-md-6 p-2">
                    <div className="p-2" style={{ border: '1px solid #ff5c01' }}>
                        <p className="cl font-weight-bold mb-2">Tính năng</p>
                        <div className="mb-2" style={{ width: '100%', height: '1px', background: '#ff5c01' }} />
                        <p className="mb-0">{postDetail.feature}</p>
                    </div>
                </div>
                <div className="col-12 col-md-6 p-2">
                    <div className="p-2" style={{ border: '1px solid #ff5c01' }}>
                        <p className="cl font-weight-bold mb-2">Khuyến mãi</p>
                        <div className="mb-2" style={{ width: '100%', height: '1px', background: '#ff5c01' }} />
                        <p className="mb-0">{postDetail.sale}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page_ContentPost;
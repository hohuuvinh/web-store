import * as Types from './ActionTypes';
import callapi from '../callapi/callapi';

export const getPostDetail = (slug) => {  
    return (dispatch) => {
        return callapi(`DetailPosts/${slug}`, 'GET', null).then(res => {
            dispatch(getPostDetailRD(res.data))
        })
        
    }
}
export const getPostDetailRD = (post) => {
    return {
        type: Types.GET_POST_DETAIL,
        payload: post
    }

}
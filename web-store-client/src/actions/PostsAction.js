import * as Types from './ActionTypes';
import callapi from '../callapi/callapi';

export const getPosts = () => {  
    return (dispatch) => {
        return callapi('GetPosts', 'GET', null).then(res => {
            dispatch(getPostsRD(res.data))
        })
        
    }
}
export const getPostsRD = (posts) => {
    return {
        type: Types.GET_POSTS,
        payload: posts
    }

}
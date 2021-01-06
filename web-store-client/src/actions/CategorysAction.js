import * as Types from './ActionTypes';
import callapi from '../callapi/callapi';

export const getCategoris = () => {  
    return (dispatch) => {
        return callapi('GetCategoris', 'GET', null).then(res => {
            dispatch(getCategorisRD(res.data))
        })
    }
}
export const getCategorisRD = (categoris) => {
    return {
        type: Types.GET_CATEGORYS,
        payload: categoris
    }

}



export const getCategorisPage = (slug) => {  
    return (dispatch) => {
        return callapi(`GetPostFromCategory/${slug}`, 'GET', null).then(res => {
            dispatch(getCategorisPageRD(res.data))
        })
    }
}
export const getCategorisPageRD = (categoris) => {
    return {
        type: Types.GET_CATEGORYS_PAGE,
        payload: categoris
    }

}
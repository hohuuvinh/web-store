import { combineReducers } from 'redux';
import CategoryRD from './CategoryRD';
import PostRD from './PostRD';
import PostDetailRD from './PostDetailRD';
import CategoryPageRD from './CategoryPageRD';

const appReducers = combineReducers({
    CategoryRD:CategoryRD,
    PostRD:PostRD,
    PostDetailRD:PostDetailRD,
    CategoryPageRD:CategoryPageRD
})
export default appReducers;
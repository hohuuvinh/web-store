import * as Types from '../actions/ActionTypes';

var initialState = [];

const PostDetailRD = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_POST_DETAIL:
            state = action.payload;
            return state;
        default: return state;
    }
}
export default PostDetailRD;
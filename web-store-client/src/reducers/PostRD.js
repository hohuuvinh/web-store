import * as Types from '../actions/ActionTypes';

var initialState = [];

const PostRD = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_POSTS:
            state = action.payload;
            console.log(state);
            return [...state];
        default: return [...state];
    }
}
export default PostRD;
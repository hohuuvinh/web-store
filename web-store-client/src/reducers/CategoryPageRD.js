import * as Types from '../actions/ActionTypes';

var initialState = [];

const CategoryPageRD = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_CATEGORYS_PAGE:
            state = action.payload;
            return state;
        default: return state;
    }
}
export default CategoryPageRD;
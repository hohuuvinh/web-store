import * as Types from '../actions/ActionTypes';

var initialState = [];

const ProductRD = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_CATEGORYS:
            state = action.payload;
            // console.log(state);
            return [...state];
        default: return [...state];
    }
}
export default ProductRD;
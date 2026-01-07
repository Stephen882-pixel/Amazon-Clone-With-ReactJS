export const initialState = {
    basket:[],
    user:null,
};

const reducer = (state, action) => {
    console.log(action);
    switch(action.type){
        case 'ADD_TO_BASKET':
            // logic to add an item to basket
            return {
                ...state,
                basket:[...state.basket,action.item]
            };
        case 'REMOVE_FROMM_BASKET':
            // Logic to remove an item from basket
            return { state }
            break;
        default:
            return state;
    }
}

export default reducer;
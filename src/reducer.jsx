export const initialState = {
    basket:[
    {
        id:"12345",
        title:"The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback",
        price:11.96,
        rating:5,
        image:"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg",
    },
    {
        id:"12345",
        title:"The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback",
        price:11.96,
        rating:5,
        image:"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg",
    }
    ],
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
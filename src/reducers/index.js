
const initialState = {
  
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        [action.item.id]: {
          ...action.item,
          quantity: (state[action.item.id]? state[action.item.id].quantity + 1 : 1),
        }
      };
    case 'REMOVE_ITEM':
      const newState = {...state};
      delete newState[action.itemId];
      return newState;
    case 'UPDATE_ITEM':
      return {
        ...state,
        [action.itemId]: {
          ...state[action.itemId],
          quantity: action.newQuantity,
        }
      }

    default:
      return state;
  }
};

//remember store is the redux store, not the app store
export const getStoreItemArray = (state) => {
  return Object.values(state);
}



export default cartReducer;
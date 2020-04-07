

export const addItem = item => ({
  type: 'ADD_ITEM',
  item,
});

export const removeItem = itemId => ({
  type: 'REMOVE_ITEM',
  itemId,
});

export const updateItem = (itemId, newQuantity) => {
  console.log('q' ,newQuantity);
  return {
  type: 'UPDATE_ITEM',
  itemId,
  newQuantity,
  };
};
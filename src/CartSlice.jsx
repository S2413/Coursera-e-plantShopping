import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
    totalQuantity: 5,
  },
  reducers: {
    addItem: (state, action) => {
        const { name, image, cost } = action.payload;
        const existingItem = state.items.find(item => item.name === name);
        if (existingItem) {

            // existingItem.quantity++;
        } else {

            state.items.push({ name, image, cost, quantity: 1 });
        }
},
    removeItem: (state, action) => {
        const {name} = action.payload;
        let itemsArray = [...state.items];
        const itemToRemove =  state.items.find(item => item.name === name);

        let index = itemsArray.indexOf(itemToRemove);
        itemsArray.splice(index , 1);
        state.items = itemsArray;

    },

    updateQuantity: (state, action) => {
        const { name } = action.payload[0]; // First object of the array which is the plant item
        const itemToUpdate = state.items.find(item => item.name === name);
        if (itemToUpdate) {
            itemToUpdate.quantity = action.payload[1];  //2nd object of array - new quantity
        }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;

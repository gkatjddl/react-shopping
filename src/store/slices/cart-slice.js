// createSlice
// slice : name, iniralState, actions

import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice(
  {
    name:"",
    initialState,
    reducers:{
      // reducers에는 제공할 함수를 기록
      // 추가하기
      addToCart(state,action){
        state.push(action.payload);
      },

      // 제거하기
      removeToCart(state,action){
        return state.filter((item)=>item.id !== action.payload);
      }
    }
  });

  // reducsers에 추가한 함수는 여기서 export
  export const {addToCart,removeToCart} = cartSlice.actions;
  export default cartSlice.reducer;
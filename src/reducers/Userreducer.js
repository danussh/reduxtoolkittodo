import { createSlice } from "@reduxjs/toolkit";

export const Userreducer = createSlice({
  name: "users",
  initialState: {
    data: [
      {
        id:1,name:"danussh"
      }
    ],
  },
  reducers:{
    addTodo:(state,action)=>{
      state.data=[...state.data,{id:Math.random(),name:action.payload}]
    },
    deleteTodo:(state,action)=>{
      state.data=[...state.data.filter((val)=>
        val.id!==action.payload
      )]
    },
    editTodo:(state,action)=>{
      state.data=[...state.data.map((val)=>{
        return (val.id===action.payload.id)?{id:val.id,name:action.payload.name}: val
      })]
    }
  }


});
export const {addTodo,deleteTodo,editTodo}=Userreducer.actions
export default Userreducer.reducer;

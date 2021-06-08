import { createSlice } from "@reduxjs/toolkit";
import {getUsers} from "../actions/Userfetch"

export const Userreducer = createSlice({
  name: "users",
  initialState: {
    data: [],
    loader:false
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
  },
  extraReducers:{
    [getUsers.pending]:(state,action)=>{
      state.loader=true
    },
    [getUsers.fulfilled]:(state,action)=>{
      state.data=action.payload
      state.loader=false
    }
  }


});
export const {addTodo,deleteTodo,editTodo}=Userreducer.actions
export default Userreducer.reducer;

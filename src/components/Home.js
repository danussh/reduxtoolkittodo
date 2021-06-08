import React,{useRef} from 'react'
import {useSelector,useDispatch} from "react-redux"
import { addTodo,deleteTodo,editTodo } from '../reducers/Userreducer'
const Home = () => {
    const {data} = useSelector(state => state.users)
    const inputvalue = useRef("")
    const dispatch = useDispatch()
    const storeinputdata = (e)=>{
        e.preventDefault();
        dispatch(addTodo(inputvalue.current.value))
        inputvalue.current.value=""
    }
    const edittodo = (id)=>{
        var name=prompt("Enter name");
        dispatch(editTodo({id,name}))
    }
    return (
        <div>
            <form onSubmit={storeinputdata}>
                <input type="text" ref={inputvalue}/><br></br>
                <button type="submit">Add List</button>
            </form>
            {
                data.map((val,index)=>{
                    return <li key={index}>{val.name}<button onClick={()=>dispatch(deleteTodo(val.id))}>Delete</button><button onClick={()=>{edittodo(val.id)}}>Edit</button></li>
                })
            }
        </div>
    )
}

export default Home

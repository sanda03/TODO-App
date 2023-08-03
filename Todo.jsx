import { useRef, useState } from "react";
import "./Todo.css";

function Todo({ el,onClick, updateTodo }) {
    const [showUpdate, setShowUpdate] = useState(false);
    const updateField = useRef(null);

    const update = (event)=>{
        event.preventDefault();
        setShowUpdate(false)
        updateTodo({id: el.id, value: updateField.current.value});
    }

    return (
        <li>
            {el.value}
            <button class="delete" onClick={() => onClick(el.id)}>Delete</button>
            {
                showUpdate ? 
                <form action="submit" onSubmit={update}>
                    <input type="text" ref={updateField} defaultValue={el.value} />
                </form>: 
                <button class="update" onClick={()=>setShowUpdate(!showUpdate)}>Update</button>
            }
        </li>
    )
}

export default Todo;
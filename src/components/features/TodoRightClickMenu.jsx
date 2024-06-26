import { useEffect } from "react";
import { cloneDeep, screenSize } from '@/util';

function TodoRightClickMenu({ payload = {}, currentTodoList = {}, onCloseMenu = () => {}, onSwitchTodoItem = () => {} }) {
    const menulist = ['new', 'ongoing', 'done'];

    useEffect(() => {
        const clickEvent = (e) => {
            onCloseMenu();
        }

        document.addEventListener('click', clickEvent);
        return () => {
            document.removeEventListener('click', clickEvent);
        };
    }, []);

    const positionStyle = () => {
        let {screenX, screenY} = screenSize()
        return {
            top: ((payload.y + 80) > screenY ? screenY - 80 : payload.y) + 'px',
            left: ((payload.x + 95) > screenX ? screenX - 95 : payload.x) + 'px'
        }
    }

    const shiftTodoItem = (toShift) => {
        const todoList = cloneDeep(currentTodoList);
        todoList[toShift]?.push(todoList[payload.status][payload.index]);
        todoList[payload.status]?.splice(payload.index, 1);
        
        onSwitchTodoItem(todoList);
    }

    return (
        <div className="fixed bottom-[0px] w-[88px] h-[fit-content] shadow-lg bg-white border rounded-[4px]" style={positionStyle()}>
            {menulist.map((item, index)=>(
                payload.status != item && <div className="px-[12px] py-[5px] hover:bg-gray-100 cursor-pointer capitalize" onClick={() => {shiftTodoItem(item)}} key={index}>{ item }</div>
            ))}
        </div>
    )
  }
  
  export default TodoRightClickMenu;
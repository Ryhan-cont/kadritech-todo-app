import { useState } from 'react';
import { TodoColumn, TodoItem, TodoRightClickMenu, TodoHeader } from '@/components/features';
import { defaultTodo } from '@/resources';

function App() {
  const [todoList, setTodoList] = useState({...defaultTodo});
  const [toggleRightClickMenu, setToggleRightClickMenu] = useState(false);
  const [rightClickMenuPayload, setRightClickMenuPayload] = useState({});

  const openRightClickMenu = (payload) => {
    setRightClickMenuPayload(payload);
    setToggleRightClickMenu(true);
  }

  return (
    <div className="min-h-[100vh] w-full p-[20px]">
      <TodoHeader currentTodoList={todoList} onAddNewTodoItem={(newTodoList) => {setTodoList(newTodoList)}} />
      <div className="grid md:grid-cols-3 gap-[10px] mt-[20px]">
        {Object.entries(todoList).map(([status, items]) => (
          <TodoColumn status={status} key={status}>
            {items.map((item, index) => (
              <TodoItem 
                title={item.title} 
                description={item.description} 
                status={status}
                onRightClickMenuOpen={(payload) => {openRightClickMenu({status, index, ...payload})}}
                key={`${status}-${index}`} 
              />
            ))}
          </TodoColumn>
        ))}
      </div>
      { toggleRightClickMenu && 
        <TodoRightClickMenu 
          payload={rightClickMenuPayload} 
          currentTodoList={todoList}
          onSwitchTodoItem={(newTodoList) => {setTodoList(newTodoList)}} 
          onCloseMenu={() => setToggleRightClickMenu(false)} 
        /> 
      }
    </div>
  )
}

export default App
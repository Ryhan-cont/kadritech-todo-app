import { useState, useRef } from 'react';
import { Modal, Button, InputField, TextField } from '@/components/base';
import { cloneDeep } from '@/util';

function TodoHeader({currentTodoList = {}, onAddNewTodoItem = () => {}}) {
  const [toggleNewTodoModal, setToggleNewTodoModal] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [modalError, setModalError] = useState('');

  const modalRef = useRef()

  const createNewTodo = () => {
    if(!description || !title){
        setModalError('Title and description is required')
        return
    }
    
    const todoList = cloneDeep(currentTodoList);
    todoList.new.push({title, description});
    onAddNewTodoItem(todoList);
    modalRef.current.closeModal();
  }

  const closeModal = () => {
    setToggleNewTodoModal(false);
    setTitle('');
    setDescription('');
    setModalError('');
  }

  return (
    <>
      <div className="text-[22px] font-bold flex">
        <div className="flex-auto">Todo List Application</div>
        <Button onClick={()=>{setToggleNewTodoModal(true)}}>Add New</Button>
      </div>
      { toggleNewTodoModal &&
        <Modal ref={modalRef} width="550px" title="Add new todo" onClose={()=>{closeModal()}}>
          <div className="p-[30px] max-h-[calc(100vh_-_190px)] overflow-y-auto">
            <InputField 
                value={title} 
                placeholder="Title" 
                onChange={(value)=>{setTitle(value); setModalError('')}}
            />
            <TextField 
                value={description} 
                placeholder="Description" 
                className="mt-[20px]" 
                onChange={(value)=>{setDescription(value); setModalError('')}}
            />
            {modalError && <div className="text-[12px] text-[red] mt-[20px]">{modalError}</div>}
            <Button className="mt-[20px]" onClick={createNewTodo}>Add</Button>
          </div>
        </Modal>
      }
    </>
  )
}

export default TodoHeader
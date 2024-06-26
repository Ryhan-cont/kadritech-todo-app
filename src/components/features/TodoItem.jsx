function TodoItem({ title="", description="", status="", onRightClickMenuOpen = (payload = {}) => {} }) {

    const handleContextMenu = (event) => {
        event.preventDefault();
        onRightClickMenuOpen({x: event.clientX, y: event.clientY});
    }

    const statusMarkerClass = () => {
        switch (status) {
            case 'new':
              return 'border-l-new-todo';
            case 'ongoing':
              return 'border-l-ongoing-todo';
            case 'done':
              return 'border-l-done-todo';
            default:
              return '';
        }
    }

    return (
        <div className={`border border-l-[5px] p-[10px] rounded-[8px] bg-[#fafafa]-500/100 cursor-default ${statusMarkerClass()}`} onContextMenu={handleContextMenu}>
            <div className="mt-[10px] font-semibold text-[16px]">{ title }</div>
            <div className="mt-[10px] text-[14px] text-gray-600">{ description }</div> 
        </div>
    )
  }
  
  export default TodoItem;

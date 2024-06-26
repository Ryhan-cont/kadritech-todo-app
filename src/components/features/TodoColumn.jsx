import { useState, useEffect } from "react";

function TodoColumn({ status="", children }) {
  const [columnDetail, setColumnDetail] = useState({})

  useEffect(() => {
    switch (status) {
        case 'new':
          setColumnDetail({title: 'New', headerBackground: 'bg-new-todo'});
          break;
        case 'ongoing':
          setColumnDetail({title: 'Ongoing', headerBackground: 'bg-ongoing-todo'});
          break;
        case 'done':
          setColumnDetail({title: 'Done', headerBackground: 'bg-done-todo'});
          break;
        default:
          setColumnDetail({});
    }
  }, [status])

  return (
    <div className="md:min-h-[calc(100vh_-_120px)] w-full border rounded-[8px] overflow-hidden">
        <div className={`p-[10px] font-bold ${columnDetail?.headerBackground}`}>
          { columnDetail.title }
        </div>
        <div className="p-[10px] grid gap-[10px]">
          { children }
        </div>
    </div>
  )
}

export default TodoColumn
import { useState } from 'react';
import './App.css';
function App() {
  let [toDos, setToDos] = useState([])
  let [toDo, setToDo] = useState('')
  let [ctask, setCtask] = useState([])
  let [dtask, setdtask] = useState([])

  function Transfer(id) {
    const updatedTodos = toDos.map((obj2) => {
      if (obj2.id === id) {
        obj2.status = !obj2.status
        if (obj2.status) {
          setCtask([...ctask, obj2])
        } else {
          setCtask(ctask.filter((item) => item.id !== id))
        }
        return null
      }
      console.log(obj2)
      return obj2
    }).filter(Boolean)
    setToDos(updatedTodos)
  }

  function restoreTask(id){
    ctask.map((obj)=>{
      if(obj.id===id){
        obj.status = !obj.status
        setToDos([...toDos,obj])
        if (obj.status) {
          setCtask([...ctask,obj])
        } else {
          setCtask(ctask.filter((item) => item.id !== id))
        }
      }
      return null
    })
  }

  function DeleteTask(id){
    toDos.map((obj)=>{
      if(obj.id===id){
        setdtask([...dtask,obj])
        setToDos(toDos.filter((obj2) => obj2.id !== id))
      }
      return null
    })
  }

  function restoredTask(id){
    dtask.map((obj)=>{
      if(obj.id===id){
        setToDos([...toDos,obj])
        setdtask(dtask.filter((obj2=> obj2.id !== id)))
      }
      return null
    })
  }

  function getDay() {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var d = new Date();
    var dayName = days[d.getDay()];
    return dayName
  }

  return (
    <div className="todo">
      <div className="header text-white text-center">
        <h1 >TODO</h1>
        <h1>OH its {getDay()}..</h1>
      </div>
      <div >
        <div className="container">
          <div className="row p-4">
            <div className="col-md-4">
              <div className="CreatetoDo m-1">
                <h4 className="text-white mb-4">Create task</h4>
                <hr className='text-white' />
                <div className="createStyle">
                  <input className='Inputstyle text-white' value={toDo} onChange={(e) => { setToDo(e.target.value) }} placeholder='Create toDo...' type="text" />
                  <button onClick={() => { setToDos([...toDos, { id: Date.now(),text: toDo, status: false }]) }} className='btn btn-success ms-3'>+</button>
                </div>
                {
                  toDos.map((obj) => {
                    return (
                      <div className="todotiles p-4 mt-4">
                        <input type="checkbox" checked={obj.status} onChange={() => Transfer(obj.id)} className='CheckboxStyle' />
                        <h6 className='text-white'>{obj.text}</h6>
                        <button onClick= {() => {DeleteTask(obj.id)}} className='btn btn-danger '>delete</button>
                      </div>
                    )
                  })
                }
              </div>
            </div>
            <div className="col-md-4">
              <div className='Completed p-5 m-1'>
                <h4 className='text-white'>Completed task</h4>
                <hr className='text-white' />
                {
                  ctask.map((obj) => {
                    if (obj.status) {
                      return (
                        <div className="finishStyle m-4">
                          <h6 className='text-white'>{obj.text}</h6>
                          <button onClick={()=> restoreTask(obj.id)} className='restoreBtn btn btn-primary'>restore</button>
                        </div>  
                      )
                    }
                    return null
                  })
                }
              </div>
            </div>
            <div className="col-md-4">
            <div className='Deleted p-5 m-1'>
                <h4 className='text-white'>Deleted Task</h4>
                <hr className='text-white' />
                {
                  dtask.map((obj) => {
                      return (
                        <div className="Deleted-task m-4">
                          <h6 className='text-white'>{obj.text}</h6>
                          <button onClick={()=> restoredTask(obj.id)} className='restoreBtn btn btn-primary'>restore</button>
                        </div>

                      )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
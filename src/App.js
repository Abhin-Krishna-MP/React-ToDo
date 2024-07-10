import { useState } from 'react';
import './App.css';
import Completed from './components/Completed';
function App() {

  let [toDos, setToDos] = useState([])
  let [toDo, setToDo] = useState('')
  return (
    <div className="todo">
      <div className="header text-white text-center">
        <h1 >TODO</h1>
        <h1>OH its Wedensday..</h1>
      </div>
      <div >
        <div className="container">
          <div className="row p-4">
            <div className="col-md-4">
              <div className="CreatetoDo">
                <h4 className="text-white mb-4">Create task</h4>
                <hr className='text-white' /> 
                <div className="createStyle">
                  <input className='Inputstyle text-white' value={toDo} onChange={(e) => { setToDo(e.target.value) }} placeholder='Create toDo...' type="text" />
                  <button onClick={() => { setToDos([...toDos, { id: Date.now(), text: toDo, status: false }]) }} className='btn btn-success ms-3'>+</button>
                </div>
                {
                  toDos.map((obj) => {
                    return (
                      <div className="todotiles p-4 mt-4">
                        <input type="checkbox" onChange={(e) => {
                          setToDos(toDos.filter(obj2 => {
                            if (obj2.id === obj.id) {
                              obj2.status = e.target.checked
                            }
                            return (obj2)
                          }))
                        }} className='CheckboxStyle' />
                        <h6 className='text-white'>{obj.text}</h6>
                        <button onClick={(e) => {
                          setToDos(toDos.filter(obj2 => {
                            if (obj2.id === obj.id) {
                              obj2 = null
                            }
                            return obj2
                          }))
                        }} className='btn btn-danger '>delete</button>
                      </div>
                    )
                  })
                }
              </div>
            </div>
            <div className="col-md-4">
              <Completed toDos={toDos}/>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
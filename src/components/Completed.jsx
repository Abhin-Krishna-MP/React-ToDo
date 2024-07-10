import React from 'react'

function Completed(props) {
  return (
    <div className='Completed p-5 '>
        <h4 className='text-white'>Completed task</h4>
        <hr className='text-white' />  
        {
            props.toDos.map((obj)=>{
                if(obj.status){
                    return(
                        <div className="finishStyle m-4">
                            <h6 className='text-white'>{obj.text}</h6>
                        </div>

                    )
                }
            })
        }
    </div>
  )
}

export default Completed
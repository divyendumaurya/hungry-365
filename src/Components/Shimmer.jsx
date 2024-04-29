import React from 'react'

const Shimmer = () => {
  return (
    <><div className="flex flex-wrap">
      {Array(10).fill('').map((e,index)=>( <div key={index} className="w-[200px] bg-gray-300 p-3 m-3 h-64">

</div>))}
  
    
  </div>
    </>
  )
}

export default Shimmer


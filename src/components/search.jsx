import React from 'react'

function search(props) {
  const { setInputData, inputData} = props
  return (
    <div className='search'>
       <div className="flex ml-7 ">
    <input type="search" className="mt-8 shadow-2xl w-[20%] h-9" placeholder="    enter your country name" value={inputData} onChange = {(e) => setInputData(e.target.value)}  aria-label = "Search"/>
    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </div>
  </div>
  )
}

export default search
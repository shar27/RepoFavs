import React from "react";
import {useState} from 'react'

function Favorites() {

  
const [isEmpty, setIsEmpty] = useState(false);

  function deleteAll() {
  document.getElementById('favsarray').innerHTML ="empty"
    localStorage.clear("name");
  }

  
  if (isEmpty) return <p className='text-black text-3xl text-center mt-20 absolute z-50'>No favorites...please go back to Repo List and make a choice</p>
  
  return (

      
    <div className="relative z-0 top-44">
  
<div className="absolute z-50 ">
  
    <div className=" flex justify-between p-5 font-bold text-black text-3xl">
      <div id="favsarray"  className=" container grid grid-cols-2 gap-2 p-2 text-black">
       

      </div>
      <div>

      <button
          id="btn"
          onClick={deleteAll}
          className="transition p-2 text-white rounded-md ease-in-out delay-150 bg-red-500 hover:-translate-y-1 hover:scale-110 hover:bg-red-500 duration-300"
        >
          Delete all
        </button>
      </div>
    </div>
    </div>
    </div>
  );
}

export default Favorites;

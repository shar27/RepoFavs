import React from 'react';
import {useState } from 'react'
import Link from 'next/link'

function Repo({data}) {
  
  console.log(data);
    return (
  
  <div>
       <div className="grid grid-cols-3 grid-rows-2 gap-2 bg-black text-white">
         {data.items.map((d)=> (
           <div className=" border-red-600 p-5">
           <h1 className="text-2xl font-bold">{d.name}</h1>
           <p className="mb-5">{d.description}</p>
           <p>{d.score}</p>
           <p>{d.created_at}</p>
            <Link href={d.html_url}>
            <a className="bg-white text-black font-bold rounded-lg">Click me</a>
            </Link>
        </div>
         ))}
  </div>
  </div>

  )
}



export default Repo;

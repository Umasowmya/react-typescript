import React, { useRef, useState } from 'react'



interface Person{
    firstName:string;
    lastName:string;
}

interface Props{
    text:string;
    ok?:boolean;
    i?:number;
    fn ?: (bob:string)=>string;
    person:Person;
    handleChange:()=>void;

}

interface TextNode{
    text:string;
}

const TextField :React.FC <Props>= ({handleChange}) => {

    const [count,setCount] =useState<TextNode>({text:'one'});

    setCount({text:'hello'});

    const inputRef=useRef<HTMLInputElement>(null)

  return (
    <div>
       <input ref={inputRef} onChange={handleChange}/>
    </div>
  )
}

export default TextField

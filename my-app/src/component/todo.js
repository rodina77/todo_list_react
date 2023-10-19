import React from 'react';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

const Todo = () => {
  const [currentValue,setCurrentValue]=useState("");
  const [finaltodo,setFinalTodo]=useState([]);

  function finalhandler()
  {
    setFinalTodo([...finaltodo,currentValue])
  }
  return (
    <div className='container p-3'>
      <h1>to do list</h1>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">❗</InputGroup.Text>
        <Form.Control
          placeholder="Add new todo"
          aria-label="search"
          aria-describedby="basic-addon1"
          onChange={(e)=>setCurrentValue(e.target.value)}
        />
         <Button variant="info" className='text-white' onClick={finalhandler}>Add</Button>
      </InputGroup>

      {finaltodo.map((item,index)=>(
        <>
        <div key={index}></div>
        <div className=' container p-3'>
          <div className='row'>
            <div className='col-6'>
        <div className='text-center'>{item}</div>
        </div>
        <div className='col-6'>
        <Button variant="danger" onClick={()=> setFinalTodo(finaltodo.filter((el,i) => index !=i))}>delete</Button>
        </div>
        </div>
        </div>
        
        </>
      ))}
    </div>
  );
}

export default Todo;

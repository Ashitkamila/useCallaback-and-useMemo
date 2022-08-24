import React, { useCallback, useState } from 'react';
import Button from './Button';
import DataCount from './DataCount';
import Title from './Title';

function ParentComp() {
    const [age,setAge] = useState(10);
    const [salary,setSalary]= useState(10000);
    //Retuns the memorized function
    const incrementAge =useCallback(()=>{
        setAge(age+1)
    },[age])
    const incrementSalary =useCallback(()=>{
        setSalary(salary+100)
    },[salary])
  return <div>

      <Title/>
      <DataCount count={age} text="age"/>
      <button handleClick={incrementAge}>Increment age</button>
      <DataCount count={salary} text="salary"/>
      <button handleClick={incrementSalary}>Increment salary</button>
      <Button/>
  </div>;
}

export default ParentComp;

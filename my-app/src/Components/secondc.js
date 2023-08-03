import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import React from 'react';
import { incData,decData } from '../state/actionCreator/actions';
import { useSelector } from 'react-redux';
export default function Secondc() {
  const dispatch=useDispatch();
  
  
  return (
    <>
    <div className='container'>
      <button type='' className='btn btn-primary' onClick={()=>{dispatch(incData(10))}}> + </button>
      
      
    </div>
    {/* <div>{amount}</div> */}
    <div className="container">
    <button type='' className='btn btn-primary' onClick={()=>{dispatch(decData(10))}}> - </button>
    </div>
    </>
  )
}

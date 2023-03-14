import React from 'react'
import './bodyNames.css'

function BodyNames(props) {
    
  return (
    <>
  
        <ul className='body_body_names'>
            <li className='body_items_font'>{props.name1}</li>
            <li className='body_items_sm'>{props.name2}</li>
            <li className='body_items_font'>{props.name3}</li>
            <li className='body_items_sm'>{props.name4}</li>
            <li className='body_items_font'>{props.name5}</li>
            <li className='body_items_sm'> {props.name6}</li>
        </ul>
       


    
      
    </>
  )
}

export default BodyNames

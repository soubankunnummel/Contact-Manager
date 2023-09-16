import React from 'react'
import user from '../images/pngwing.com.png'

const ContactCard = (props) => {
    const {id,name,email} = props.contact
  return (
    <div className='item '>
      <img className='ui avatar image' src={user} alt="image" />
    <div className='content'>
        <div className='header'>{name} </div>
        <div>{email} </div>
    </div>
    <i className='trash alternate outline icon right floated'
    style={{color:'red',marginTop:'6px'}}
    onClick={() => props.clickHandler(id)}
    ></i>

</div>
  )
}

export default ContactCard
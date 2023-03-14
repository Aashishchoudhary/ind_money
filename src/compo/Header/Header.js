import {useState}from 'react'
import { Link, NavLink  } from "react-router-dom";
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import './header.css'

export default function Header() {
  const[dis , setDis]=useState(false)

 const investClick=()=>{
  if(dis==false){
    setDis(true)
  }
  else{
    setDis(false)
  }
 }
  return (
    <>
      <ul className='header'>
      
      <li className="header_icons"><NavLink   to='/' className='header_links'><img className='header_logo' src='https://cdn.indiawealth.in/cdn/images/fe/IND_logo_circle.png'></img></NavLink > </li>
      <li className="header_icons"><input className='header_input' placeholder='Search'  type="text" name="" id="" /></li>




      <li class="header_icons">
      <Link onClick={investClick}  className='header_links'>Invest</Link > 
       { dis?<ul class="dropdown_menu">
          <li className='drp_menu'><a href="#">Option 1</a></li>
          <li className='drp_menu'><a href="#">Option 2</a></li>
          <li className='drp_menu'><a href="#">Option 3</a></li>
          <li className='drp_menu'><a href="#">Option 3</a></li>
        </ul>:""}
      </li>











      {/* <li className="header_icons"><Link onClick={props.investClick}  className='header_links'>Invest</Link > </li> */}
      <li className="header_icons"><NavLink     to='/features' className='header_links'>Features</NavLink  ></li>
      <li className="header_icons"><NavLink   to='/pricing' className='header_links'>Pricing</NavLink > </li>
      <li className="header_icons"><NavLink   to='/blog' className='header_links'>Blog</NavLink > </li>
      <li className="header_icons"><NavLink   to='/support' className='header_links'><SupportAgentIcon/></NavLink > </li>
      <li className="header_icons login"><NavLink   to='/login' className='header_links'>Login</NavLink > </li>
      <li className="header_icons  signup"><NavLink   to='/signup' className='header_links '>Sign Up</NavLink > </li>
    </ul>
   
    </>
  )
}

import React, { useState } from 'react'
import {useRouter} from 'next/router'
import Image from 'next/Image'
import Link from 'next/link'

const Header = () => {
  const router=useRouter()
  const [showNav,setShowNav]=useState(false)

  function isActive(route){
    if(route== router.pathname){
        return "nav-link active"
    }
    else {
      return "nav-link"
    }
 }

  return (
   <>
    <div className="header">
      <div onClick={()=>setShowNav(!showNav)} className={showNav ? 'nav-toggler active' : 'nav-toggler'}>
           <span></span>
           <span></span>
           <span></span>
      </div>
          <div className="logo" onClick={()=>router.push('/')}>
               <Image width='90px'  height='90px' src="https://res.cloudinary.com/randhircloud/image/upload/v1662023284/Pngtree_neon_shiny_triangle_border_6257006_sqhdrd.png" alt="logo" />
               <h1>fake data store</h1>
          </div>
          <div className={showNav ? 'nav active' : 'nav'} id='nav' >
           <div className='nav-inn-none'>
               <Image width='100px' onClick={()=>router.push('/')} height='100px' src="https://res.cloudinary.com/randhircloud/image/upload/v1662023284/Pngtree_neon_shiny_triangle_border_6257006_sqhdrd.png" alt="logo" />
               <h1>fake data store</h1>
           </div>
           <Link href="/"  ><a  className={isActive('/')} onClick={()=>setShowNav(false)}>home</a></Link>
           <Link href="/Docs" ><a  className={isActive('/Docs')} onClick={()=>setShowNav(false)}>docs</a></Link>
           {/* <Link href="/"><a  className={isActive('/')}>github</a></Link> */}
           {/* <Link href="/"><a  className={isActive('/')}>donate</a></Link> */}
          </div>
    </div>
    <hr className='header-row' />
   </>
  
  )
}

export default Header
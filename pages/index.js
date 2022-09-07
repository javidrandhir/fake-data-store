import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'



export default function Home() {
 const [showCode,setShowCode]=useState(false)
const router=useRouter()



  return (
    <div >
      <Head>
        <title>Fake Data Store Api</title>
        <meta name="description" content="this is a free api data place for developers" />
        <meta name="description" content="rest api,fake data for ecommerce sites" />
        <meta name="description" content="products data,posts,reviews" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="home">
     
         <div className="home_1">
             <div className="left">
             <h1>fake data store</h1>
             <h3>place for fake data for your ecommerce sites</h3>
             <p>explore...</p>
             <div className='buttons'>
                 <button onClick={()=>router.push('/Docs')}>docs</button>
                 <button>github</button>
             </div>
             </div>
             <div className="right">
            
               <Image width='750px' height='750px' src="/home.png" alt="home" />
             </div>
         </div>
         <div className="home_2">
        
            <h1>why fake data store ?</h1>
            <p>It is a collection of completely <span>Free Apis</span> that help all my <b>Developer Friends</b> to generate fake data, instead of writing <span>lorem ipsum</span> at every place. No <span>charges</span>, No <span>authentication</span> , No <span>token</span>.</p>
            <p>You have access to all types of <span>collections</span> below and you can go to docs to learn more.You can test all these apis in postman too.</p>
            <p>You can use it for demo purposes or personal projects,training..etc</p>
         </div>
         <div className="home_3">
          <h1>resources</h1>
          <p>These are the collections you can access</p>
        <div className='home_resources'>
          <div className='top'>
              <div className='item'>
              <Link href='/api/products'><a>/products</a></Link>
               <p>50 products</p>
              </div>
              <div className='item'>
                  <Link href='/api/bo0ks'><a>/bookscollection</a></Link>
                  <p>30 books</p>
              </div>
              <div className='item'>
              <Link href='/api/users'><a>/users</a></Link>
               <p>20 users with login functionality</p>
              </div>
              <div className='item'>
          <Link href='/api/carts'><a>/userCarts</a></Link>
               <p>20 user carts</p>
              </div>
              {/* <div className='item'>
          <Link href='/api/products'><a>/people</a></Link>
               <p>20 people</p>
              </div> */}
              <div className='item'>
          <Link href='/api/photos'><a>/photos</a></Link>
               <p>50 photos</p>

              </div>
              <div className='item'>
          <Link href='/api/albums'><a>/albums</a></Link>
               <p>30 albums</p>

              </div>
          </div>
            <div className='bottom'>
               <button onClick={()=>router.push('/Docs')}>go to docs</button>
            </div>
        </div>
         </div>
         <div className='home_4'>
          <h1>Routes</h1>
          <p>All HTTP methods supported. You can use either http or https.</p>
           <div className='router_methods'>
              <div className='one'>
                  <p>GET</p>
                  <Link href='/api/products'><a>/products</a></Link>
              </div>
              <div className='one'>
                  <p>GET</p>
                  <Link href='/api/users/1/cart'><a>/users/1/cart</a></Link>
              </div>
              <div className='one'>
                  <p>GET</p>
                  <Link href='/api/albums/1/photos'><a>/albums/1/photos</a></Link>
              </div>
              <div className='one'>
                  <p>POST</p>
                   <p>/carts</p>
              </div>
              <div className='one'>
                  <p>PUT</p>
                   <p>/persons</p>
              </div>
              <div className='one'>
                  <p>PATCH</p>
                   <p>/address</p>
              </div>
              <div className='one'>
                  <p>DELETE</p>
                   <p>/books</p>
              </div>
           </div>
           <p className='note'><span>Note </span>: See the <span className='guide'>github</span> for source</p>
         </div>
         <div className='home_code_try'>
            <h1>Try it</h1>
            <p>run this code from anywhere !</p>
            <div>
               <div className='code_top'>
                    <p><span className='color-orange'> fetch </span> ( <span className='color-green'>https://......./products/1 </span> ) <br /><span className='color-orange'>.then </span> ( response = &gt; response . <span className='color-orange'>json</span>() )
                    <br /><span className='color-orange'> . then</span> ( json = &gt;console . <span className='color-orange'> log </span> ( json ) ) </p>
               </div>
               <button onClick={()=>setShowCode(!showCode)} className={showCode ? 'bg-red': 'bg-green'}>{!showCode ? 'run code' : 'hide response'}</button>
               <div className={showCode ? 'bottom_code active' :'bottom_code'}>
              {`{`}
              <br />
              <br />
                        <p>&quot; id &quot; : 1</p>
                        <p>&quot; name &quot; : &quot; .... &quot;</p>
                        <p>&quot; description &quot; : &quot; ..... &quot;</p>
                        <p>&quot; image1 &quot; : &quot; .... &quot;</p>
                        <p>&quot; image2 &quot; : &quot; .... &quot;</p>
                        <p>&quot; image3 &quot; : &quot; .... &quot;</p>
                        <p>&quot; image4 &quot; : &quot; .... &quot;</p>
                        <p>&quot; price &quot; : &quot; ₹ .... &quot;</p>
                        <p>&quot; category &quot; : &quot; .... &quot;</p>
                        <p>&quot; rating &quot; : &quot; .... &quot;</p>
                        <p>&quot; stock &quot; : &quot; .... &quot;</p>
                        <p>&quot; model &quot; : &quot; .... &quot;</p>
              <br />
                       {`}`}
               </div>
            </div>
         </div>
    </div>
      
    </div>
  )
}

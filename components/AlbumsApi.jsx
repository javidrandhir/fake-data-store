import React, { useState } from 'react'
import { SiNintendogamecube } from "react-icons/si";
import { baseUrl } from './BaseUrl';
import { GiBullseye } from "react-icons/gi";

const AlbumsApi = () => {
    const [showp1,setShowp1]=useState(false)
    const [showp2,setShowp2]=useState(false)
    const [showp3,setShowp3]=useState(false)
    const [showp4,setShowp4]=useState(false)
    const [showp5,setShowp5]=useState(false)
    const [showp6,setShowp6]=useState(false)
    const [showp7,setShowp7]=useState(false)
  return (
    <>
    <div className="docs_left">
    <h2>find your need here</h2>
     <a href="#allalbums">get all albums</a>
     <a href="#singlealbum">get single album</a>
     <a href="#sortingalbums">sorting albums</a>
     <a href="#limitingalbums">limiting album</a>
     <a href="#addalbum">Add new album</a>
     <a href="#updatealbum">update album</a>
     <a href="#deletealbum">delete album</a>
     <h2>nested routes</h2>
     <a href="#albumpics">get photos from album</a>
  </div>
  <div className="docs_right">
    <h1><SiNintendogamecube className='icon' /> albums api</h1>
      <div className='component' id='allalbums'>
          <h2>get all albums</h2>
          <div className='reveal_code'>
              <p><span className='color-orange'> fetch </span>(<span> &apos; {baseUrl}/api/albums &apos;</span>)</p>
              <p>.<span className='color-orange'>then</span>(res =&gt; res.json())</p>
              <p>.<span className='color-orange'>then</span>(json=&gt; console.log(<span className='color-orange'>json</span>))</p>
           </div> 
           <p onClick={()=>setShowp1(!showp1)} className={showp1 ? 'active' :''}>{showp1 ? 'hide output' : 'show output'} </p> 
           <div className={showp1 ? 'reveal_output active' :'reveal_output'}>
               {`{`}
                <p>&quot; id &quot; : 1 ,</p>
                <p>&quot; title &quot; : &quot; .... &quot; ,</p> 
                <p>&quot; url &quot; : &quot; ....  &quot;</p>
               {`}`},
               <br />
               {`......`}
               <br />
               {`{`}
                <p>&quot; id &quot; : 20 ,</p>
                <p>&quot; title &quot; : &quot; .... &quot; ,</p> 
                <p>&quot; url &quot; : &quot; ....  &quot;</p>
               {`}`},
           </div>
      </div>
      <div className='component' id='singlealbum'>
          <h2>get single album</h2>
          <div className='reveal_code'>
              <p><span className='color-orange'>fetch</span>(<span> &apos; {baseUrl}/api/albums/1 &apos;</span>)</p>
              <p>.<span className='color-orange'>then</span>(res =&gt; res.json())</p>
              <p>.<span className='color-orange'>then</span>(json=&gt; console.log( <span className='color-orange'>json</span>) )</p>
           </div> 
           <p onClick={()=>setShowp2(!showp2)} className={showp2 ? 'active' :''}>{showp2 ? 'hide output' : 'show output'} </p> 
           <div className={showp2 ? 'reveal_output active' :'reveal_output'}>
           {`{`}
                <p>&quot; id &quot; : 1 ,</p>
                <p>&quot; title &quot; : &quot; .... &quot; ,</p> 
                <p>&quot; url &quot; : &quot; ....  &quot;</p>
               {`}`}
              
           </div>
      </div>
      <div className='component' id='sortingalbums'>
          <h2>sorting albums</h2>
          <div className='reveal_code'>
              <p><span className='color-orange'>fetch</span>(<span> &apos; {baseUrl}/api/albums?sort=-1 &apos;</span>)</p>
              <p>.<span className='color-orange'>then</span>(res =&gt; res.json())</p>
              <p>.<span className='color-orange'>then</span>(json=&gt; console.log(<span className='color-orange'>json</span>))</p>
           </div> 
           <p onClick={()=>setShowp3(!showp3)} className={showp3 ? 'active' :''}>{showp3 ? 'hide output' : 'show output'} </p> 
           <div className={showp3 ? 'reveal_output active' :'reveal_output'}>
           {`{`}
                <p>&quot; id &quot; : 20 ,</p>
                <p>&quot; title &quot; : &quot; .... &quot; ,</p> 
                <p>&quot; url &quot; : &quot; ....  &quot;</p>
               {`}`},
               <br />
               {`......`}
               <br />
               {`{`}
                <p>&quot; id &quot; : 1 ,</p>
                <p>&quot; title &quot; : &quot; .... &quot; ,</p> 
                <p>&quot; url &quot; : &quot; ....  &quot;</p>
               {`}`},
           </div>
           <div className='reveal_note'><GiBullseye className='icon' />Default value is in ascending order i.e; sort=1, for descending sort=-1</div>
      </div>
      <div className='component' id='limitingalbums'>
          <h2>Limiting albums</h2>
          <div className='reveal_code'>
              <p><span className='color-orange'>fetch</span>(<span> &apos; {baseUrl}/api/albums?limit=2 &apos;</span>)</p>
              <p>.<span className='color-orange'>then</span>(res =&gt; res.json())</p>
              <p>.<span className='color-orange'>then</span>(json=&gt; console.log(<span className='color-orange'>json</span>))</p>
           </div> 
           <p onClick={()=>setShowp4(!showp4)} className={showp4 ? 'active' :''}>{showp4 ? 'hide output' : 'show output'} </p> 
           <div className={showp4 ? 'reveal_output active' :'reveal_output'}>
           {`{`}
                <p>&quot; id &quot; : 1 ,</p>
                <p>&quot; title &quot; : &quot; .... &quot; ,</p> 
                <p>&quot; url &quot; : &quot; ....  &quot;</p>
               {`}`},
               <br />
               <br />
                {`{`}
                <p>&quot; id &quot; : 2 ,</p>
                <p>&quot; title &quot; : &quot; .... &quot; ,</p> 
                <p>&quot; url &quot; : &quot; ....  &quot;</p>
               {`}`}
           </div>
           <div className='reveal_note'><GiBullseye className='icon' />Limit value should be always less than or equal to total carts, Otherwise shows a error.</div>
      </div>
      <div className='component' id='addalbum'>
          <h2>Add new album</h2>
          <div className='reveal_code'>
              <p><span className='color-orange'>fetch</span>(<span> &apos; {baseUrl}/api/products/albums  &apos;</span>,{`{`}
              <br />
              method : {`"`} <span className='color-orange'>POST</span> {`"`} ,
              <br />
              headers : {`{`} <br />{`"`} <span className='color-orange'>Content-Type</span> {`"`} :{`"`} <span className='color-orange'>application/json</span> {`"`}  ,
              <br />
              {`}`} ,
              <br />
              body: JSON.<span className='color-orange'>stringify</span>({`{`}
              <br />
               &nbsp;&nbsp;title : {`'`}...{`'`} , <br />
               &nbsp;&nbsp;url : {`'`}....{`'`}<br />
              {`}`}),
              
              <br />
              {`}`})</p>
              <p>.<span className='color-orange'>then</span>(res =&gt; res.json ( ) )</p>
              <p>.<span className='color-orange'>then</span>(json=&gt; console.log(json))</p>
           </div> 
           <div className='reveal_note'><GiBullseye className='icon' />If you send data like above, It will send you object as output with new id. If id already exists, it gives a error too avoiding id replicas. Nothing is saved in database, so it gives error when you try to access album with new id </div>
           <p onClick={()=>setShowp5(!showp5)} className={showp5 ? 'active' :''}>{showp5 ? 'hide output' : 'show output'} </p> 
           <div className={showp5 ? 'reveal_output active' :'reveal_output'}>
           {`{`}
                <p>&quot; id &quot; : ... ,</p>
                <p>&quot; title &quot; : &quot; .... &quot; ,</p> 
                <p>&quot; url &quot; : &quot; ....  &quot;</p>
               {`}`}
              
           </div>
      </div>
      <div className='component' id='updatealbum'>
          <h2>Update album</h2>
          <div className='reveal_code'>
          <p><span className='color-orange'>fetch</span>(<span> &apos; {baseUrl}/api/products/albums/1 &apos;</span>,{`{`}
            <br />
              method : {`"`} <span className='color-orange'>PUT</span> {`"`} ,
              <br />
              headers : {`{`} <br />{`"`} <span className='color-orange'>Content-Type</span> {`"`} :{`"`} <span className='color-orange'>application/json</span> {`"`}  ,
              <br />
              {`}`} ,
              <br />
              body: JSON.<span className='color-orange'>stringify</span>({`{`}
              <br />
               &nbsp;&nbsp;title : {`'`}...{`'`} , <br />
               &nbsp;&nbsp;url : {`'`}....{`'`}<br />
              <br />
              {`}`}),
              <br />
              <br />
              {`}`})</p>
              <p>.<span className='color-orange'>then</span>(res =&gt; res.json ( ) )</p>
              <p>.<span className='color-orange'>then</span>(json=&gt; console.log(json))</p>

           </div> 
           <div className='reveal_note'><GiBullseye className='icon' />If you send data like above, It will send you object as output with that id. Nothing is updated in database, so it gives original album when you try to asses product with that id </div>
          <div className='reveal_code'>
          <p><span className='color-orange'>fetch</span>(<span> &apos; {baseUrl}/api/products/albums/1 &apos;</span>,{`{`}
              <br />
              <br />
              method : {`"`} <span className='color-orange'>PATCH</span> {`"`} ,
              <br />
              headers : {`{`} <br />{`"`} <span className='color-orange'>Content-Type</span> {`"`} :{`"`} <span className='color-orange'>application/json</span> {`"`}  ,
              <br />
              {`}`} ,
              <br />
              body: JSON.<span className='color-orange'>stringify</span>({`{`}
              <br />
               &nbsp;&nbsp;title : {`'`}...{`'`} , <br />
               &nbsp;&nbsp;url : {`'`}....{`'`}<br />
              {`}`}),
              <br />
              <br />
              {`}`})</p>
              <p>.<span className='color-orange'>then</span>(res =&gt; res.json ( ) )</p>
              <p>.<span className='color-orange'>then</span>(json=&gt; console.log(json))</p>

           </div> 
           <div className='reveal_note'><GiBullseye className='icon' />you can send the parameters which yoy want to update, It will send you object as output with updated parameters. Nothing is saved in database, so it gives original album when you  asses product with that id </div>
          
      </div>
      <div className='component' id='deletealbum'>
          <h2>delete album</h2>
          <div className='reveal_code'>
              <p><span className='color-orange'>fetch</span>(<span> &apos; {baseUrl}/api/albums/1 &apos;</span>,{`{`}
              <br />
              method : {`"`} <span className='color-orange'>DELETE</span> {`"`} ,
              <br />
              {`}`})</p>
              <p>.<span className='color-orange'>then</span>(res =&gt; res.json ( ) )</p>
              <p>.<span className='color-orange'>then</span>(json=&gt; console.log(json))</p>
           </div> 
           <div className='reveal_note'><GiBullseye className='icon' /><p>If you send data like above, It will send a message as <span className='color-orange'>album deleted succesfully</span>. Nothing is updated in database, so it gives original object  when you try to asses album with that id </p></div>
      </div>
      <div className='component' id='albumpics'>
          <h2>get photos from particular album</h2>
          <div className='reveal_code'>
              <p><span className='color-orange'>fetch</span>(<span> &apos; {baseUrl}/api/albums/1/photos &apos;</span>)</p>
              <p>.<span className='color-orange'>then</span>(res =&gt; res.json())</p>
              <p>.<span className='color-orange'>then</span>(json=&gt; console.log( <span className='color-orange'>json</span>) )</p>
           </div> 
           <p onClick={()=>setShowp6(!showp6)} className={showp6 ? 'active' :''}>{showp6 ? 'hide output' : 'show output'} </p> 
           <div className={showp6 ? 'reveal_output active' :'reveal_output'}>
           {`{`}
                <p>&quot; id &quot; : ... ,</p>
                <p>&quot; albumId &quot; : 1 ,</p>
                <p>&quot; title &quot; : &quot; .... &quot; ,</p> 
                <p>&quot; url &quot; : &quot; ....  &quot;</p>
               {`}`},
               <br />
           {`{`}
                <p>&quot; id &quot; : ... ,</p>
                <p>&quot; albumId &quot; : 1 ,</p>
                <p>&quot; title &quot; : &quot; .... &quot; ,</p> 
                <p>&quot; url &quot; : &quot; ....  &quot;</p>
               {`}`}
              
           </div>
      </div>
  </div>
 </>
  )
}

export default AlbumsApi
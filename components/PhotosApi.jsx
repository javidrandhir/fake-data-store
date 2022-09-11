import React, { useState } from 'react'
import { SiNintendogamecube } from "react-icons/si";
import { baseUrl } from './BaseUrl';
import { GiBullseye } from "react-icons/gi";

const PhotosApi = () => {
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
             <a href="#allphotos">get all photos</a>
             <a href="#singlephoto">get single photo</a>
             <a href="#sortingphotos">sorting photos</a>
             <a href="#limitingphotos">limiting photos</a>
             <a href="#addphoto">Add new photo</a>
             <a href="#updatephoto">update photo</a>
             <a href="#deletephoto">delete photo</a>
          </div>
          <div className="docs_right">
            <h1><SiNintendogamecube className='icon' /> Photos api</h1>
              <div className='component' id='allphotos'>
                  <h2>get all photos</h2>
                  <div className='reveal_code'>
                      <p><span className='color-orange'> fetch </span>(<span> &apos; {baseUrl}/api/photos &apos;</span>)</p>
                      <p>.<span className='color-orange'>then</span>(res =&gt; res.json())</p>
                      <p>.<span className='color-orange'>then</span>(json=&gt; console.log(<span className='color-orange'>json</span>))</p>
                   </div> 
                   <p onClick={()=>setShowp1(!showp1)} className={showp1 ? 'active' :''}>{showp1 ? 'hide output' : 'show output'} </p> 
           <div className={showp1 ? 'reveal_output active' :'reveal_output'}>
                       {`{`}
                        <p>&quot; id &quot; : 1 ,</p>
                        <p>&quot; albumId &quot; : &quot; .... &quot; ,</p> 
                        <p>&quot; title &quot; : &quot; .... &quot; ,</p> 
                        <p>&quot; url &quot; : &quot; ....  &quot;</p>
                       {`}`},
                       <br />
                       {`......`}
                       <br />
                       {`{`}
                        <p>&quot; id &quot; : ... ,</p>
                        <p>&quot; albumId &quot; : &quot; .... &quot; ,</p> 
                        <p>&quot; title &quot; : &quot; .... &quot; ,</p> 
                        <p>&quot; url &quot; : &quot; ....  &quot;</p>
                       {`}`},
                   </div>
              </div>
              <div className='component' id='singlephoto'>
                  <h2>get single photo</h2>
                  <div className='reveal_code'>
                      <p><span className='color-orange'>fetch</span>(<span> &apos; {baseUrl}/api/photos/1 &apos;</span>)</p>
                      <p>.<span className='color-orange'>then</span>(res =&gt; res.json())</p>
                      <p>.<span className='color-orange'>then</span>(json=&gt; console.log( <span className='color-orange'>json</span>) )</p>
                   </div> 
                   <p onClick={()=>setShowp2(!showp2)} className={showp2 ? 'active' :''}>{showp2 ? 'hide output' : 'show output'} </p> 
           <div className={showp2 ? 'reveal_output active' :'reveal_output'}>
                   {`{`}
                        <p>&quot; id &quot; : 1 ,</p>
                        <p>&quot; albumId &quot; : &quot; .... &quot; ,</p> 
                        <p>&quot; title &quot; : &quot; .... &quot; ,</p> 
                        <p>&quot; url &quot; : &quot; ....  &quot;</p>
                       {`}`}
                      
                   </div>
              </div>
              <div className='component' id='sortingphotos'>
                  <h2>sorting photos</h2>
                  <div className='reveal_code'>
                      <p><span className='color-orange'>fetch</span>(<span> &apos; {baseUrl}/api/photos?sort=-1 &apos;</span>)</p>
                      <p>.<span className='color-orange'>then</span>(res =&gt; res.json())</p>
                      <p>.<span className='color-orange'>then</span>(json=&gt; console.log(<span className='color-orange'>json</span>))</p>
                   </div> 
                   <p onClick={()=>setShowp3(!showp3)} className={showp3 ? 'active' :''}>{showp3 ? 'hide output' : 'show output'} </p> 
           <div className={showp3 ? 'reveal_output active' :'reveal_output'}>
                   {`{`}
                        <p>&quot; id &quot; : 500 ,</p>
                        <p>&quot; albumId &quot; : &quot; .... &quot; ,</p> 
                        <p>&quot; title &quot; : &quot; .... &quot; ,</p> 
                        <p>&quot; url &quot; : &quot; ....  &quot;</p>
                       {`}`},
                       <br />
                       {`......`}
                       <br />
                       {`{`}
                        <p>&quot; id &quot; : 1 ,</p>
                        <p>&quot; albumId &quot; : &quot; .... &quot; ,</p> 
                        <p>&quot; title &quot; : &quot; .... &quot; ,</p> 
                        <p>&quot; url &quot; : &quot; ....  &quot;</p>
                       {`}`},
                   </div>
                   <div className='reveal_note'><GiBullseye className='icon' />Default value is in ascending order i.e; sort=1, for descending sort=-1</div>
              </div>
              <div className='component' id='limitingphotos'>
                  <h2>Limiting photos</h2>
                  <div className='reveal_code'>
                      <p><span className='color-orange'>fetch</span>(<span> &apos; {baseUrl}/api/photos?limit=2 &apos;</span>)</p>
                      <p>.<span className='color-orange'>then</span>(res =&gt; res.json())</p>
                      <p>.<span className='color-orange'>then</span>(json=&gt; console.log(<span className='color-orange'>json</span>))</p>
                   </div> 
                   <p onClick={()=>setShowp4(!showp4)} className={showp4 ? 'active' :''}>{showp4 ? 'hide output' : 'show output'} </p> 
           <div className={showp4 ? 'reveal_output active' :'reveal_output'}>
                   {`{`}
                        <p>&quot; id &quot; : 1 ,</p>
                        <p>&quot; albumId &quot; : &quot; .... &quot; ,</p> 
                        <p>&quot; title &quot; : &quot; .... &quot; ,</p> 
                        <p>&quot; url &quot; : &quot; ....  &quot;</p>
                       {`}`},
                       <br />
                       <br />
                        {`{`}
                        <p>&quot; id &quot; : 2 ,</p>
                        <p>&quot; albumId &quot; : &quot; .... &quot; ,</p> 
                        <p>&quot; title &quot; : &quot; .... &quot; ,</p> 
                        <p>&quot; url &quot; : &quot; ....  &quot;</p>
                       {`}`}
                   </div>
                   <div className='reveal_note'><GiBullseye className='icon' />Limit value should be always less than or equal to total carts, Otherwise shows a error.</div>
              </div>
              <div className='component' id='addphoto'>
                  <h2>Add new photo</h2>
                  <div className='reveal_code'>
                      <p><span className='color-orange'>fetch</span>(<span> &apos; {baseUrl}/api/products/photos  &apos;</span>,{`{`}
                      <br />
                      method : {`"`} <span className='color-orange'>POST</span> {`"`} ,
                      <br />
                      headers : {`{`} <br />{`"`} <span className='color-orange'>Content-Type</span> {`"`} :{`"`} <span className='color-orange'>application/json</span> {`"`}  ,
                      <br />
                      {`}`} ,
                      <br />
                      body: JSON.<span className='color-orange'>stringify</span>({`{`}
                      <br />
                       &nbsp;&nbsp;albumId : {`'`}...{`'`} , <br />
                       &nbsp;&nbsp;title : {`'`}...{`'`} , <br />
                       &nbsp;&nbsp;url : {`'`}....{`'`}<br />
                      {`}`}),
                      
                      <br />
                      {`}`})</p>
                      <p>.<span className='color-orange'>then</span>(res =&gt; res.json ( ) )</p>
                      <p>.<span className='color-orange'>then</span>(json=&gt; console.log(json))</p>
                   </div> 
                   <div className='reveal_note'><GiBullseye className='icon' />If you send data like above, It will send you object as output with new id. If id already exists, it gives a error too avoiding id replicas. Nothing is saved in database, so it gives error when you try to access photo with new id </div>
                   <p onClick={()=>setShowp5(!showp5)} className={showp5 ? 'active' :''}>{showp5 ? 'hide output' : 'show output'} </p> 
           <div className={showp5 ? 'reveal_output active' :'reveal_output'}>
                   {`{`}
                        <p>&quot; id &quot; : ... ,</p>
                        <p>&quot; albumId &quot; : &quot; .... &quot; ,</p> 
                        <p>&quot; title &quot; : &quot; .... &quot; ,</p> 
                        <p>&quot; url &quot; : &quot; ....  &quot;</p>
                       {`}`}
                      
                   </div>
              </div>
              <div className='component' id='updatephoto'>
                  <h2>Update photo</h2>
                  <div className='reveal_code'>
                  <p><span className='color-orange'>fetch</span>(<span> &apos; {baseUrl}/api/products/photos/1 &apos;</span>,{`{`}
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
                       &nbsp;&nbsp;albumId : {`'`}...{`'`} , <br />
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
                  <p><span className='color-orange'>fetch</span>(<span> &apos; {baseUrl}/api/products/photos/1 &apos;</span>,{`{`}
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
                       &nbsp;&nbsp;albumId : {`'`}...{`'`} , <br />
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
              <div className='component' id='deletephoto'>
                  <h2>delete photo</h2>
                  <div className='reveal_code'>
                      <p><span className='color-orange'>fetch</span>(<span> &apos; {baseUrl}/api/photos/1 &apos;</span>,{`{`}
                      <br />
                      method : {`"`} <span className='color-orange'>DELETE</span> {`"`} ,
                      <br />
                      {`}`})</p>
                      <p>.<span className='color-orange'>then</span>(res =&gt; res.json ( ) )</p>
                      <p>.<span className='color-orange'>then</span>(json=&gt; console.log(json))</p>
                   </div> 
                   <div className='reveal_note'><GiBullseye className='icon' /><p>If you send data like above, It will send a message as <span className='color-orange'>album deleted succesfully</span>. Nothing is updated in database, so it gives original object  when you try to asses album with that id </p></div>
              </div>
            
          </div>
         </>
  )
}

export default PhotosApi
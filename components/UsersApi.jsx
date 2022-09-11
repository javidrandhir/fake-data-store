import React, { useState } from 'react'
import { SiNintendogamecube } from "react-icons/si";
import { baseUrl } from './BaseUrl';
import { GiBullseye } from "react-icons/gi";

const UsersApi = () => {
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
             <h2>user login</h2>
             <a href="#loginuser">login user with token </a>
            <h2>find your need here</h2>
             <a href="#allusers">get all users</a>
             <a href="#singleuser">get single user</a>
             <a href="#sortingusers">sorting users</a>
             <a href="#limitingusers">limiting users</a>
             <a href="#adduser">Add  user</a>
             <a href="#updateuser">update user</a>
             <a href="#deleteuser">delete user</a>
             <h2>nested routes</h2>
             <a href="#fetchusercart">fetch user cart</a>
          </div>
          <div className="docs_right">
            <h1><SiNintendogamecube className='icon' /> users api</h1>
            <div className='component' id='loginuser'>
                  <h2>login user</h2>
                  <div className='reveal_code'>
                      <p><span className='color-orange'>fetch</span>(<span> &apos; {baseUrl}/api/users/login  &apos;</span>,{`{`}
                      <br />
                      method : {`"`} <span className='color-orange'>POST</span> {`"`} ,
                      <br />
                      headers : {`{`} <br />{`"`} <span className='color-orange'>Content-Type</span> {`"`} :{`"`} <span className='color-orange'>application/json</span> {`"`}  ,
                      <br />
                      {`}`} ,
                      <br />
                      body: JSON.<span className='color-orange'>stringify</span>({`{`}
                      <br />
                       &nbsp;&nbsp;email : {`'`}....{`'`}<br />
                       &nbsp;&nbsp;password : {`'`}...{`'`} , <br />
                      {`}`}),
                      
                      <br />
                      {`}`})</p>
                      <p>.<span className='color-orange'>then</span>(res =&gt; res.json ( ) )</p>
                      <p>.<span className='color-orange'>then</span>(json=&gt; console.log(json))</p>
                   </div> 
                   <div className='reveal_note'><GiBullseye className='icon' />If you send data like above, It will send you object as output with new  token and user details. Use only existed users data to login, otherwise it shows error. </div>
                   <p onClick={()=>setShowp1(!showp1)} className={showp1 ? 'active' :''}>{showp1 ? 'hide output' : 'show output'} </p> 
           <div className={showp1 ? 'reveal_output active' :'reveal_output'}>
                   {`{`}
                        <p>&quot; token &quot; : ... ,</p>
                        <p>&quot; user &quot; :{`{`} .... {`}`}</p> 
                       {`}`}
                      
                   </div>
              </div>
              <div className='component' id='allusers'>
                  <h2>get all users</h2>
                  <div className='reveal_code'>
                      <p><span className='color-orange'> fetch </span>(<span> &apos; {baseUrl}/api/users &apos;</span>)</p>
                      <p>.<span className='color-orange'>then</span>(res =&gt; res.json())</p>
                      <p>.<span className='color-orange'>then</span>(json=&gt; console.log(<span className='color-orange'>json</span>))</p>
                   </div> 
                   <p onClick={()=>setShowp2(!showp2)} className={showp2 ? 'active' :''}>{showp2 ? 'hide output' : 'show output'} </p> 
           <div className={showp2 ? 'reveal_output active' :'reveal_output'}>
                       {`{`}
                        <p>&quot; id &quot; : 1 ,</p>
                        <p>&quot; name &quot; : &quot; .... &quot; ,</p> 
                        <p>&quot; password &quot; : &quot; .... &quot; ,</p> 
                        <p>&quot; email &quot; : &quot; .... &quot; ,</p> 
                        <p>&quot; image &quot; : &quot; ....  &quot;</p>
                       {`}`},
                       <br />
                       {`......`}
                       <br />
                       {`{`}
                        <p>&quot; id &quot; : 20 ,</p>
                        <p>&quot; name &quot; : &quot; .... &quot; ,</p> 
                        <p>&quot; password &quot; : &quot; .... &quot; ,</p> 
                        <p>&quot; email &quot; : &quot; .... &quot; ,</p> 
                        <p>&quot; image &quot; : &quot; ....  &quot;</p>
                       {`}`},
                   </div>
              </div>
              <div className='component' id='singleuser'>
                  <h2>get single user</h2>
                  <div className='reveal_code'>
                      <p><span className='color-orange'>fetch</span>(<span> &apos; {baseUrl}/api/users/1 &apos;</span>)</p>
                      <p>.<span className='color-orange'>then</span>(res =&gt; res.json())</p>
                      <p>.<span className='color-orange'>then</span>(json=&gt; console.log( <span className='color-orange'>json</span>) )</p>
                   </div> 
                   <p onClick={()=>setShowp3(!showp3)} className={showp3 ? 'active' :''}>{showp3 ? 'hide output' : 'show output'} </p> 
           <div className={showp3 ? 'reveal_output active' :'reveal_output'}>
                   {`{`}
                        <p>&quot; id &quot; : 20 ,</p>
                        <p>&quot; name &quot; : &quot; .... &quot; ,</p> 
                        <p>&quot; password &quot; : &quot; .... &quot; ,</p> 
                        <p>&quot; email &quot; : &quot; .... &quot; ,</p> 
                        <p>&quot; image &quot; : &quot; ....  &quot;</p>
                       {`}`}
                   </div>
              </div>
              <div className='component' id='sortingusers'>
                  <h2>sorting Users</h2>
                  <div className='reveal_code'>
                      <p><span className='color-orange'>fetch</span>(<span> &apos; {baseUrl}/api/users?sort=-1 &apos;</span>)</p>
                      <p>.<span className='color-orange'>then</span>(res =&gt; res.json())</p>
                      <p>.<span className='color-orange'>then</span>(json=&gt; console.log(<span className='color-orange'>json</span>))</p>
                   </div> 
                   <p onClick={()=>setShowp4(!showp4)} className={showp4 ? 'active' :''}>{showp4 ? 'hide output' : 'show output'} </p> 
           <div className={showp4 ? 'reveal_output active' :'reveal_output'}>
                   {`{`}
                        <p>&quot; id &quot; : 20 ,</p>
                        <p>&quot; name &quot; : &quot; .... &quot; ,</p> 
                        <p>&quot; password &quot; : &quot; .... &quot; ,</p> 
                        <p>&quot; email &quot; : &quot; .... &quot; ,</p> 
                        <p>&quot; image &quot; : &quot; ....  &quot;</p>
                       {`}`}
                       <br />
                       {`......`}
                       <br />
                       {`{`}
                        <p>&quot; id &quot; : 1 ,</p>
                        <p>&quot; name &quot; : &quot; .... &quot; ,</p> 
                        <p>&quot; password &quot; : &quot; .... &quot; ,</p> 
                        <p>&quot; email &quot; : &quot; .... &quot; ,</p> 
                        <p>&quot; image &quot; : &quot; ....  &quot;</p>
                       {`}`}
                   </div>
                   <div className='reveal_note'><GiBullseye className='icon' />Default value is in ascending order i.e; sort=1, for descending sort=-1</div>
              </div>
              <div className='component' id='limitingusers'>
                  <h2>Limiting users</h2>
                  <div className='reveal_code'>
                      <p><span className='color-orange'>fetch</span>(<span> &apos; {baseUrl}/api/users?limit=2 &apos;</span>)</p>
                      <p>.<span className='color-orange'>then</span>(res =&gt; res.json())</p>
                      <p>.<span className='color-orange'>then</span>(json=&gt; console.log(<span className='color-orange'>json</span>))</p>
                   </div> 
                   <p onClick={()=>setShowp5(!showp5)} className={showp5 ? 'active' :''}>{showp5 ? 'hide output' : 'show output'} </p> 
           <div className={showp5 ? 'reveal_output active' :'reveal_output'}>
                   {`{`}
                        <p>&quot; id &quot; : 1 ,</p>
                        <p>&quot; name &quot; : &quot; .... &quot; ,</p> 
                        <p>&quot; password &quot; : &quot; .... &quot; ,</p> 
                        <p>&quot; email &quot; : &quot; .... &quot; ,</p> 
                        <p>&quot; image &quot; : &quot; ....  &quot;</p>
                       {`}`}
                       <br />
                       <br />
                        {`{`}
                        {`{`}
                        <p>&quot; id &quot; : 2 ,</p>
                        <p>&quot; name &quot; : &quot; .... &quot; ,</p> 
                        <p>&quot; password &quot; : &quot; .... &quot; ,</p> 
                        <p>&quot; email &quot; : &quot; .... &quot; ,</p> 
                        <p>&quot; image &quot; : &quot; ....  &quot;</p>
                       {`}`}
                   </div>
                   <div className='reveal_note'><GiBullseye className='icon' />Limit value should be always less than or equal to total carts, Otherwise shows a error.</div>
              </div>
              <div className='component' id='adduser'>
                  <h2>Add new user</h2>
                  <div className='reveal_code'>
                      <p><span className='color-orange'>fetch</span>(<span> &apos; {baseUrl}/api/users  &apos;</span>,{`{`}
                      <br />
                      method : {`"`} <span className='color-orange'>POST</span> {`"`} ,
                      <br />
                      headers : {`{`} <br />{`"`} <span className='color-orange'>Content-Type</span> {`"`} :{`"`} <span className='color-orange'>application/json</span> {`"`}  ,
                      <br />
                      {`}`} ,
                      <br />
                      body: JSON.<span className='color-orange'>stringify</span>({`{`}
                      <br />
                       &nbsp;&nbsp;name : {`'`}...{`'`} , <br />
                       &nbsp;&nbsp;password : {`'`}...{`'`} , <br />
                       &nbsp;&nbsp;email : {`'`}....{`'`}<br />
                       &nbsp;&nbsp;image : {`'`}....{`'`}<br />
                      {`}`}),
                      
                      <br />
                      {`}`})</p>
                      <p>.<span className='color-orange'>then</span>(res =&gt; res.json ( ) )</p>
                      <p>.<span className='color-orange'>then</span>(json=&gt; console.log(json))</p>
                   </div> 
                   <div className='reveal_note'><GiBullseye className='icon' />If you send data like above, It will send you object as output with new id. If id already exists, it gives a error too avoiding id replicas. Nothing is saved in database, so it gives error when you try to access photo with new id </div>
                   <p onClick={()=>setShowp6(!showp6)} className={showp6 ? 'active' :''}>{showp6 ? 'hide output' : 'show output'} </p> 
           <div className={showp6 ? 'reveal_output active' :'reveal_output'}>
                   {`{`}
                        <p>&quot; id &quot; : ... ,</p>
                        <p>&quot; name &quot; : &quot; .... &quot; ,</p> 
                        <p>&quot; password &quot; : &quot; .... &quot; ,</p> 
                        <p>&quot; email &quot; : &quot; .... &quot; ,</p> 
                        <p>&quot; image &quot; : &quot; ....  &quot;</p>
                       {`}`}
                      
                   </div>
              </div>
              <div className='component' id='updateuser'>
                  <h2>Update user</h2>
                  <div className='reveal_code'>
                  <p><span className='color-orange'>fetch</span>(<span> &apos; {baseUrl}/api/users/1 &apos;</span>,{`{`}
                    <br />
                      method : {`"`} <span className='color-orange'>PUT</span> {`"`} ,
                      <br />
                      headers : {`{`} <br />{`"`} <span className='color-orange'>Content-Type</span> {`"`} :{`"`} <span className='color-orange'>application/json</span> {`"`}  ,
                      <br />
                      {`}`} ,
                      <br />
                      body: JSON.<span className='color-orange'>stringify</span>({`{`}
                      <br />
                       &nbsp;&nbsp;name : {`'`}...{`'`} , <br />
                       &nbsp;&nbsp;email : {`'`}...{`'`} , <br />
                       &nbsp;&nbsp;password : {`'`}....{`'`}<br />
                       &nbsp;&nbsp;image : {`'`}....{`'`}<br />
                      <br />
                      {`}`}),
                      <br />
                      <br />
                      {`}`})</p>
                      <p>.<span className='color-orange'>then</span>(res =&gt; res.json ( ) )</p>
                      <p>.<span className='color-orange'>then</span>(json=&gt; console.log(json))</p>

                   </div> 
                   <div className='reveal_note'><GiBullseye className='icon' />If you send data like above, It will send you object as output with that id. Nothing is updated in database, so it gives original user when you try to access user with that id </div>
                  <div className='reveal_code'>
                  <p><span className='color-orange'>fetch</span>(<span> &apos; {baseUrl}/api/users/1 &apos;</span>,{`{`}
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
                       &nbsp;&nbsp;name : {`'`}...{`'`} , <br />
                       &nbsp;&nbsp;email : {`'`}...{`'`} , <br />
                       &nbsp;&nbsp;password : {`'`}....{`'`}<br />
                       &nbsp;&nbsp;image : {`'`}....{`'`}<br />
                      {`}`}),
                      <br />
                      <br />
                      {`}`})</p>
                      <p>.<span className='color-orange'>then</span>(res =&gt; res.json ( ) )</p>
                      <p>.<span className='color-orange'>then</span>(json=&gt; console.log(json))</p>

                   </div> 
                   <div className='reveal_note'><GiBullseye className='icon' />you can send the parameters which yoy want to update, It will send you object as output with updated parameters. Nothing is saved in database, so it gives original user when you  access user with that id </div>
                  
              </div>
              <div className='component' id='deleteuser'>
                  <h2>delete user</h2>
                  <div className='reveal_code'>
                      <p><span className='color-orange'>fetch</span>(<span> &apos; {baseUrl}/api/users/1 &apos;</span>,{`{`}
                      <br />
                      method : {`"`} <span className='color-orange'>DELETE</span> {`"`} ,
                      <br />
                      {`}`})</p>
                      <p>.<span className='color-orange'>then</span>(res =&gt; res.json ( ) )</p>
                      <p>.<span className='color-orange'>then</span>(json=&gt; console.log(json))</p>
                   </div> 
                   <div className='reveal_note'><GiBullseye className='icon' /><p>If you send data like above, It will send a message as <span className='color-orange'>user deleted succesfully</span>. Nothing is updated in database, so it gives original object when you try to access user with that id </p></div>
              </div>
              <div className='component' id='fetchusercart'>
                  <h2>fetch user cart</h2>
                  <div className='reveal_code'>
                  <p><span className='color-orange'>fetch</span>(<span> &apos; {baseUrl}/api/users/1/cart &apos;</span>)</p>
                      <p>.<span className='color-orange'>then</span>(res =&gt; res.json())</p>
                      <p>.<span className='color-orange'>then</span>(json=&gt; console.log( <span className='color-orange'>json</span>) )</p>
                   </div> 
                   <div className='reveal_note'><GiBullseye className='icon' /><p>you can access the cart products too as they are populated. </p></div>
              </div>
            
          </div>
         </>
  )
}

export default UsersApi
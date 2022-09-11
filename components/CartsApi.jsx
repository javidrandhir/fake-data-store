import React, { useState } from 'react'
import { SiNintendogamecube } from "react-icons/si";
import { baseUrl } from './BaseUrl';
import { GiBullseye } from "react-icons/gi";

const CartsApi = () => {
    const [showp1,setShowp1]=useState(false)
    const [showp2,setShowp2]=useState(false)
    const [showp3,setShowp3]=useState(false)
    const [showp4,setShowp4]=useState(false)
    const [showp5,setShowp5]=useState(false)
  return (
    <>
    <div className="docs_left">
    <h2>find your need here</h2>
     <a href="#allcarts">get all carts</a>
     <a href="#singlecart">get single cart</a>
     <a href="#sortingcarts">sorting carts</a>
     <a href="#limitingcarts">limiting carts</a>
     <a href="#addcart">Add new cart</a>
     <a href="#updatecart">update cart</a>
     <a href="#addproduct">Add product to cart</a>
     <a href="#removeproduct">remove product from cart</a>
     <a href="#deletecart">delete cart</a>
  </div>
  <div className="docs_right">
    <h1><SiNintendogamecube className='icon' /> Carts api</h1>
      <div className='component' id='allcarts'>
          <h2>get all carts</h2>
          <div className='reveal_code'>
              <p><span className='color-orange'> fetch </span>(<span> &apos; {baseUrl}/api/carts &apos;</span>)</p>
              <p>.<span className='color-orange'>then</span>(res =&gt; res.json())</p>
              <p>.<span className='color-orange'>then</span>(json=&gt; console.log(<span className='color-orange'>json</span>))</p>
           </div> 
           <p onClick={()=>setShowp1(!showp1)} className={showp1 ? 'active' :''}>{showp1 ? 'hide output' : 'show output'} </p> 
           <div className={showp1 ? 'reveal_output active' :'reveal_output'}>
               {`{`}
                <p>&quot; id &quot; : 1 ,</p>
                <p>&quot; userId &quot; : &quot; .... &quot; ,</p> 
                <p>&quot; products &quot; : {`[`}
                 <br />
                &nbsp; &nbsp; &nbsp;&nbsp; {`{`}<br />
                &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; {`"`} product {`"`} :{`"`}.....{`"`}
                &nbsp; &nbsp; &nbsp;&nbsp; <br />
                &nbsp; &nbsp; &nbsp;&nbsp; {`"`} quantity {`"`} :{`"`}..{`"`}
                &nbsp; &nbsp; &nbsp;&nbsp; <br />{`}`},
                                               {`{`}<br />
                &nbsp; &nbsp; &nbsp;&nbsp; {`"`} product {`"`} :{`"`}.....{`"`}
                &nbsp; &nbsp; &nbsp;&nbsp; <br />
                &nbsp; &nbsp; &nbsp;&nbsp; {`"`} quantity {`"`} :{`"`}..{`"`}
                &nbsp; &nbsp; &nbsp;&nbsp; <br />{`}`}
                 {`]`}
                 </p>
               {`}`},
               <br />
               {`......`}
               <br />
               {`{`}
                <p>&quot; id &quot; : 20 ,</p>
                <p>&quot; userId &quot; : &quot; .... &quot; ,</p> 
                <p>&quot; products &quot; : {`[`}
                 <br />
                &nbsp; &nbsp; &nbsp;&nbsp; {`{`}<br />
                &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; {`"`}product{`"`} :{`"`}.....{`"`}
                &nbsp; &nbsp; &nbsp;&nbsp; <br />
                &nbsp; &nbsp; &nbsp;&nbsp; {`"`}quantity{`"`} :{`"`}..{`"`}
                &nbsp; &nbsp; &nbsp;&nbsp; <br />{`}`},
                                               {`{`}<br />
                &nbsp; &nbsp; &nbsp;&nbsp; {`"`}product{`"`} :{`"`}.....{`"`}
                &nbsp; &nbsp; &nbsp;&nbsp; <br />
                &nbsp; &nbsp; &nbsp;&nbsp; {`"`}quantity{`"`} :{`"`}..{`"`}
                &nbsp; &nbsp; &nbsp;&nbsp; <br />{`}`},
                 {`]`}
                 </p>
               {`}`}
           </div>
           <div className='reveal_note'><GiBullseye className='icon' />The products in the cart are populated so you can use them for mapping too.</div>
      </div>
      <div className='component' id='singlecart'>
          <h2>get single cart</h2>
          <div className='reveal_code'>
              <p><span className='color-orange'>fetch</span>(<span> &apos; {baseUrl}/api/carts/1 &apos;</span>)</p>
              <p>.<span className='color-orange'>then</span>(res =&gt; res.json())</p>
              <p>.<span className='color-orange'>then</span>(json=&gt; console.log( <span className='color-orange'>json</span>) )</p>
           </div> 
           <p onClick={()=>setShowp2(!showp2)} className={showp2 ? 'active' :''}>{showp2 ? 'hide output' : 'show output'} </p> 
           <div className={showp2 ? 'reveal_output active' :'reveal_output'}>
           {`{`}
                <p>&quot; id &quot; : 1 ,</p>
                <p>&quot; userId &quot; : &quot; .... &quot; ,</p> 
                <p>&quot; products &quot; : {`[`}
                 <br />
                &nbsp; &nbsp; &nbsp;&nbsp; {`{`}<br />
                &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; {`"`} product {`"`} :{`"`}.....{`"`}
                &nbsp; &nbsp; &nbsp;&nbsp; <br />
                &nbsp; &nbsp; &nbsp;&nbsp; {`"`} quantity {`"`} :{`"`}..{`"`}
                &nbsp; &nbsp; &nbsp;&nbsp; <br />{`}`},
                                               {`{`}<br />
                &nbsp; &nbsp; &nbsp;&nbsp; {`"`} product {`"`} :{`"`}.....{`"`}
                &nbsp; &nbsp; &nbsp;&nbsp; <br />
                &nbsp; &nbsp; &nbsp;&nbsp; {`"`} quantity {`"`} :{`"`}..{`"`}
                &nbsp; &nbsp; &nbsp;&nbsp; <br />{`}`}
                 {`]`}
                 </p>
               {`}`}
              
           </div>
           <div className='reveal_note'><GiBullseye className='icon' />T    he products in the cart are populated so you can use them for mapping too.</div>
      </div>
      <div className='component' id='sortingcarts'>
          <h2>sorting carts</h2>
          <div className='reveal_code'>
              <p><span className='color-orange'>fetch</span>(<span> &apos; {baseUrl}/api/carts?sort=-1 &apos;</span>)</p>
              <p>.<span className='color-orange'>then</span>(res =&gt; res.json())</p>
              <p>.<span className='color-orange'>then</span>(json=&gt; console.log(<span className='color-orange'>json</span>))</p>
           </div> 
           <p onClick={()=>setShowp3(!showp3)} className={showp3 ? 'active' :''}>{showp3 ? 'hide output' : 'show output'} </p> 
           <div className={showp3 ? 'reveal_output active' :'reveal_output'}>
           {`{`}
                <p>&quot; id &quot; : 20 ,</p>
                <p>&quot; userId &quot; : &quot; .... &quot; ,</p> 
                <p>&quot; products &quot; : {`[`}
                 <br />
                &nbsp; &nbsp; &nbsp;&nbsp; {`{`}<br />
                &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; {`"`} product {`"`} :{`"`}.....{`"`}
                &nbsp; &nbsp; &nbsp;&nbsp; <br />
                &nbsp; &nbsp; &nbsp;&nbsp; {`"`} quantity {`"`} :{`"`}..{`"`}
                &nbsp; &nbsp; &nbsp;&nbsp; <br />{`}`},
                                               {`{`}<br />
                &nbsp; &nbsp; &nbsp;&nbsp; {`"`} product {`"`} :{`"`}.....{`"`}
                &nbsp; &nbsp; &nbsp;&nbsp; <br />
                &nbsp; &nbsp; &nbsp;&nbsp; {`"`} quantity {`"`} :{`"`}..{`"`}
                &nbsp; &nbsp; &nbsp;&nbsp; <br />{`}`}
                 {`]`}
                 </p>
               {`}`},
               <br />
               {`......`}
               <br />
               {`{`}
                <p>&quot; id &quot; : 1 ,</p>
                <p>&quot; userId &quot; : &quot; .... &quot; ,</p> 
                <p>&quot; products &quot; : {`[`}
                 <br />
                &nbsp; &nbsp; &nbsp;&nbsp; {`{`}<br />
                &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; {`"`}product{`"`} :{`"`}.....{`"`}
                &nbsp; &nbsp; &nbsp;&nbsp; <br />
                &nbsp; &nbsp; &nbsp;&nbsp; {`"`}quantity{`"`} :{`"`}..{`"`}
                &nbsp; &nbsp; &nbsp;&nbsp; <br />{`}`},
                                               {`{`}<br />
                &nbsp; &nbsp; &nbsp;&nbsp; {`"`}product{`"`} :{`"`}.....{`"`}
                &nbsp; &nbsp; &nbsp;&nbsp; <br />
                &nbsp; &nbsp; &nbsp;&nbsp; {`"`}quantity{`"`} :{`"`}..{`"`}
                &nbsp; &nbsp; &nbsp;&nbsp; <br />{`}`},
                 {`]`}
                 </p>
               {`}`}
           </div>
           <div className='reveal_note'><GiBullseye className='icon' />Default value is in ascending order i.e; sort=1, for descending sort=-1</div>
      </div>
      <div className='component' id='limitingcarts'>
          <h2>Limiting carts</h2>
          <div className='reveal_code'>
              <p><span className='color-orange'>fetch</span>(<span> &apos; {baseUrl}/api/carts?limit=2 &apos;</span>)</p>
              <p>.<span className='color-orange'>then</span>(res =&gt; res.json())</p>
              <p>.<span className='color-orange'>then</span>(json=&gt; console.log(<span className='color-orange'>json</span>))</p>
           </div> 
           <p onClick={()=>setShowp4(!showp4)} className={showp4 ? 'active' :''}>{showp4 ? 'hide output' : 'show output'} </p> 
           <div className={showp4 ? 'reveal_output active' :'reveal_output'}>
           {`{`}
                <p>&quot; id &quot; : 1 ,</p>
                <p>&quot; userId &quot; : &quot; .... &quot; ,</p> 
                <p>&quot; products &quot; : {`[`}
                 <br />
                &nbsp; &nbsp; &nbsp;&nbsp; {`{`}<br />
                &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; {`"`} product {`"`} :{`"`}.....{`"`}
                &nbsp; &nbsp; &nbsp;&nbsp; <br />
                &nbsp; &nbsp; &nbsp;&nbsp; {`"`} quantity {`"`} :{`"`}..{`"`}
                &nbsp; &nbsp; &nbsp;&nbsp; <br />{`}`},
                                               {`{`}<br />
                &nbsp; &nbsp; &nbsp;&nbsp; {`"`} product {`"`} :{`"`}.....{`"`}
                &nbsp; &nbsp; &nbsp;&nbsp; <br />
                &nbsp; &nbsp; &nbsp;&nbsp; {`"`} quantity {`"`} :{`"`}..{`"`}
                &nbsp; &nbsp; &nbsp;&nbsp; <br />{`}`}
                 {`]`}
                 </p>
               {`}`},
               <br />
               <br />
               {`{`}
                <p>&quot; id &quot; : 2 ,</p>
                <p>&quot; userId &quot; : &quot; .... &quot; ,</p> 
                <p>&quot; products &quot; : {`[`}
                 <br />
                &nbsp; &nbsp; &nbsp;&nbsp; {`{`}<br />
                &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; {`"`}product{`"`} :{`"`}.....{`"`}
                &nbsp; &nbsp; &nbsp;&nbsp; <br />
                &nbsp; &nbsp; &nbsp;&nbsp; {`"`}quantity{`"`} :{`"`}..{`"`}
                &nbsp; &nbsp; &nbsp;&nbsp; <br />{`}`},
                                               {`{`}<br />
                &nbsp; &nbsp; &nbsp;&nbsp; {`"`}product{`"`} :{`"`}.....{`"`}
                &nbsp; &nbsp; &nbsp;&nbsp; <br />
                &nbsp; &nbsp; &nbsp;&nbsp; {`"`}quantity{`"`} :{`"`}..{`"`}
                &nbsp; &nbsp; &nbsp;&nbsp; <br />{`}`},
                 {`]`}
                 </p>
               {`}`}  
           </div>
           <div className='reveal_note'><GiBullseye className='icon' />Limit value should be always less than or equal to total carts, Otherwise shows a error.</div>
      </div>
      <div className='component' id='addcart'>
          <h2>Add new cart</h2>
          <div className='reveal_code'>
              <p><span className='color-orange'>fetch</span>(<span> &apos; {baseUrl}/api/products/carts/create &apos;</span>,{`{`}
              <br />
              method : {`"`} <span className='color-orange'>POST</span> {`"`} ,
              <br />
              headers : {`{`} <br />{`"`} <span className='color-orange'>Content-Type</span> {`"`} :{`"`} <span className='color-orange'>application/json</span> {`"`}  ,
              <br />
              {`}`} ,
              <br />
              body: JSON.<span className='color-orange'>stringify</span>({`{`}
              <br />
               &nbsp;&nbsp;userID : {`'`}...{`'`} , <br />
               &nbsp;&nbsp;products : {`[`}
               <br/>
               &nbsp;&nbsp; &nbsp;&nbsp; {`{`}
               <br/>
               &nbsp;&nbsp; &nbsp;&nbsp;  &nbsp;&nbsp; &nbsp;&nbsp;  &nbsp;&nbsp; &nbsp;&nbsp; {`"`}product{`"`} : {`"`}any product Id of product{ `"`} ,<br />
               &nbsp;&nbsp; &nbsp;&nbsp;  &nbsp;&nbsp; &nbsp;&nbsp;  &nbsp;&nbsp; &nbsp;&nbsp;{`"`}quantity{`"`} : {`"`}2{ `"`} ,<br />

               &nbsp;&nbsp; &nbsp;&nbsp;{`}`}
               <br/>
               {`]`}<br />
              <br />
              {`}`}),
              <br />
              <br />
              {`}`})</p>
              <p>.<span className='color-orange'>then</span>(res =&gt; res.json ( ) )</p>
              <p>.<span className='color-orange'>then</span>(json=&gt; console.log(json))</p>
           </div> 
           <div className='reveal_note'><GiBullseye className='icon' />If you send data like above, It will send you object as output with new id. If id already exists, it gives a error too avoiding id replicas. Nothing is saved in database, so it gives error when you try to asses product with new id </div>
           <p onClick={()=>setShowp5(!showp5)} className={showp5 ? 'active' :''}>{showp5 ? 'hide output' : 'show output'} </p> 
           <div className={showp5 ? 'reveal_output active' :'reveal_output'}>
           {`{`}
                <p>&quot; id &quot; : .. ,</p>
                <p>&quot; userId &quot; : &quot; .... &quot; ,</p> 
                <p>&quot; products &quot; : {`[`}
                 <br />
                &nbsp; &nbsp; &nbsp;&nbsp; {`{`}<br />
                &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; {`"`} product {`"`} :{`"`}.....{`"`}
                &nbsp; &nbsp; &nbsp;&nbsp; <br />
                &nbsp; &nbsp; &nbsp;&nbsp; {`"`} quantity {`"`} :{`"`}..{`"`}
                &nbsp; &nbsp; &nbsp;&nbsp; <br />{`}`},
                                               {`{`}<br />
                &nbsp; &nbsp; &nbsp;&nbsp; {`"`} product {`"`} :{`"`}.....{`"`}
                &nbsp; &nbsp; &nbsp;&nbsp; <br />
                &nbsp; &nbsp; &nbsp;&nbsp; {`"`} quantity {`"`} :{`"`}..{`"`}
                &nbsp; &nbsp; &nbsp;&nbsp; <br />{`}`}
                 {`]`}
                 </p>
               {`}`}
              
           </div>
      </div>
      <div className='component' id='updatecart'>
          <h2>Update cart</h2>
          <div className='reveal_code'>
          <p><span className='color-orange'>fetch</span>(<span> &apos; {baseUrl}/api/products/carts/create &apos;</span>,{`{`}
            <br />
              method : {`"`} <span className='color-orange'>PUT</span> {`"`} ,
              <br />
              headers : {`{`} <br />{`"`} <span className='color-orange'>Content-Type</span> {`"`} :{`"`} <span className='color-orange'>application/json</span> {`"`}  ,
              <br />
              {`}`} ,
              <br />
              body: JSON.<span className='color-orange'>stringify</span>({`{`}
              <br />
               &nbsp;&nbsp;userID : {`'`}...{`'`} , <br />
               &nbsp;&nbsp;products : {`[`}
               <br/>
               &nbsp;&nbsp; &nbsp;&nbsp; {`{`}
               <br/>
               &nbsp;&nbsp; &nbsp;&nbsp;  &nbsp;&nbsp; &nbsp;&nbsp;  &nbsp;&nbsp; &nbsp;&nbsp; {`"`}product{`"`} : {`"`}any product Id of product{ `"`} ,<br />
               &nbsp;&nbsp; &nbsp;&nbsp;  &nbsp;&nbsp; &nbsp;&nbsp;  &nbsp;&nbsp; &nbsp;&nbsp;{`"`}quantity{`"`} : {`"`}2{ `"`} ,<br />

               &nbsp;&nbsp; &nbsp;&nbsp;{`}`}
               <br/>
               {`]`}<br />
              <br />
              {`}`}),
              <br />
              <br />
              {`}`})</p>
              <p>.<span className='color-orange'>then</span>(res =&gt; res.json ( ) )</p>
              <p>.<span className='color-orange'>then</span>(json=&gt; console.log(json))</p>

           </div> 
           <div className='reveal_note'><GiBullseye className='icon' />If you send data like above, It will send you object as output with that id. Nothing is updated in database, so it gives original cart when you try to asses product with that id </div>
          <div className='reveal_code'>
          <p><span className='color-orange'>fetch</span>(<span> &apos; {baseUrl}/api/products/carts/create &apos;</span>,{`{`}
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
               &nbsp;&nbsp;userID : {`'`}...{`'`} , <br />
               &nbsp;&nbsp;products : {`[`}
               <br/>
               &nbsp;&nbsp; &nbsp;&nbsp; {`{`}
               <br/>
               &nbsp;&nbsp; &nbsp;&nbsp;  &nbsp;&nbsp; &nbsp;&nbsp;  &nbsp;&nbsp; &nbsp;&nbsp; {`"`}product{`"`} : {`"`}any product Id of product{ `"`} ,<br />
               &nbsp;&nbsp; &nbsp;&nbsp;  &nbsp;&nbsp; &nbsp;&nbsp;  &nbsp;&nbsp; &nbsp;&nbsp;{`"`}quantity{`"`} : {`"`}2{ `"`} ,<br />

               &nbsp;&nbsp; &nbsp;&nbsp;{`}`}
               <br/>
               {`]`}<br />
              <br />
              {`}`}),
              <br />
              <br />
              {`}`})</p>
              <p>.<span className='color-orange'>then</span>(res =&gt; res.json ( ) )</p>
              <p>.<span className='color-orange'>then</span>(json=&gt; console.log(json))</p>

           </div> 
           <div className='reveal_note'><GiBullseye className='icon' />you can send the parameters which yoy want to update, It will send you object as output with updated parameters. Nothing is saved in database, so it gives original cart when you  asses product with that id </div>
          
      </div>
      <div className='component' id='addproduct'>
          <h2>Add product to cart</h2>
          <div className='reveal_code'>
          <p><span className='color-orange'>fetch</span>(<span> &apos; {baseUrl}/api/carts/1/addtocart &apos;</span>,{`{`}
            <br />
              method : {`"`} <span className='color-orange'>POST</span> {`"`} ,
              <br />
              headers : {`{`} <br />{`"`} <span className='color-orange'>Content-Type</span> {`"`} :{`"`} <span className='color-orange'>application/json</span> {`"`}  ,
              <br />
              {`}`} ,
              <br />
              body: JSON.<span className='color-orange'>stringify</span>({`{`}
              <br />
               &nbsp;&nbsp;productId : {`'`}...{`'`} , <br />
               &nbsp;&nbsp;quantity : ...,
              <br />
              <br />
              {`}`})</p>
              <p>.<span className='color-orange'>then</span>(res =&gt; res.json ( ) )</p>
              <p>.<span className='color-orange'>then</span>(json=&gt; console.log(json))</p>

           </div> 
           <div className='reveal_note'><GiBullseye className='icon' />If you send data like above, It will send you object as output with that product quantity increased if  alreday product exist in cart otherwise product is added. Nothing is updated in database, so it gives original cart when you try to access cart with that id </div>
      </div>
      <div className='component' id='removeproduct'>
          <h2>remove product from cart</h2>
          <div className='reveal_code'>
          <p><span className='color-orange'>fetch</span>(<span> &apos; {baseUrl}/api/carts/1/removefromcart &apos;</span>,{`{`}
            <br />
              method : {`"`} <span className='color-orange'>POST</span> {`"`} ,
              <br />
              headers : {`{`} <br />{`"`} <span className='color-orange'>Content-Type</span> {`"`} :{`"`} <span className='color-orange'>application/json</span> {`"`}  ,
              <br />
              {`}`} ,
              <br />
              body: JSON.<span className='color-orange'>stringify</span>({`{`}
              <br />
               &nbsp;&nbsp;productId : {`'`}...{`'`} 
              <br />
              {`}`})</p>
              <p>.<span className='color-orange'>then</span>(res =&gt; res.json ( ) )</p>
              <p>.<span className='color-orange'>then</span>(json=&gt; console.log(json))</p>

           </div> 
           <div className='reveal_note'><GiBullseye className='icon' />If you send data like above, It will send you object as output with that product quantity decreased if product quantity is &gt;1 or removed if == 1 in cart . Nothing is updated in database, so it gives original cart when you try to access cart with that id </div>
      </div>
      <div className='component' id='deletecart'>
          <h2>delete product</h2>
          <div className='reveal_code'>
              <p><span className='color-orange'>fetch</span>(<span> &apos; {baseUrl}/api/carts/1 &apos;</span>,{`{`}
              <br />
              method : {`"`} <span className='color-orange'>DELETE</span> {`"`} ,
              <br />
              {`}`})</p>
              <p>.<span className='color-orange'>then</span>(res =&gt; res.json ( ) )</p>
              <p>.<span className='color-orange'>then</span>(json=&gt; console.log(json))</p>
           </div> 
           <div className='reveal_note'><GiBullseye className='icon' /><p>If you send data like above, It will send a message as <span className='color-orange'>cart deleted succesfully</span>. Nothing is updated in database, so it gives original object  when you try to asses product with that id </p></div>
      </div>
      
  </div>
 </>
  )
}

export default CartsApi
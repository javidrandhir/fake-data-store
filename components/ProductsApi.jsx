import React, { useState } from 'react'
import { baseUrl } from './BaseUrl';
import { GiBullseye } from "react-icons/gi";
import { SiNintendogamecube } from "react-icons/si";

const ProductsApi = () => {
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
     <a href="#allproducts">get all products</a>
     <a href="#singleProduct">get single product</a>
     <a href="#sortingProducts">sorting products</a>
     <a href="#limitingproducts">limiting products</a>
     <a href="#allcategories">All categories</a>
     <a href="#categoryproducts"> products from category</a>
     <a href="#addproduct">Add new product</a>
     <a href="#updateproduct">update a product</a>
     <a href="#deleteproduct">delete a product</a>
  </div>
  <div className="docs_right">
    <h1><SiNintendogamecube className='icon' /> products api</h1>
      <div className='component' id='allproducts'>
          <h2>get all products</h2>
          <div className='reveal_code'>
              <p><span className='color-orange'> fetch </span>(<span> &apos; {baseUrl}/api/products &apos;</span>)</p>
              <p>.<span className='color-orange'>then</span>(res =&gt; res.json())</p>
              <p>.<span className='color-orange'>then</span>(json=&gt; console.log(<span className='color-orange'>json</span>))</p>
           </div> 
           <p onClick={()=>setShowp1(!showp1)} className={showp1 ? 'active' :''}>{showp1 ? 'hide output' : 'show output'} </p> 
           <div className={showp1 ? 'reveal_output active' :'reveal_output'}>
               {`{`}
                <p>&quot; id &quot; : 1</p>
                <p>&quot; name &quot; : &quot; samsung mobile &quot;</p>
                <p>&quot; description &quot; : &quot; Explore full range ... &quot;</p>
                <p>&quot; image1 &quot; : &quot; .... &quot;</p>
                <p>&quot; image2 &quot; : &quot; .... &quot;</p>
                <p>&quot; image3 &quot; : &quot; .... &quot;</p>
                <p>&quot; image4 &quot; : &quot; .... &quot;</p>
                <p>&quot; price &quot; : &quot; ₹ .... &quot;</p>
                <p>&quot; category &quot; : &quot; .... &quot;</p>
                <p>&quot; rating &quot; : &quot; .... &quot;</p>
                <p>&quot; stock &quot; : &quot; .... &quot;</p>
                <p>&quot; model &quot; : &quot; .... &quot;</p>
               {`}`}
               <br />
               {`......`}
               <br />
               {`{`}
                <p>&quot; id &quot; : 20</p>
                <p>&quot; name &quot; : &quot; earbuds &quot;</p>
                <p>&quot; description &quot; : &quot; Explore full range ... &quot;</p>
                <p>&quot; image1 &quot; : &quot; .... &quot;</p>
                <p>&quot; image2 &quot; : &quot; .... &quot;</p>
                <p>&quot; image3 &quot; : &quot; .... &quot;</p>
                <p>&quot; image4 &quot; : &quot; .... &quot;</p>
                <p>&quot; price &quot; : &quot; ₹ .... &quot;</p>
                <p>&quot; category &quot; : &quot; .... &quot;</p>
                <p>&quot; rating &quot; : &quot; .... &quot;</p>
                <p>&quot; stock &quot; : &quot; .... &quot;</p>
                <p>&quot; model &quot; : &quot; .... &quot;</p>
               {`}`}
           </div>
      </div>
      <div className='component' id='singleProduct'>
          <h2>get single products</h2>
          <div className='reveal_code'>
              <p><span className='color-orange'>fetch</span>(<span> &apos; {baseUrl}/api/products/1 &apos;</span>)</p>
              <p>.<span className='color-orange'>then</span>(res =&gt; res.json())</p>
              <p>.<span className='color-orange'>then</span>(json=&gt; console.log(<span className='color-orange'>json</span>))</p>
           </div> 
           <p onClick={()=>setShowp2(!showp2)} className={showp2 ? 'active' :''}>{showp2 ? 'hide output' : 'show output'} </p> 
           <div className={showp2 ? 'reveal_output active' :'reveal_output'}>
               {`{`}
                <p>&quot; id &quot; : 1</p>
                <p>&quot; name &quot; : &quot; samsung mobile &quot;</p>
                <p>&quot; description &quot; : &quot; Explore full range ... &quot;</p>
                <p>&quot; image1 &quot; : &quot; .... &quot;</p>
                <p>&quot; image2 &quot; : &quot; .... &quot;</p>
                <p>&quot; image3 &quot; : &quot; .... &quot;</p>
                <p>&quot; image4 &quot; : &quot; .... &quot;</p>
                <p>&quot; price &quot; : &quot; ₹ .... &quot;</p>
                <p>&quot; category &quot; : &quot; .... &quot;</p>
                <p>&quot; rating &quot; : &quot; .... &quot;</p>
                <p>&quot; stock &quot; : &quot; .... &quot;</p>
                <p>&quot; model &quot; : &quot; .... &quot;</p>
               {`}`}
              
           </div>
      </div>
      <div className='component' id='sortingProducts'>
          <h2>sorting products</h2>
          <div className='reveal_code'>
              <p><span className='color-orange'>fetch</span>(<span> &apos; {baseUrl}/api/products?sort=-1 &apos;</span>)</p>
              <p>.<span className='color-orange'>then</span>(res =&gt; res.json())</p>
              <p>.<span className='color-orange'>then</span>(json=&gt; console.log(<span className='color-orange'>json</span>))</p>
           </div> 
           <p onClick={()=>setShowp3(!showp3)} className={showp3 ? 'active' :''}>{showp3 ? 'hide output' : 'show output'} </p> 
           <div className={showp3 ? 'reveal_output active' :'reveal_output'}>
               {`{`}
                <p>&quot; id &quot; : 50</p>
                <p>&quot; name &quot; : &quot; .... &quot;</p>
                <p>&quot; description &quot; : &quot; Explore full range ... &quot;</p>
                <p>&quot; image1 &quot; : &quot; .... &quot;</p>
                <p>&quot; image2 &quot; : &quot; .... &quot;</p>
                <p>&quot; image3 &quot; : &quot; .... &quot;</p>
                <p>&quot; image4 &quot; : &quot; .... &quot;</p>
                <p>&quot; price &quot; : &quot; ₹ .... &quot;</p>
                <p>&quot; category &quot; : &quot; .... &quot;</p>
                <p>&quot; rating &quot; : &quot; .... &quot;</p>
                <p>&quot; stock &quot; : &quot; .... &quot;</p>
                <p>&quot; model &quot; : &quot; .... &quot;</p>
               {`}`}
               <br />
               {`....`}
               <br />
               {`{`}
                <p>&quot; id &quot; : 1</p>
                <p>&quot; name &quot; : &quot; samsung mobile &quot;</p>
                <p>&quot; description &quot; : &quot; Explore full range ... &quot;</p>
                <p>&quot; image1 &quot; : &quot; .... &quot;</p>
                <p>&quot; image2 &quot; : &quot; .... &quot;</p>
                <p>&quot; image3 &quot; : &quot; .... &quot;</p>
                <p>&quot; image4 &quot; : &quot; .... &quot;</p>
                <p>&quot; price &quot; : &quot; ₹ .... &quot;</p>
                <p>&quot; category &quot; : &quot; .... &quot;</p>
                <p>&quot; rating &quot; : &quot; .... &quot;</p>
                <p>&quot; stock &quot; : &quot; .... &quot;</p>
                <p>&quot; model &quot; : &quot; .... &quot;</p>
               {`}`}
              
           </div>
           <div className='reveal_note'><GiBullseye className='icon' />Default value is in ascending order i.e; sort=1, for descending sort=-1</div>
      </div>
      <div className='component' id='limitingproducts'>
          <h2>Limiting products</h2>
          <div className='reveal_code'>
              <p><span className='color-orange'>fetch</span>(<span> &apos; {baseUrl}/api/products?limit=2 &apos;</span>)</p>
              <p>.<span className='color-orange'>then</span>(res =&gt; res.json())</p>
              <p>.<span className='color-orange'>then</span>(json=&gt; console.log(json))</p>
           </div> 
           <p onClick={()=>setShowp4(!showp4)} className={showp4 ? 'active' :''}>{showp4 ? 'hide output' : 'show output'} </p> 
           <div className={showp4 ? 'reveal_output active' :'reveal_output'}>
               {`{`}
                <p>&quot; id &quot; : 50</p>
                <p>&quot; name &quot; : &quot; .... &quot;</p>
                <p>&quot; description &quot; : &quot; Explore full range ... &quot;</p>
                <p>&quot; image1 &quot; : &quot; .... &quot;</p>
                <p>&quot; image2 &quot; : &quot; .... &quot;</p>
                <p>&quot; image3 &quot; : &quot; .... &quot;</p>
                <p>&quot; image4 &quot; : &quot; .... &quot;</p>
                <p>&quot; price &quot; : &quot; ₹ .... &quot;</p>
                <p>&quot; category &quot; : &quot; .... &quot;</p>
                <p>&quot; rating &quot; : &quot; .... &quot;</p>
                <p>&quot; stock &quot; : &quot; .... &quot;</p>
                <p>&quot; model &quot; : &quot; .... &quot;</p>
               {`}`},
               <br />
               {`{`}
                <p>&quot; id &quot; : 2</p>
                <p>&quot; name &quot; : &quot; samsung mobile &quot;</p>
                <p>&quot; description &quot; : &quot; Explore full range ... &quot;</p>
                <p>&quot; image1 &quot; : &quot; .... &quot;</p>
                <p>&quot; image2 &quot; : &quot; .... &quot;</p>
                <p>&quot; image3 &quot; : &quot; .... &quot;</p>
                <p>&quot; image4 &quot; : &quot; .... &quot;</p>
                <p>&quot; price &quot; : &quot; ₹ .... &quot;</p>
                <p>&quot; category &quot; : &quot; .... &quot;</p>
                <p>&quot; rating &quot; : &quot; .... &quot;</p>
                <p>&quot; stock &quot; : &quot; .... &quot;</p>
                <p>&quot; model &quot; : &quot; .... &quot;</p>
               {`}`}
              
           </div>
           <div className='reveal_note'><GiBullseye className='icon' />Limit value should be always less than or equal to total products,Otherwise shows a error.</div>
      </div>
      <div className='component' id='allcategories'>
          <h2>All Categories</h2>
          <div className='reveal_code'>
              <p><span className='color-orange'>fetch</span>(<span> &apos; {baseUrl}/api/products/categories &apos;</span>)</p>
              <p>.<span className='color-orange'>then</span>(res =&gt; res.json())</p>
              <p>.<span className='color-orange'>then</span>(json=&gt; console.log(<span className='color-orange'>json</span>))</p>
           </div> 
           <p onClick={()=>setShowp5(!showp5)} className={showp5 ? 'active' :''}>{showp5 ? 'hide output' : 'show output'} </p> 
           <div className={showp5 ? 'reveal_output active' :'reveal_output'}>
               {`[`}
                <p>&quot; mobiles &quot; ,</p>
                <p>&quot; watches &quot; ,</p>
                <p>&quot; dress &quot; ,</p>
                <p>&quot; ... &quot;</p>
               {`]`}
               <br />
              
              
           </div>
      </div>
      <div className='component' id='categoryproducts'>
          <h2>products from category</h2>
          <div className='reveal_code'>
              <p><span className='color-orange'>fetch</span>(<span> &apos; {baseUrl}/api/products/categories/mobiles &apos;</span>)</p>
              <p>.<span className='color-orange'>then</span>(res =&gt; res.json())</p>
              <p>.<span className='color-orange'>then</span>(json=&gt; console.log(<span className='color-orange'>json</span>))</p>
           </div> 
           <p onClick={()=>setShowp6(!showp6)} className={showp6 ? 'active' :''}>{showp6 ? 'hide output' : 'show output'} </p> 
           <div className={showp6 ? 'reveal_output active' :'reveal_output'}>
               {`{`}
                <p>&quot; id &quot; : 2 ,</p>
                <p>&quot; name &quot; : &quot; .... &quot;,</p>
                <p>&quot; description &quot; : &quot; ... &quot;,</p>
                <p>&quot; image1 &quot; : &quot; .... &quot;,</p>
                <p>&quot; image2 &quot; : &quot; .... &quot;,</p>
                <p>&quot; image3 &quot; : &quot; .... &quot;,</p>
                <p>&quot; image4 &quot; : &quot; .... &quot;,</p>
                <p>&quot; price &quot; : &quot; ₹ .... &quot;,</p>
                <p>&quot; category &quot; : &quot; basket &quot;,</p>
                <p>&quot; rating &quot; : &quot; .... &quot;,</p>
                <p>&quot; stock &quot; : &quot; .... &quot;,</p>
                <p>&quot; model &quot; : &quot; .... &quot;</p>
               {`}`},
               <br />
               {`{`}
                <p>&quot; id &quot; : 5 ,</p>
                <p>&quot; name &quot; : &quot; ... &quot;,</p>
                <p>&quot; description &quot; : &quot;  ... &quot;,</p>
                <p>&quot; image1 &quot; : &quot; .... &quot;,</p>
                <p>&quot; image2 &quot; : &quot; .... &quot;,</p>
                <p>&quot; image3 &quot; : &quot; .... &quot;,</p>
                <p>&quot; image4 &quot; : &quot; .... &quot;,</p>
                <p>&quot; price &quot; : &quot; ₹ .... &quot;,</p>
                <p>&quot; category &quot; : &quot; basket &quot;,</p>
                <p>&quot; rating &quot; : &quot; .... &quot;,</p>
                <p>&quot; stock &quot; : &quot; .... &quot;,</p>
                <p>&quot; model &quot; : &quot; .... &quot;</p>
               {`}`}
              
           </div>
           <div className='reveal_note'><GiBullseye className='icon' />If the category is not in list, it shows empty array .</div>
      </div>
      <div className='component' id='addproduct'>
          <h2>Add new product</h2>
          <div className='reveal_code'>
              <p><span className='color-orange'>fetch</span>(<span> &apos; {baseUrl}/api/products &apos;</span>,{`{`}
              <br />
              <br />
              method : {`"`} <span className='color-orange'>POST</span> {`"`} ,
              <br />
              headers : {`{`} <br />{`"`} <span className='color-orange'>Content-Type</span> {`"`} :{`"`} <span className='color-orange'>application/json</span> {`"`}  ,
              <br />
              {`}`} ,
              <br />
              body: JSON.<span className='color-orange'>stringify</span>({`{`}
              <br />
               &nbsp;&nbsp;name:{`'`}product1{`'`} , <br />
               &nbsp;&nbsp;description:{`'`}lorem ipsum content{`'`} ,  <br />
               &nbsp;&nbsp;image1:{`'`}https://image1.png{`'`} , <br />
               &nbsp;&nbsp;image2:{`'`}https://image2.png{`'`} , <br />
               &nbsp;&nbsp;image3:{`'`}https://image3.png{`'`} , <br />
               &nbsp;&nbsp;image4:{`'`}https://image4.png{`'`} , <br />
               &nbsp;&nbsp;price:150 , <br />
               &nbsp;&nbsp;category:{`'`}radio{`'`} , <br />
               &nbsp;&nbsp;rating : 5 , <br />
               &nbsp;&nbsp;stick : 4 , <br />
               &nbsp;&nbsp;model : {`'`}KAMY/15T{`'`}
              <br />
              {`}`}),
              <br />
              <br />
              {`}`})</p>
              <p>.<span className='color-orange'>then</span>(res =&gt; res.json ( ) )</p>
              <p>.<span className='color-orange'>then</span>(json=&gt; console.log(json))</p>
           </div> 
           <div className='reveal_note'><GiBullseye className='icon' />If you send data like above, It will send you object as output with new id. Nothing is saved in database, so it gives error when you try to asses product with new id </div>
           <p onClick={()=>setShowp7(!showp7)} className={showp7 ? 'active' :''}>{showp7 ? 'hide output' : 'show output'} </p> 
           <div className={showp7 ? 'reveal_output active' :'reveal_output'}>
               {`{`}
                <p>&quot; id &quot; : 52 ,</p>
                <p>&quot; name &quot; : &quot; .... &quot;,</p>
                <p>&quot; description &quot; : &quot; ... &quot;,</p>
                <p>&quot; image1 &quot; : &quot; .... &quot;,</p>
                <p>&quot; image2 &quot; : &quot; .... &quot;,</p>
                <p>&quot; image3 &quot; : &quot; .... &quot;,</p>
                <p>&quot; image4 &quot; : &quot; .... &quot;,</p>
                <p>&quot; price &quot; : &quot; ₹ .... &quot;,</p>
                <p>&quot; category &quot; : &quot; ... &quot;,</p>
                <p>&quot; rating &quot; : &quot; .... &quot;,</p>
                <p>&quot; stock &quot; : &quot; .... &quot;,</p>
                <p>&quot; model &quot; : &quot; .... &quot;</p>
               {`}`}
              
           </div>
      </div>
      <div className='component' id='updateproduct'>
          <h2>Update product</h2>
          <div className='reveal_code'>
              <p><span className='color-orange'>fetch</span>(<span> &apos; {baseUrl}/api/products/1 &apos;</span>,{`{`}
              <br />
              <br />
              method : {`"`} <span className='color-orange'>PUT</span> {`"`} ,
              <br />
              headers : {`{`} <br />{`"`} <span className='color-orange'>Content-Type</span> {`"`} :{`"`} <span className='color-orange'>application/json</span> {`"`}  ,
              <br />
              {`}`} ,
              <br />
              body: JSON.<span className='color-orange'>stringify</span>({`{`}
              <br />
               &nbsp;&nbsp;name:{`'`}product1{`'`} , <br />
               &nbsp;&nbsp;description:{`'`}lorem ipsum content{`'`} ,  <br />
               &nbsp;&nbsp;image1:{`'`}https://image1.png{`'`} , <br />
               &nbsp;&nbsp;image2:{`'`}https://image2.png{`'`} , <br />
               &nbsp;&nbsp;image3:{`'`}https://image3.png{`'`} , <br />
               &nbsp;&nbsp;image4:{`'`}https://image4.png{`'`} , <br />
               &nbsp;&nbsp;price:150 , <br />
               &nbsp;&nbsp;category:{`'`}radio{`'`} , <br />
               &nbsp;&nbsp;rating : 5 , <br />
               &nbsp;&nbsp;stick : 4 , <br />
               &nbsp;&nbsp;model : {`'`}KAMY/15T{`'`}
              <br />
              {`}`}),
              <br />
              <br />
              {`}`})</p>
              <p>.<span className='color-orange'>then</span>(res =&gt; res.json ( ) )</p>
              <p>.<span className='color-orange'>then</span>(json=&gt; console.log(json))</p>
           </div> 
           <div className='reveal_note'><GiBullseye className='icon' />If you send data like above, It will send you object as output with that id. Nothing is updated in database, so it gives original object  when you try to asses product with that id </div>
          <div className='reveal_code'>
              <p><span className='color-orange'>fetch</span>(<span> &apos; {baseUrl}/api/products/1 &apos;</span>,{`{`}
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
               &nbsp;&nbsp;name:{`'`}product1{`'`} , <br />
               &nbsp;&nbsp;description:{`'`}lorem ipsum content{`'`} ,  <br />
               &nbsp;&nbsp;image1:{`'`}https://image1.png{`'`} , <br />
               &nbsp;&nbsp;image2:{`'`}https://image2.png{`'`} , <br />
               &nbsp;&nbsp;image3:{`'`}https://image3.png{`'`} , <br />
               &nbsp;&nbsp;image4:{`'`}https://image4.png{`'`} , <br />
               &nbsp;&nbsp;price:150 , <br />
               &nbsp;&nbsp;category:{`'`}radio{`'`} , <br />
               &nbsp;&nbsp;rating : 5 , <br />
               &nbsp;&nbsp;stick : 4 , <br />
               &nbsp;&nbsp;model : {`'`}KAMY/15T{`'`}
              <br />
              {`}`}),
              <br />
              <br />
              {`}`})</p>
              <p>.<span className='color-orange'>then</span>(res =&gt; res.json ( ) )</p>
              <p>.<span className='color-orange'>then</span>(json=&gt; console.log(json))</p>
           </div> 
           <div className='reveal_note'><GiBullseye className='icon' />you can send the parameters which yoy want to update, It will send you object as output with updated parameters. Nothing is saved in database, so it gives original object when you  asses product with that id </div>
          
      </div>
      <div className='component' id='deleteproduct'>
          <h2>delete product</h2>
          <div className='reveal_code'>
              <p><span className='color-orange'>fetch</span>(<span> &apos; {baseUrl}/api/products/1 &apos;</span>,{`{`}
              <br />
              method : {`"`} <span className='color-orange'>DELETE</span> {`"`} ,
              <br />
              {`}`})</p>
              <p>.<span className='color-orange'>then</span>(res =&gt; res.json ( ) )</p>
              <p>.<span className='color-orange'>then</span>(json=&gt; console.log(json))</p>
           </div> 
           <div className='reveal_note'><GiBullseye className='icon' /><p>If you send data like above, It will send a message as <span className='color-orange'>product deleted succesfully</span>. Nothing is updated in database, so it gives original object  when you try to asses product with that id </p></div>
      </div>
      
  </div>
 </>
  )
}

export default ProductsApi
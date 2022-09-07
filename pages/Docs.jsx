import React, { useState } from 'react'
import { SiNintendogamecube } from "react-icons/si";
import { Link } from 'react-scroll'
import { baseUrl } from '../components/BaseUrl';
import { GiBullseye } from "react-icons/gi";

const Docs = () => {
    const [showProducts,setShowProducts]=useState(true)
    const [showCarts,setShowCarts]=useState(false)
    const [showAlbums,setShowAlbums]=useState(false)
    const [showPhotos,setShowPhotos]=useState(false)
    const [showUsers,setShowUsers]=useState(false)
    const [showBooks,setShowBooks]=useState(false)
    const displaySection=(cate)=>{
        setShowProducts(false)
        setShowCarts(false)
        setShowUsers(false)
        setShowAlbums(false)
        setShowBooks(false)
        setShowPhotos(false)
    switch(cate){
        case 'products':
            setShowProducts(true)
            break;
        case 'carts':
            setShowCarts(true)
            break;
        case 'albums':
            setShowAlbums(true)
            break;
        case 'photos':
            setShowPhotos(true)
            break;
        case 'users':
            setShowUsers(true)
            break;
        case 'books':
            setShowBooks(true)
            break;
    }
    }
  return (
 <>
       <h1 className='docs_heading'>learn easily</h1>
       <div className='docs_categories'>
         <p className={showProducts ? 'active' : ''} onClick={()=>{displaySection('products')}}>products</p>
         <p className={showUsers ? 'active' :''} onClick={()=>displaySection('users')}>users</p>
         <p className={showCarts ? 'active' : ''} onClick={()=>{displaySection('carts')}}>carts</p>
         <p className={showBooks ? 'active' : ''} onClick={()=>{displaySection('books')}}>books</p>
         <p className={showAlbums ? 'active' : ''} onClick={()=>displaySection('albums')}>Albums</p>
         {/* <p>people</p> */}
         <p className={showPhotos ? 'active' : ''} onClick={()=>{displaySection('photos')}}>photos</p>
       </div>
    <div className="docs">
       <div className="docs_content">
         {showProducts && <>
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
            <h1><SiNintendogamecube className='icon' /> products</h1>
              <div className='component' id='allproducts'>
                  <h2>get all products</h2>
                  <div className='reveal_code'>
                      <p><span className='color-orange'> fetch </span>(<span> &apos; {baseUrl}/api/products &apos;</span>)</p>
                      <p>.<span className='color-orange'>then</span>(res =&gt; res.json())</p>
                      <p>.<span className='color-orange'>then</span>(json=&gt; console.log(<span className='color-orange'>json</span>))</p>
                   </div> 
                   <p> output :</p> 
                   <div className='reveal_output'>
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
                      <p>fetch(<span> &apos; {baseUrl}/api/products/1 &apos;</span>)</p>
                      <p>.then(res =&gt; res.json())</p>
                      <p>.then(json=&gt; console.log(json))</p>
                   </div> 
                   <p> output :</p>
                   <div className='reveal_output'>
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
                      <p>fetch(<span> &apos; {baseUrl}/api/products?sort=-1 &apos;</span>)</p>
                      <p>.then(res =&gt; res.json())</p>
                      <p>.then(json=&gt; console.log(json))</p>
                   </div> 
                   <p> output :</p>
                   <div className='reveal_output'>
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
                      <p>fetch(<span> &apos; {baseUrl}/api/products?limit=2 &apos;</span>)</p>
                      <p>.then(res =&gt; res.json())</p>
                      <p>.then(json=&gt; console.log(json))</p>
                   </div> 
                   <p> output :</p>
                   <div className='reveal_output'>
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
                      <p>fetch(<span> &apos; {baseUrl}/api/products/categories &apos;</span>)</p>
                      <p>.then(res =&gt; res.json())</p>
                      <p>.then(json=&gt; console.log(json))</p>
                   </div> 
                   <p> output :</p>
                   <div className='reveal_output'>
                       {`[`}
                        <p>&quot; basket &quot; ,</p>
                        <p>&quot; timer &quot; ,</p>
                        <p>&quot; radio &quot; ,</p>
                        <p>&quot; ... &quot;</p>
                       {`]`}
                       <br />
                      
                      
                   </div>
              </div>
              <div className='component' id='categoryproducts'>
                  <h2>products from category</h2>
                  <div className='reveal_code'>
                      <p>fetch(<span> &apos; {baseUrl}/api/products/categories/basket &apos;</span>)</p>
                      <p>.then(res =&gt; res.json())</p>
                      <p>.then(json=&gt; console.log(json))</p>
                   </div> 
                   <p> output :</p>
                   <div className='reveal_output'>
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
                      <p><span className='color-orange'>fetch</span>(<span> &apos; {baseUrl}/api/products/categories/basket &apos;</span>,{`{`}
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
                   <p> output :</p>
                   <div className='reveal_output'>
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
         </>}
         {showBooks && <>
            <div className="docs_left">
            <h2>find your need here</h2>
             <a href="#allbooks">get all books</a>
             <a href="#singlebook">get single book</a>
             <a href="#sortingbooks">sorting books</a>
             <a href="#limitingbooks">limiting books</a>
             <a href="#alltypes">All types</a>
             <a href="#typeproducts"> products from type</a>
             <a href="#addbook">Add new book</a>
             <a href="#updatebook">update a book</a>
             <a href="#deletebook">delete a book</a>
          </div>
          <div className="docs_right">
            <h1><SiNintendogamecube className='icon' /> books</h1>
              <div className='component' id='allbooks'>
                  <h2>get all books</h2>
                  <div className='reveal_code'>
                      <p><span className='color-orange'> fetch </span>(<span> &apos; {baseUrl}/api/books &apos;</span>)</p>
                      <p>.<span className='color-orange'>then</span>(res =&gt; res.json())</p>
                      <p>.<span className='color-orange'>then</span>(json=&gt; console.log(<span className='color-orange'>json</span>))</p>
                   </div> 
                   <p> output :</p> 
                   <div className='reveal_output'>
                       {`{`}
                        <p>&quot; id &quot; : 1</p>
                        <p>&quot; name &quot; : &quot; .... &quot;</p>
                        <p>&quot; author &quot; : &quot; .... &quot;</p>
                        <p>&quot; rating &quot; : &quot; .... &quot;</p>
                        <p>&quot; price &quot; : &quot; .... &quot;</p>
                        <p>&quot; image &quot; : &quot; .... &quot;</p>
                        <p>&quot; image1 &quot; : &quot; .... &quot;</p>
                        <p>&quot; description &quot; : &quot;  ... &quot;</p>
                        <p>&quot; edition &quot; : &quot; ₹ .... &quot;</p>
                        <p>&quot; publisher &quot; : &quot; .... &quot;</p>
                        <p>&quot; publishedDate &quot; : &quot; .... &quot;</p>
                        <p>&quot; pages &quot; : &quot; .... &quot;</p>
                        <p>&quot; type &quot; : &quot; .... &quot;</p>
                        <p>&quot; reviews &quot; : &quot; {`[`}.... {`]`} &quot;</p>
                       {`}`}
                       <br />
                       {`......`}
                       <br />
                       {`{`}
                        <p>&quot; id &quot; : 50</p>
                        <p>&quot; name &quot; : &quot; .... &quot;</p>
                        <p>&quot; author &quot; : &quot; .... &quot;</p>
                        <p>&quot; rating &quot; : &quot; .... &quot;</p>
                        <p>&quot; price &quot; : &quot; .... &quot;</p>
                        <p>&quot; image &quot; : &quot; .... &quot;</p>
                        <p>&quot; image1 &quot; : &quot; .... &quot;</p>
                        <p>&quot; description &quot; : &quot;  ... &quot;</p>
                        <p>&quot; edition &quot; : &quot; ₹ .... &quot;</p>
                        <p>&quot; publisher &quot; : &quot; .... &quot;</p>
                        <p>&quot; publishedDate &quot; : &quot; .... &quot;</p>
                        <p>&quot; pages &quot; : &quot; .... &quot;</p>
                        <p>&quot; type &quot; : &quot; .... &quot;</p>
                        <p>&quot; reviews &quot; : &quot; {`[`}.... {`]`} &quot;</p>
                       {`}`}
                   </div>
              </div>
              <div className='component' id='singlebook'>
                  <h2>get single book</h2>
                  <div className='reveal_code'>
                      <p>fetch(<span> &apos; {baseUrl}/api/books/1 &apos;</span>)</p>
                      <p>.then(res =&gt; res.json())</p>
                      <p>.then(json=&gt; console.log(json))</p>
                   </div> 
                   <p> output :</p>
                   <div className='reveal_output'>
                   {`{`}
                        <p>&quot; id &quot; : 1</p>
                        <p>&quot; name &quot; : &quot; .... &quot;</p>
                        <p>&quot; author &quot; : &quot; .... &quot;</p>
                        <p>&quot; rating &quot; : &quot; .... &quot;</p>
                        <p>&quot; price &quot; : &quot; .... &quot;</p>
                        <p>&quot; image &quot; : &quot; .... &quot;</p>
                        <p>&quot; image1 &quot; : &quot; .... &quot;</p>
                        <p>&quot; description &quot; : &quot;  ... &quot;</p>
                        <p>&quot; edition &quot; : &quot; ₹ .... &quot;</p>
                        <p>&quot; publisher &quot; : &quot; .... &quot;</p>
                        <p>&quot; publishedDate &quot; : &quot; .... &quot;</p>
                        <p>&quot; pages &quot; : &quot; .... &quot;</p>
                        <p>&quot; type &quot; : &quot; .... &quot;</p>
                        <p>&quot; reviews &quot; : &quot; {`[`}.... {`]`} &quot;</p>
                       {`}`}
                      
                   </div>
              </div>
              <div className='component' id='sortingbooks'>
                  <h2>sorting books</h2>
                  <div className='reveal_code'>
                      <p>fetch(<span> &apos; {baseUrl}/api/books?sort=-1 &apos;</span>)</p>
                      <p>.then(res =&gt; res.json())</p>
                      <p>.then(json=&gt; console.log(json))</p>
                   </div> 
                   <p> output :</p>
                   <div className='reveal_output'>
                   {`{`}
                        <p>&quot; id &quot; : 50</p>
                        <p>&quot; name &quot; : &quot; .... &quot;</p>
                        <p>&quot; author &quot; : &quot; .... &quot;</p>
                        <p>&quot; rating &quot; : &quot; .... &quot;</p>
                        <p>&quot; price &quot; : &quot; .... &quot;</p>
                        <p>&quot; image &quot; : &quot; .... &quot;</p>
                        <p>&quot; image1 &quot; : &quot; .... &quot;</p>
                        <p>&quot; description &quot; : &quot;  ... &quot;</p>
                        <p>&quot; edition &quot; : &quot; ₹ .... &quot;</p>
                        <p>&quot; publisher &quot; : &quot; .... &quot;</p>
                        <p>&quot; publishedDate &quot; : &quot; .... &quot;</p>
                        <p>&quot; pages &quot; : &quot; .... &quot;</p>
                        <p>&quot; type &quot; : &quot; .... &quot;</p>
                        <p>&quot; reviews &quot; : &quot; {`[`}.... {`]`} &quot;</p>
                       {`}`}
                       <br />
                       {`....`}
                       <br />
                       {`{`}
                        <p>&quot; id &quot; : 1</p>
                        <p>&quot; name &quot; : &quot; .... &quot;</p>
                        <p>&quot; author &quot; : &quot; .... &quot;</p>
                        <p>&quot; rating &quot; : &quot; .... &quot;</p>
                        <p>&quot; price &quot; : &quot; .... &quot;</p>
                        <p>&quot; image &quot; : &quot; .... &quot;</p>
                        <p>&quot; image1 &quot; : &quot; .... &quot;</p>
                        <p>&quot; description &quot; : &quot;  ... &quot;</p>
                        <p>&quot; edition &quot; : &quot; ₹ .... &quot;</p>
                        <p>&quot; publisher &quot; : &quot; .... &quot;</p>
                        <p>&quot; publishedDate &quot; : &quot; .... &quot;</p>
                        <p>&quot; pages &quot; : &quot; .... &quot;</p>
                        <p>&quot; type &quot; : &quot; .... &quot;</p>
                        <p>&quot; reviews &quot; : &quot; {`[`}.... {`]`} &quot;</p>
                       {`}`}
                      
                   </div>
                   <div className='reveal_note'><GiBullseye className='icon' />Default value is in ascending order i.e; sort=1, for descending sort=-1</div>
              </div>
              <div className='component' id='limitingbooks'>
                  <h2>Limiting books</h2>
                  <div className='reveal_code'>
                      <p>fetch(<span> &apos; {baseUrl}/api/books?limit=2 &apos;</span>)</p>
                      <p>.then(res =&gt; res.json())</p>
                      <p>.then(json=&gt; console.log(json))</p>
                   </div> 
                   <p> output :</p>
                   <div className='reveal_output'>
                   {`{`}
                        <p>&quot; id &quot; : 1</p>
                        <p>&quot; name &quot; : &quot; .... &quot;</p>
                        <p>&quot; author &quot; : &quot; .... &quot;</p>
                        <p>&quot; rating &quot; : &quot; .... &quot;</p>
                        <p>&quot; price &quot; : &quot; .... &quot;</p>
                        <p>&quot; image &quot; : &quot; .... &quot;</p>
                        <p>&quot; image1 &quot; : &quot; .... &quot;</p>
                        <p>&quot; description &quot; : &quot;  ... &quot;</p>
                        <p>&quot; edition &quot; : &quot; ₹ .... &quot;</p>
                        <p>&quot; publisher &quot; : &quot; .... &quot;</p>
                        <p>&quot; publishedDate &quot; : &quot; .... &quot;</p>
                        <p>&quot; pages &quot; : &quot; .... &quot;</p>
                        <p>&quot; type &quot; : &quot; .... &quot;</p>
                        <p>&quot; reviews &quot; : &quot; {`[`}.... {`]`} &quot;</p>
                       {`}`},
                       <br />
                       {`{`}
                        <p>&quot; id &quot; : 2</p>
                        <p>&quot; name &quot; : &quot; .... &quot;</p>
                        <p>&quot; author &quot; : &quot; .... &quot;</p>
                        <p>&quot; rating &quot; : &quot; .... &quot;</p>
                        <p>&quot; price &quot; : &quot; .... &quot;</p>
                        <p>&quot; image &quot; : &quot; .... &quot;</p>
                        <p>&quot; image1 &quot; : &quot; .... &quot;</p>
                        <p>&quot; description &quot; : &quot;  ... &quot;</p>
                        <p>&quot; edition &quot; : &quot; ₹ .... &quot;</p>
                        <p>&quot; publisher &quot; : &quot; .... &quot;</p>
                        <p>&quot; publishedDate &quot; : &quot; .... &quot;</p>
                        <p>&quot; pages &quot; : &quot; .... &quot;</p>
                        <p>&quot; type &quot; : &quot; .... &quot;</p>
                        <p>&quot; reviews &quot; : &quot; {`[`}.... {`]`} &quot;</p>
                       {`}`}
                      
                   </div>
                   <div className='reveal_note'><GiBullseye className='icon' />Limit value should be always less than or equal to total books,Otherwise shows a error.</div>
              </div>
              <div className='component' id='alltypes'>
                  <h2>All types</h2>
                  <div className='reveal_code'>
                      <p>fetch(<span> &apos; {baseUrl}/api/books/types &apos;</span>)</p>
                      <p>.then(res =&gt; res.json())</p>
                      <p>.then(json=&gt; console.log(json))</p>
                   </div> 
                   <p> output :</p>
                   <div className='reveal_output'>
                       {`[`}
                        <p>&quot; love &quot; ,</p>
                        <p>&quot; social &quot; ,</p>
                        <p>&quot; fiction &quot; ,</p>
                        <p>&quot; ... &quot;</p>
                       {`]`}
                       <br />
                      
                      
                   </div>
              </div>
              <div className='component' id='typeproducts'>
                  <h2>books from type</h2>
                  <div className='reveal_code'>
                      <p>fetch(<span> &apos; {baseUrl}/api/books/types/love &apos;</span>)</p>
                      <p>.then(res =&gt; res.json())</p>
                      <p>.then(json=&gt; console.log(json))</p>
                   </div> 
                   <p> output :</p>
                   <div className='reveal_output'>
                   {`{`}
                        <p>&quot; id &quot; : .... ,</p>
                        <p>&quot; name &quot; : &quot; .... &quot;</p>
                        <p>&quot; author &quot; : &quot; .... &quot;</p>
                        <p>&quot; rating &quot; : &quot; .... &quot;</p>
                        <p>&quot; price &quot; : &quot; .... &quot;</p>
                        <p>&quot; image &quot; : &quot; .... &quot;</p>
                        <p>&quot; image1 &quot; : &quot; .... &quot;</p>
                        <p>&quot; description &quot; : &quot;  ... &quot;</p>
                        <p>&quot; edition &quot; : &quot; ₹ .... &quot;</p>
                        <p>&quot; publisher &quot; : &quot; .... &quot;</p>
                        <p>&quot; publishedDate &quot; : &quot; .... &quot;</p>
                        <p>&quot; pages &quot; : &quot; .... &quot;</p>
                        <p>&quot; type &quot; : &quot; love &quot;</p>
                        <p>&quot; reviews &quot; : &quot; {`[`}.... {`]`} &quot;</p>
                       {`}`},
                       <br />
                       {`{`}
                        <p>&quot; id &quot; : .... ,</p>
                        <p>&quot; name &quot; : &quot; .... &quot;</p>
                        <p>&quot; author &quot; : &quot; .... &quot;</p>
                        <p>&quot; rating &quot; : &quot; .... &quot;</p>
                        <p>&quot; price &quot; : &quot; .... &quot;</p>
                        <p>&quot; image &quot; : &quot; .... &quot;</p>
                        <p>&quot; image1 &quot; : &quot; .... &quot;</p>
                        <p>&quot; description &quot; : &quot;  ... &quot;</p>
                        <p>&quot; edition &quot; : &quot; ₹ .... &quot;</p>
                        <p>&quot; publisher &quot; : &quot; .... &quot;</p>
                        <p>&quot; publishedDate &quot; : &quot; .... &quot;</p>
                        <p>&quot; pages &quot; : &quot; .... &quot;</p>
                        <p>&quot; type &quot; : &quot; love &quot;</p>
                        <p>&quot; reviews &quot; : &quot; {`[`}.... {`]`} &quot;</p>
                       {`}`},
                      
                   </div>
                   <div className='reveal_note'><GiBullseye className='icon' />If the category is not in list, it shows empty array .</div>
              </div>
              <div className='component' id='addbook'>
                  <h2>Add new book</h2>
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
                       &nbsp;&nbsp;name:{`'`} .... {`'`} , <br />
                       &nbsp;&nbsp;author:{`'`} .... {`'`} , <br />
                       &nbsp;&nbsp;rating : ... , <br />
                       &nbsp;&nbsp;price: ... , <br />
                       &nbsp;&nbsp;image:{`'`} ..... {`'`} , <br />
                       &nbsp;&nbsp;image1:{`'`} .... {`'`} , <br />
                       &nbsp;&nbsp;description:{`'`} ..... {`'`} ,  <br />
                       &nbsp;&nbsp;edition:{`'`} ..... {`'`} ,  <br />
                       &nbsp;&nbsp;publisher:{`'`} .... {`'`} , <br />
                       &nbsp;&nbsp;publishedDate:{`'`} .... {`'`} , <br />
                       &nbsp;&nbsp;pages : {`'`} .... {`'`} , <br />
                       &nbsp;&nbsp;type : ... , <br />
                       &nbsp;&nbsp;reviews : {`[`} ..... {`]`}
                      <br />
                      {`}`}),
                      <br />
                      <br />
                      {`}`})</p>
                      <p>.<span className='color-orange'>then</span>(res =&gt; res.json ( ) )</p>
                      <p>.<span className='color-orange'>then</span>(json=&gt; console.log(json))</p>
                   </div> 
                   <div className='reveal_note'><GiBullseye className='icon' />If you send data like above, It will send you object as output with new id. Nothing is saved in database, so it gives error when you try to asses book with new id </div>
                   <p> output :</p>
                   <div className='reveal_output'>
                   {`{`}
                        <p>&quot; id &quot; : ...</p>
                        <p>&quot; name &quot; : &quot; .... &quot;</p>
                        <p>&quot; author &quot; : &quot; .... &quot;</p>
                        <p>&quot; rating &quot; : &quot; .... &quot;</p>
                        <p>&quot; price &quot; : &quot; .... &quot;</p>
                        <p>&quot; image &quot; : &quot; .... &quot;</p>
                        <p>&quot; image1 &quot; : &quot; .... &quot;</p>
                        <p>&quot; description &quot; : &quot;  ... &quot;</p>
                        <p>&quot; edition &quot; : &quot; ₹ .... &quot;</p>
                        <p>&quot; publisher &quot; : &quot; .... &quot;</p>
                        <p>&quot; publishedDate &quot; : &quot; .... &quot;</p>
                        <p>&quot; pages &quot; : &quot; .... &quot;</p>
                        <p>&quot; type &quot; : &quot; .... &quot;</p>
                        <p>&quot; reviews &quot; : &quot; {`[`}.... {`]`} &quot;</p>
                       {`}`},
                      
                   </div>
              </div>
              <div className='component' id='updatebook'>
                  <h2>Update book</h2>
                  <div className='reveal_code'>
                      <p><span className='color-orange'>fetch</span>(<span> &apos; {baseUrl}/api/books/1 &apos;</span>,{`{`}
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
                      &nbsp;&nbsp;name:{`'`} .... {`'`} , <br />
                       &nbsp;&nbsp;author:{`'`} .... {`'`} , <br />
                       &nbsp;&nbsp;rating : ... , <br />
                       &nbsp;&nbsp;price: ... , <br />
                       &nbsp;&nbsp;image:{`'`} ..... {`'`} , <br />
                       &nbsp;&nbsp;image1:{`'`} .... {`'`} , <br />
                       &nbsp;&nbsp;description:{`'`} ..... {`'`} ,  <br />
                       &nbsp;&nbsp;edition:{`'`} ..... {`'`} ,  <br />
                       &nbsp;&nbsp;publisher:{`'`} .... {`'`} , <br />
                       &nbsp;&nbsp;publishedDate:{`'`} .... {`'`} , <br />
                       &nbsp;&nbsp;pages : {`'`} .... {`'`} , <br />
                       &nbsp;&nbsp;type : ... , <br />
                       &nbsp;&nbsp;reviews : {`[`} ..... {`]`}
                      <br />
                      {`}`}),
                      <br />
                      <br />
                      {`}`})</p>
                      <p>.<span className='color-orange'>then</span>(res =&gt; res.json ( ) )</p>
                      <p>.<span className='color-orange'>then</span>(json=&gt; console.log(json))</p>
                   </div> 
                   <div className='reveal_note'><GiBullseye className='icon' />If you send data like above, It will send you object as output with that id. Nothing is updated in database, so it gives original object  when you try to access book with that id </div>
                  <div className='reveal_code'>
                      <p><span className='color-orange'>fetch</span>(<span> &apos; {baseUrl}/api/books/1 &apos;</span>,{`{`}
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
                      &nbsp;&nbsp;name:{`'`} .... {`'`} , <br />
                       &nbsp;&nbsp;author:{`'`} .... {`'`} , <br />
                       &nbsp;&nbsp;rating : ... , <br />
                       &nbsp;&nbsp;price: ... , <br />
                       &nbsp;&nbsp;image:{`'`} ..... {`'`} , <br />
                       &nbsp;&nbsp;image1:{`'`} .... {`'`} , <br />
                       &nbsp;&nbsp;description:{`'`} ..... {`'`} ,  <br />
                       &nbsp;&nbsp;edition:{`'`} ..... {`'`} ,  <br />
                       &nbsp;&nbsp;publisher:{`'`} .... {`'`} , <br />
                       &nbsp;&nbsp;publishedDate:{`'`} .... {`'`} , <br />
                       &nbsp;&nbsp;pages : {`'`} .... {`'`} , <br />
                       &nbsp;&nbsp;type : ... , <br />
                       &nbsp;&nbsp;reviews : {`[`} ..... {`]`}
                      <br />
                      {`}`}),
                      <br />
                      <br />
                      {`}`})</p>
                      <p>.<span className='color-orange'>then</span>(res =&gt; res.json ( ) )</p>
                      <p>.<span className='color-orange'>then</span>(json=&gt; console.log(json))</p>
                   </div> 
                   <div className='reveal_note'><GiBullseye className='icon' />you can send the parameters which you want to update, It will send you object as output with updated parameters. Nothing is saved in database, so it gives original object when you  access book with that id </div>
                  
              </div>
              <div className='component' id='deletebook'>
                  <h2>delete book</h2>
                  <div className='reveal_code'>
                      <p><span className='color-orange'>fetch</span>(<span> &apos; {baseUrl}/api/books/1 &apos;</span>,{`{`}
                      <br />
                      method : {`"`} <span className='color-orange'>DELETE</span> {`"`} ,
                      <br />
                      {`}`})</p>
                      <p>.<span className='color-orange'>then</span>(res =&gt; res.json ( ) )</p>
                      <p>.<span className='color-orange'>then</span>(json=&gt; console.log(json))</p>
                   </div> 
                   <div className='reveal_note'><GiBullseye className='icon' /><p>If you send data like above, It will send a message as <span className='color-orange'>book deleted succesfully</span>. Nothing is updated in database, so it gives original object  when you try to access book with that id </p></div>
              </div>
              
          </div>
         </>}
         {showCarts && <>
            <div className="docs_left">
            <h2>find your need here</h2>
             <a href="#allcarts">get all carts</a>
             <a href="#singlecart">get single cart</a>
             <a href="#sortingcarts">sorting carts</a>
             <a href="#limitingcarts">limiting carts</a>
             <a href="#addcart">Add new cart</a>
             <a href="#updatecart">update cart</a>
             <a href="#deletecart">delete cart</a>
          </div>
          <div className="docs_right">
            <h1><SiNintendogamecube className='icon' /> Carts</h1>
              <div className='component' id='allcarts'>
                  <h2>get all carts</h2>
                  <div className='reveal_code'>
                      <p><span className='color-orange'> fetch </span>(<span> &apos; {baseUrl}/api/carts &apos;</span>)</p>
                      <p>.<span className='color-orange'>then</span>(res =&gt; res.json())</p>
                      <p>.<span className='color-orange'>then</span>(json=&gt; console.log(<span className='color-orange'>json</span>))</p>
                   </div> 
                   <p> output :</p> 
                   <div className='reveal_output'>
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
                   <p> output :</p>
                   <div className='reveal_output'>
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
                   <p> output :</p>
                   <div className='reveal_output'>
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
                   <p> output :</p>
                   <div className='reveal_output'>
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
                   <p> output :</p>
                   <div className='reveal_output'>
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
              <div className='component' id='deleteproduct'>
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
         </>}
         {showAlbums && <>
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
            <h1><SiNintendogamecube className='icon' /> albums</h1>
              <div className='component' id='allalbums'>
                  <h2>get all albums</h2>
                  <div className='reveal_code'>
                      <p><span className='color-orange'> fetch </span>(<span> &apos; {baseUrl}/api/albums &apos;</span>)</p>
                      <p>.<span className='color-orange'>then</span>(res =&gt; res.json())</p>
                      <p>.<span className='color-orange'>then</span>(json=&gt; console.log(<span className='color-orange'>json</span>))</p>
                   </div> 
                   <p> output :</p> 
                   <div className='reveal_output'>
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
                   <p> output :</p>
                   <div className='reveal_output'>
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
                   <p> output :</p>
                   <div className='reveal_output'>
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
                   <p> output :</p>
                   <div className='reveal_output'>
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
                   <p> output :</p>
                   <div className='reveal_output'>
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
                   <p> output :</p>
                   <div className='reveal_output'>
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
         </>}
         {showPhotos && <>
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
            <h1><SiNintendogamecube className='icon' /> Photos</h1>
              <div className='component' id='allphotos'>
                  <h2>get all photos</h2>
                  <div className='reveal_code'>
                      <p><span className='color-orange'> fetch </span>(<span> &apos; {baseUrl}/api/photos &apos;</span>)</p>
                      <p>.<span className='color-orange'>then</span>(res =&gt; res.json())</p>
                      <p>.<span className='color-orange'>then</span>(json=&gt; console.log(<span className='color-orange'>json</span>))</p>
                   </div> 
                   <p> output :</p> 
                   <div className='reveal_output'>
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
                   <p> output :</p>
                   <div className='reveal_output'>
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
                   <p> output :</p>
                   <div className='reveal_output'>
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
                   <p> output :</p>
                   <div className='reveal_output'>
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
                   <p> output :</p>
                   <div className='reveal_output'>
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
         </>}
         {showUsers && <>
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
            <h1><SiNintendogamecube className='icon' /> users</h1>
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
                   <p> output :</p>
                   <div className='reveal_output'>
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
                   <p> output :</p> 
                   <div className='reveal_output'>
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
                   <p> output :</p>
                   <div className='reveal_output'>
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
                   <p> output :</p>
                   <div className='reveal_output'>
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
                   <p> output :</p>
                   <div className='reveal_output'>
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
                   <p> output :</p>
                   <div className='reveal_output'>
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
         </>}
        
       </div>
    </div>
 </>
  )
}

export default Docs
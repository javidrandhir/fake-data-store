import React, { useState } from 'react'
import { SiNintendogamecube } from "react-icons/si";
import { baseUrl } from './BaseUrl';
import { GiBullseye } from "react-icons/gi";

const BooksApi = () => {
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
            <h1><SiNintendogamecube className='icon' />books Api</h1>
              <div className='component' id='allbooks'>
                  <h2>get all books</h2>
                  <div className='reveal_code'>
                      <p><span className='color-orange'> fetch </span>(<span> &apos; {baseUrl}/api/books &apos;</span>)</p>
                      <p>.<span className='color-orange'>then</span>(res =&gt; res.json())</p>
                      <p>.<span className='color-orange'>then</span>(json=&gt; console.log(<span className='color-orange'>json</span>))</p>
                   </div> 
                   <p onClick={()=>setShowp1(!showp1)} className={showp1 ? 'active' :''}>{showp1 ? 'hide output' : 'show output'} </p> 
           <div className={showp1 ? 'reveal_output active' :'reveal_output'}>
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
                   <p onClick={()=>setShowp2(!showp2)} className={showp2 ? 'active' :''}>{showp2 ? 'hide output' : 'show output'} </p> 
           <div className={showp2 ? 'reveal_output active' :'reveal_output'}>
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
                   <p onClick={()=>setShowp3(!showp3)} className={showp3 ? 'active' :''}>{showp3 ? 'hide output' : 'show output'} </p> 
           <div className={showp3 ? 'reveal_output active' :'reveal_output'}>
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
                   <p onClick={()=>setShowp4(!showp4)} className={showp4 ? 'active' :''}>{showp4 ? 'hide output' : 'show output'} </p> 
           <div className={showp4 ? 'reveal_output active' :'reveal_output'}>
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
                   <p onClick={()=>setShowp5(!showp5)} className={showp5 ? 'active' :''}>{showp5 ? 'hide output' : 'show output'} </p> 
           <div className={showp5 ? 'reveal_output active' :'reveal_output'}>
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
                   <p onClick={()=>setShowp6(!showp6)} className={showp6 ? 'active' :''}>{showp6 ? 'hide output' : 'show output'} </p> 
           <div className={showp6 ? 'reveal_output active' :'reveal_output'}>
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
                   <p onClick={()=>setShowp7(!showp7)} className={showp7 ? 'active' :''}>{showp7 ? 'hide output' : 'show output'} </p> 
           <div className={showp7 ? 'reveal_output active' :'reveal_output'}>
               {`{`}
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
         </>
  )
}

export default BooksApi
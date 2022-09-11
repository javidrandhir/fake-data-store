import React, { useState } from 'react'
import { SiNintendogamecube } from "react-icons/si";
import { baseUrl } from '../components/BaseUrl';
import { GiBullseye } from "react-icons/gi";
import { useEffect } from 'react';
import ProductsApi from '../components/ProductsApi';
import BooksApi from '../components/BooksApi';
import CartsApi from '../components/CartsApi';
import AlbumsApi from '../components/AlbumsApi';
import PhotosApi from '../components/PhotosApi';
import UsersApi from '../components/UsersApi';

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
         {showProducts && <ProductsApi /> }
         {showBooks && <BooksApi /> }
         {showCarts && <CartsApi /> }
         {showAlbums && <AlbumsApi /> }
         {showPhotos && <PhotosApi /> }
         {showUsers && <UsersApi />}
        
       </div>
    </div>
 </>
  )
}

export default Docs
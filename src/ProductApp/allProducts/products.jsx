import React, { useEffect, useState } from 'react'
import './style.css'
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
import SearchProduct from '../searchProduct/SearchProduct';
export default function AllProducts() {
  const navigate = useNavigate();
    const [products,setProducts] = useState([])
    const [error,SetError] = useState(false);
    useEffect(() => {
        const token = localStorage.getItem('Token');
      async  function fetchData(){
          try {
            if (token) {
              const response = await axios.get("https://dummyjson.com/products")
              if(response.status == 200){
                setProducts(response.data.products)
              }
        }else{
          alert('No token found. User not authenticated.')
          navigate('/')
        }
          } catch (error) {
            SetError(true)
          }
        }
        fetchData()
    }, []);
    // if (products == '') {
    //     return <h1>Loading...</h1>;
    //   }
  return (
    <div className="products-container">
    <h1>Products</h1>
    <SearchProduct/>
    <div className="product-grid">
      {
        products == '' ? <h1>Loading....</h1> :
        (
          products.map((items,index)=>{
            return (
                <div key={index} className="product-item">
                <Link to={`/allproducts/${index + 1}`}>
                <img src={items.thumbnail} alt={items.name} />
                <h3>{items.title}</h3>
                <p>{items.description}</p>
                </Link>
              </div>
            )
        })
        )
      }

    </div>
  </div>
  )
}

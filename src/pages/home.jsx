import { useEffect, useState } from 'react';
import './home.css';
import { Circles } from 'react-loader-spinner';
import ProductTile from '../components/product-tile/product-tile';

export default function Home()
{
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  

  // https://fakestoreapi.com/products
  async function fetchListProducts(){
    setLoading(true)
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();

    console.log(data);
    if(data){
      setLoading(false);
      setProducts(data);
    }
  }

  useEffect(()=>{
    fetchListProducts();
  },[])     // ,[]를 하면 update에 대해서는 발동안함(처음만 발동)
  return(
    <div>
      {
        loading ? (
          <div className='my-loading'><Circles height={'120'} width={'120'} color='rgb(127,29,29)'/></div>
        ) : (
          <div className='my-products-grid'>
            {
              //반복문 map(배열에 대해서 사용)
              products.map((product, idx)=>{
                return(
                  <ProductTile product={product} key={idx}/>
                )
              })
            }
          </div>
        )
      }
    </div>
  )
}
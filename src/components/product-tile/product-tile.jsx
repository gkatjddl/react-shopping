import { useDispatch, useSelector } from 'react-redux';
import './product-tile.css';
import { addToCart } from '../../store/slices/cart-slice';

export default function ProductTile ({product})
{
  // addToCart함수를 이용해서 정보를 추가
  const dispatch = useDispatch();
  function hAddToCart(){
    dispatch(addToCart(product));
  }
  
  function hRemoveFromCart(){
    dispatch(hRemoveFromCart(product.id));
  }

  // cart 프로퍼티를 추출
  const cart = useSelector((state)=>{
    return(
      state.cart
    )
  })


  return(
    <>
      <div className='flex-col-container'>
        <div style={{'height':'180px'}}>
          <img className='full-cover-image' src={product?.image} alt={product?.title}/>
          <div>
            <h4 className='product-title'>{product?.title}</h4>
          </div>
          <div className='add-cart-btn-wrapper'>
            <button className='add-cart-btn' onClick={cart.some(item=>item.id === product.id) ? hRemoveFromCart : hAddToCart}>
              {
                cart.some(item=>item.id === product.id) ? '장바구니에서 제거' : '장바구니에 담기'
              }
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
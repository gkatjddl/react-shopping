import { useDispatch } from 'react-redux'
import './cart-tile.css'
import { removeFromCart } from '../../store/slices/cart-slice';

export default function CartTile({cartItem})
{
  // 리덕스(store)의 함수를 사용하기 위해선 useDispatch()
  // 리덕스(store)의 데이터를 사용하기 위해선 useSlector()
  
  const dispatch = useDispatch();   // 리덕스의 함수를 사용하기 위해 useDispatch()
  function hRemoverFromCart()
  {
    dispatch(removeFromCart(cartItem.id))
  }

  return(
    <div className='tile-container'>
      <div className='flex-padding'>
        <img src={cartItem?.image} alt={cartItem?.title} className='rounded-box'/>
        <div className='tile-contnet'>
          <h1 className='text-title'>{cartItem.title}</h1>
          <p className='text-price'>{Math.floor(cartItem.price * 1300).toLocaleString('ko-KR')} 원</p>
        </div>
      </div>
      <div>
        <button onClick={hRemoverFromCart} className='bold-red-btn'>제거</button>
      </div>
    </div>
  )
}
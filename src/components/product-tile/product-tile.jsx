import { addToCart, removeFromCart } from '../../store/slices/cart-slice';
import {useDispatch, useSelector} from 'react-redux';
import './product-tile.css';

export default function ProductTile({product})
{
    // createSlice의 addToCart() 를 사용
    const dispatch = useDispatch();
    function hAddToCart()
    {
        dispatch(addToCart(product));
    }

    function hRemoveFromCart(){
        //console.log('removed')
        dispatch(removeFromCart(product.id));
    }

    // cart 프로퍼티를 추출
    //const {cart} = useSelector((state)=>state);
    const cart = useSelector((state)=>state.cart);

    return (
        <>
            <div className="flex-col-container">
                <div className="height-180px">
                    <img src={product?.image} alt={product?.title} className="full-cover-image"/>
                </div>
                <div>
                    <h1 className="product-title">{product?.title}</h1>
                </div>
                <div className='add-cart-btn-wrapper'>
                    <button onClick={cart.some(item=>item.id === product.id) ? hRemoveFromCart : hAddToCart} className='add-cart-btn'>
                        {
                            cart.some(item=>item.id === product.id) ? '장바구니에서 제거' : '장바구니 담기'
                        }                        
                    </button>
                </div>
            </div>
        </>
    )
}
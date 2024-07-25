import { useId } from 'react';
import { CartIcon, ClearCartIcon } from './Icons.jsx';
import { useCart } from '../hooks/useCart.js';

function CartItem({ thumbnail, price, title, quantity, addToCart }) {
  return (
    <li className='border-b border-[#444] pb-4'>
      <img
        src={thumbnail}
        alt={title}
        className='w-full aspect-[16/9]'
      />
      <div>
        <strong>{title}</strong> - ${price}
      </div>

      <footer className='flex gap-2 justify-center items-center'>
        <small>
          Qty: {quantity}
        </small>
        <button
          onClick={addToCart}
          className='items-center bg-[#09f] border rounded-full cursor-pointer flex h-8 justify-center p-1 absolute right-2 top-2 transition-all duration-300 ease-linear w-8 z-50 hover:scale-110'
        >
          +
        </button>
      </footer>
    </li>
  );
}

export function Cart() {
  const cartCheckboxId = useId();
  const { cart, clearCart, addToCart } = useCart();

  return (
    <>
      <label className='cart-button absolute right-2 top-2 flex items-center justify-center bg-[#09f] rounded-full cursor-pointer h-8 w-8 p-1 transition-all duration-300 ease-linear z-50 hover:scale-110' htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type='checkbox' hidden />

      <aside className='cart fixed right-0 top-0 bg-black p-8 w-52'>
        <ul>
          {cart.map(product => (
            <CartItem
              key={product.id}
              addToCart={() => addToCart(product)}
              {...product}
            />
          ))}
        </ul>

        <button onClick={clearCart} className='absolute bottom-8 right-8'>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
}
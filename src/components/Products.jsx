import { AddToCartIcon, RemoveFromCartIcon } from './Icons.jsx';
import { useCart } from '../hooks/useCart.js';

export function Products({ products }) {
  const { addToCart, removeFromCart, cart } = useCart();

  const checkProductInCart = (product) => {
    return cart.some((item) => item.id === product.id);
  };

  return (
    <main className='w-full flex justify-center items-center'>
      <ul className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4'>
        {products.slice(0, 10).map((product) => {
          const isProductInCart = checkProductInCart(product);

          return (
            <li key={product.id} className='flex flex-col gap-4 shadow-md rounded-md bg-[#111] text-white p-4'>
              <img
                src={product.thumbnail}
                alt={product.title}
                className='rounded-md w-full aspect-[16/9] block object-cover bg-white'
              />
              <div>
                <strong>{product.title}</strong> - ${product.price}
              </div>
              <div>
                <button
                  className={`py-2 px-4 rounded ${isProductInCart ? 'bg-red-500' : 'bg-[#09f]'} `}
                  onClick={() => {
                    isProductInCart ? removeFromCart(product) : addToCart(product);
                  }}
                >
                  {isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
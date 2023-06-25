import { useSelector } from 'react-redux'

export default function useCart(product) {
    const cartProducts = useSelector((state) => state.cart.products);

    let id = null;
    const isInCart = cartProducts.some((item, index) => {
      id = index;
      return item.name === product.name && JSON.stringify(item.toppings) === JSON.stringify(product.toppings);
    });

    return { isInCart, id };
  }
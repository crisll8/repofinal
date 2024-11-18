import React from 'react';  // Solo necesitas React y useCart aquí
import { useCart } from './CartContext';
import './CartWidget.css';
import cartIcon from '../assets/cart-icon.png'; // Importa correctamente el icono

function CartWidget({ setModalOpen }) {
  const { cartItems } = useCart(); // Usamos el hook useCart para acceder a cartItems

  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleCartClick = () => {
    setModalOpen(true); // Al hacer clic en el carrito, abrir el modal
  };

  return (
    <div className="cart-widget">
      <img src={cartIcon} alt="Cart" className="cart-icon" onClick={handleCartClick} />
      {totalQuantity > 0 && <span className="cart-quantity">{totalQuantity}</span>}
    </div>
  );
}

export default CartWidget;

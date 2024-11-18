import React from 'react';
import { useCart } from './CartContext';
import './CartModal.css';

function CartModal({ isOpen, setModalOpen }) {
  const { cartItems, removeFromCart } = useCart(); // Usamos el hook useCart para acceder al carrito

  const closeModal = () => setModalOpen(false); // Función para cerrar el modal

  if (!isOpen) return null; // Si isOpen es false, no se muestra el modal

  return (
    <div className="cart-modal">
      <div className="cart-modal-content">
        <h2>Carrito de Compras</h2>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <p>{item.name} - ${item.price} x {item.quantity}</p>
              <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
        <button onClick={closeModal}>Cerrar</button>
      </div>
    </div>
  );
}

export default CartModal;

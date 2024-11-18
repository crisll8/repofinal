import React, { useState } from 'react';
import './ItemDetail.css';
import ItemQuantitySelector from './ItemQuantitySelector';
import { useCart } from './CartContext';
import remeraImg from '../assets/remera.jpg';
import pantalonImg from '../assets/pantalon.jpg';
import camperaImg from '../assets/campera.jpg';
import zapatillasImg from '../assets/zapatillas.jpg';

function ItemDetail({ product }) {
  const { addToCart } = useCart(); // Accede al carrito mediante el hook personalizado
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart({ ...product, quantity }); // Añade el producto al carrito
  };

  const getProductImage = (name) => {
    switch (name) {
      case 'Remera':
        return remeraImg;
      case 'Pantalón':
        return pantalonImg;
      case 'Campera':
        return camperaImg;
      case 'Zapatillas':
        return zapatillasImg;
      default:
        return null;
    }
  };

  return (
    <div className="item-detail">
      <img
        src={getProductImage(product.name)}
        alt={product.name}
        className="item-detail-image"
      />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>

      <ItemQuantitySelector quantity={quantity} setQuantity={setQuantity} />

      <button className="add-to-cart-button" onClick={handleAddToCart}>
        Agregar al carrito
      </button>
    </div>
  );
}

export default ItemDetail;

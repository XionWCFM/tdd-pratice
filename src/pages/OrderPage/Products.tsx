import React from 'react';
import { DataType } from './Type';

interface ProductsProps {
  name: DataType['name'];
  imagePath: DataType['imagePath'];
}

const Products = ({ name, imagePath }: ProductsProps) => {
  return (
    <div>
      <img src={`${imagePath}`} alt={`${name}`} />
      <form action="">
        <label htmlFor="">{name}</label>
        <input type="number" name="quantity" min={0} defaultValue={0} />
      </form>
    </div>
  );
};

export default Products;

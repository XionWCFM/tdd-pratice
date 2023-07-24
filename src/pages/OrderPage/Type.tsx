import axios from 'axios';
import React, { useEffect } from 'react';
import Products from './Products';

export interface DataType {
  name: string;
  imagePath: string;
}

interface TypeProps {
  orderType: 'products' | 'options';
}

const Type = ({ orderType }: TypeProps) => {
  const [items, setItems] = React.useState<DataType[]>([]);

  useEffect(() => {
    void loadItems(orderType);
  }, [orderType]);

  const loadItems = async (orderType: TypeProps['orderType']) => {
    try {
      const response = await axios.get<DataType[]>(`${orderType}`);
      setItems(response.data);
      console.log(response.data);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {orderType === 'products'
        ? items.map((item) => (
            <Products
              key={item.name}
              name={item.name}
              imagePath={item.imagePath}
            />
          ))
        : null}
    </div>
  );
};

export default Type;

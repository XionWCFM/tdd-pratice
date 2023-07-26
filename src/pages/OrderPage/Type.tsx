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
  const [isError, setIsError] = React.useState(false);
  useEffect(() => {
    void loadItems(orderType);
  }, [orderType]);

  const loadItems = async (orderType: TypeProps['orderType']) => {
    try {
      const response = await axios.get<DataType[]>(`/${orderType}`);
      setItems(response.data);
      return response;
    } catch (error) {
      setIsError(true);
    }
  };

  if (isError)
    return <div data-testid="error-banner">에러가 발생했습니다.</div>;

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

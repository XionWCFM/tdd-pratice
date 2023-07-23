import axios from 'axios';
import React, { useEffect } from 'react';

type DataType = string[];

interface TypeProps {
  orderType: 'products' | 'options';
}

const Type = ({ orderType }: TypeProps) => {
  const [items, setItems] = React.useState<DataType>([]);

  useEffect(() => {
    void loadItems(orderType);
  }, [orderType]);

  const loadItems = async (orderType: TypeProps['orderType']) => {
    try {
      const response = await axios.get<DataType>(`/${orderType}`);
      setItems(response.data);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const ItemComponents = orderType;

  return <div></div>;
};

export default Type;

import * as React from "react";
import axios from "axios";
import baseURL from "../../../../../baseURL";
import { ItemDiv } from "./styles";

type OrderItem = {
  name: string;
  price: number;
  quantity: number;
};

interface IOrderDetails {
  productID: string; // Pass the productId as a prop
  quantity: number;
}

export const OrderItem: React.FC<IOrderDetails> = ({ productID, quantity }) => {
  const [orderItem, setOrderItem] = React.useState<OrderItem | null>(null);

  const fetchData = async () => {
    try {
      const response = await axios.get<OrderItem>(
        `${baseURL}/product/${productID}`
      );

      setOrderItem(response.data);
    } catch (error) {
      console.log("Error fetching data", error);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <ItemDiv>
      <div className="line"></div>
      <div>
        <h5 className="title">{`${quantity} x ${orderItem?.name}`}</h5>
      </div>
    </ItemDiv>
  );
};

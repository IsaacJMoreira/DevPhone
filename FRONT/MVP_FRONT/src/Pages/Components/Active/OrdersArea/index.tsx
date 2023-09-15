import * as React from "react";
import axios from "axios";
import baseURL from "../../../../../baseURL";
import { UserDiv } from "./styles";
import { Card } from "../../Containers/Card/styles";
import { ButtonGlobal } from "../../Buttons/ButtonGlobal";
import { Link } from "react-router-dom";
import { CardContainer } from "../../Containers/cardContainer/styles";
type Items = {
  itemID: string;
  itemSKU: string;
  quantity: number;
};

type Address = {
  nikName: string;
  street: string;
  number: string;
  zipCode: string;
  neighborhood: string;
  city: string;
  state: string;
  country: string;
};

type Order = {
  _id: string;
  status: string;
  items: Items[];
  ownerID: string;
  shippingCode: string;
  enabled: boolean;
  address: Address;
  length: number;
};

interface IOrderDetails {
  userID: string; // Pass the productId as a prop
}

export const OrderDetails: React.FC<IOrderDetails> = ({ userID }) => {;
  const [orders, setOrders] = React.useState<Order | null | Order[]>(null);

  const fetchData = async () => {
    try {
      const responseAboutOrders = await axios.get<Order>(
        `${baseURL}/orders/${userID}`,
        {
          headers: {
            Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MDNhNTg0NGMyOTY5NjQzYmNjNDI4NCIsImVtYWlsIjoiaXNhYWNAZW1haWwuY29tIiwibmFtZSI6IklzYWFjIEplcm9uaW1vIE1vcmVpcmEiLCJjcmVkZW50aWFsIjoiQ0xJIiwiaWF0IjoxNjk0NzYyMjA3fQ.wk1f961Xh2hz-NsAQyGvRoF44D3cIlOmKeAEzao8JCY"}`,
          },
        }
      );

      setOrders(responseAboutOrders.data);
    } catch (error) {
      console.log("Error fetching data", error);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  if (!orders) {
    return (
      <>
        <h1>You don't have any orders yet!</h1>
        <h2>Don't worry, we can fix this.</h2>
        <Link to='/Shop'>Clicke here to buy the best 📱 in the 🌎!</Link>
      </>
    );
  }

  const ordersAmmount = orders.length;




  return (
    <UserDiv>
      
      <CardContainer className="ordersCard">
          <div>
            <h2 className="title">{`Your Order${ordersAmmount>1? "s": ""}`}</h2>
          </div>
        

        {
          orders.map((order) => {
            return (
              <Card className="orderCard" key={order._id}>
                <div>
                  <label htmlFor="orderDate">Order number </label>
                  <h4>{order._id}</h4>
                </div>
                <div className="line"></div>
                <div>
                  <div>
                    <label htmlFor="orderDate">Ordered at </label>
                    <p>{order.createdAt}</p>
                  </div>
                  <div>
                    <label htmlFor="status">Order Status </label>
                    <p>{order.status}</p>
                  </div>
                  <div>
                    <label htmlFor="shippingTo">Shipping to your </label>
                    <p>{order.address.nikName}</p>
                  </div>
                  <div>
                    <label htmlFor="shippingCode">Shipping Code </label>
                    <p>{order.shippingCode}</p>
                  </div>
                  <div>
                    <ButtonGlobal className="addressButtonUpdate">
                      {"Report Issue"}
                    </ButtonGlobal>
                  </div>
                </div>
              </Card>
            );
          })
        }
      </CardContainer>  
    </UserDiv>
  );
};

import * as React from "react";
import axios from "axios";
import baseURL from "../../../../../baseURL";
import { OrderDiv } from "./styles";
import { Card } from "../../Containers/Card/styles";
import { Link } from "react-router-dom";
import { CardContainer } from "../../Containers/cardContainer/styles";
import { OrderItem } from "../OrderItem";


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
  token: string
}

export const OrderDetails: React.FC<IOrderDetails> = ({ userID, token }) => {
  const [orders, setOrders] = React.useState<Order | null | Order[]>([]);

  const fetchData = async () => {
    try {
      const responseAboutOrders = await axios.get<Order | Order[]>(
        `${baseURL}/orders/${userID}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
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

  let ordersAmmount = 0;

  if (orders) {
    ordersAmmount = orders.length;
  }

  return (
    <OrderDiv key="orderdiv" className="OrderDiv">
      <CardContainer key='cardcont' className="ordersCard">
        <div>
          <h2 className="title">
            {ordersAmmount ? `Your Order${ordersAmmount > 1 ? "s" : ""}` : ""}
          </h2>
        </div>

        {ordersAmmount ? (
          orders.map((order) => {
            return (
              <Card className="orderCard" key={order._id}>
                <div>
                  <h3>Order number </h3>
                  <h5>{order._id}</h5>
                </div>
                <div className="line"></div>
                <div>
                  <div>
                    <h3>Ordered at </h3>
                    <p>{order.createdAt}</p>
                  </div>
                  <br />
                  <div>
                    <h3>Order Status </h3>
                    <p>{order.status}</p>
                  </div>
                  <br />
                  <div>
                    <h3>Shipping to your </h3>
                    <p>{order.address.nikName}</p>
                  </div>
                  <br />
                  <div>
                    <h3>Shipping Code </h3>
                    <p>{`${order.shippingCode !=" "? (`${order.shippingCode}`) : "n/a"}`}</p>
                  </div>
                  <br />
                  <div>
                  <div className="line"></div>
                    <div>
                      <h2>Items</h2>
                    </div>
                    <br />
                    <div>
                      {order.items.map((item) => {
                        return (
                          <>
                            <OrderItem
                              key={`${item.name}`}
                              productID={item.itemID}
                              quantity={item.quantity}
                            />
                          </>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </Card>
            );
          })
        ) : (
          <>
            <div>
              <h1>You don't have any orders yet!</h1>
              <h1>💔</h1>
            </div>

            <h2>Don't worry, we can fix this</h2>
            <Link to="/Shop">Clicke here to buy the best 📱 in the 🌎!</Link>
          </>
        )}
      </CardContainer>
    </OrderDiv>
  );
};

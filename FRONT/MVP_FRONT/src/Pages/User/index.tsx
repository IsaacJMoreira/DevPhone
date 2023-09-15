import { useParams } from "react-router-dom";
//Styleds:
import { MainStyled, FormStyled } from "./styled";

//Components:
import HeaderMenu from "../Components/HeaderMenu";
import Footer from "../Components/Footer";
import { UserDetails } from "../Components/Active/UserDetails";
import { BodySection } from "../Shop/styled";

import { OrderDetails } from "../Components/Active/OrdersArea";
import { ShopArea } from "../Components/Active/ShopArea";

export default function User() {
  const { userID } = useParams<{ userID?: string }>();

  console.log("user ID:", userID);

  if (!userID) {
    return (
      <>
        <HeaderMenu />
        <MainStyled>
          <FormStyled>
            <h1>Error: userID is missing</h1>
            <p>Please provide a valid user ID.</p>
          </FormStyled>
        </MainStyled>
        <Footer />
      </>
    );
  }
  return (
    <>
      <HeaderMenu />
      <BodySection>
        <UserDetails userID={userID ?? ""} />
        <OrderDetails userID={userID ?? ""} />
      </BodySection>

      <Footer />
    </>
  );
}

import { useParams } from "react-router-dom";
//Styleds:


//Components:
import HeaderMenu from "../Components/HeaderMenu";
import Footer from "../Components/Footer";
import { UserDetails } from "../Components/Active/UserDetails";
import { BodySection } from "../Shop/styled";

import { OrderDetails } from "../Components/Active/OrdersArea";
import { ProfileDiv } from "./styled";
import { TopPickForUser } from "../Components/Active/HomeShopArea";

export default function User() {
  const { userID } = useParams<{ userID?: string }>();

  console.log("user ID:", userID);

  if (!userID) {
    return (
      <>
        <HeaderMenu />
        
            <h1>Error: userID is missing</h1>
            <p>Please provide a valid user ID.</p>
    
        <Footer />
      </>
    );
  }
  return (
    <>
      <HeaderMenu />
      <ProfileDiv>
        <BodySection className="BodySection">
          <UserDetails userID={userID ?? ""} />
          <OrderDetails userID={userID ?? ""} />
          <TopPickForUser />
        </BodySection>
      </ProfileDiv>
      <Footer />
    </>
  );
}



import HeaderMenu from "../Components/HeaderMenu";
import Footer from "../Components/Footer";
import { UserDetails } from "../Components/Active/UserDetails";
import { BodySection } from "../Shop/styled";
import {  useContext } from 'react';
import { LogadoContext } from "../../Routes/Logado";
import { OrderDetails } from "../Components/Active/OrdersArea";
import { ProfileDiv } from "./styled";
import { TopPickForUser } from "../Components/Active/TopPickForUser";

export default function User() {
  
  const {user} = useContext(LogadoContext);
  console.log(user);

  

  if (!user?.token) {
    return (
      <>
        <HeaderMenu />
        
            <h1>Error: You are not logged in</h1>
            <p>Please login first.</p>
    
        <Footer />
      </>
    );
  }
  return (
    <>
      <HeaderMenu />
      <ProfileDiv>
        <BodySection className="BodySection">
          <UserDetails 
            userID={user.ID ?? ""} 
            token={user.token?? ""}/>
          <OrderDetails 
            userID={user.ID ?? ""}
            token={user.token?? ""} />
          <TopPickForUser />
        </BodySection>
      </ProfileDiv>
      <Footer />
    </>
  );
}

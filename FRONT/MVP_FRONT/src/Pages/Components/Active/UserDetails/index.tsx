import * as React from "react";
import axios from "axios";
import baseURL from "../../../../../baseURL";
import { UserDiv } from "./styles";
import { Card } from "../../Containers/Card/styles";
import { ButtonGlobal } from "../../Buttons/ButtonGlobal";

type Adress = {
  nikName: string;
  street: string;
  number: string;
  zipCode: string;
  neighborhood: string;
  city: string;
  state: string;
  country: string;
};

type User = {
  _id: string;
  name: string;
  email: string;
  credential: string; // CLI | ADM | INACTIVE
  password: string;
  address: Adress[];
  mainPhone: string;
};

interface IUserDetails {
  userID: string; // Pass the productId as a prop
}

export const UserDetails: React.FC<IUserDetails> = ({ userID }) => {
  const [userInfo, setUserInfo] = React.useState<User | null>(null);

  const fetchData = async () => {
    try {
      const responseAboutUser = await axios.get<User>(
        `${baseURL}/profile/${userID}`,
        {
          headers: {
            Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MDNhNTg0NGMyOTY5NjQzYmNjNDI4NCIsImVtYWlsIjoiaXNhYWNAZW1haWwuY29tIiwibmFtZSI6IklzYWFjIEplcm9uaW1vIE1vcmVpcmEiLCJjcmVkZW50aWFsIjoiQ0xJIiwiaWF0IjoxNjk0NzYyMjA3fQ.wk1f961Xh2hz-NsAQyGvRoF44D3cIlOmKeAEzao8JCY"}`,
          },
        }
      );

      setUserInfo(responseAboutUser.data);
    } catch (error) {
      console.log("Error fetching data", error);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  if (!userInfo) {
    return (
      <>
        <h1>Error: User not found</h1>
      </>
    );
  }

  const addressAmmount = userInfo.address.length;

  return (
    <UserDiv>
      <Card className="userCard">
        <Card className="userName">
          <div>
            <h2>{userInfo.name}</h2>
          </div>
        </Card>

        <Card className="personalInfo">
          <div>
            <div>
              <label className="personalInfoLabel">Personal Information</label>
            </div>
            <div className="line"></div>
            <div>
              <label htmlFor="name">Name </label>
            </div>
            <div>
              <input
                type="text"
                minLength={2}
                maxLength={30}
                placeholder={userInfo.name}
              />
            </div>
            <div>
              <label htmlFor="email">E-mail </label>
            </div>
            <div>
              <input type="email" placeholder={userInfo.email} />
            </div>
            <div>
              <label htmlFor="email">Phone </label>
            </div>
            <div>
              <input
                type="text"
                placeholder={
                  !userInfo.mainPhone ? "Register a number" : userInfo.mainPhone
                }
              />
            </div>
            <div>
              <ButtonGlobal className="userButtonUpdate">Update</ButtonGlobal>
            </div>
          </div>
        </Card>
        <Card className="title">
          <div>
            <h2>{userInfo.address.length > 1 ? "Adresses" : "Adress"}</h2>
          </div>
        </Card>

        {addressAmmount ? (
          userInfo.address.map((location) => {
            return (
              <Card className="addressCard" key={location.nikName}>
                <div>
                  <h2>{location.nikName}</h2>
                </div>
                <div className="line"></div>
                <div>
                  <div>
                    <label htmlFor="nikName">Adress Nikname: </label>
                    <input type="text" placeholder={location.nikName} />
                  </div>
                  <div>
                    <label htmlFor="street">Street: </label>
                    <input type="text" placeholder={location.street} />
                  </div>
                  <div>
                    <label htmlFor="number">Number: </label>
                    <input type="text" placeholder={location.number} />
                  </div>
                  <div>
                    <label htmlFor="zipCode">Zip Code: </label>
                    <input type="text" placeholder={location.zipCode} />
                  </div>
                  <div>
                    <label htmlFor="neighbohood">Neighbohood: </label>
                    <input type="text" placeholder={location.neighborhood} />
                  </div>
                  <div>
                    <label htmlFor="city">City: </label>
                    <input type="text" placeholder={location.city} />
                  </div>
                  <div>
                    <label htmlFor="satate">State: </label>
                    <input type="text" placeholder={location.state} />
                  </div>
                  <div>
                    <label htmlFor="country">Country: </label>
                    <input type="text" placeholder={location.country} />
                  </div>
                  <div>
                    <ButtonGlobal className="addressButtonUpdate">
                      {"Update"}
                    </ButtonGlobal>
                    <ButtonGlobal className="addressButtonDelete">
                      {"Delete"}
                    </ButtonGlobal>
                  </div>
                </div>
              </Card>
            );
          })
        ) : (
          <Card className="addressCard" key="noAdress">
            <div>
              <h2 className="WARNING">Register a Shipping Adress Below</h2>
            </div>
            <div>
              <div>
                <label htmlFor="nikName">Adress Nikname: </label>
                <input type="text" placeholder="Home" />
              </div>
              <div>
                <label htmlFor="street">Street: </label>
                <input type="text" placeholder="DevPhone Street" />
              </div>
              <div>
                <label htmlFor="number">Number: </label>
                <input type="text" placeholder="1234" />
              </div>
              <div>
                <label htmlFor="zipCode">Zip Code: </label>
                <input type="text" placeholder="60000000" />
              </div>
              <div>
                <label htmlFor="neighbohood">Neighbohood: </label>
                <input type="text" placeholder="Brooklyn" />
              </div>
              <div>
                <label htmlFor="city">City: </label>
                <input type="text" placeholder="New York" />
              </div>
              <div>
                <label htmlFor="satate">State: </label>
                <input type="text" placeholder="New York" />
              </div>
              <div>
                <label htmlFor="country">Country: </label>
                <input type="text" placeholder="USA" />
              </div>
              <ButtonGlobal className="addressButtonUpdate">
                {"Register"}
              </ButtonGlobal>
            </div>
          </Card>
        )}
      </Card>
    </UserDiv>
  );
};

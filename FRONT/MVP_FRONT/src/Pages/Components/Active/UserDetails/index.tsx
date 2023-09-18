import * as React from "react";
import axios from "axios";
import baseURL from "../../../../../baseURL";
import { UserDiv } from "./styles";
import { Card } from "../../Containers/Card/styles";
import { ButtonGlobal } from "../../Buttons/ButtonGlobal";

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

type User = {
  _id: string;
  name: string;
  email: string;
  credential: string; // CLI | ADM | INACTIVE
  password: string;
  address: Address[];
  mainPhone: string;
};

interface IUserDetails {
  userID: string; // Pass the productId as a prop
  token: string;
}

export const UserDetails: React.FC<IUserDetails> = ({ userID, token }) => {
  const [userInfo, setUserInfo] = React.useState<User | null>(null);
  const [newAddress, setNewAddress] = React.useState<Address | null>(null);
  const [addresses, setAdresses] = React.useState<Address[] | null>(null);

  const fetchData = async () => {
    try {
      const responseAboutUser = await axios.get<User>(
        `${baseURL}/profile/${userID}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setUserInfo(responseAboutUser.data);
    } catch (error) {
      console.log("Error fetching data cu");
    }
  };

  const updateData = async () => {
    try {
      console.log(userInfo);
      let addresses: Address[] = [];

      userInfo?.address.forEach((address) => {
        addresses.push({
          nikName: address.nikName,
          street: address.street,
          number: address.number,
          zipCode: address.zipCode,
          neighborhood: address.neighborhood,
          city: address.city,
          state: address.state,
          country: address.country,
        });
      });

      await axios.put(
        `${baseURL}/profile/${userID}`,
        {
          name: userInfo?.name,
          email: userInfo?.email,
          mainPhone: userInfo?.mainPhone,
          address: addresses,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (error) {
      console.log("Error udating", error);
    }
  };

  const deleteAddress = (index: number) => {
    try {
      let newAddressList = userInfo?.address;
      newAddressList?.splice(index, 1);
      setUserInfo({ ...userInfo, address: newAddressList });
      updateData();
    } catch (error) {}
  };

  const addAddress = (newAdress) => {
    try {
      let newAdressList = userInfo?.address;

      newAdressList.push({ ...newAdress });
      console.log(newAdressList);

      setUserInfo({ ...userInfo, address: newAdressList });
      console.log(newAdress);
      updateData();
    } catch (error) {}
  };

  const updateAddress = (index, change) => {
    setAdresses(userInfo?.address);
    let updatedAddresses = addresses;

    updatedAddresses.splice(index, 1, change) ;
    setAdresses(updatedAddresses);

    console.log(change, index, addresses);
  };

  React.useEffect(() => {
    fetchData();
    setAdresses(userInfo?.address);
  }, []);

  if (!userInfo) {
    return (
      <>
        <h1>Error: User not found</h1>
      </>
    );
  }

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
                onChange={(e) =>
                  setUserInfo({ ...userInfo, name: e.target.value })
                }
              />
            </div>
            <div>
              <label htmlFor="email">E-mail </label>
            </div>
            <div>
              <input
                type="email"
                placeholder={userInfo.email}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, email: e.target.value })
                }
              />
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
                onChange={(e) =>
                  setUserInfo({ ...userInfo, mainPhone: e.target.value })
                }
              />
            </div>
            <div>
              <ButtonGlobal className="userButtonUpdate" onClick={updateData}>
                Update
              </ButtonGlobal>
            </div>
          </div>
        </Card>
        <Card className="title">
          <div>
            <h2>{userInfo.address.length > 1 ? "Adresses" : "Adress"}</h2>
          </div>
        </Card>

        {userInfo.address.map((location, index) => {
          return (
            <Card className="addressCard" key={location.nikName}>
              <div>
                <h2>{location.nikName}</h2>
              </div>
              <div className="line"></div>
              <div>
                <div>
                  <label htmlFor="nikName">Adress Nikname: </label>
                  <input
                    type="text"
                    placeholder={location.nikName}
                    onChange={(e) => {
                      updateAddress(index, {
                        ...location,
                        nikName: e.target.value,
                      });
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="street">Street: </label>
                  <input type="text" placeholder={location.street} onChange={(e) => {
                      updateAddress(index, {
                        ...location,
                        street: e.target.value,
                      });
                    }}/>
                </div>
                <div>
                  <label htmlFor="number">Number: </label>
                  <input type="text" placeholder={location.number} onChange={(e) => {
                      updateAddress(index, {
                        ...location,
                        number: e.target.value,
                      });
                    }}/>
                </div>
                <div>
                  <label htmlFor="zipCode">Zip Code: </label>
                  <input type="text" placeholder={location.zipCode} onChange={(e) => {
                      updateAddress(index, {
                        ...location,
                        zipCode: e.target.value,
                      });
                    }}/>
                </div>
                <div>
                  <label htmlFor="neighbohood">Neighbohood: </label>
                  <input type="text" placeholder={location.neighborhood} onChange={(e) => {
                      updateAddress(index, {
                        ...location,
                        neighborhood: e.target.value,
                      });
                    }}/>
                </div>
                <div>
                  <label htmlFor="city">City: </label>
                  <input type="text" placeholder={location.city} onChange={(e) => {
                      updateAddress(index, {
                        ...location,
                        city: e.target.value,
                      });
                    }}/>
                </div>
                <div>
                  <label htmlFor="satate">State: </label>
                  <input type="text" placeholder={location.state} 
                  onChange={(e) => {
                    updateAddress(index, {
                      ...location,
                      state: e.target.value,
                    });
                  }}/>
                </div>
                <div>
                  <label htmlFor="country">Country: </label>
                  <input type="text" placeholder={location.country} 
                  onChange={(e) => {
                    updateAddress(index, {
                      ...location,
                      country: e.target.value,
                    });
                  }}/>
                </div>
                <div>
                  <ButtonGlobal
                    className="userButtonUpdate"
                    onClick={updateData}
                  >
                    Update
                  </ButtonGlobal>
                  <ButtonGlobal
                    className="userButtonUpdate"
                    onClick={() => deleteAddress(index)}
                  >
                    Delete
                  </ButtonGlobal>
                </div>
              </div>
            </Card>
          );
        })}
        <Card className="addressCard" key="noAdress">
          <div>
            <h2 className="WARNING">Register a Shipping Adress Below</h2>
          </div>
          <div>
            <div>
              <label htmlFor="nikName">Adress Nikname: </label>
              <input
                type="text"
                placeholder="Home"
                onChange={(e) =>
                  setNewAddress({ ...newAddress, nikName: e.target.value })
                }
              />
            </div>
            <div>
              <label htmlFor="street">Street: </label>
              <input
                type="text"
                placeholder="DevPhone Street"
                onChange={(e) =>
                  setNewAddress({ ...newAddress, street: e.target.value })
                }
              />
            </div>
            <div>
              <label htmlFor="number">Number: </label>
              <input
                type="text"
                placeholder="1234"
                onChange={(e) =>
                  setNewAddress({ ...newAddress, number: e.target.value })
                }
              />
            </div>
            <div>
              <label htmlFor="zipCode">Zip Code: </label>
              <input
                type="text"
                placeholder="60000000"
                onChange={(e) =>
                  setNewAddress({ ...newAddress, zipCode: e.target.value })
                }
              />
            </div>
            <div>
              <label htmlFor="neighbohood">Neighbohood: </label>
              <input
                type="text"
                placeholder="Brooklyn"
                onChange={(e) =>
                  setNewAddress({ ...newAddress, neighborhood: e.target.value })
                }
              />
            </div>
            <div>
              <label htmlFor="city">City: </label>
              <input
                type="text"
                placeholder="New York"
                onChange={(e) =>
                  setNewAddress({ ...newAddress, city: e.target.value })
                }
              />
            </div>
            <div>
              <label htmlFor="satate">State: </label>
              <input
                type="text"
                placeholder="New York"
                onChange={(e) =>
                  setNewAddress({ ...newAddress, state: e.target.value })
                }
              />
            </div>
            <div>
              <label htmlFor="country">Country: </label>
              <input
                type="text"
                placeholder="USA"
                onChange={(e) =>
                  setNewAddress({ ...newAddress, country: e.target.value })
                }
              />
            </div>
            <ButtonGlobal
              className="userButtonUpdate"
              onClick={() => addAddress({ ...newAddress })}
            >
              Register
            </ButtonGlobal>
          </div>
        </Card>
      </Card>
    </UserDiv>
  );
};

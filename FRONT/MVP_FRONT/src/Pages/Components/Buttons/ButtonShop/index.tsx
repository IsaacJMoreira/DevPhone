import React from 'react';
import { Link } from 'react-router-dom'; 
import { ButtonShopAll } from "./styled";

export default function ButtonShop() {
    return (
        <Link to="/shop"> {/* Set the "to" prop to the desired route */}
            <ButtonShopAll>Shop All</ButtonShopAll>
        </Link>
    );
}
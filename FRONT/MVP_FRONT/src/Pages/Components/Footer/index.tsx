import { FooterStyled } from "./styled"
import { Link } from 'react-router-dom';


export default function Footer(){
    return <FooterStyled>
        <div>
            <h1>Sign up for our newsletter</h1>
            <p>Be the first to know about our special offers, new product launches, and events</p>
            <input type="email" placeholder="Email Address"></input>
            <p><Link to="/" className="singup">Sign Up</Link></p>
        </div>
        <ul>
            <h2>Shop</h2>
            <li>Iphone</li>
            <li>Samsung</li>
            <li>Xiaomi</li>
            <li>Huawei</li>
            <li>Sony</li>
            <li>LG</li>
            <li>Acessories</li>
        </ul>
        <ul>
            <h2>Help</h2>
            <li>Help Center</li>
            <li>Order Status</li>
            <li>Returns & Warranty</li>
            <li>Contact Us</li>
        </ul>
        <ul>
            <h2>About</h2>
            <li>About Us</li>
            <li>Responsibility</li>
            <li>Technology & Innovation</li>
            <li>Explore our stories</li>
        </ul>
    </FooterStyled>
}
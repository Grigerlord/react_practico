import React, {useContext, useState} from 'react';
import '@styles/Header.scss'
import Menu from '@components/Menu';
import MyOrder from '../containers/MyOrder'
import icono from "@icons/icon_menu.svg"
import logoY from "@logos/logo_yard_sale.svg"
import AppContext from '../context/AppContext'
import shopping from "@icons/icon_shopping_cart.svg"

const Header = () => {
    const [toggle, setToggle] = useState(false)
    const [toggleOrders, setToggleOrders] = useState(false)
    const { state } = useContext(AppContext)

    const handleToggle = () => {
        setToggle(!toggle)
    }

    return (
        <nav>
            <img src={icono} alt="este es el menu" className="menu"/>
                <div className="navbar-left">
                    <img src={logoY} alt="logo" className="nav-logo"/>
                    <ul>
                        <li>
                            <a href="/all">All</a>
                        </li>
                        <li>
                            <a href="/clothes">Clothes</a>
                        </li>
                        <li>
                            <a href="/electronics">Electronics</a>
                        </li>
                        <li>
                            <a href="/furnitures">Furnitures</a>
                        </li>
                        <li>
                            <a href="/toys">Toys</a>
                        </li>
                        <li>
                            <a href="/others">Others</a>
                        </li>
                    </ul>
                </div>
                <div className="navbar-right">
                    <ul>
                        <li
                            className="navbar-email"
                            onClick={handleToggle}>
                                Griger@proyect.com
                        </li>
                        <li
                            className="navbar-shopping-cart"
                            onClick={() => setToggleOrders(!toggleOrders)}>
                                <img
                                    src={shopping}
                                    alt="shopping cart"/>
                            {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
                        </li>
                    </ul>
                </div>
                {toggle && <Menu/>}
                {toggleOrders && <MyOrder />}
        </nav>
    );
}

export default Header;
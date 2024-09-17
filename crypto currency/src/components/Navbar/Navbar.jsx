import React, { useContext } from 'react'
import "./Navbar.css"
import logo from "../../assets/cryptocurrency.png"
import { CoinContext } from '../../context/CoinContext'
import { Link } from 'react-router-dom'
const Navbar = () => {

  const {setCurrency} = useContext(CoinContext)

  const currencyHandler = (event) => {
    switch (event.target.value){
      case "usd": {
        setCurrency({name: "usd", symbol: "$"});
        break;
      }
      case "eur": {
        setCurrency({name: "eur", symbol: "£"});
        break;
      }
      case "inr": {
        setCurrency({name: "inr", symbol: "₹"});
        break;
      }
      default: {
        setCurrency({name: "inr", symbol: "₹"});
        break;
      }
      
    }

  }

  return (
    <div className='navbar'>
      <Link to={'/'}>
        <img src={logo} alt="" height={40} />
        </Link>
        <ul>
            <Link to={'/'}><li>Home</li></Link>
            <li>Features</li>
            <li>Pricing</li>
            <li>Blog</li>
        </ul>
        <div className="nav-right">
            <select onChange={currencyHandler}>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="inr">INR</option>
            </select>
            <button>Sign up</button>
        </div>
    </div>
  )
}

export default Navbar
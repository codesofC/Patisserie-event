import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { FiMenu } from "react-icons/fi"
import logo from "../../public/assets/logo.png"

const Navbar = () => {

    const [navDisplay, setNavDisplay] = useState(false)

    const handleNav = () => {
        setNavDisplay(!navDisplay)
    }

  return (
    <nav>
        <div className="logo-container">
            <Image src={logo} width="100" alt="Logo" />
        </div>
        <div className="nav-content">
            <div className="menu-mobile" onClick={handleNav}>
                <FiMenu />
            </div>
            <ul className={`${navDisplay ? 'active' : ''}`}>
                <li>
                    <Link href=''> HOME </Link>
                </li>
                <li>
                    <Link href=''> EVENTS </Link>
                </li>
                <li>
                    <Link href=''> CONTACT </Link>
                </li>
                <li>
                    <Link href=''> ABOUT US </Link>
                </li>
            </ul>
            <div className="order">
                <Link href=''>Order</Link>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
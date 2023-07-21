import Image from "next/image"
import logo from "../../public/assets/logo.png"
import brandImg from "../../public/assets/patty.webp" 

const BrandSection = () => {
  return (
    <section className="brand">
        <div className="brand-description">
            <div className="brand-logo-container">
                <Image src={logo} width={200} alt="Logo Picture" />
            </div>
            <span> Event 100% online and free </span>
            <div className="brand-text">
                Change your life with luxury handmade cake market
            </div>
            <span> from November 1st to 4th at 8pm </span>
            <form>
                <input type="email" name="email" placeholder="Enter your email here" />
                <button type="submit"> Receive my free access </button>
            </form>
        </div>  
        <div className="brand-image">
            <Image src={`https://www.youschool.fr/wp-content/uploads/2023/03/patissier-restaurant.png`} width={300} height={300} alt='Brand picture' />
        </div>
    </section>
  )
}

export default BrandSection
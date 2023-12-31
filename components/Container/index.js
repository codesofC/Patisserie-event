import Navbar from "../Navbar"
import Footer from "../Footer"

const Container = ({ children }) => {
  return (
    <>
        <Navbar />
        { children }
        <Footer />
    </>
  )
}

export default Container
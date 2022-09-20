import { Link } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";
import home from "../assets/imgs/home.png"
import contacto from "../assets/imgs/book.png"
import cake from "../assets/imgs/cake-slice.png"
const Navbarprin=()=>{
    return(
        <>
         <Navbar bg="danger" variant="dark">
         <Container className="container">
         
          <Link to="/" className="text-white text-decoration-none justify-content-start">
            <img className="img_home" src={home}/>Home
           </Link>
           <Link to="/contacto" className="text-white text-decoration-none justify-content-start">
           <img className="img_home" src={contacto}/>
            Contacto
          </Link>
          <Navbar.Brand className="justify-content-end">
            Happy Cake <img className="img_home" src={cake}/>
          </Navbar.Brand>
          
         </Container>
         </Navbar>
        </>
    )
}
export default Navbarprin;
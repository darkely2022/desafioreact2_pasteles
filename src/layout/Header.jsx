import Pastel from "../assets/imgs/pastel.jpg"
import pastel2 from "../assets/imgs/pastel2.jpg"
import pastel3 from "../assets/imgs/pastel3.jpg"
import pastel4 from "../assets/imgs/pastel4.jpg"
const Header=()=>{

    return(
    <>
        
        <div className="pastel_centrado">
            <img className="pastel"  src={Pastel} />
            <img className="pastel"  src={pastel2} />
            <img className="pastel"  src={pastel3} />
            <img className="pastel"  src={pastel4} />
        </div>
    </>
    )
}

export default Header;
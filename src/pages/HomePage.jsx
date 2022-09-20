import cake from "../assets/imgs/cake.png"
const HomePage=()=>{

    return(
        <>
            <div className="pastel_centrado">
            <h1>Bienvenido a Happy Cake</h1>
            <h4>El lugar de los pasteles felices</h4>
            <img className="pastel_home" src={cake}/>
            </div>
        </>
    )
}
export default HomePage;
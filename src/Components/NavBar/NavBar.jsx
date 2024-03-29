import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/Actions/logout";
import style from "./NavBar.module.css"
import image from '../../assets/logo-pedro-2.jpg'

export default function NavBar() {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    
    const handleLogout = (event) => {
       event.preventDefault();
       dispatch(logout());
       navigate(`/`);
    };

    const handleHome = (event) => {
        event.preventDefault();
        navigate(`/home`);
     };
 
    return (
    <div className={style.navbar}>
        <img src={image} alt="" />
        <h3> ENCUESTAS</h3>
       <button className={style.button1} type='submit' onClick={(event) => handleHome(event)}>Mi Perfil</button> 
       <button className={style.button2} type='submit' onClick={(event) => handleLogout(event)}>Cerrar Sesión</button>  
    </div>
    );
 }
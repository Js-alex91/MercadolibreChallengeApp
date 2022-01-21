import React from "react";
import logo from "../../public/asset/logo.png"
import SearchIcon from '@material-ui/icons/Search'
import { useForm } from "../hooks/useForm";

export const CajaDeBusqueda = () => {
    const [formValues, handleInputChange, reset] = useForm({
       busqueda:""
    });
    const {busqueda} = formValues
    const handleSearch = ()=>{
        console.log(busqueda)
    }
  return(
         <header className="header">
            <div className="logo-container">
                <img src={logo} alt="logo" />
            </div>
            <div className="form">
                <input type="text" className="textfield" name="busqueda" onChange={handleInputChange} value={busqueda} placeholder="Busqueda"/>
                <SearchIcon className="icon" onClick={handleSearch}/>
            </div>

         </header>
        )
  
};

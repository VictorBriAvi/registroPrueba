import { useState } from "react";
import { AiOutlineSave, AiOutlineRollback } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

import Swal from "sweetalert2";

import { Toast } from "../../Alert/Aler";
import useTiposDePagoLogic from "../../Hooks/useTiposDePago";
import "../../style/botones.css";
import { useThemeContext } from "../../context/ThemeContext";

const AgregarTipoDePago = () => {
  const navigate = useNavigate();
  const { addTipoDePago, tiposDePago } = useTiposDePagoLogic();
  const { contextTheme } = useThemeContext();

  const [tipoDePago, setTipoDePago] = useState({
    nombreTipoDePago: "",
  });
  const handleChange = (e) => {
    setTipoDePago({
      ...tipoDePago,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(tipoDePago);
    if (tipoDePago.nombreTipoDePago.trim() === "") {
      Toast.fire({
        icon: "error",
        title: "No estas agregando el servicio del producto",
      });
      return;
    }

    const tipoDePagoExistente = tiposDePago.find(
      (p) => p.nombreTipoDePago === tipoDePago.nombreTipoDePago
    );

    if (tipoDePagoExistente) {
      Toast.fire({
        icon: "error",
        title: "El codigo del producto ya esta existente",
      });
      return;
    }

    try {
      const response = await addTipoDePago(tipoDePago);
      Swal.fire(
        "Buen Trabajo!",
        "has agregado un nuevo tipo de pago!",
        "success"
      );
      navigate("/registrosPrueba/tiposDePago");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={`${contextTheme} contenedor`}>
      <div className="container">
        <div className="text-center">
          <h1>Agregar Tipos de pago</h1>
          <h5>Aca puedes agregar los tipos de pago</h5>
          <hr />
        </div>
        <div className="row">
          <div className="col-sm-12">
            <form onSubmit={handleSubmit}>
              <div>
                <div className="my-2">
                  <label htmlFor="1">
                    Ingrese el tipo de pago
                    <span className="text-danger  fw-bold">*</span>
                  </label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="1"
                    placeholder="tipoDePago"
                    name="nombreTipoDePago"
                    value={tipoDePago.nombreServicio}
                    onChange={handleChange}
                    pattern="[A-Za-z\s]+"
                  />
                  <label htmlFor="1">Ingrese el tipo de pago </label>
                </div>
              </div>

              <div className="boton">
                <button className="btn btn-primary font-weight-normal me-4">
                  {<AiOutlineSave />} Agregar
                </button>
                <Link to={"/registrosPrueba/tiposDePago"}>
                  <button className="btn btn-info font-weight-normal">
                    {<AiOutlineRollback />} Regresar
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgregarTipoDePago;

import { Link } from "react-router-dom";

import { AiFillDelete, AiFillEdit, AiFillFileAdd } from "react-icons/ai";

import { AiOutlineRollback } from "react-icons/ai";
import useGastosLogic from "../../Hooks/useGastosLogic";
import { useThemeContext } from "../../context/ThemeContext";
import "../../style/Inicio.css";
import "../../style/botones.css";
import DataTable from "../components/dataTable";

const Cierres = () => {
  const {
    gastos,
    isLoadingGasto,
    deleteGasto,
    paginaSiguiente,
    paginaAnterior,
  } = useGastosLogic();
  const { contextTheme } = useThemeContext();

  const columnaServicio = [
    { key: "nombreTipoDeGasto", label: "Tipo de gasto" },
    { key: "descripcionGasto", label: "Descripcion" },
    { key: "precioGasto", label: "Valor Gasto" },
  ];

  if (isLoadingGasto) {
    return <p>Cargando...</p>;
  }
  return (
    <div className={`${contextTheme} contenedor`}>
      <div className="container" id={contextTheme}>
        <div className="row">
          <div className="col-md-12">
            <div className="boton_servicios">
              <h1>Gastos</h1>
              <div>
                <Link to={"/registrosPrueba/gastos/TiposDeGastos"}>
                  <button className="btn btn-outline-primary me-3">
                    Tipos de gastos
                  </button>
                </Link>
              </div>
            </div>

            <hr />
            <div className="boton">
              <div className="container my-2">
                <Link to={`/registrosPrueba/crear-tipoDeGasto`}>
                  <button className="btn btn-primary font-weight-normal ">
                    {<AiFillFileAdd />} Agregar
                  </button>
                </Link>
              </div>
              <div className="container my-2">
                <Link to={"/registrosPrueba/"}>
                  <button className="btn btn-info font-weight-normal text-white    ">
                    {<AiOutlineRollback />} Regresar
                  </button>
                </Link>
              </div>
            </div>
            <div className="table-responsive">
              <DataTable
                columnaServicio={columnaServicio}
                data={gastos}
                deleteData={deleteGasto}
                paginaSiguiente={paginaSiguiente}
                paginaAnterior={paginaAnterior}
                editUrl="/registrosPrueba/gastos/editar-gasto"
              />
              {/**
              <table className="table table-striped table-hover table-borderless ">
                <thead>
                  <tr>
                    <th>Tipo de gasto</th>
                    <th>Descripcion </th>
                    <th>Valor Gasto</th>
                  </tr>
                </thead>
                <tbody>
                  {gastos.map((gasto) => (
                    <tr key={gasto.id}>
                      <td>{gasto.nombreTipoDeGasto}</td>
                      <td>{gasto.descripcionGasto}</td>
                      <td>{gasto.precioGasto}</td>

                      <td>
                        <Link to={`/registrosPrueba/gastos/editar-gasto/${gasto.id}`}>
                          <button className="btn btn-primary font-weight-normal me-3">
                            {<AiFillEdit />}
                          </button>
                        </Link>

                        <button
                          onClick={() => deleteGasto(gasto.id)}
                          className="btn btn-danger font-weight-normal "
                        >
                          {<AiFillDelete />}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
               */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cierres;

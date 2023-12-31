import { Link } from "react-router-dom";

//Importacion de iconos
import { AiFillFileAdd, AiOutlineRollback } from "react-icons/ai";

import useProductoLogic from "../../Hooks/useProductoLogic";
import { useThemeContext } from "../../context/ThemeContext";
import "../../style/Inicio.css";
import "../../style/botones.css";
import DataTable from "../components/dataTable";

const Productos = () => {
  const {
    productos,
    deleteProducto,
    isLoading,
    paginaSiguiente,
    paginaAnterior,
  } = useProductoLogic();
  const { contextTheme } = useThemeContext();

  const columnaServicio = [
    { key: "codigoProducto", label: "Codigo Producto" },
    { key: "nombreProducto", label: "Nombre Producto" },
    { key: "descripcionProducto", label: "Descripcion Producto" },
    { key: "precioProducto", label: "Precio Producto" },
  ];

  console.log(contextTheme);
  if (isLoading) {
    return <p>Cargando...</p>;
  }

  return (
    <div className={`${contextTheme} contenedor`}>
      <h1 className="text-center ">Stock</h1>
      <hr />
      <div className="container">
        <div>
          <div>
            <div className="container boton ">
              <Link to={`/registrosPrueba/crear-producto/`}>
                <button className="btn btn-primary font-weight-normal ">
                  {<AiFillFileAdd />} Agregar
                </button>
              </Link>
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
              data={productos}
              deleteData={deleteProducto}
              paginaSiguiente={paginaSiguiente}
              paginaAnterior={paginaAnterior}
              editUrl="/registrosPrueba/editar-producto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productos;

{
  /**
            <table
              className={`table table-${contextTheme} table-striped table-hover table-borderless `}
            >
              <thead>
                <tr>
                  <th>Codigo Producto</th>
                  <th>Nombre Producto</th>
                  <th>Descripcion Producto</th>
                  <th>Precio Producto</th>
                </tr>
              </thead>
              <tbody>
                {productos.map((producto) => (
                  <tr key={producto.id}>
                    <td>{producto.codigoProducto}</td>
                    <td>{producto.nombreProducto}</td>
                    <td>{producto.descripcionProducto}</td>
                    <td>{producto.precioProducto}</td>

                    <td>
                      <Link to={`/registros/editar-producto/${producto.id}`}>
                        <button className="btn btn-primary font-weight-normal ">
                          {<AiFillEdit />}
                        </button>
                      </Link>

                      <button
                        onClick={() => deleteProducto(producto.id)}
                        className="btn btn-danger font-weight-normal "
                      >
                        {<AiFillDelete />}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

*/
}

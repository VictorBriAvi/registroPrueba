import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import { Routes, Route } from "react-router-dom";
import AgregarProducto from "./components/productos/AgregarProducto";
import Inicio from "./components/Inicio";
import EditarProducto from "./components/productos/EditarProducto";
import Productos from "./components/productos/Productos";
import Servicios from "./components/servicios/Servicios";
import Colaboradores from "./components/servicios/Colaboradores";
import AgregarColaborador from "./components/servicios/AgregarColaborador";
import EditarColaborador from "./components/servicios/EditarColaborador";
import Clientes from "./components/servicios/Clientes";
import AgregarCliente from "./components/servicios/AgregarCliente";
import EditarCliente from "./components/servicios/EditarCliente";
import TiposDeServicios from "./components/servicios/TiposDeServicios";
import AgregarTipoDeServicio from "./components/servicios/AgregarTipoDeServicio";
import EditarTipoDeServicio from "./components/servicios/EditarTipoDeServicio";
import TiposDePago from "./components/servicios/TiposDePago";
import AgregarTipoDePago from "./components/servicios/AgregarTipoDePago";
import EditarTipoDePago from "./components/servicios/EditarTipoDePago";
import AgregarServicio from "./components/servicios/AgregarServicio";
import EditarServicio from "./components/servicios/EditarServicio";
import Gastos from "./components/gastos/Gastos";
import AgregarGasto from "./components/gastos/AgregarGasto";
import TiposDeGastos from "./components/gastos/TiposDeGastos";
import AgregarTipoDeGasto from "./components/gastos/AgregarTipoDeGasto";
import EditarTipoDegasto from "./components/gastos/EditarTipoDegasto";
import EditarGasto from "./components/gastos/EditarGasto";
import ArqueoDeCaja from "./components/arqueo-de-caja/ArqueoDeCaja";
import CalculosPorcentaje from "./components/servicios/CalculosPorcentaje";

function App() {
  return (
    <Routes>
      <Route path="/registrosPrueba/" element={<Inicio />}></Route>
      {/** Aca comienza el route de productos */}
      <Route path="/registrosPrueba/productos" element={<Productos />}></Route>
      <Route
        path="/registrosPrueba/crear-producto"
        element={<AgregarProducto />}
      ></Route>
      <Route
        path="/registrosPrueba/editar-producto/:id"
        element={<EditarProducto />}
      ></Route>

      {/** Aca comienza el route de servicios */}
      <Route path="/registrosPrueba/servicios" element={<Servicios />}></Route>
      <Route
        path="/registrosPrueba/crear-servicio/"
        element={<AgregarServicio />}
      ></Route>
      <Route
        path="/registrosPrueba/editar-servicio/:id"
        element={<EditarServicio />}
      ></Route>

      {/** Aca comienza el route de colaboradores */}
      <Route
        path="/registrosPrueba/colaboradores"
        element={<Colaboradores />}
      ></Route>
      <Route
        path="/registrosPrueba/crear-colaborador"
        element={<AgregarColaborador />}
      ></Route>
      <Route
        path="/registrosPrueba/editar-colaboradores/:id"
        element={<EditarColaborador />}
      />
      {/** Aca comienza el route de clientes */}
      <Route path="/registrosPrueba/clientes" element={<Clientes />}></Route>
      <Route
        path="/registrosPrueba/crear-cliente"
        element={<AgregarCliente />}
      ></Route>
      <Route
        path="/registrosPrueba/editar-cliente/:id"
        element={<EditarCliente />}
      ></Route>

      {/** Aca comienza el route de tipos de servicios */}
      <Route
        path="/registrosPrueba/tiposDeServicios"
        element={<TiposDeServicios />}
      ></Route>
      <Route
        path="/registrosPrueba/crear-tipoDeServicio"
        element={<AgregarTipoDeServicio />}
      ></Route>
      <Route
        path="/registrosPrueba/editar-tipoDeServicio/:id"
        element={<EditarTipoDeServicio />}
      />

      <Route
        path="/registrosPrueba/servicios/porcentaje"
        element={<CalculosPorcentaje />}
      />

      {/** Aca comienza el route de tipos de pago */}
      <Route
        path="/registrosPrueba/tiposDePago"
        element={<TiposDePago />}
      ></Route>
      <Route
        path="/registrosPrueba/crear-tipoDePago"
        element={<AgregarTipoDePago />}
      ></Route>
      <Route
        path="/registrosPrueba/editar-tipoDePago/:id"
        element={<EditarTipoDePago />}
      ></Route>
      {/** Aca comienza el route de cierres de venta */}
      <Route path="/registrosPrueba/gastos" element={<Gastos />}></Route>
      <Route
        path="/registrosPrueba/gastos/editar-gasto/:id"
        element={<EditarGasto />}
      ></Route>
      <Route
        path="/registrosPrueba/crear-tipoDeGasto"
        element={<AgregarGasto />}
      ></Route>

      {/** Aca comienza el route de tipos de gastos*/}
      <Route
        path="/registrosPrueba/gastos/TiposDeGastos"
        element={<TiposDeGastos />}
      ></Route>
      <Route
        path="/registrosPrueba/gastos/TiposDeGastos/Agregar-TipoDeGasto"
        element={<AgregarTipoDeGasto />}
      ></Route>
      <Route
        path="/registrosPrueba/gastos/TiposDeGastos/editar-tipoDeGasto/:id"
        element={<EditarTipoDegasto />}
      ></Route>

      {/** Aca comienza el arqueo de caja*/}
      <Route
        path="/registrosPrueba/arqueo-de-caja"
        element={<ArqueoDeCaja />}
      ></Route>
    </Routes>
  );
}

export default App;

import { Link, Outlet, useLocation } from "react-router-dom";

function Home() {

  const { pathname } = useLocation()

  return (
    <div className="layout_container">
      <h1>BUSCADOR DE ENDEREÇO</h1>
      <div className="link_container">
        <Link to="/" className={`tab ${pathname === "/" ? "active" : ""}`}>Buscar Endereço</Link>
        |
        <Link to="buscar-cep" className={`tab ${pathname === "/buscar-cep" ? "active" : ""}`}>Buscar CEP</Link>
      </div>
      <Outlet />
    </div>
  );
}

export default Home;

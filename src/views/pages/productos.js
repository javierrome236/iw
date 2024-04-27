import React from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DemoFooter from "components/Footers/DemoFooter";
import SectionProductos from "views/sections/productos-sections/sectionProductos";

function Productos() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <>
      <IndexNavbar />
      <IndexHeader />
      <div className="main">
        <div className="page-title">
          <h1>Productos</h1>
        </div>
        <SectionProductos />
      </div>
      <br/>
      <DemoFooter className="index-page"/>
    </>
  );
}

export default Productos;




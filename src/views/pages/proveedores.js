import React from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DemoFooter from "components/Footers/DemoFooter";
import SectionProveedores from "views/sections/proveedor-sections/sectionProveedores";

function Proveedores() {
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
          <h1>Proveedores</h1>
        </div>
        <SectionProveedores />
      </div>
      <br/>
      <DemoFooter className="index-page"/>
    </>
  );
}

export default Proveedores;




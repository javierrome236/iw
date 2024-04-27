/*!

=========================================================
* Paper Kit React - v1.3.2
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'
// reactstrap components

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import DemoFooter from "components/Footers/DemoFooter";
import IndexHeader from "components/Headers/IndexHeader.js";

import SectionProducto from "views/sections/productos-sections/sectionProducto.js";

function Producto() {

    const { id } = useParams();
    const [producto, setProducto] = useState()

    useEffect(() => {
        axios({
            method: "get",
            url: "http://localhost:8000/producto/" + id,
        })
            .then((response) => {
                setProducto(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [])

    return (
        <>
            <IndexNavbar />
            <IndexHeader />
            <div className="main">
                {
                    producto &&
                    <SectionProducto
                        key={producto.pk}
                        producto={producto}
                    />
                }
            </div>
            <br />

            <DemoFooter className="index-page" />
        </>
    );
}

export default Producto;

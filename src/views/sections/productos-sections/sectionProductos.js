import React, { useEffect, useState } from "react";
import axios from "axios";

import SectionProducto from "views/sections/productos-sections/sectionProducto"

export const SectionProductos = () => {
    const [productos, setProductos] = useState([]);

    const [formData, setFormData] = useState({
        idUser: 1,
        name: "",
        description: "",
        price: 0
    });

    useEffect(() => {
        axios({
            method: "get",
            url: 'http://127.0.0.1:8000/producto/',
        })
            .then((response) => {
                console.log(response.data)
                setProductos([...response.data]);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios({
            method: "post",
            url: "https://d7p0dzf3-8000.uks1.devtunnels.ms/producto/",
            data: formData
        })
            .then((response) => {
                console.log("Producto creado:", response.data);
                setFormData({
                    idUser: 1,
                    name: "",
                    description: "",
                    price: 0
                });
                // Vuelve a cargar la lista de productos después de crear un producto
                axios({
                    method: "get",
                    url: 'http://127.0.0.1:8000/producto/',
                })
                    .then((response) => {
                        setProductos([...response.data]);
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            })
            .catch((error) => {
                console.error("Error al crear el producto:", error);
            });
    };


    return (

        <div id="section">

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nombre:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="description">Descripción:</label>
                    <input
                        type="text"
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="price">Precio:</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" class="btn btn-info">Crear Producto</button>
            </form>

            {productos.length > 0 ? (
                <>
                    <h2>Lista de productos</h2>
                    {productos.map((producto) => (
                        <SectionProducto
                            key={producto.pk}
                            producto={producto}
                        />
                    ))}
                </>
            ) : (
                <h2>Añade algún producto para ver sus datos</h2>
            )}
        </div>
    );
};

export default SectionProductos;

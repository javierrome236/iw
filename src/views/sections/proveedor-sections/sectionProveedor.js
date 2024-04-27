import React from "react";

export const SectionProveedor = (props) => {
    const { proveedor, proveedorName } = props;

    return (
        <div id="section">
            <h6 key={proveedor.pk}>{proveedorName}</h6>
        </div>
    );
};

export default SectionProveedor;

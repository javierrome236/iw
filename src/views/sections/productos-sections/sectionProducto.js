import React from "react";

export const SectionProducto = (props) => {
    const { producto } = props;

    return (
        <div id="section">
            <h6 key={producto.pk}>{producto.name}</h6>
        </div>
    );
};

export default SectionProducto;

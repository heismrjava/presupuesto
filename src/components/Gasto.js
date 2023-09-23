import React from "react";

const Gasto = ({gasto}) => (
    <li className="gasto">
        <p>
            {gasto.nombre}
            <span className="gasto">{gasto.cantidad} XAF</span>
        </p>
    </li>
)

export default Gasto;
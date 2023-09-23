import React, { Fragment } from "react";

const ControlPresupuesto = (presupuesto, restante) => {
    return (
        <Fragment>
            <div className="alert alert-primary">
                Presupuesto: {presupuesto} XAF
            </div>
            <div className="alert">
                Restante: {restante} XAF
            </div>
        </Fragment>
    )
}

export default ControlPresupuesto;
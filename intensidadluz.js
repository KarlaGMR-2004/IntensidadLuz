import React, { useState } from "react";

export function IntensidadLuz() {
    const intensidades = ["apagado", "encendido al 25%", "encendido al 50%", "encendido al 75%", "encendido al 100%"];
    const [inten, setInten] = useState(0);
    const initialState = 0;

    function aumentar() {
        if (inten < intensidades.length - 1) {
            setInten(inten + 1);
        } else {
            setInten(0);
        }
    }

    function disminuir() {
        if (inten === 0) {
            setInten(intensidades.length - 1);
        } else {
            setInten(inten - 1);
        }
    }

    function resetear() {
        setInten(initialState);
    }

    return (
        <>
            <div>Estado de luz: {intensidades[inten]}</div>
            <button onClick={aumentar}>Aumentar</button>
            <button onClick={disminuir}>Disminuir</button>
            <button onClick={resetear}>Resetear</button>
        </>
    );
}


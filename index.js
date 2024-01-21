import React from "react";
import ReactDom from "react-dom/client";
import { IntensidadLuz } from "./components/intensidadluz";

const root=ReactDom.createRoot(document.getElementById("root"));

root.render(
    <>
        <IntensidadLuz />
    </>
)
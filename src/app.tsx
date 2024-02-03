import React from "react";
import { createRoot } from "react-dom/client";
import GenericComponent from "./GenericComponent";

const rootElement = document.getElementById("root");

if (rootElement) {
    createRoot(rootElement).render(<GenericComponent />);
} else {
    console.error("Failed to find the root element");
}

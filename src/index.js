import React from "react";
import { createRoot } from "react-dom/client";

import MainContent from "./js/MainContent";
import "./styles/Index.css";

// ------------------------------------- Render Elements on browser -------------------------------------

// Select the root element in the HTML where the React app will be rendered
const rootElement = document.querySelector("#root");

// Check if the root element exists; throw an error if it doesn't
if (!rootElement) throw new Error("Failed to find the root h1");

// Create a root for the React app to render into
const root = createRoot(rootElement);

// Render the MainContent component into the root
root.render(<MainContent />);

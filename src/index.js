import React from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import App from "./app";
import { NavigationProvider } from "./context/navigation";

const el = document.getElementById("root");

const Root = createRoot(el);

Root.render(
  <NavigationProvider>
    <App />
  </NavigationProvider>
);

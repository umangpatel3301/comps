import React from "react";
import "./index.css"
import { createRoot } from "react-dom/client";
import App from "./app";

const el = document.getElementById('root')

const Root = createRoot(el)

Root.render(<App />)
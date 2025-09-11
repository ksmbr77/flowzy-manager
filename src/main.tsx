import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Enable smooth scrolling for the entire document
document.documentElement.classList.add('smooth-scroll');

createRoot(document.getElementById("root")!).render(<App />);

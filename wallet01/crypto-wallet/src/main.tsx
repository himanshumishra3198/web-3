import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { SeedProvider } from "./components/context/SeedContext";
import "./index.css";
import Layout from "./Layout";
import Home from "./components/Home";
import About from "./components/About";
import Etherium from "./components/Ethereum";
import Solona from "./components/Solona";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { KeyProvider } from "./components/context/KeyContext";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="etherium" element={<Etherium />} />
      <Route path="solona" element={<Solona />} />
    </Route>
  )
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <KeyProvider>
      <SeedProvider>
        <RouterProvider router={router} />
      </SeedProvider>
    </KeyProvider>
  </StrictMode>
);

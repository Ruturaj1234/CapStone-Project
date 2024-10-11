import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import User from "./components/User/User.jsx";
import content from "./components/content/content.jsx";
import ImageSlider from "./components/ImageSlider/imageslider.jsx";
import ClientPage from "./components/ClientPage/ClientPage.jsx";
import ProductPage from "./components/Product/ProductPage.jsx";
import ProductDetailPage from "./components/Product/ProductDetailPage.jsx";
import ApplicationPage from "./components/Application/ApplicationPage.jsx";
import CustomSlider from "./components/Application/CustomSlider.jsx";

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:userid" element={<User />} />
      <Route path="content" element={<content />} />
      <Route path="imageslider" element={<ImageSlider />} />
      <Route path="ClientPage" element={<ClientPage />} />
      <Route path="ProductPage" element={<ProductPage />} />
      <Route path="/products/:id" element={<ProductDetailPage />} />
      <Route path="ApplicationPage" element={<ApplicationPage />} />
      <Route path="CustomSlider" element={<CustomSlider />} />
    
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


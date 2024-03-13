import logo from "./logo.svg";
import "./App.css";
import Nav from "./Components/Nav/Nav";
import Home from "./Components/Home/Home";
import { createBrowserRouter, RouterProvider, Routes } from "react-router-dom";
import FigureOne from "./Components/FigureOne/FigureOne";
import FigureThree from "./Components/FigureThree/FigureThree";
import FigureTwo from "./Components/FigureTwo/FigureTwo";
import LayOut from "./Components/LayOut/LayOut";
function App() {
  const routes = createBrowserRouter([
    {
      path: "/",  element: <LayOut />,
      children: [
        { index: true, path: "/", element: <Home /> },
        { path: "figureOne", element: <FigureOne /> },
        { path: "figureTwo", element: <FigureTwo /> },
        { path: "figureThree", element: <FigureThree /> },
        { path: "*", element: <h1 className="bg-danger">Not Found</h1> },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;

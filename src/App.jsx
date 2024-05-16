import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home";
import Video from "./pages/Video";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/video",
    element: <Video />,
  },
]);

function App() {
  return (
    <>
      <main className="min-h-screen flex p-4 gap-2">
        <Sidebar />
        <div className="flex flex-col w-full">
          <Header />
          <RouterProvider router={router} />
        </div>
      </main>
    </>
  );
}

export default App;

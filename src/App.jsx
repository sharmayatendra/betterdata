import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;

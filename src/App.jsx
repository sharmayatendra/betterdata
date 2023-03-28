import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";
import { store } from "./app/store";
import Header from "./components/Header";

function App() {
  return (
    <Provider store={store}>
      <div className="bg-gray-100 min-h-screen no-scrollbar">
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
}

export default App;

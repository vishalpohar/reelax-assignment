import Header from "./components/layout/Header";
import CheckoutPage from "./pages/CheckoutPage";

import "./App.css";

const App = () => {
  return (
    <main className="min-h-screen flex flex-col bg-[#F2F2F2]">
      <Header />
      <CheckoutPage />
    </main>
  );
};

export default App;

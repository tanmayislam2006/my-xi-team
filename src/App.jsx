// Toastify is a library for notifications.
// { ToastContainer, toast } ToastContainer is a component and toast is a function.
import { ToastContainer, toast } from "react-toastify";
// added toastify defult styles
import "react-toastify/dist/ReactToastify.css";
import React, { useState } from "react";
import Navbar from "./Component/Navbar/Navbar";

const App = () => {
  const [blance, setBlance] = useState(20000);
  return (
    <div className="font-sora max-w-7xl mx-auto">
      <Navbar blance={blance}></Navbar>
    </div>
  );
};

export default App;

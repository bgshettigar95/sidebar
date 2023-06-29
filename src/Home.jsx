import React from "react";
import { useGlobalContext } from "./AppContext";
import { FaBars } from "react-icons/fa";

const Home = () => {
  const { openModal, openSideBar } = useGlobalContext();
  console.log(openModal);
  return (
    <main>
      <button className="sidebar-toggle" onClick={openSideBar}>
        <FaBars />
      </button>
      <button className="btn" onClick={openModal}>
        Show Modal
      </button>
    </main>
  );
};

export default Home;

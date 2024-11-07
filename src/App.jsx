import "./App.css";
import { useEffect, useState } from "react";
import LightMobile from "./assets/images/bg-mobile-light.jpg";
import DarkMobile from "./assets/images/bg-mobile-dark.jpg";
import LightDesktop from "./assets/images/bg-desktop-light.jpg";
import DarkDesktop from "./assets/images/bg-desktop-dark.jpg";

import Header from "./components/Header";
import InputTodo from "./components/InputTodo.jsx";
import ListTodo from "./components/ListTodo.jsx";
import { list } from "./data/ListData.json";
import Footer from "./components/Footer.jsx";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [listObj, setListObj] = useState([]);
  const [itemsLeft, setItemsLeft] = useState(0);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1439);

  useEffect(() => {
    setListObj(list);

    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1439); // Handle window resize event
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const backgroundImage = isDesktop
    ? darkMode
      ? DarkDesktop
      : LightDesktop
    : darkMode
    ? DarkMobile
    : LightMobile;

  return (
    <main className="todo_container">
      <section
        className="todo_section_container"
        style={{
          backgroundColor: !darkMode
            ? "var(--Very_Light_Gray)"
            : "var(--Very_Dark_Blue)",
        }}
      >
        <img
          src={backgroundImage}
          alt="Fondo de la aplicación"
          className="img_fondo"
        />

        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <InputTodo
          listObj={listObj}
          setListObj={setListObj}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
        {!listObj.length ? (
          <p className="nodata">No hay datos en la lista</p>
        ) : (
          <ListTodo
            listObj={listObj}
            setListObj={setListObj}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            itemsLeft={itemsLeft}
            setItemsLeft={setItemsLeft}
          />
        )}

        <Footer
          listObj={listObj}
          setListObj={setListObj}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          itemsLeft={itemsLeft}
          setItemsLeft={setItemsLeft}
        />
      </section>
    </main>
  );
}

export default App;

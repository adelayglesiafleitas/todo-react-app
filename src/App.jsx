import "./App.css";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import LightMobile from "./assets/images/bg-mobile-light.jpg";
import DarkMobile from "./assets/images/bg-mobile-dark.jpg";
import InputTodo from "./components/InputTodo.jsx";
import ListTodo from "./components/ListTodo.jsx";
import { list } from "./data/ListData.json";
import Footer from "./components/Footer.jsx";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [listObj, setListObj] = useState([]);

  

  useEffect(() => {
    // Set the initial state to the imported list
    setListObj(list);
  }, []);

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
          src={!darkMode ? LightMobile : DarkMobile}
          alt="background image"
          className="img_fondo"
        />
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <InputTodo
          listObj={listObj}
          setListObj={setListObj}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
        {!listObj ? (
          <p className="nodata">No hay datos en la lista</p>
        ) : (
          <ListTodo
            listObj={listObj}
            setListObj={setListObj}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
        )}

        <Footer
          listObj={listObj}
          setListObj={setListObj}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
      </section>
    </main>
  );
}

export default App;

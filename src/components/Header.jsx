import Sun from "../assets/images/icon-sun.svg";
import Moon from "../assets/images/icon-moon.svg";
import "../styles/Header.css";

const Header = ({ darkMode, setDarkMode }) => {
  const toggleDarkMode = () => {
    setDarkMode((previous) => !previous);
  };

  return (
    <>
      <header className="header_container">
        <h2 className="josefin_sans_700">T O D O</h2>
        {!darkMode ? (
          <img src={Moon} alt="icon_sun" onClick={toggleDarkMode} />
        ) : (
          <img src={Sun} alt="icon_moon" onClick={toggleDarkMode} />
        )}
      </header>
    </>
  );
};

export default Header;

import "../styles/Footer.css";

const Footer = ({ listObj, setListObj, darkMode, setDarkMode }) => {
  const complete = () => {
    const newList = listObj.filter((data) => !data.select);
    setListObj(newList);
  };
  const all = () => {
    setListObj([]);
  };
  const Active = () => {
    const updatedList = listObj.map((data) => {
      return { ...data, select: true }; // Usamos return para devolver el nuevo objeto
    });
    setListObj(updatedList);
  };

  return (
    <footer>
      <section
        className="Footer_container josefin_sans_400"
        style={{
          background: darkMode
            ? "var(--Very_Dark_Desaturated_Blue)"
            : "var(--Very_Light_Gray)",
        }}
      >
        <p onClick={all}>All</p>
        <p onClick={Active}>Active</p>
        <p onClick={complete}>Completed</p>
      </section>
      <p className="josefin_sans_400 Drag ">Drag and drop to reorder list</p>
    </footer>
  );
};

export default Footer;

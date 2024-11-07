import "../styles/Footer.css";

const Footer = ({
  listObj,
  setListObj,
  darkMode,
  setDarkMode,
  itemsLeft,
  setItemsLeft,
}) => {
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

  const deleteSelectAll = () => {
    const newList = listObj.filter((data) => !data.select);
    setListObj(newList);
  };

  return (
    <footer>
      <section
        className="Footer_container josefin_sans_400 resposive_movil"
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

      {/**responsive */}
      <section
        className="listTodo_list_container final resposive_pc"
        style={{
          borderTopLeftRadius: "5px",
          borderTopRightRadius: "5px",
          background: darkMode
            ? "var(--Very_Dark_Desaturated_Blue)"
            : "var(--Very_Light_Gray)",
        }}
      >
        <p
          className="lefts"
          style={{
            background: darkMode
              ? "var(--Very_Dark_Desaturated_Blue)"
              : "var(--Very_Light_Gray)",
          }}
        >{`${itemsLeft} items left`}</p>

        <div
          className="Footer_containerResp josefin_sans_400"
          style={{
            background: darkMode
              ? "var(--Very_Dark_Desaturated_Blue)"
              : "var(--Very_Light_Gray)",
          }}
        >
          <p onClick={all}>All</p>
          <p onClick={Active}>Active</p>
          <p onClick={complete}>Completed</p>
        </div>

        <p
          className="josefin_sans_400 close clear_Complete"
          onClick={deleteSelectAll}
          style={{
            background: darkMode
              ? "var(--Very_Dark_Desaturated_Blue)"
              : "var(--Very_Light_Gray)",
          }}
        >
          Clear Completed
        </p>
      </section>

      <p className="josefin_sans_400 Drag ">Drag and drop to reorder list</p>
    </footer>
  );
};

export default Footer;

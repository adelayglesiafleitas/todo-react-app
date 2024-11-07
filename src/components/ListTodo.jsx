import IconCheck from "../assets/images/icon-check.svg";
import Close from "../assets/images/close.svg";
import "../styles/ListTodo.css";
import { useEffect, useState } from "react";

const ListTodo = ({
  listObj,
  setListObj,
  darkMode,
  setDarkMode,
  itemsLeft,
  setItemsLeft,
}) => {
  // Estado para contar los elementos seleccionados

  /***** Función para contar elementos seleccionados */
  const contLefts = () => {
    const count = listObj.filter((data) => !data.select).length;
    setItemsLeft(count);
  };

  useEffect(() => {
    contLefts();
  }, [listObj]);

  const toggleCheck = (index) => {
    const updatedList = [...listObj];
    updatedList[index].lineThrough = !updatedList[index].lineThrough;
    setListObj(updatedList);
  };

  const toggleSelect = (index) => {
    const updatedList = [...listObj];
    updatedList[index].select = !updatedList[index].select;
    setListObj(updatedList);
  };

  const deleteSelectAll = () => {
    const newList = listObj.filter((data) => !data.select);
    setListObj(newList);
  };

  const deleteSelect = (index) => {
    if (listObj[index].select) {
      const newList = listObj.filter((_, i) => i !== index);
      setListObj(newList);
    }
  };

  return (
    <div className="listTodo_container">
      {listObj.map((data, index) => (
        <div
          className="listTodo_list_container"
          key={index}
          style={{
            borderTopLeftRadius: index === 0 ? "5px" : "",
            borderTopRightRadius: index === 0 ? "5px" : "",

            background: darkMode
              ? "var(--Very_Dark_Desaturated_Blue)"
              : "var(--Very_Light_Gray)",
            borderBottom: darkMode
              ? "1px solid var(--Very_Dark_Grayish_Blue)"
              : "1px solid var(--Light_Grayish_Blue)",
          }}
        >
          <div className="listTodo_container_group">
            <div
              className="icon_list_check_container"
              style={{
                background:
                  darkMode && !data.select
                    ? "var(--Very_Dark_Desaturated_Blue)"
                    : !darkMode && data.select
                    ? "linear-gradient(118deg, rgba(85, 221, 255, 1) 0%, rgba(192, 88, 243, 1) 80%)"
                    : !darkMode
                    ? "var(--Very_Light_Gray)"
                    : "",
                border: data.select
                  ? "none"
                  : "1px solid var(--Dark_Grayish_Blue)",
              }}
              onClick={() => toggleSelect(index)}
            >
              {data.select && <img src={IconCheck} alt="icon_check" />}
            </div>
            <p
              className={`josefin_sans_400 ${data.select ? "lineThrough" : ""}`}
              style={{
                background: darkMode
                  ? "var(--Very_Dark_Desaturated_Blue)"
                  : "var(--Very_Light_Gray)",
                color: darkMode
                  ? data.select
                    ? "var(--Dark_Grayish_Blue)"
                    : "var(--Very_Light_Grayish_Blue)"
                  : "",
              }}
            >
              {data.data}
            </p>
          </div>
          <img
            src={Close}
            alt="icono de cerrar "
            onClick={() => deleteSelect(index)}
            className="close"
          />
        </div>
      ))}
      <div
        className="listTodo_list_container final resposive_movil"
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
      </div>
    </div>
  );
};

export default ListTodo;

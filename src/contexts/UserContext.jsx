import { createContext, useState } from "react";
import allClasses from "../../classes.json";

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [name, setName] = useState(0);
  const [gender, setGender] = useState(0);
  const [nameClass, setNameClass] = useState(0);
  const [isFirstTime, setIsFirstTime] = useState(true);

  function closeModalUser(e) {
    e.preventDefault();
    if (String(name).length > 30) {
      setIsFirstTime(true);
    } else {
      Boolean(name) ? setIsFirstTime(false) : null;
    }
  }

  function handleGenderChange(e) {
    setGender(String(e.target.value).toLowerCase());
  }

  function handleClassChange(e) {
    const newClass = allClasses[e.target.id];
    setNameClass(newClass);
  }

  function handleInputEntry(e) {
    setName(String(e.target.value));
  }

  return (
    <UserContext.Provider
      value={{
        isFirstTime,
        closeModalUser,
        handleClassChange,
        handleGenderChange,
        handleInputEntry,
        name,
        gender,
        nameClass,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

import { createContext, useState } from "react";

export const UserContext = createContext();

export default function UserProvider( {children} ) {
    const [name, setName] = useState(null)
    const [gender, setGender] = useState(null)
    const [nameClass, setNameClass] = useState(null)
    const [isFirstTime, setisFirstTime] = useState(true);

    function closeModalUser() {
      setisFirstTime(false)
      }

    return (
        <UserContext.Provider
          value={{
            isFirstTime,
            closeModalUser
          }}
        >
          {children}
        </UserContext.Provider>
      );
}
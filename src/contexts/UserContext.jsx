import { createContext, useState } from "react";

export const UserContext = createContext();

export default function UserProvider({ children }) {
    const [name, setName] = useState(null);
    const [gender, setGender] = useState(null);
    const [nameClass, setNameClass] = useState(null);
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
        setNameClass(String(e.target.value).toLowerCase());
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
            }}
        >
            {children}
        </UserContext.Provider>
    );
}

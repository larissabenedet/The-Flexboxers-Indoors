import { createContext, useState, useEffect } from "react";
import allClasses from "../../classes.json";
import Cookies from "js-cookie";

export const UserContext = createContext();

export default function UserProvider({ children }) {
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [nameClass, setNameClass] = useState({});
    const [isFirstTime, setIsFirstTime] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [classMission, setClassMission] = useState("");

    useEffect(() => {
        Cookies.set("name", String(name));
        Cookies.set("gender", String(gender));
        Cookies.set("nameClass", String(nameClass));
        Cookies.set("classMission", String(classMission));
        Cookies.set("isFirstTime", String(isFirstTime));
    }, [name, gender, nameClass, classMission, isFirstTime]);

    function closeModalUser(e) {
        // validações do form
        String(name).length > 30
            ? setIsFirstTime(true)
            : Boolean(name)
            ? setIsFirstTime(false)
            : null;

        !gender && setIsFirstTime(true);

        !classMission && setIsFirstTime(true);
    }

    function handleGenderChange(e) {
        setGender(String(e.target.value).toLowerCase());
    }

    function handleClassChange(e) {
        const newClass = allClasses[e.target.id];
        setNameClass(newClass);
        setClassMission(String(e.target.value).toLowerCase());
    }

    function handleInputEntry(e) {
        setName(String(e.target.value));
    }

    function handleEditar(e) {
        setIsEditing(true);
        setIsFirstTime(true);
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
                classMission,
                handleEditar,
                isEditing,
            }}
        >
            {children}
        </UserContext.Provider>
    );
}

import { createContext, useEffect, useState, useContext } from "react";
import artistaMissions from "../../artista.json";
import exploradorMissions from "../../explorador.json";
import estudiosoMissions from "../../estudioso.json";
import { UserContext } from "./UserContext";
import Cookies from "js-cookie";

export const MissionContext = createContext();

export default function MissionProvider({ children, data }) {
    const [level, setLevel] = useState(Number(data.level) || 1);
    const [currentExperience, setCurrentExperience] = useState(
        Number(data.currentExperience) || 0
    );
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeMission, setActiveMission] = useState(null);
    const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false);
    const [unlockedMissions, setUnlockedMissions] = useState(
        Number(data.unlockedMissions) - 1 || 0
    );
    const { classMission } = useContext(UserContext);
    const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

    useEffect(() => {
        Cookies.set("level", String(level));
        Cookies.set("currentExperience", String(currentExperience));
        Cookies.set("unlockedMissions", String(unlockedMissions));
    }, [level, currentExperience, unlockedMissions]);

    function newMission(e) {
        setIsModalOpen(true);
        const artista = artistaMissions[e.target.id];
        const explorador = exploradorMissions[e.target.id];
        const estudioso = estudiosoMissions[e.target.id];

        switch (String(classMission).toLowerCase()) {
            case "artista":
                setActiveMission(artista);
                break;
            case "explorador":
                setActiveMission(explorador);
                break;
            case "estudioso":
                setActiveMission(estudioso);
                break;
        }
    }

    function resetMission() {
        setActiveMission(null);
    }

    function completeMission() {
        if (!activeMission) return;

        const { amount } = activeMission;

        let finalExperience = currentExperience + amount;

        if (finalExperience >= experienceToNextLevel) {
            finalExperience = finalExperience - experienceToNextLevel;
            levelUp();
        }

        setCurrentExperience(finalExperience);
        closeMissionModal();
        setActiveMission(null);
    }

    function levelUp() {
        setLevel(level + 1);

        setIsLevelUpModalOpen(true);
    }

    function closeMissionModal() {
        setIsModalOpen(false);
    }

    function closeLevelUpModal() {
        setIsLevelUpModalOpen(false);
    }

    function unlockMission() {
        setUnlockedMissions(unlockedMissions + 1);
    }

    useEffect(unlockMission, [level]);

    return (
        <MissionContext.Provider
            value={{
                level,
                currentExperience,
                experienceToNextLevel,
                isLevelUpModalOpen,
                isModalOpen,
                closeLevelUpModal,
                activeMission,
                completeMission,
                resetMission,
                newMission,
                closeMissionModal,
                unlockedMissions,
            }}
        >
            {children}
        </MissionContext.Provider>
    );
}

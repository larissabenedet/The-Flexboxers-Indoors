import { createContext, useEffect, useState } from "react";
import allMissions from "../../missions.json";

export const MissionContext = createContext();

export default function MissionProvider({ children }) {
    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeMission, setActiveMission] = useState(null);
    const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false);
    const [unlockedMissions, setUnlockedMissions] = useState(0);

    const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

    function newMission(e) {
        setIsModalOpen(true);

        const mission = allMissions[e.target.id];
        setActiveMission(mission);
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

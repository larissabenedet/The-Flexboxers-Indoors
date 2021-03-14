import styles from "../styles/components/XpBar.module.scss";
import { useContext } from "react";
import { MissionContext } from "../contexts/MissionsContext";

const XpBar = () => {
    const { currentExperience, experienceToNextLevel } = useContext(
        MissionContext
    );
    const percentToNextLevel =
        Math.round(currentExperience * 100) / experienceToNextLevel;

    return (
        <div className={styles.container}>
            <div className={styles.XpContainer}>
                <div style={{ width: `${percentToNextLevel}%` }}></div>
            </div>
            <span>
                {currentExperience}/{experienceToNextLevel} xp
            </span>
        </div>
    );
};

export default XpBar;

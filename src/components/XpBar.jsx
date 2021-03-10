import styles from "../styles/components/XpBar.module.scss";
import { useContext } from "react";
import { MissionContext } from "../contexts/MissionsContext";

const XpBar = () => {
    const {currentExperience} = useContext(MissionContext)
    return (
        <div className={styles.container}>
            <div className={styles.XpContainer}>
                <div style={{ width: `${currentExperience}%` }}></div>
            </div>
            <span>{currentExperience}/100</span>
        </div>
    );
};

export default XpBar;

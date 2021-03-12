import styles from "../styles/components/Mission.module.scss";
import { useContext } from "react";
import { MissionContext } from "../contexts/MissionsContext";

const Mission = ({ mission, i }) => {
    const { newMission, unlockedMissions } = useContext(MissionContext);
    
    return (
        <div
            className={`${styles.mission} ${
                !(unlockedMissions >= i) ? styles.disabled : null
            }`}
            key={mission[i]}
        >
            <img
                src={mission.img}
                key={mission[i]}
                alt={mission.title}
                onClick={newMission}
                id={i}
            />
        </div>
    );
};

export default Mission;

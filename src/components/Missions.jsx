import styles from "../styles/components/Missions.module.scss";
import { useContext } from "react";
import { MissionContext } from "../contexts/MissionsContext";
import allMissions from "../../missions.json";
import Mission from "./Mission.jsx";

const Missions = () => {
    const { newMission } = useContext(MissionContext);
    return (
        <div className={styles.container}>
            <div className={styles.missionsTree}>
                <div>
                    {allMissions.map((mission, i) => {
                        if (i < 3) {
                            return <Mission mission={mission} i={i} />;
                        }
                    })}
                </div>
                <div>
                    {allMissions.map((mission, i) => {
                        if (i >= 3) {
                            return <Mission mission={mission} i={i} />;
                        }
                    })}
                </div>
            </div>
        </div>
    );
};

export default Missions;

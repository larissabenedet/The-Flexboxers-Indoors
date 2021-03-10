import styles from "../styles/components/Missions.module.scss";
import { useContext } from "react";
import { MissionContext } from "../contexts/MissionsContext";
import allMissions from "../../missions.json";

const DashboardMenu = () => {
    const { newMission } = useContext(MissionContext);
    return (
        <div className={styles.container}>
            <div className={styles.missionsTree}>
                <div>
                    {allMissions.map((mission, i) => {
                        if (i < 3) {
                            return (
                                <div
                                    className={styles.mission}
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
                        }
                    })}
                </div>
                <div>
                    {allMissions.map((mission, i) => {
                        if (i >= 3) {
                            return (
                                <div
                                    className={`${styles.mission} ${styles.disabled}`}
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
                        }
                    })}
                </div>
            </div>
        </div>
    );
};

export default DashboardMenu;

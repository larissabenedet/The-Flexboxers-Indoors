import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import styles from "../styles/components/Missions.module.scss";
import artistaMissions from "../../artista.json";
import exploradorMissions from "../../explorador.json";
import estudiosoMissions from "../../estudioso.json";
import Mission from "./Mission.jsx";

const Missions = () => {
    const { classMission } = useContext(UserContext);

    switch (classMission) {
        case "artista":
            return (
                <div className={styles.container}>
                    <div className={styles.missionsTree}>
                        <div>
                            {artistaMissions.map((mission, i) => {
                                if (i < 3) {
                                    return (
                                        <Mission
                                            mission={mission}
                                            key={`first-row-${i}`}
                                            i={i}
                                        />
                                    );
                                }
                            })}
                        </div>
                        <div>
                            {artistaMissions.map((mission, i) => {
                                if (i >= 3) {
                                    return (
                                        <Mission
                                            mission={mission}
                                            key={`second-row-${i}`}
                                            i={i}
                                        />
                                    );
                                }
                            })}
                        </div>
                    </div>
                </div>
            );
        case "explorador":
            return (
                <div className={styles.container}>
                    <div className={styles.missionsTree}>
                        <div>
                            {exploradorMissions.map((mission, i) => {
                                if (i < 3) {
                                    return (
                                        <Mission
                                            mission={mission}
                                            key={`first-row-${i}`}
                                            i={i}
                                        />
                                    );
                                }
                            })}
                        </div>
                        <div>
                            {exploradorMissions.map((mission, i) => {
                                if (i >= 3) {
                                    return (
                                        <Mission
                                            mission={mission}
                                            key={`second-row-${i}`}
                                            i={i}
                                        />
                                    );
                                }
                            })}
                        </div>
                    </div>
                </div>
            );
        case "estudioso":
            return (
                <div className={styles.container}>
                    <div className={styles.missionsTree}>
                        <div>
                            {estudiosoMissions.map((mission, i) => {
                                if (i < 3) {
                                    return (
                                        <Mission
                                            mission={mission}
                                            key={`first-row-${i}`}
                                            i={i}
                                        />
                                    );
                                }
                            })}
                        </div>
                        <div>
                            {estudiosoMissions.map((mission, i) => {
                                if (i >= 3) {
                                    return (
                                        <Mission
                                            mission={mission}
                                            key={`second-row-${i}`}
                                            i={i}
                                        />
                                    );
                                }
                            })}
                        </div>
                    </div>
                </div>
            );
        default:
            return null;
    }
};

export default Missions;

import styles from "../styles/components/Missions.module.scss";
import allMissions from "../../missions.json";
import Mission from "./Mission.jsx";

const Missions = () => {
    return (
        <div className={styles.container}>
            <div className={styles.missionsTree}>
                <div>
                    {allMissions.map((mission, i) => {
                        if (i < 3) {
                            return <Mission mission={mission} key={`first-row-${i}`} i={i} />;
                        }
                    })}
                </div>
                <div>
                    {allMissions.map((mission, i) => {
                        if (i >= 3) {
                            return <Mission mission={mission} key={`second-row-${i}`} i={i} />;
                        }
                    })}
                    
                </div>
            </div>
        </div>
    );
};

export default Missions;

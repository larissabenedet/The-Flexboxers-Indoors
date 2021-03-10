import styles from "../styles/components/Mission.module.scss";
import { useContext } from "react";
import { MissionContext } from "../contexts/MissionsContext";

const Mission = (props) => {
  const { newMission } = useContext(
    MissionContext
  );
  if (props.disabled) {
    return (
      <>
        <div
          className={styles.mission}
          onClick={newMission}
          style={{ filter: "saturate(0)" }}
        >
          <img src={props.img} alt="mission" />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className={styles.mission} onClick={newMission} id="0">
          <img src={props.img} alt="mission" />
        </div>
      </>
    );
  }
};

export default Mission;

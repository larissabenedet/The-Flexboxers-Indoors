import styles from "../styles/components/Missions.module.scss";
import Mission from "../components/Mission.jsx";

const DashboardMenu = () => {
  return (
    <div className={styles.container}>
      <div className={styles.missionsTree}>
        <div>
          <Mission img="./img/bolo.png" />
          <Mission img="./img/monociclo.png" />
          <Mission img="./img/oculos.png" />
        </div>
        <div>
          <Mission img="./img/livro.png" disabled />
          <Mission img="./img/ioga.png" disabled />
        </div>
      </div>
    </div>
  );
};

export default DashboardMenu;

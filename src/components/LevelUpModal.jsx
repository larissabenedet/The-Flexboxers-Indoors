import styles from "../styles/components/LevelUpModal.module.scss";
import { useContext } from "react";
import { MissionContext } from "../contexts/MissionsContext";

const LevelUpModal = ({ id = "modal", onClose }) => {
  const { level } = useContext(MissionContext);

  const handleOutsideClick = (e) => {
    if (e.target.id === id) onClose();
  };

  return (
    <div className={styles.modalActive} id={id} onClick={handleOutsideClick}>
      <div className={styles.container}>
        <button className={styles.closeButton} type="button" onClick={onClose}>
          <div></div>
          <div></div>
        </button>
        <header>
          <h1>Parabéns!</h1>
          <h1>Você passou de nível</h1>
        </header>
        <main>
          <p>Seu novo nível é:</p>
          <div className={styles.level}>
            <h1>{level}</h1>
          </div>
        </main>
      </div>
    </div>
  );
};

export default LevelUpModal;

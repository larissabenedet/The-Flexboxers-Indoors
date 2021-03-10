import styles from "../styles/components/Modal.module.scss";

const Modal = ({ id = "modal", onClose }) => {
    const handleOutsideClick = (e) => {
        if (e.target.id === id) onClose();
    };

  return (
    <div className={styles.modalActive} id={id} onClick={handleOutsideClick}>
      <div className={styles.container}>
        <button type="button" onClick={onClose}>
          <span>X</span>
        </button>
        <div className={styles.imgContainer}>
          <img src="img/bolo.png" alt="mission"/>
        </div>
        <div>
          <h1>Título da missão</h1>          
          <span>Ganhe: 90xp</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          amet itaque minima odio iusto quae quo, natus reiciendis illum
          assumenda nostrum deserunt earum enim aliquam asperiores esse
          architecto voluptate suscipit.
        </p>
       
        <div className={styles.buttons}>
          <button type="button">
            Desistir
          </button>
          <button type="button">
            Concluir
          </button>
        </div>

      </div>
    </div>
  );
};

export default Modal;

import styles from "../styles/components/Modal.module.scss";

const Modal = ({ id = "modal", onClose = () => {} }) => {
  const handleOutsideClick = (e) => {
    if (e.target.id === id) onClose();
  };

  return (
    <div className={styles.modalActive} id={id} onClick={handleOutsideClick}>
      <div className={styles.container}>
        <h1>Título da missão</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          amet itaque minima odio iusto quae quo, natus reiciendis illum
          assumenda nostrum deserunt earum enim aliquam asperiores esse
          architecto voluptate suscipit.
        </p>
        <button type="button" onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
};

export default Modal;

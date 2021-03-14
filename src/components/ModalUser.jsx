import styles from "../styles/components/ModalUser.module.scss";
import stylesModal from "../styles/components/Modal.module.scss";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext.jsx";

const ModalUser = ({ id = "modal", onClose }) => {
  const {
    handleClassChange,
    handleInputEntry,
    handleGenderChange,
    isEditing,
  } = useContext(UserContext);

  const handleOutsideClick = (e) => {
    if (e.target.id === id) onClose();
  };

  if (!isEditing) {

      return ( // Criar novo personagem
        <div className={styles.modalActive}>
          <div className={styles.container}>
            
              <h1>Antes de começar sua aventura, por favor crie seu personagem</h1>
    
            <form>
              <div className={styles.nickGenderContainer}>
                <div className={styles.nick}>
                  <p>Nickname</p>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={handleInputEntry}
                  />
                </div>
    
                <div onChange={handleGenderChange} className={styles.gender}>
                  <p>Gênero</p>
                  <div>
                    <div>
                      <input
                        type="radio"
                        id="masculino"
                        name="genero"
                        value="Masculino"
                      />
                      <label htmlFor="masculino">
                        <img src="./img/masculino.png" alt="Masculino" />
                      </label>
                        <p className={styles.genderName}>Masculino</p>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="feminino"
                        name="genero"
                        value="Feminino"
                      />
                      <label htmlFor="feminino">
                        <img src="./img/feminino.png" alt="Feminino" />
                      </label>
                        <p className={styles.genderName}>Feminino</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.classesContainer}>
                <p>Classe</p>
                <div onChange={handleClassChange} className={styles.classes}>
                  <div>
                    <input type="radio" id="0" name="classe" value="Artista" />
                    <label htmlFor="0">
                      <img src="../img/pinceis.png" alt="Classe Artista"/>
                    </label>
                    <p>Artista</p>
                  </div>
                  <div>
                    <input type="radio" id="1" name="classe" value="Estudioso" />
                    <label htmlFor="1">
                      <img src="../img/livro.png" alt="Classe Estudioso"/>
                    </label>
                    <p>Estudioso(a)</p>
                  </div>
                  <div>
                    <input type="radio" id="2" name="classe" value="Explorador" />
                    <label htmlFor="2">
                      <img src="../img/bussola.png" alt="Classe Explorador"/>
                    </label>
                    <p>Explorador(a)</p>
                  </div>
                </div>
                <button
                  className={styles.completeButton}
                  type="button"
                  onClick={onClose}
                >
                  Concluído
                </button>
              </div>
            </form>
          </div>
        </div>
      );
  } else {
    return ( // Editar personagem
        <div className={styles.modalActive} id={id} onClick={handleOutsideClick}>
          <div className={styles.container}>
            
              <h1>Editar personagem</h1>

              <button className={stylesModal.closeButton} type="button" onClick={onClose}><div></div><div></div></button>
    
            <form>
              <div className={styles.nickGenderContainer}>
                <div className={styles.nick}>
                  <p>Nickname</p>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={handleInputEntry}
                  />
                </div>
    
                <div onChange={handleGenderChange} className={styles.gender}>
                  <p>Gênero</p>
                  <div>
                    <div>
                      <input
                        type="radio"
                        id="masculino"
                        name="genero"
                        value="Masculino"
                      />
                      <label htmlFor="masculino">
                        <img src="./img/masculino.png" alt="Masculino" />
                      </label>
                      <p className={styles.genderName}>Masculino</p>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="feminino"
                        name="genero"
                        value="Feminino"
                      />
                      <label htmlFor="feminino">
                        <img src="./img/feminino.png" alt="Feminino" />
                      </label>
                      <p className={styles.genderName}>Feminino</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.classesContainer}>
                <p>Classe</p>
                <div onChange={handleClassChange} className={styles.classes}>
                  <div>
                    <input type="radio" id="0" name="classe" value="Artista" />
                    <label htmlFor="0">
                      <img src="../img/pinceis.png" alt="Classe Artista"/>
                    </label>
                    <p>Artista</p>
                  </div>
                  <div>
                    <input type="radio" id="1" name="classe" value="Estudioso" />
                    <label htmlFor="1">
                      <img src="../img/livro.png" alt="Classe Estudioso"/>
                    </label>
                    <p>Estudioso(a)</p>
                  </div>
                  <div>
                    <input type="radio" id="2" name="classe" value="Explorador" />
                    <label htmlFor="2">
                      <img src="../img/bussola.png" alt="Classe Explorador"/>
                    </label>
                    <p>Explorador(a)</p>
                  </div>
                </div>
                <button
                  className={styles.completeButton}
                  type="button"
                  onClick={onClose}
                >
                  Concluído
                </button>
              </div>
            </form>
          </div>
        </div>
      );
  }
};

export default ModalUser;

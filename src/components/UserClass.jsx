import styles from "../styles/components/UserClass.module.scss";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext.jsx";

const UserClass = () => {
  const { nameClass } = useContext(UserContext);

  return (
    <div className={styles.container}>
      <div>
        <span>Classe</span>
        <div className={styles.className}>
          <div>
            <img src={nameClass.img} alt={nameClass.title} />
          </div>
          <div>
            <p>{nameClass.title}</p>
            <p>{nameClass.subtitle}</p>
          </div>
        </div>
        <p>{nameClass.description}</p>
      </div>
    </div>
  );
};

export default UserClass;

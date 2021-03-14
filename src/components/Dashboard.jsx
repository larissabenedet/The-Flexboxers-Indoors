import styles from "../styles/components/Dashboard.module.scss";
import Profile from "../components/Profile.jsx";
import DashboardMenu from "../components/DashboardMenu.jsx";
import Missions from "../components/Missions.jsx";
import Instructions from "../components/Instructions.jsx";
import UserClass from "../components/UserClass.jsx";
import { useContext } from "react";
import { MissionContext } from "../contexts/MissionsContext";
import { UserContext } from "../contexts/UserContext";
import Modal from "../components/Modal";
import ModalUser from "../components/ModalUser";
import LevelUpModal from "../components/LevelUpModal";

const Dashboard = ({ data }) => {
    const {
        isModalOpen,
        closeMissionModal,
        isLevelUpModalOpen,
        closeLevelUpModal,
    } = useContext(MissionContext);
    const { isFirstTime, closeModalUser, nameClass } = useContext(UserContext);

    return (
        <div className={styles.container}>
            {isModalOpen ? <Modal onClose={closeMissionModal} /> : null}
            {isFirstTime ? <ModalUser onClose={closeModalUser} /> : null}
            {isLevelUpModalOpen ? (
                <LevelUpModal onClose={closeLevelUpModal} />
            ) : null}

            <div className={styles.componentsWrapper}>
                <div>
                    <DashboardMenu>
                        <Profile />
                        <UserClass />
                    </DashboardMenu>
                </div>
                <div>
                    <Instructions />
                    <Missions></Missions>
                </div>
            </div>

            <svg
                className={styles.wave}
                style={{ fill: `var(--${nameClass.colors})` }}
                viewBox="0 0 1921 463"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g filter="url(#filter0_i)">
                    <path d="M0 138.9L106.722 169.718C213.444 201.116 426.889 261.884 640.333 262.318C853.778 261.884 1067.22 201.116 1280.67 177.532C1494.11 154.816 1707.56 169.284 1814.28 177.532L1921 185.2V463H1814.28C1707.56 463 1494.11 463 1280.67 463C1067.22 463 853.778 463 640.333 463C426.889 463 213.444 463 106.722 463H0V138.9Z" />
                </g>
                <defs>
                    <filter
                        id="filter0_i"
                        x="0"
                        y="0"
                        width="1921"
                        height="468"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="BackgroundImageFix"
                            result="shape"
                        />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dy="5" />
                        <feGaussianBlur stdDeviation="7.5" />
                        <feComposite
                            in2="hardAlpha"
                            operator="arithmetic"
                            k2="-1"
                            k3="1"
                        />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="shape"
                            result="effect1_innerShadow"
                        />
                    </filter>
                </defs>
            </svg>
        </div>
    );
};

export default Dashboard;

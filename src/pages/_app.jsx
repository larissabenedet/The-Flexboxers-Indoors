import "../styles/globals.scss";
import MissionProvider from "../contexts/MissionsContext.jsx";
import UserProvider from "../contexts/UserContext.jsx";

function MyApp({ Component, pageProps }) {
    return (
        <MissionProvider>
            <UserProvider>
                <Component {...pageProps} />;
            </UserProvider>
        </MissionProvider>
    );
}

export default MyApp;

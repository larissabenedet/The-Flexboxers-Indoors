import "../styles/globals.scss";
import MissionProvider from "../contexts/MissionsContext.jsx";
import UserProvider from "../contexts/UserContext.jsx";

function MyApp({ Component, pageProps, props }) {
    return (
        <UserProvider>
            <MissionProvider>
                <Component {...pageProps} />
            </MissionProvider>
        </UserProvider>
    );
}

export default MyApp;

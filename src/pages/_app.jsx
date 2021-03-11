import "../styles/globals.scss";
import MissionProvider from "../contexts/MissionsContext";
import UserContext from "../contexts/UserContext";

function MyApp({ Component, pageProps }) {
  return (
    <MissionProvider>
      <UserContext>
      <Component {...pageProps} />;
      </UserContext>
    </MissionProvider>
  );
}

export default MyApp;

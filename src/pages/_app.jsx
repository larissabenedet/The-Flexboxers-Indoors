import "../styles/globals.scss";
import MissionProvider from "../contexts/MissionsContext";

function MyApp({ Component, pageProps }) {
  return (
    <MissionProvider>
      <Component {...pageProps} />;
    </MissionProvider>
  );
}

export default MyApp;

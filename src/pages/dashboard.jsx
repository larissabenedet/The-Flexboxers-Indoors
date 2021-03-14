import Head from "next/head";
import Dashboard from "../components/Dashboard";
import MissionProvider from "../contexts/MissionsContext";
import UserProvider from "../contexts/UserContext";

export default function AppDashboard({ data }) {
    return (
        <div>
            <Head>
                <title>Indoors - Dashboard</title>
            </Head>
            <UserProvider data={data}>
                <MissionProvider data={data}>
                    <Dashboard />
                </MissionProvider>
            </UserProvider>
        </div>
    );
}

export async function getServerSideProps(context) {
    const data = context.req.cookies;

    return {
        props: { data },
    };
}

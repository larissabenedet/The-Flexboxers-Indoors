import Head from "next/head";
import Dashboard from "../components/Dashboard";

export default function AppDashboard() {
    return (
        <div>
            <Head>
                <title>Indoors - Dashboard</title>
            </Head>
            <Dashboard />
        </div>
    );
}

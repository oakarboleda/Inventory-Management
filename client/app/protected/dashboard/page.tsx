import SideNav from "@/app/protected/dashboard/sideNav";
import Header from "@/components/atoms/Header";


export default function Dashboard() {
    return (
        <main className="flex w-full">
            <SideNav />
            <div className="flex">
                <Header />
                <h1 className="text-3xl font-bold">Dashboard</h1>
                <p className="text-lg mt-2">Welcome to your dashboard.</p>
            </div>
        </main>
    );
}
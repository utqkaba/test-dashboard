import ToggleText from "../components/ToggleText";
import UserInfo from "../components/UserInfo";
import ActionButton from "../components/ActionButton";

function Dashboard() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-stone-200">
      <main className="flex-1 p-10 flex flex-col gap-6">
        <div className="flex flex-col md:flex-row gap-6">
          <ToggleText />
          <UserInfo />
        </div>

        <div className="mt-6">
          <ActionButton />
        </div>
      </main>
    </div>
  );
}

export default Dashboard;

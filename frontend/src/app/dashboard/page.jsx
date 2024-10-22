import { DashboardPage } from "../components/pages/Dashboard";
import { HeaderPart } from "../components/pages/Header";

export default function Dashboard() {
  return (
    <div className="">
      <HeaderPart />
      <div className="bg-[#F3F4F6] ">
        <DashboardPage />
      </div>
    </div>
  );
}

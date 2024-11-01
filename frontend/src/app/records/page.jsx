import { HeaderPart } from "../components/pages/Header";
import { RecordsPage } from "../components/pages/Records";

export default function Records() {
  return (
    <div>
      <HeaderPart />
      <div className="bg-[#F3F4F6] h-[92vh]">
        <RecordsPage />
      </div>
    </div>
  );
}

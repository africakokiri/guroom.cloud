import { CloudImage } from "@/components/cloud-image";
import { Darkmode } from "@/components/darkmode-switch";

export default function MainPage() {
  return (
    <div className="p-4">
      <header className="relative flex flex-col items-center gap-8">
        <CloudImage />
        <Darkmode />
      </header>
    </div>
  );
}

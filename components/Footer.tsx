import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="py-8">
      <div className="max-w-4xl mx-auto px-6 flex items-center justify-between">
        <p className="text-xs text-[#AEAEB2]">{profile.name}</p>
        <p className="text-xs text-[#AEAEB2]">{new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}

import Header from "@/components/(public)/Header";
import Footer from "@/components/(public)/Footer";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

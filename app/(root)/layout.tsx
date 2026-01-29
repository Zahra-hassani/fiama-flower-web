import Footer from "@/components/Footer";
import Header from "@/components/share/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col h-screen">
        <Header />
      <main
        className={`wrapper flex-1`}
      >
        {children}
      </main>
      <Footer />
      </div>
  );
}
import Navbar from "../components/Navbar";

export default function InfissiLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

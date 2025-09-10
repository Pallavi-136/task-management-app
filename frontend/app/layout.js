import "../globals.css";
import Navbar from "../components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif" }}>
        {/* Sticky Navbar */}
        <Navbar />

        {/* Main content: add top margin to prevent overlap */}
        <main style={{ padding: "20px", marginTop: "80px" }}>
          {children}
        </main>
      </body>
    </html>
  );
}

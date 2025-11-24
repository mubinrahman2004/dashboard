import NavBar from "./components/NavBar";
import Slider from "./components/slider/Slider";
import "./globals.css";

export const metadata = {
  title: "Admin Panel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div style={{ display: "flex" }}>
          
          {/* Sidebar */}
          <Slider />

          {/* Dynamic page content */}
          <main style={{ flex: 1, padding: "20px", background: "#f5f6fa" }}>
            <NavBar/>
            {children}
          </main>

        </div>
      </body>
    </html>
  );
}

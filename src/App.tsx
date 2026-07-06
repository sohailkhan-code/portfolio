import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import Loader from "./components/Loader";
import Cursor from "./components/Cursor";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      if (e.key === "?") {
        toast("Shortcuts — Home: scroll to top · Esc: close dialogs", {
          icon: "⌨️",
        });
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <Loader loading={loading} />
      <Cursor />
      <ScrollProgress />
      <Toaster
        position="bottom-center"
        toastOptions={{
          style: {
            background: "#0F1420",
            color: "#E8EDF7",
            border: "1px solid rgba(255,255,255,0.08)",
            fontFamily: "Inter, sans-serif",
            fontSize: "0.85rem",
          },
        }}
      />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

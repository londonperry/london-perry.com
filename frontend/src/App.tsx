import Dither from "./components/Dither";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "./components/ui/pixelact-ui/card";
import { useEffect } from "react";
import { createPortal } from "react-dom";

function App() {
  // Create a background root div if it doesn't exist
  useEffect(() => {
    let bgRoot = document.getElementById("bg-root");
    if (!bgRoot) {
      bgRoot = document.createElement("div");
      bgRoot.id = "bg-root";
      document.body.appendChild(bgRoot);
    }
    return () => {
      // Optionally clean up if needed
      // document.body.removeChild(bgRoot)
    };
  }, []);

  return (
    <>
      {typeof window !== "undefined" &&
        createPortal(
          <div
            style={{
              position: "fixed",
              inset: 0,
              width: "100vw",
              height: "100vh",
              zIndex: 0,
              pointerEvents: "auto",
            }}
          >
            <Dither mouseRadius={0.15} />
          </div>,
          document.getElementById("bg-root") || document.body
        )}
      <div className="fixed inset-0 z-10 min-h-screen flex items-center justify-center pointer-events-none dark">
        <div className="flex flex-row gap-8 items-center">
          <Card className="min-w-[220px] max-w-[260px] w-full flex items-center justify-center">
            <CardContent>
              <img src="/lp.png" alt="London Perry" className="w-48 h-48 object-contain mx-auto" />
            </CardContent>
          </Card>
          <Card className="min-w-[320px] max-w-[400px] w-full">
            <CardHeader>
              <CardTitle>Welcome!</CardTitle>
            </CardHeader>
            <CardContent>
              My name is London Perry and I am a Business Analyst based out of Boise, ID
            </CardContent>
            <CardFooter></CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
}

export default App;

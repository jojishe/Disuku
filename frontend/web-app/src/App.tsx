import { RouterProvider } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import router from "./router";
import "@styles/global.scss";
import "@styles/normalize.css";

const App = () => {
  return (
    <>
      <Analytics />
      <SpeedInsights />
      <RouterProvider router={router} />
    </>
  );
};

export default App;

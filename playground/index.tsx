import * as serviceWorker from "./serviceWorker";
import { ConfigProvider } from "antd";
import Layout from "./layout/Layout";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "antd/lib/layout/style/index.css";
import "antd/lib/menu/style/index.css";
import "./index.pcss";

const App = () => (
  <BrowserRouter>
    <ConfigProvider direction="rtl">
      <Layout />
    </ConfigProvider>
  </BrowserRouter>
);
const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<App />);
serviceWorker.unregister();

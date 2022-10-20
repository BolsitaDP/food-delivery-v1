import Layout from "./components/Layout/Layout";

import { useSelector } from "react-redux";

function App() {
  const theme = useSelector((state) => state.theme.darkmode);
  return (
    <div className={theme ? "dark" : "light"}>
      <Layout />
    </div>
  );
}

export default App;

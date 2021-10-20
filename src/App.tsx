import Index from "./containers/Index/Index";
import Sidebar from "./containers/Sidebar/Sidebar";

import styles from "./App.module.css"

const App = () => {
  return (
    <div className={styles["App"]}>
      <Sidebar></Sidebar>
      <Index></Index>
    </div>
  );
};

export default App;

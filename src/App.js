import Navbar from "./components/Navbar";
import Pageheader from "./components/Pageheader";

function App() {
  return (
    <>
      <Navbar />
      <Pageheader
        title={"Your household"}
        description={"Welcome to The Marketplace! Review your household below:"}
      />
    </>
  );
}

export default App;

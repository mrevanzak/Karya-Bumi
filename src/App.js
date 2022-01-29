import { Navbar } from "./components";
import { Footer, Hero } from "./containers";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <Hero />
      </div>
      <Footer />
    </div>
  );
}

export default App;

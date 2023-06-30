import {
  Navbar,
  Hero,
  About,
  Architecture,
  Approach,
  Projects,
  Footer,
} from "./components";

const App = () => (
  <div className="overflow-hidden">
    <Navbar />
    <Hero />
    <About />
    <Approach />
    <Architecture />
    <Projects />
    <Footer />
  </div>
);

export default App;

import Card from "./components/Card";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
    <Navbar/>
    <main>
      my site main content
    </main>
    <div className="card">
      <Card title="card1" description="card1desc"/>
      <Card title="card2" description="card2desc"/>
      <Card title="card3" description="card3desc"/>
      <Card title="card4" description="card4desc"/>
    </div>
    <Footer/>
    </>
  )
}

export default App;
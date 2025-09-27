import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import CustomerTickets from "./Components/CustomerTickets/CustomerTickets";
import Navbar from "./Components/Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import Footer from "./Components/Footer/Footer";

// Fetch tickets data
const fetchingTickets = async () => {
  const response = await fetch("/tickets.json");
  const data = await response.json();
  return data;
};

const ticketsPromise = fetchingTickets();

function App() {
  // State variables
  const [summary, setSummary] = useState([]);
  const [progressCount, setProgressCount] = useState(0);
  const [resolved, setResolved] = useState([]);
  const [resolvedCount, setResolvedCount] = useState(0);

  return (
    <>
      <Navbar />
      
      <Banner
        progressCount={progressCount}
        resolvedCount={resolvedCount}
      />
      
      <Suspense
        fallback={
          <div className="flex justify-center items-center w-full py-10">
            <span className="loading loading-bars loading-lg"></span>
          </div>
        }
      >
        <CustomerTickets
          ticketsPromise={ticketsPromise}
          summary={summary}
          setSummary={setSummary}
          progressCount={progressCount}
          setProgressCount={setProgressCount}
          resolved={resolved}
          setResolved={setResolved}
          resolvedCount={resolvedCount}
          setResolvedCount={setResolvedCount}
        />
      </Suspense>
      
      <Footer />
      
      <ToastContainer />
    </>
  );
}

export default App;
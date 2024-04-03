import React from "react";
import styles from "./Style";

import {
  Navbar,
  Billing,
  Business,
  Button,
  CTA,
  CardDeal,
  ClientsSection,
  FeedbackCard,
  Footer,
  GetStarted,
  Hero,
  Stats,
  Testimonials,
} from "./components";

function App() {
  return (
    <>
      <div className="bg-primary w-full overflow-hidden">
        {/* Navbar */}

        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>

        {/* Hero */}
        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>

        {/* Another */}
        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            {/* <Stats />
            <Business />
            <Billing />
            <FeedbackCard />
            <CardDeal />
            <Testimonials />
            <ClientsSection />
            <CTA />
            <Footer /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

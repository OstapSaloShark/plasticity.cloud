import './App.css';
import { Footer, Header, ScrollButton } from './components';
import {
  ContactSection,
  Hero,
  InHouseSolutionsSection,
  OurServiceSection,
  PartnersSection,
} from './sections';

import'./styles/index.scss';
import'./styles/typography.scss';

function App() {
  return (
    <div className="App" style={{ position: 'relative' }}>
      <Header />
      <span style={{ display: 'block', marginBottom: 102 }} />
      <Hero />
      <OurServiceSection />
      <InHouseSolutionsSection />
      <PartnersSection />
      <ContactSection />
      <Footer />

      <ScrollButton />
    </div>
  );
}

export default App;

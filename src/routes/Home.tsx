import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Products from '../components/Products';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

const Home: React.FC = () => (
  <>
    <Header />
    <main>
  <Hero />

  <section id="products-section">
    <Products />
  </section>

  <section id="projects-section">
    <Projects />
  </section>
</main>

<footer id="footer-section">
  <Footer />
</footer>
  </>
);

export default Home;

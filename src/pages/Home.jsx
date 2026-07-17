import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/home/Hero';
import AboutSnapshot from '../components/home/AboutSnapshot';
import ProductCategories from '../components/home/ProductCategories';
import WhyChooseUs from '../components/home/WhyChooseUs';
import MaterialsStrip from '../components/home/MaterialsStrip';
import StatsBand from '../components/home/StatsBand';
import CTASection from '../components/home/CTASection';

const Home = () => {
  return (
    <Layout>
      {/* 1. Hero */}
      <Hero />

      {/* 2. About Snapshot */}
      <AboutSnapshot />

      {/* 3. Stats Band */}
      <StatsBand />

      {/* 4. Product Categories Grid */}
      <ProductCategories />

      {/* 5. Why Choose Us */}
      <WhyChooseUs />

      {/* 6. Materials Strip */}
      <MaterialsStrip />

      {/* 7. CTA Band */}
      <CTASection />
    </Layout>
  );
};

export default Home;

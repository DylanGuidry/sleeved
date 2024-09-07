import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/footer';
import Navbar from '../components/navbar';

function HomePage() {
  return (
    <div>
        <Navbar />
      <header>
        <h1>Welcome to Our Website</h1>
      </header>
      <main>
        <p>This is a simple homepage for our React application. Here, you can find information about our services and contact details.</p>
      </main>
        <Footer />
    </div>
  );
}

export default HomePage;
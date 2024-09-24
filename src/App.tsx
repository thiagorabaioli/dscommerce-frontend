
import './App.css'

import ButtonPrimary from './components/ButtonPrimary';
import ButtonInverse from './components/ButtonInverse';
import HeanderClient from './components/HeaderClient';
import ProductDetailsCard from './components/ProductDetailsCard';

function App() {
  return (
   <>
   <HeanderClient/>
    <main>
      <section id="product-details-section" className="dsc-container">
       <ProductDetailsCard />
        <div className="dsc-btn-page-container">
          <ButtonPrimary />
            <ButtonInverse />
        </div>
      </section>
    </main>
   </>
  );
}

export default App

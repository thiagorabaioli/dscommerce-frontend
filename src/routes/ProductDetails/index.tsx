import './styles.css';

import ButtonPrimary from "../../components/ButtonPrimary";
import HeanderClient from "../../components/HeaderClient";
import ProductDetailsCard from "../../components/ProductDetailsCard";
import ButtonInverse from "../../components/ButtonInverse";

function ProductDetails(){
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

export default ProductDetails
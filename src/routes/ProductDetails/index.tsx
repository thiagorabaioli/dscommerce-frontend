import './styles.css';

import ButtonPrimary from "../../components/ButtonPrimary";
import HeanderClient from "../../components/HeaderClient";
import ProductDetailsCard from "../../components/ProductDetailsCard";
import ButtonInverse from "../../components/ButtonInverse";
import { ProductDTO } from '../../models/product';


const product: ProductDTO = {
  id: 2,
  name: "smart tv",
  description: "smart tv LG",
  imgUrl: "https://github.com/devsuperior/dscatalog-resources/blob/master/backend/img/4-big.jpg",
  price: 2500.00,
  categories: [
    {
      id: 2,
      name: "Eletrônicos"
    },
    {
      id: 4,
      name: "Computadores"
    },
    {
      id: 5,
      name: "Audio"
    }
  ]
}


export default function ProductDetails(){
    return (
        <>
   <HeanderClient/>
    <main>
      <section id="product-details-section" className="dsc-container">
      <ProductDetailsCard product={product} />
        <div className="dsc-btn-page-container">
          <ButtonPrimary text="Comprar" />
          <ButtonInverse text="Inicio" />
        </div>
      </section>
    </main>
   </>
    );
}


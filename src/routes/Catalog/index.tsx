
import './styles.css';

import HeanderClient from '../../components/HeaderClient';
import SearchBar from '../../components/SearchBar';
import ButtonNextPgae from '../../components/ButtonNextPage';
import CatalogCard from '../../components/CatalogCard';


function Catalog(){
    return (
  <>
      <HeanderClient />
        <main>
        <section id="catalog-section" className="dsc-container">
        <SearchBar />
          <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
            
          <CatalogCard />
          <CatalogCard />
          <CatalogCard />
          <CatalogCard />
          <CatalogCard />
          <CatalogCard />
          <CatalogCard />
          <CatalogCard />
          <CatalogCard />
          <CatalogCard />
          <CatalogCard />

          </div>
  
        <ButtonNextPgae />
        </section>
      </main>

      </>
    );
}

export default Catalog
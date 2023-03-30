import PageTitle from '../components/PageTitle/index';
import ProductTable from '../components/ProductTable';
import SearchInputSection from '../components/SearchInputSection';
import LinkToButton from '../components/LinkToButton';


const HomePage = () => {
  return (
    <div className="container-wrapper">
      <div className="container">
        <PageTitle title={'Table of products'}/>
        <SearchInputSection/>
        <ProductTable/>
        <LinkToButton btnText={'<< Go to create product'} side={'left'} link={'/create'}/>
      </div>
    </div>
  )
}

export default HomePage;
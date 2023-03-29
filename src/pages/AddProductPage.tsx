import LinkToButton from "../components/LinkToButton";

const AddProductPage = () => {
  
  return (
    <div className="container-wrapper">
      <div className="container">
        Add product form
        <LinkToButton btnText={'Go to home page >>'} side={'right'} link={'/'}/>
      </div>
    </div>
  )
}

export default AddProductPage;
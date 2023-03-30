import AddForm from "../components/AddForm";
import LinkToButton from "../components/LinkToButton";

const AddProductPage = () => {
  
  return (
    <div className="container-wrapper">
      <div className="container">
        <AddForm/>
        <LinkToButton btnText={'Go to home page >>'} side={'right'} link={'/'}/>
      </div>
    </div>
  )
}

export default AddProductPage;
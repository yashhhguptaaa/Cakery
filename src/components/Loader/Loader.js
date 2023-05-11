import LoaderGif from "../../assets/loader.gif";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader-component">
      <img src={LoaderGif} className="loader-gif" />
    </div>
  );
};

export default Loader;

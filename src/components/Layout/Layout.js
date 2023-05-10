import "./Layout.css";

const Layout = ({ onBack }) => {
  return (
    <div className="container">
      <div className="cake-showcase-wrapper">
        <div className="cake-showcase">
          <div className="cake--showcase-logo"></div>
          <div className="cake-showcase-body">
            <p className="cake-showcase-title"></p>
            <p className="cake-showcase-description"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;

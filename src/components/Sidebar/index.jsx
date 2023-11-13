import "./style.css";

const Sidebar = ({ isOpen, toggle }) => {
  const sidebarClass = isOpen ? "sidebar open" : "sidebar";
  const sidebarContent = isOpen
    ? "sidebar-content-open"
    : "sidebar-content-close";

  return (
    <div className={sidebarClass}>
      <div className={sidebarContent}>
        <div className="sidebar-top ">
          <div>BCR</div>
          <button onClick={toggle}>X</button>
        </div>
        <div>
          <a href="#our-service">Our Services</a>
        </div>
        <div>
          <a href="#why-us">Why Us</a>
        </div>
        <div>
          <a href="#testimonial">Testimonial</a>
        </div>
        <div>
          <a href="#faq">FAQ</a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

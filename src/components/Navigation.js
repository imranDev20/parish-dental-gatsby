import { Link } from "gatsby";
import React from "react";

const Navigation = () => {
  // const [indicatorWidth, setIndicatorWidth] = useState("");
  // const [indicatorLeft, setIndicatorLeft] = useState("");
  // const ref = useRef(null);

  // useEffect(() => {
  //   console.log("width", ref.current.offsetWidth);
  // }, []);

  // const handleIndicator = (el) => {
  //   setIndicatorWidth(el.offsetWidth + "px");
  //   setIndicatorLeft(el.offsetLeft + "px");
  // };

  // const activeIndicator = () => {};

  const routes = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "About", link: "/about/" },
    { id: 3, name: "Services", link: "/services/" },
    { id: 4, name: "Pricing", link: "/pricing/" },
    { id: 5, name: "Contact", link: "/contact/" },
  ];
  return (
    <nav className="relative">
      <div className="main-nav">
        {routes.map((route) => (
          <div key={route.id} className="inline-block">
            <Link
              // ref={ref}
              activeClassName={`border-t-[3px]  !border-secondary`}
              // onMouseOver={(e) => handleIndicator(e.target)}
              className="nav-item px-6 py-8 inline-block uppercase tracking-[0.2em] text-sm text-primary font-medium border-t-[3px] border-transparent"
              // activeClassName={`border-t-secondary border-t-4 `}

              to={route.link}
            >
              {route.name}
            </Link>
          </div>
        ))}
      </div>
      {/* <div
        style={{ width: indicatorWidth, left: indicatorLeft }}
        className="indicator"
      ></div> */}
    </nav>
  );
};

export default Navigation;

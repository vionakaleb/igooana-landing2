import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import Image from "../../elements/Image";

const Logo = ({ className, ...props }) => {
  const classes = classNames("brand", className);

  return (
    <div {...props} className={classes}>
      <h1 className="m-0">
        <Link to="/">
          <Image
            src={require("../../../assets/images/igooana_logo.png")}
            alt="IGOOANA"
            height={20}
            width={100}
          />
        </Link>
      </h1>
    </div>
  );
};

export default Logo;

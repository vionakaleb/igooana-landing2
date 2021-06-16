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
            src="http://igooana.id:8080/images/igooana_logo.png?cb832e7f606853289c1ccb00af3b4a4a"
            // src={require("./../../../assets/images/logo.svg")}
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

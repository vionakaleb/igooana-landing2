import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  const outerClasses = classNames(
    "features-tiles section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-tiles-inner section-inner pt-0",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const tilesClasses = classNames(
    "tiles-wrap center-content",
    pushLeft && "push-left"
  );

  const sectionHeader = {
    title: "SIMPLY AND SIMPLIFY",
    paragraph:
      "IGOOANA dirancang sebagai solusi yang dapat memberikan manfaat bagi mitra kerja untuk mempermudah serta mempercepat proses monitoring dan control project di lapangan.",
  };

  const sectionHeader2 = {
    title: "INTEGRATED",
    paragraph: "Integrated Tools for Data Analysis",
  };

  const mainBusiness = [
    {
      title: "MARKET BISNIS ANALISIS",
      description:
        "Dengan melakukan analisa yang baik dan tepat, Anda akan lebih bisa memahami keadaan pasar yang sesungguhnya.",
      link: "MARKET BISNIS ANALISIS",
      image: "nc-album-2",
    },
    {
      title: "DISTRIBUTOR",
      description:
        "Distribusi menjadi kunci utama pemasaran sebuah produk. Jika Anda seorang distributor, anda bisa memperluas rantai distribusi ke berbagai arah.",
      link: "DISTRIBUTOR",
      image: "nc-bulb-63",
    },
    {
      title: "WAREHOUSE MANAGEMENT",
      description:
        "Warehouse management system merupakan sebuah platform yang berfungsi untuk mempermudah pengelolaan barang di dalam gudang.",
      link: "WAREHOUSE MANAGEMENT",
      image: "nc-chart-bar-32",
    },
    {
      title: "HR MANAGEMENT",
      description:
        "Dengan Basic HR Management, staf HR akan memahami fungsi, tugas, dan tanggung jawab dalam mengelola SDM yang ada dengan efektif.",
      link: "HR MANAGEMENT",
      image: "nc-sun-fog-29",
    },
  ];

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader
            data={sectionHeader}
            className="center-content reveal-from-left"
          />
          <SectionHeader
            data={sectionHeader2}
            className="center-content reveal-from-right"
          />
          <div className={tilesClasses}>
            <div
              className="tiles-item reveal-from-bottom"
              style={{ flexBasis: "220px", maxWidth: "220px" }}
              data-reveal-delay="100"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require("./../../assets/images/feature-tile-icon-04.svg")}
                      alt="Features tile icon 04"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8" style={{ height: "70px" }}>
                    {mainBusiness[0].title}
                  </h4>
                  <p className="m-0 text-sm">{mainBusiness[0].description}</p>
                </div>
              </div>
            </div>
            <div
              className="tiles-item reveal-from-bottom"
              style={{ flexBasis: "220px", maxWidth: "220px" }}
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require("./../../assets/images/feature-tile-icon-01.svg")}
                      alt="Features tile icon 01"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8" style={{ height: "70px" }}>
                    {mainBusiness[1].title}
                  </h4>
                  <p className="m-0 text-sm">{mainBusiness[1].description}</p>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              style={{ flexBasis: "220px", maxWidth: "220px" }}
              data-reveal-delay="300"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require("./../../assets/images/feature-tile-icon-02.svg")}
                      alt="Features tile icon 02"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8" style={{ height: "70px" }}>
                    {mainBusiness[2].title}
                  </h4>
                  <p className="m-0 text-sm">{mainBusiness[2].description}</p>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              style={{ flexBasis: "220px", maxWidth: "220px" }}
              data-reveal-delay="400"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require("./../../assets/images/feature-tile-icon-03.svg")}
                      alt="Features tile icon 03"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8" style={{ height: "70px" }}>
                    {mainBusiness[3].title}
                  </h4>
                  <p className="m-0 text-sm">{mainBusiness[3].description}</p>
                </div>
              </div>
            </div>

            {/* <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require("./../../assets/images/feature-tile-icon-05.svg")}
                      alt="Features tile icon 05"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Robust Workflow</h4>
                  <p className="m-0 text-sm">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="400"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require("./../../assets/images/feature-tile-icon-06.svg")}
                      alt="Features tile icon 06"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Robust Workflow</h4>
                  <p className="m-0 text-sm">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat.
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;

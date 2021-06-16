import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {
  const outerClasses = classNames(
    "features-split section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-split-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const splitClasses = classNames(
    "split-wrap",
    invertMobile && "invert-mobile",
    invertDesktop && "invert-desktop",
    alignTop && "align-top"
  );

  const sectionHeader = {
    title: "VISI",
    paragraph:
      "Visi Igooana adalah sebagai perusahaan teknologi karya anak bangsa berskala internasional yang solutif bagi pengembangan bisnis para mitra kerja dan juga sebagai pelopor (Pioneer) untuk aplikasi mobile berbasis data collection.",
  };

  const sectionHeader2 = {
    title: "MISI",
    paragraph:
      "Dengan Misi mengutamakan kepuasan pelanggan, serta terus melakukan inovasi dan juga adaptive dalam menyesuaikan perkembangan teknologi bisnis yang lebih advance melalui pengembangan teknologi melalui produk digital, seperti: Market business analysis, distribusi-logistik, warehouse management, dan HR management.",
  };

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
          <div className={splitClasses}>
            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Lightning fast workflow
                </div>
                <h3 className="mt-0 mb-12">Multidisciplinary Organization</h3>
                <p className="m-0">
                  We are a national multidisciplinary organization allowing us
                  to combine marketing and activation capability expertise into
                  ONE team ensuring a full service Supply Chain & Operations
                  offering and enabling a wide perspective on industry
                  benchmarks and innovation.
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src="https://cdn.openpr.com/T/6/T622768761_g.jpg"
                  // src={require("./../../assets/images/features-split-image-01.png")}
                  style={{ filter: "brightness(60%)" }}
                  alt="Features split 01"
                  width={528}
                  height={396}
                />
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-right"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Lightning fast workflow
                </div>
                <h3 className="mt-0 mb-12">Collaborative Work Style</h3>
                <p className="m-0">
                  We are recognised for our collaborative work style. We do not
                  deploy mass produced “one size fits all” methods. Instead we
                  tailor our methodologies and tools precisely to the needs of
                  our clients so that they serve as real accelerators to
                  analysis and implementation.
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src="https://res.cloudinary.com/vantagecircle/image/upload/v1551271696/7-Reasons-Why-Diversity-in-The-Workplace-is-Important_ndvyku.png"
                  // src={require("./../../assets/images/features-split-image-02.png")}
                  style={{ filter: "brightness(60%)" }}
                  alt="Features split 02"
                  width={528}
                  height={396}
                />
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Lightning fast workflow
                </div>
                <h3 className="mt-0 mb-12">Helping Clients</h3>
                <p className="m-0">
                  We differentiate ourselves by our ability to execute on the
                  advice we provide. We typically help our clients to implement
                  until true benefits are realised and are sustainably embedded
                  in the organisation.
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src="https://images.propertycasualty360.com/contrib/content/uploads/sites/414/2020/03/Video-conference-Shutterstock.jpg"
                  // src={require("./../../assets/images/features-split-image-03.png")}
                  style={{ filter: "brightness(60%)" }}
                  alt="Features split 03"
                  width={528}
                  height={396}
                />
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-right"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Lightning fast workflow
                </div>
                <h3 className="mt-0 mb-12">Strategic Partnership</h3>
                <p className="m-0">
                  We have a strategic partnership with the Indolima (one of
                  Indonesian biggest BTL AGENCY) with access to an extensive
                  network of Indonesia nations wide
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src="https://mma.prnewswire.com/media/1511673/partnership.jpg?p=publish&w=950"
                  // src={require("./../../assets/images/features-split-image-02.png")}
                  style={{ filter: "brightness(60%)" }}
                  alt="Features split 02"
                  width={528}
                  height={396}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;

import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};

const Testimonial = ({
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
    "testimonial section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "testimonial-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const tilesClasses = classNames("tiles-wrap", pushLeft && "push-left");

  const sectionHeader = {
    title: "SELLING POINT",
    paragraph:
      "Reliable in managing manpower, Big Data retails (GT & MT) with 100k valid retail databases, advance knowledge selling and marketing product, Pasar Jaya acquisition program, supported by the biggest BTL Agency in Indonesia.",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader
            data={sectionHeader}
            className="center-content reveal-from-bottom"
          />
          <div className={tilesClasses}>
            <div
              className="tiles-item reveal-from-right"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    — Memuaskan kebutuhan, keinginan, dan tuntutan client.
                    Profitabilitas: Menghasilkan keuntungan untuk bisnis untuk
                    mendukung pertumbuhan yang berkelanjutan. Penciptaan
                    Permintaan: Kembangkan permintaan untuk penawaran dengan
                    mengkomunikasikannya kepada audiens target.
                  </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">
                    Principle
                  </span>
                  {/* <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0">Principle</a>
                  </span> */}
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    — Menyalurkan barang maupun jasa ke konsumen. Menjadi
                    fasilitator supaya konsumen mudah memperoleh barang atau
                    jasa dari produsen. Distributor dapat membeli lebih dulu
                    barang dari produsen untuk dijual kembali, atau bisa menjual
                    langsung hasil produksinya.
                  </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">
                    Distributor
                  </span>
                  {/* <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0">Distributor</a>
                  </span> */}
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-left"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    — Bertujuan untuk mendekati permintaan oleh pengguna
                    industri atau rumah tangga konsumen, meningkatkan kinerja
                    pemasaran penjualan kembali, dan sebagai suplemen untuk
                    iklan, penjualan, tata hubungan masyarakat, dan pemasaran
                    langsung.
                  </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">
                    Agency
                  </span>
                  {/* <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0">Agency</a>
                  </span> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;

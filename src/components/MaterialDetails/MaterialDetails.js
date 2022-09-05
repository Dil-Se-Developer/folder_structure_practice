import React from "react";
import "./MaterialDetails.scss";

const MaterialDetails = () => {
  return (
    <div className="MaterialDetails_Section">
      <div className="MateriralDetails_txt">
        <h2>Exceptional materials</h2>
        <p>
          The most durable front glass ever in a smartphone. Precision-machined,
          aerospace-grade aluminum bands. Water and dust resistance.2 And six
          stunning new finishes.
        </p>
        <div className="MeterialDetails_txt_block">
          <div className="MeterialDetails_txt_card">
            <h5>Seven-layer color process</h5>
            <p>
              The beautiful finishes of the back glass are achieved using an
              advanced process that allows for deep, rich colors.
            </p>
          </div>
          <div className="MeterialDetails_txt_card">
            <h5>Aerospace-grade aluminum bands</h5>
            <p>
              A special Apple designed alloy is precision‑machined to create
              structural bands, and anodized to complement the color of the back
              glass.
            </p>
          </div>
          <div className="MeterialDetails_txt_card">
            <h5>Wireless charging</h5>
            <p>
              The glass back allows iPhone XR to charge easily and wirelessly.3
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaterialDetails;

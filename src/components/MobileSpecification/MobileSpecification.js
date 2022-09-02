import React from "react";
import "./MobileSpecification.scss";

const MobileSpecification = () => {
  return (
    <div className="page_container mobilespec_section">
      <div className="mobilespec_txt">
        <h4>The Insides</h4>
        <p>
          The iPhone Xs and iPhone XS Max use the new A12 Bionic chip. Both
          phones have a 6-core CPU and a 4-core GPU, both of which are faster
          and more powerful than iPhone X from last year.
        </p>
        <h4>The Camera</h4>
        <p>
          The iPhone XS and iPhone XS Max both come with a dual camera system on
          the back that consists of an f1.8 12MP wide-angle lens and an f2.4
          12MP telephoto lens.
        </p>
      </div>
      <div className="mobilespec_txt">
        <h4>The Video</h4>
        <p>
          The video capabilities are the same as the last year's iPhone X,
          meaning you can expect the iPhone XS and iPhone XS Max to have the
          following video specs:
        </p>
        <ul>
          <li>4K video recording at 24 fps, 30 fps or 60 fps</li>
          <li>1080p HD video recording at 30 fps or 60 fps</li>
          <li>720p HD video recording at 30 fps</li>
          <li>Optical image stabilization for video</li>
          <li>Slo‑mo video support for 1080p at 120 fps or 240 fps</li>
        </ul>
      </div>
    </div>
  );
};

export default MobileSpecification;

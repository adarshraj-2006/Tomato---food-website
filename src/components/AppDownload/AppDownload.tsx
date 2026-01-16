// AppDownload.jsx
// This component shows app download info and store buttons

import "./AppDownload.css";
import { assets } from "../../assets/assets";

const AppDownload = () => {
  return (
    <div className="app-download" id="app-download">
      <p>
        For Better Experience Download <br />
        Tomato App
      </p>

      <div className="app-download-platforms">
        <img
          src={assets.play_store}
          alt="Download from Google Play Store"
        />
        <img
          src={assets.app_store}
          alt="Download from Apple App Store"
        />
      </div>
    </div>
  );
};

export default AppDownload;

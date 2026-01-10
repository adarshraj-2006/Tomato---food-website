// AppDownload.jsx
// This component shows app download info and store buttons

import './AppDownload.css';                  // Component-specific styles
import { assets } from '../../assets/assets'; // Store logos (Play Store & App Store)

const AppDownload = () => {
  return (
    <div className="app-download" id="app-download">
      
      {/* Section text */}
      <p>
        For Better Experience Download <br />
        Tomato App
      </p>

      {/* App store buttons */}
      <div className="app-download-platforms">
        {/* Google Play Store */}
        <img 
          src={assets.play_store} 
          alt="Download from Google Play Store" 
        />

        {/* Apple App Store */}
        <img 
          src={assets.app_store} 
          alt="Download from Apple App Store" 
        />
      </div>
    </div>
  );
};

// Default export
export default AppDownload;

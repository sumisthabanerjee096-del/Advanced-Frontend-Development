import { CloudSun } from "lucide-react";

function Header() {
  return (
    <header className="top-header">
      <div className="brand">
        <div className="brand-icon">
          <CloudSun size={24} />
        </div>

        <div>
          <h1>Weather Dashboard</h1>
          <p>Real-time weather information</p>
        </div>
      </div>

      <div className="header-badge">
        Live Weather
      </div>
    </header>
  );
}

export default Header;

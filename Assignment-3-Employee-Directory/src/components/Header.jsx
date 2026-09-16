import { Users, BriefcaseBusiness } from "lucide-react";

function Header() {
  return (
    <header className="top-header">
      <div className="brand">
        <div className="brand-icon">
          <Users size={22} />
        </div>

        <div>
          <h1>Employee Directory</h1>
          <p>Manage your workforce efficiently</p>
        </div>
      </div>

      <div className="header-badge">
        <BriefcaseBusiness size={15} />
        <span>HR Management</span>
      </div>
    </header>
  );
}

export default Header;

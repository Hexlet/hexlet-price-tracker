import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isProfileOpen, setProfileOpen] = useState(false);

  const toggleProfileMenu = () => setProfileOpen(!isProfileOpen);
  const closeProfileMenu = () => setProfileOpen(false);

  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className="flex items-center">
        <Link to="/" className="text-xl font-bold">PriceAggregator — B2B Сравнение</Link>
      </div>
      <div className="relative">
        <button onClick={toggleProfileMenu} className="flex items-center">
          Профиль ▾
        </button>
        {isProfileOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg">
            <ul>
              <li onClick={closeProfileMenu}><Link to="/profile">Профиль</Link></li>
              <li onClick={closeProfileMenu}><Link to="/settings">Настройки</Link></li>
              <li onClick={closeProfileMenu}><Link to="/logout">Выход</Link></li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation: React.FC = () => {
  return (
    <nav className="flex justify-center space-x-4 p-4 bg-gray-100">
      <NavLink to="/compare-pages" className={({ isActive }) => (isActive ? 'font-bold' : '')}>
        Сравнить две страницы
      </NavLink>
      <NavLink to="/compare-products" className={({ isActive }) => (isActive ? 'font-bold' : '')}>
        Сравнить несколько товаров
      </NavLink>
      <NavLink to="/mass-parsing" className={({ isActive }) => (isActive ? 'font-bold' : '')}>
        Массовый парсинг каталога
      </NavLink>
    </nav>
  );
};

export default Navigation;

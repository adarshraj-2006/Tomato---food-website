import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/components/context/AuthContext/AuthContext';
import { useCart } from '@/components/context/CartContext/CartContext';
import { Search, ShoppingBag, MapPin, ChevronDown, User, Package, Wallet, Settings, LogOut, Heart, Bell, HelpCircle, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const { totalItems } = useCart();
  const navigate = useNavigate();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const location = useLocation();
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleLogout = () => {
    logout();
    setShowDropdown(false);
    navigate('/');
  };

  const getDashboardLink = () => {
    if (!user) return '/';
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    switch ((user as any).role) {
      case 'seller': return '/seller/dashboard';
      case 'admin': return '/admin/dashboard';
      default: return '/user/dashboard';
    }
  };

  const menuItems = [
    { icon: User, label: 'Profile', path: '/user/profile' },
    { icon: Package, label: 'Orders', path: '/user/orders' },
    { icon: Heart, label: 'Favorites', path: '/user/favorites' },
    { icon: Wallet, label: 'Wallet', path: '/user/wallet' },
    { icon: Bell, label: 'Notifications', path: '/user/notifications' },
    { icon: HelpCircle, label: 'Help', path: '/user/help' },
    { icon: Settings, label: 'Settings', path: '/user/settings' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 shadow-sm transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-[70px]">

          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0 group">
            <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center shadow-lg shadow-red-500/30 group-hover:scale-105 transition-transform">
              <span className="text-white font-black text-xl tracking-tighter">T</span>
            </div>
            <span className="text-2xl font-black text-neutral-900 dark:text-white hidden sm:block tracking-tight group-hover:text-red-500 transition-colors">Tomato</span>
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
            {[
              { name: 'Home', path: '/' },
              { name: 'Menu', path: '/menu' },
              { name: 'Mobile App', path: '/mobile-app' },
              { name: 'Contact', path: '/contact' },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-base font-medium text-neutral-600 dark:text-neutral-300 hover:text-red-500 dark:hover:text-red-400 transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-red-500 after:transition-all hover:after:w-full"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-3 sm:gap-5">

            {/* Search (Icon only on desktop for clean look, expands or modal ideally, keeping simple for now) */}
            <div className="hidden md:flex items-center bg-neutral-100 dark:bg-neutral-800 rounded-full px-3 py-2 border border-transparent focus-within:border-red-500/50 focus-within:ring-2 focus-within:ring-red-500/20 transition-all w-[240px]">
              <Search className="w-4 h-4 text-neutral-400" />
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent border-none focus:outline-none text-sm ml-2 w-full text-neutral-700 dark:text-white placeholder:text-neutral-400"
              />
            </div>

            {/* Cart */}
            <Link
              to="/cart"
              className="relative p-2.5 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors group"
            >
              <ShoppingBag className="w-6 h-6 text-neutral-700 dark:text-neutral-200 group-hover:text-red-500 transition-colors" />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 w-5 h-5 rounded-full bg-red-500 flex items-center justify-center text-[10px] font-bold text-white shadow-md ring-2 ring-white dark:ring-neutral-900 animate-in zoom-in">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Auth Section */}
            {isAuthenticated && user ? (
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="flex items-center gap-2 p-1 pr-3 rounded-full border border-neutral-200 dark:border-neutral-800 hover:shadow-md transition-all bg-white dark:bg-black group"
                >
                  <div className="w-9 h-9 rounded-full bg-red-100 dark:bg-neutral-800 flex items-center justify-center text-red-600 dark:text-red-400 font-bold text-sm shadow-inner group-hover:bg-red-500 group-hover:text-white transition-colors">
                    {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
                  </div>
                  <Menu className="w-5 h-5 text-neutral-600 dark:text-neutral-300 md:hidden" />
                </button>

                {showDropdown && (
                  <div className="absolute right-0 top-full mt-2 w-72 bg-white dark:bg-neutral-900 rounded-2xl shadow-xl border border-neutral-100 dark:border-neutral-800 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="p-5 bg-gradient-to-br from-red-50 to-white dark:from-neutral-800 dark:to-neutral-900 border-b border-neutral-100 dark:border-neutral-800">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-red-500/30">
                          {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
                        </div>
                        <div>
                          <p className="font-bold text-lg text-neutral-900 dark:text-white leading-tight">{user.name}</p>
                          <p className="text-sm text-neutral-500 dark:text-neutral-400">{user.email}</p>
                        </div>
                      </div>
                      <Link
                        to={getDashboardLink()}
                        onClick={() => setShowDropdown(false)}
                        className="mt-4 flex items-center justify-center gap-2 w-full py-2 bg-white dark:bg-black rounded-lg text-sm font-semibold text-neutral-900 dark:text-white shadow-sm border border-neutral-200 dark:border-neutral-700 hover:border-red-500 dark:hover:border-red-500 transition-colors"
                      >
                        <User className="w-4 h-4" />
                        View Profile
                      </Link>
                    </div>
                    <div className="p-2">
                      {menuItems.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          onClick={() => setShowDropdown(false)}
                          className="flex items-center gap-3 px-3 py-3 rounded-xl text-neutral-600 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800 hover:text-red-600 dark:hover:text-red-400 transition-all font-medium"
                        >
                          <div className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 group-hover:bg-red-100 dark:group-hover:bg-red-900/20 text-neutral-500 dark:text-neutral-400 group-hover:text-red-600 transition-colors">
                            <item.icon className="w-4 h-4" />
                          </div>
                          {item.label}
                        </Link>
                      ))}
                    </div>
                    <div className="p-2 border-t border-neutral-100 dark:border-neutral-800">
                      <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl text-red-600 hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors w-full font-medium"
                      >
                        <LogOut className="w-5 h-5" />
                        Sign Out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link
                  to="/login"
                  className="flex items-center justify-center px-8 py-2.5 rounded-full bg-red-500 text-white font-bold hover:bg-red-600 transition-all shadow-lg shadow-red-500/25 hover:shadow-red-500/40 transform hover:-translate-y-0.5"
                >
                  Sign In
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Search - Visible only on mobile */}
        <div className="lg:hidden pb-3">
          <form onSubmit={handleSearch} className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-10 pl-10 pr-4 rounded-xl bg-neutral-100 dark:bg-neutral-800 border-none focus:ring-2 focus:ring-red-500/20 text-sm"
            />
          </form>
        </div>

      </div>

      {/* Mobile Menu Overlay */}
      {showMobileMenu && (
        <div className="md:hidden fixed inset-0 top-[70px] bg-white dark:bg-neutral-900 z-50 overflow-y-auto border-t border-neutral-200 dark:border-neutral-800">
          <div className="p-4 space-y-4 animate-in slide-in-from-top-5 duration-200">
            <nav className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'Menu', path: '/menu' },
                { name: 'Mobile App', path: '/mobile-app' },
                { name: 'Contact', path: '/contact' },
                { name: 'Offers', path: '/offers' },
              ].map(link => (
                <Link key={link.path} to={link.path} className="flex items-center gap-3 p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-800/50 text-neutral-900 dark:text-white font-medium" onClick={() => setShowMobileMenu(false)}>
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

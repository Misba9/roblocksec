import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { cn } from '../../lib/utils';

const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  if (pathnames.length === 0) {
    return null; // Don't show on home page
  }

  const formatPathname = (name: string) => {
    return name
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <nav aria-label="Breadcrumb" className="bg-brand-navy/50 light:bg-light-card/50 py-3">
      <div className="container mx-auto px-6">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link to="/" className="text-gray-400 light:text-gray-500 hover:text-brand-cyan light:hover:text-brand-blue">
              Home
            </Link>
          </li>
          {pathnames.map((value, index) => {
            const to = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;

            return (
              <li key={to} className="flex items-center space-x-2">
                <ChevronRight size={16} className="text-gray-500" />
                <Link
                  to={to}
                  className={cn(
                    isLast ? 'text-white light:text-light-text font-semibold' : 'text-gray-400 light:text-gray-500 hover:text-brand-cyan light:hover:text-brand-blue'
                  )}
                  aria-current={isLast ? 'page' : undefined}
                >
                  {formatPathname(value)}
                </Link>
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs;

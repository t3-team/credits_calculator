import React from 'react';

export function Header() {
  return (
    <div className="relative bg-[#f7f7f7] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-primary-500/5 to-transparent" />
        <div className="absolute right-0 w-1/2 h-full">
          <div className="absolute right-0 transform translate-x-1/3">
            <div className="grid grid-cols-3 gap-4">
              {[...Array(15)].map((_, i) => (
                <div key={i} className="w-8 h-8">
                  <div className="w-4 h-4 bg-primary-500 rounded-full opacity-10" />
                  {i % 2 === 0 && (
                    <div className="w-12 h-[2px] bg-primary-500/20 absolute transform rotate-45 translate-x-4 translate-y-2" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-[#0c0c0c] mb-6 leading-tight">
            AI & Response Credits{' '}
            <span className="text-primary-600">Calculator</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium leading-relaxed">
            Estimate the credits required for your desired features with our intuitive calculator. Optimize your resource allocation efficiently.
          </p>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 to-transparent" />
    </div>
  );
}
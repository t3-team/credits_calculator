import React from 'react';

export function Footer() {
  return (
    <footer className="mt-12 border-t border-[#0c0c0c] py-8 bg-[#0c0c0c]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="space-y-4">
            <p className="text-sm text-white">
              For detailed credits usage guidelines, visit our{' '}
              <a href="#" className="text-primary-400 hover:text-primary-300 font-medium">
                FAQ page
              </a>
            </p>
            <p className="text-sm text-gray-300">
              © {new Date().getFullYear()} Turiyatree Technologies. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-24 h-24 rounded-xl flex items-center justify-center shadow-lg overflow-hidden bg-black p-2">
              <img 
                src="https://turiyatree.com/wp-content/uploads/2023/04/footer-logo.png"
                alt="Turiyatree Technologies"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
import { useState } from 'react';
import React from 'react';


const NavBar = () => {

   const [isOpen,setIsOpen] = useState(false);

   return (
   <nav className="bg-slate-900 text-white p-4 flex justify-between items-center relative z-[100]">
      <div className="text-xl font-bold tracking-wider text-blue-400">Bank_APP</div>

      <div className="relative">
        
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-3 bg-slate-800 hover:bg-slate-700 px-3 py-2 rounded-lg transition-all border border-slate-700"
        >
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center font-bold">U</div>
          <span className="text-sm font-medium">User Profile</span>
          <span className={`text-xs transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>▼</span>
        </button>

        
        {isOpen && (
          <div className="absolute top-12 right-0 w-64 bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden text-slate-700 animate-in fade-in zoom-in duration-200">
            
            
            <div className="px-4 py-3 bg-slate-50 border-b border-slate-100">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Signed in as</p>
              <p className="text-sm font-bold text-slate-900 truncate">admin@example.com</p>
            </div>

            
            <div className="py-2">
              <p className="px-4 py-1 text-[11px] font-bold text-slate-400 uppercase tracking-tighter">Settings</p>
              <a href="#profile" className="flex items-center px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-600 transition-colors">
                 👤 My Profile
              </a>
              <a href="#billing" className="flex items-center px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-600 transition-colors">
                 💳 Billing & Plans
              </a>
              <a href="#security" className="flex items-center px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-600 transition-colors">
                 🛡️ Security & Privacy
              </a>
            </div>

           
            <div className="py-2 border-t border-slate-100 bg-slate-50/50">
              <p className="px-4 py-1 text-[11px] font-bold text-slate-400 uppercase tracking-tighter">Support</p>
              <a href="#help" className="flex items-center px-4 py-2 text-sm hover:bg-blue-50 transition-colors">
                 📖 Documentation
              </a>
            </div>

            
            <div className="border-t border-slate-100">
              <button 
                onClick={() => alert('Logging out...')}
                className="w-full text-left px-4 py-3 text-sm font-bold text-red-500 hover:bg-red-50 transition-colors flex items-center"
              >
                🚀 Sign Out
              </button>
            </div>

          </div>
        )}
      </div>
    </nav>
  );
};
    

export default NavBar;
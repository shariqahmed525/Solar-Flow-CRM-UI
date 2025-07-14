import React from 'react';
import { User, Bell, Shield, Database, Palette, Globe, Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Settings: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className={`p-6 min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`}>
      <div className="mb-6">
        <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Settings</h2>
        <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mt-1`}>Manage your account and system preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Settings */}
        <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-sm border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} p-6 hover:shadow-md transition-all duration-300`}>
          <div className="flex items-center mb-4">
            <User className="w-5 h-5 text-emerald-600 mr-2" />
            <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Profile</h3>
          </div>
          <div className="space-y-4">
            <div>
              <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}>Full Name</label>
              <input
                type="text"
                defaultValue="John Smith"
                className={`w-full px-3 py-2 border ${isDarkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300 bg-white text-gray-900'} rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-300`}
              />
            </div>
            <div>
              <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}>Email</label>
              <input
                type="email"
                defaultValue="john.smith@solarflow.com"
                className={`w-full px-3 py-2 border ${isDarkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300 bg-white text-gray-900'} rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-300`}
              />
            </div>
            <div>
              <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}>Role</label>
              <select className={`w-full px-3 py-2 border ${isDarkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300 bg-white text-gray-900'} rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-300`}>
                <option>Sales Manager</option>
                <option>Account Executive</option>
                <option>Admin</option>
              </select>
            </div>
          </div>
        </div>

        {/* Notification Settings */}
        <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-sm border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} p-6 hover:shadow-md transition-all duration-300`}>
          <div className="flex items-center mb-4">
            <Bell className="w-5 h-5 text-emerald-600 mr-2" />
            <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Notifications</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Email Notifications</p>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Receive updates via email</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 dark:peer-focus:ring-emerald-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-emerald-600"></div>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Push Notifications</p>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Browser notifications</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 dark:peer-focus:ring-emerald-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-emerald-600"></div>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>SMS Alerts</p>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Critical updates only</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 dark:peer-focus:ring-emerald-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-emerald-600"></div>
              </label>
            </div>
          </div>
        </div>

        {/* Security Settings */}
        <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-sm border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} p-6 hover:shadow-md transition-all duration-300`}>
          <div className="flex items-center mb-4">
            <Shield className="w-5 h-5 text-emerald-600 mr-2" />
            <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Security</h3>
          </div>
          <div className="space-y-4">
            <button className={`w-full text-left px-4 py-3 border ${isDarkMode ? 'border-gray-600 hover:bg-gray-700' : 'border-gray-300 hover:bg-gray-50'} rounded-lg transition-all duration-300 hover:scale-105`}>
              <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Change Password</p>
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Update your account password</p>
            </button>
            <button className={`w-full text-left px-4 py-3 border ${isDarkMode ? 'border-gray-600 hover:bg-gray-700' : 'border-gray-300 hover:bg-gray-50'} rounded-lg transition-all duration-300 hover:scale-105`}>
              <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Two-Factor Authentication</p>
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Enable 2FA for extra security</p>
            </button>
            <button className={`w-full text-left px-4 py-3 border ${isDarkMode ? 'border-gray-600 hover:bg-gray-700' : 'border-gray-300 hover:bg-gray-50'} rounded-lg transition-all duration-300 hover:scale-105`}>
              <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Active Sessions</p>
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Manage your login sessions</p>
            </button>
          </div>
        </div>

        {/* Integration Settings */}
        <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-sm border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} p-6 hover:shadow-md transition-all duration-300`}>
          <div className="flex items-center mb-4">
            <Database className="w-5 h-5 text-emerald-600 mr-2" />
            <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Integrations</h3>
          </div>
          <div className="space-y-3">
            <div className={`flex items-center justify-between p-3 border ${isDarkMode ? 'border-gray-600' : 'border-gray-200'} rounded-lg hover:scale-105 transition-all duration-300`}>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-blue-600 dark:text-blue-300 font-bold text-sm">Z</span>
                </div>
                <div>
                  <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Zoho CRM</p>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Connected</p>
                </div>
              </div>
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            </div>
            <div className={`flex items-center justify-between p-3 border ${isDarkMode ? 'border-gray-600' : 'border-gray-200'} rounded-lg hover:scale-105 transition-all duration-300`}>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-purple-600 dark:text-purple-300 font-bold text-sm">M</span>
                </div>
                <div>
                  <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Monday.com</p>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Connected</p>
                </div>
              </div>
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            </div>
            <div className={`flex items-center justify-between p-3 border ${isDarkMode ? 'border-gray-600' : 'border-gray-200'} rounded-lg hover:scale-105 transition-all duration-300`}>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-green-600 dark:text-green-300 font-bold text-sm">ZD</span>
                </div>
                <div>
                  <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Zendesk</p>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Not connected</p>
                </div>
              </div>
              <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
            </div>
          </div>
        </div>

        {/* Appearance Settings */}
        <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-sm border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} p-6 hover:shadow-md transition-all duration-300`}>
          <div className="flex items-center mb-4">
            <Palette className="w-5 h-5 text-emerald-600 mr-2" />
            <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Appearance</h3>
          </div>
          <div className="space-y-4">
            <div>
              <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>Theme</label>
              <div className="grid grid-cols-2 gap-2">
                <button 
                  onClick={() => !isDarkMode && toggleTheme()}
                  className={`p-3 border-2 ${!isDarkMode ? 'border-emerald-500' : 'border-gray-300 dark:border-gray-600'} rounded-lg bg-white hover:scale-105 transition-all duration-300`}
                >
                  <div className="w-full h-4 bg-gray-100 rounded mb-2"></div>
                  <div className="w-3/4 h-2 bg-gray-300 rounded mb-1"></div>
                  <div className="w-1/2 h-2 bg-gray-300 rounded"></div>
                  <div className="flex items-center justify-center mt-2">
                    <Sun className="w-4 h-4 mr-1 text-yellow-500" />
                    <p className="text-xs font-medium">Light</p>
                  </div>
                </button>
                <button 
                  onClick={() => isDarkMode && toggleTheme()}
                  className={`p-3 border-2 ${isDarkMode ? 'border-emerald-500' : 'border-gray-300 dark:border-gray-600'} rounded-lg bg-gray-900 hover:scale-105 transition-all duration-300`}
                >
                  <div className="w-full h-4 bg-gray-800 rounded mb-2"></div>
                  <div className="w-3/4 h-2 bg-gray-600 rounded mb-1"></div>
                  <div className="w-1/2 h-2 bg-gray-600 rounded"></div>
                  <div className="flex items-center justify-center mt-2">
                    <Moon className="w-4 h-4 mr-1 text-blue-400" />
                    <p className="text-xs font-medium text-white">Dark</p>
                  </div>
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Auto Theme Switch</p>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Follow system preference</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 dark:peer-focus:ring-emerald-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-emerald-600"></div>
              </label>
            </div>
          </div>
        </div>

        {/* Regional Settings */}
        <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-sm border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} p-6 hover:shadow-md transition-all duration-300`}>
          <div className="flex items-center mb-4">
            <Globe className="w-5 h-5 text-emerald-600 mr-2" />
            <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Regional</h3>
          </div>
          <div className="space-y-4">
            <div>
              <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}>Language</label>
              <select className={`w-full px-3 py-2 border ${isDarkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300 bg-white text-gray-900'} rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-300`}>
                <option>English (US)</option>
                <option>English (UK)</option>
                <option>Spanish</option>
                <option>French</option>
              </select>
            </div>
            <div>
              <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}>Time Zone</label>
              <select className={`w-full px-3 py-2 border ${isDarkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300 bg-white text-gray-900'} rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-300`}>
                <option>Pacific Time (PT)</option>
                <option>Mountain Time (MT)</option>
                <option>Central Time (CT)</option>
                <option>Eastern Time (ET)</option>
              </select>
            </div>
            <div>
              <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}>Currency</label>
              <select className={`w-full px-3 py-2 border ${isDarkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300 bg-white text-gray-900'} rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-300`}>
                <option>USD ($)</option>
                <option>EUR (€)</option>
                <option>GBP (£)</option>
                <option>CAD (C$)</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="mt-6 flex justify-end">
        <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Settings;
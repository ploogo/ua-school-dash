import React, { useState } from 'react';
import {
  Bell,
  Mail,
  Lock,
  Globe,
  Moon,
  Sun,
  Smartphone,
  Shield,
  CreditCard,
  Languages,
  Eye,
  EyeOff,
  Check
} from 'lucide-react';

const SettingsPage: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [savedStatus, setSavedStatus] = useState<string | null>(null);

  const handleSave = () => {
    setSavedStatus('Settings saved successfully!');
    setTimeout(() => setSavedStatus(null), 3000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
        <h2 className="text-2xl font-bold text-black mb-2">Settings</h2>
        <p className="text-gray-600">Manage your account preferences and settings</p>
      </div>

      {savedStatus && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg flex items-center gap-2">
          <Check className="w-5 h-5" />
          {savedStatus}
        </div>
      )}

      {/* Account Settings */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-black mb-6">Account Settings</h3>
        
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                defaultValue="thompson.family@email.com"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f8d000]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                defaultValue="(555) 123-4567"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f8d000]"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                defaultValue="currentpassword"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f8d000]"
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Notification Preferences */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-black mb-6">Notification Preferences</h3>
        
        <div className="space-y-4">
          {[
            { icon: Bell, label: 'Push Notifications', description: 'Receive notifications on your device' },
            { icon: Mail, label: 'Email Notifications', description: 'Receive updates via email' },
            { icon: Smartphone, label: 'SMS Notifications', description: 'Receive text message alerts' }
          ].map((item) => (
            <div key={item.label} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <item.icon className="w-5 h-5 text-gray-500" />
                <div>
                  <p className="font-medium text-black">{item.label}</p>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#f8d000] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#f8d000]"></div>
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Display & Language */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-black mb-6">Display & Language</h3>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg">
            <div className="flex items-center gap-3">
              {darkMode ? <Moon className="w-5 h-5 text-gray-500" /> : <Sun className="w-5 h-5 text-gray-500" />}
              <div>
                <p className="font-medium text-black">Dark Mode</p>
                <p className="text-sm text-gray-500">Switch between light and dark themes</p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#f8d000] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#f8d000]"></div>
            </label>
          </div>

          <div className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg">
            <div className="flex items-center gap-3">
              <Languages className="w-5 h-5 text-gray-500" />
              <div>
                <p className="font-medium text-black">Language</p>
                <p className="text-sm text-gray-500">Choose your preferred language</p>
              </div>
            </div>
            <select className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f8d000]">
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
            </select>
          </div>
        </div>
      </div>

      {/* Privacy & Security */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-black mb-6">Privacy & Security</h3>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg">
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5 text-gray-500" />
              <div>
                <p className="font-medium text-black">Two-Factor Authentication</p>
                <p className="text-sm text-gray-500">Add an extra layer of security</p>
              </div>
            </div>
            <button className="px-4 py-2 bg-black text-[#f8d000] rounded-lg hover:bg-gray-900">
              Enable
            </button>
          </div>

          <div className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg">
            <div className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-gray-500" />
              <div>
                <p className="font-medium text-black">Privacy Settings</p>
                <p className="text-sm text-gray-500">Manage your privacy preferences</p>
              </div>
            </div>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              Configure
            </button>
          </div>
        </div>
      </div>

      {/* Payment Information */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-black mb-6">Payment Information</h3>
        
        <div className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg">
          <div className="flex items-center gap-3">
            <CreditCard className="w-5 h-5 text-gray-500" />
            <div>
              <p className="font-medium text-black">Payment Methods</p>
              <p className="text-sm text-gray-500">Manage your payment options</p>
            </div>
          </div>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            Manage
          </button>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end gap-4">
        <button className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
          Cancel
        </button>
        <button
          onClick={handleSave}
          className="px-6 py-2 bg-black text-[#f8d000] rounded-lg hover:bg-gray-900"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default SettingsPage;
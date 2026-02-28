import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaUser, FaBell, FaPalette, FaLock, FaLanguage, FaDesktop, FaMoon, FaSun, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

const Settings = () => {
  const navigate = useNavigate();
  const [settings, setSettings] = useState({
    theme: 'dark',
    notifications: true,
    sound: true,
    language: 'English',
    fontSize: 'medium',
    autoPlay: false,
    privacy: 'public',
    emailUpdates: true
  });

  const handleSettingChange = (key, value) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const settingsSections = [
    {
      title: 'Account Settings',
      icon: <FaUser className="text-xl text-purple-400" />,
      settings: [
        {
          title: 'Profile Privacy',
          description: 'Control who can see your reading activity',
          type: 'select',
          value: settings.privacy,
          options: ['Public', 'Private', 'Friends Only'],
          onChange: (value) => handleSettingChange('privacy', value)
        },
        {
          title: 'Email Updates',
          description: 'Receive updates about new books and features',
          type: 'toggle',
          value: settings.emailUpdates,
          onChange: (value) => handleSettingChange('emailUpdates', value)
        }
      ]
    },
    {
      title: 'Appearance',
      icon: <FaPalette className="text-xl text-purple-400" />,
      settings: [
        {
          title: 'Theme',
          description: 'Choose your preferred theme',
          type: 'select',
          value: settings.theme,
          options: ['Light', 'Dark', 'System'],
          onChange: (value) => handleSettingChange('theme', value)
        },
        {
          title: 'Font Size',
          description: 'Adjust the text size for better readability',
          type: 'select',
          value: settings.fontSize,
          options: ['Small', 'Medium', 'Large'],
          onChange: (value) => handleSettingChange('fontSize', value)
        }
      ]
    },
    {
      title: 'Notifications',
      icon: <FaBell className="text-xl text-purple-400" />,
      settings: [
        {
          title: 'Push Notifications',
          description: 'Receive notifications about new books and updates',
          type: 'toggle',
          value: settings.notifications,
          onChange: (value) => handleSettingChange('notifications', value)
        },
        {
          title: 'Sound Effects',
          description: 'Play sound effects when interacting with the app',
          type: 'toggle',
          value: settings.sound,
          onChange: (value) => handleSettingChange('sound', value)
        }
      ]
    },
    {
      title: 'Language & Region',
      icon: <FaLanguage className="text-xl text-purple-400" />,
      settings: [
        {
          title: 'Language',
          description: 'Select your preferred language',
          type: 'select',
          value: settings.language,
          options: ['English', 'Spanish', 'French', 'German', 'Chinese'],
          onChange: (value) => handleSettingChange('language', value)
        }
      ]
    },
    {
      title: 'Security',
      icon: <FaLock className="text-xl text-purple-400" />,
      settings: [
        {
          title: 'Two-Factor Authentication',
          description: 'Add an extra layer of security to your account',
          type: 'toggle',
          value: false,
          onChange: () => {}
        }
      ]
    }
  ];

  return (
    <div className="relative min-h-screen w-full bg-[#0A0A0F] overflow-hidden font-['Inter']">
      {/* Back Button */}
      <button 
        onClick={() => navigate('/main')}
        className="fixed top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 bg-purple-500/10 text-purple-400 rounded-lg hover:bg-purple-500/20 transition-all duration-300"
      >
        <FaArrowLeft /> Back to Main Page
      </button>

      {/* Background gradient overlay */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-[#8B3DFF]/10 rounded-[600px] filter blur-[120px] transform -translate-y-1/4"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A0F]/90 to-[#0A0A0F]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,61,255,0.08),transparent_70%)]"></div>
      </div>

      {/* Content container */}
      <div className="relative z-10 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-['General_Sans'] font-medium tracking-[-0.03em] text-white bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 mb-4">
              Settings
            </h1>
            <p className="text-gray-400 text-lg font-light max-w-2xl mx-auto">
              Customize your reading experience and manage your account preferences
            </p>
          </motion.div>

          {/* Settings Sections */}
          <div className="space-y-6">
            {settingsSections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                className="bg-white/[0.02] backdrop-blur-2xl rounded-2xl p-6 border border-white/5"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-xl flex items-center justify-center">
                    {section.icon}
                  </div>
                  <h2 className="text-xl font-medium text-white">{section.title}</h2>
                </div>

                <div className="space-y-6">
                  {section.settings.map((setting, settingIndex) => (
                    <div key={setting.title} className="flex items-center justify-between">
                      <div>
                        <h3 className="text-white font-medium">{setting.title}</h3>
                        <p className="text-sm text-gray-400">{setting.description}</p>
                      </div>

                      {setting.type === 'toggle' ? (
                        <button
                          onClick={() => setting.onChange(!setting.value)}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
                            setting.value ? 'bg-purple-500' : 'bg-gray-600'
                          }`}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              setting.value ? 'translate-x-6' : 'translate-x-1'
                            }`}
                          />
                        </button>
                      ) : setting.type === 'select' ? (
                        <select
                          value={setting.value}
                          onChange={(e) => setting.onChange(e.target.value)}
                          className="bg-white/[0.02] border border-white/5 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500/50"
                        >
                          {setting.options.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      ) : null}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Save Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8 flex justify-end"
          >
            <button
              onClick={() => {
                // Handle save settings
                navigate('/');
              }}
              className="px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors duration-300 font-medium"
            >
              Save Changes
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Settings; 
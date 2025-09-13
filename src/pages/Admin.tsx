import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  UserGroupIcon,
  PlusIcon,
  PencilIcon,
  TrashIcon,
  ChartBarIcon,
  CalendarIcon,
  TrophyIcon
} from '@heroicons/react/24/outline';
import { mockAlumni, mockEvents, mockWallOfFame } from '../data/mockData';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import SearchBar from '../components/ui/SearchBar';
import Modal from '../components/ui/Modal';

const Admin: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'alumni' | 'events' | 'wall-of-fame' | 'analytics'>('alumni');
  const [searchTerm, setSearchTerm] = useState('');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const tabs = [
    { id: 'alumni', name: 'Alumni', icon: UserGroupIcon, count: mockAlumni.length },
    { id: 'events', name: 'Events', icon: CalendarIcon, count: mockEvents.length },
    { id: 'wall-of-fame', name: 'Wall of Fame', icon: TrophyIcon, count: mockWallOfFame.length },
    { id: 'analytics', name: 'Analytics', icon: ChartBarIcon, count: null }
  ];

  const filteredAlumni = mockAlumni.filter(alumni =>
    alumni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    alumni.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    alumni.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredEvents = mockEvents.filter(event =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.organizer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredWallOfFame = mockWallOfFame.filter(entry =>
    entry.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    entry.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCreate = () => {
    setShowCreateModal(true);
  };

  const handleEdit = () => {
    setShowEditModal(true);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      // In a real app, this would make an API call
      console.log('Delete item:', id);
    }
  };

  const renderAlumniTable = () => (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-slate-200 dark:border-slate-700">
            <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-slate-100">Name</th>
            <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-slate-100">Email</th>
            <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-slate-100">Company</th>
            <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-slate-100">Graduation Year</th>
            <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-slate-100">Status</th>
            <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-slate-100">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredAlumni.map((alumni) => (
            <motion.tr
              key={alumni.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50"
            >
              <td className="py-3 px-4">
                <div className="flex items-center space-x-3">
                  <img
                    src={alumni.profileImage}
                    alt={alumni.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-medium text-slate-900 dark:text-slate-100">
                      {alumni.name}
                    </div>
                    <div className="text-sm text-slate-500 dark:text-slate-500">
                      {alumni.currentPosition}
                    </div>
                  </div>
                </div>
              </td>
              <td className="py-3 px-4 text-slate-600 dark:text-slate-400">
                {alumni.email}
              </td>
              <td className="py-3 px-4 text-slate-600 dark:text-slate-400">
                {alumni.company}
              </td>
              <td className="py-3 px-4 text-slate-600 dark:text-slate-400">
                {alumni.graduationYear}
              </td>
              <td className="py-3 px-4">
                <div className="flex space-x-2">
                  {alumni.isVerified && (
                    <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs rounded-full">
                      Verified
                    </span>
                  )}
                  {alumni.isMentor && (
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full">
                      Mentor
                    </span>
                  )}
                </div>
              </td>
              <td className="py-3 px-4">
                <div className="flex space-x-2">
                  <button
                    onClick={handleEdit}
                    className="p-1 text-slate-400 hover:text-primary-600 transition-colors duration-200"
                  >
                    <PencilIcon className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(alumni.id)}
                    className="p-1 text-slate-400 hover:text-red-600 transition-colors duration-200"
                  >
                    <TrashIcon className="w-4 h-4" />
                  </button>
                </div>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderEventsTable = () => (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-slate-200 dark:border-slate-700">
            <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-slate-100">Event</th>
            <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-slate-100">Date</th>
            <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-slate-100">Type</th>
            <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-slate-100">Attendees</th>
            <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-slate-100">Organizer</th>
            <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-slate-100">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredEvents.map((event) => (
            <motion.tr
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50"
            >
              <td className="py-3 px-4">
                <div className="flex items-center space-x-3">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div>
                    <div className="font-medium text-slate-900 dark:text-slate-100">
                      {event.title}
                    </div>
                    <div className="text-sm text-slate-500 dark:text-slate-500 line-clamp-1">
                      {event.description}
                    </div>
                  </div>
                </div>
              </td>
              <td className="py-3 px-4 text-slate-600 dark:text-slate-400">
                {new Date(event.date).toLocaleDateString()}
              </td>
              <td className="py-3 px-4">
                <span className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs rounded-full capitalize">
                  {event.type}
                </span>
              </td>
              <td className="py-3 px-4 text-slate-600 dark:text-slate-400">
                {event.attendees.length}
                {event.maxAttendees && ` / ${event.maxAttendees}`}
              </td>
              <td className="py-3 px-4 text-slate-600 dark:text-slate-400">
                {event.organizer}
              </td>
              <td className="py-3 px-4">
                <div className="flex space-x-2">
                  <button
                    onClick={handleEdit}
                    className="p-1 text-slate-400 hover:text-primary-600 transition-colors duration-200"
                  >
                    <PencilIcon className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(event.id)}
                    className="p-1 text-slate-400 hover:text-red-600 transition-colors duration-200"
                  >
                    <TrashIcon className="w-4 h-4" />
                  </button>
                </div>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderWallOfFameTable = () => (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-slate-200 dark:border-slate-700">
            <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-slate-100">Entry</th>
            <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-slate-100">Alumni</th>
            <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-slate-100">Category</th>
            <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-slate-100">Featured</th>
            <th className="text-left py-3 px-4 font-semibold text-slate-900 dark:text-slate-100">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredWallOfFame.map((entry) => {
            const alumni = mockAlumni.find(a => a.id === entry.alumniId);
            return (
              <motion.tr
                key={entry.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50"
              >
                <td className="py-3 px-4">
                  <div className="flex items-center space-x-3">
                    <img
                      src={entry.image}
                      alt={entry.title}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div>
                      <div className="font-medium text-slate-900 dark:text-slate-100">
                        {entry.title}
                      </div>
                      <div className="text-sm text-slate-500 dark:text-slate-500 line-clamp-1">
                        {entry.description}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <div className="flex items-center space-x-2">
                    <img
                      src={alumni?.profileImage}
                      alt={alumni?.name}
                      className="w-6 h-6 rounded-full object-cover"
                    />
                    <span className="text-slate-600 dark:text-slate-400">
                      {alumni?.name}
                    </span>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs rounded-full capitalize">
                    {entry.category}
                  </span>
                </td>
                <td className="py-3 px-4">
                  {entry.featured ? (
                    <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 text-xs rounded-full">
                      Featured
                    </span>
                  ) : (
                    <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 text-xs rounded-full">
                      Regular
                    </span>
                  )}
                </td>
                <td className="py-3 px-4">
                  <div className="flex space-x-2">
                    <button
                      onClick={handleEdit}
                      className="p-1 text-slate-400 hover:text-primary-600 transition-colors duration-200"
                    >
                      <PencilIcon className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(entry.id)}
                      className="p-1 text-slate-400 hover:text-red-600 transition-colors duration-200"
                    >
                      <TrashIcon className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </motion.tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );

  const renderAnalytics = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card className="text-center">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <UserGroupIcon className="w-8 h-8 text-white" />
        </div>
        <div className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">
          {mockAlumni.length}
        </div>
        <div className="text-slate-600 dark:text-slate-400">
          Total Alumni
        </div>
      </Card>

      <Card className="text-center">
        <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <CalendarIcon className="w-8 h-8 text-white" />
        </div>
        <div className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">
          {mockEvents.length}
        </div>
        <div className="text-slate-600 dark:text-slate-400">
          Total Events
        </div>
      </Card>

      <Card className="text-center">
        <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <TrophyIcon className="w-8 h-8 text-white" />
        </div>
        <div className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">
          {mockWallOfFame.length}
        </div>
        <div className="text-slate-600 dark:text-slate-400">
          Wall of Fame Entries
        </div>
      </Card>

      <Card className="text-center">
        <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-orange-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <ChartBarIcon className="w-8 h-8 text-white" />
        </div>
        <div className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">
          95%
        </div>
        <div className="text-slate-600 dark:text-slate-400">
          Engagement Rate
        </div>
      </Card>
    </div>
  );

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6">
            Admin Dashboard
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            Manage alumni, events, and content for the Alumni Tracker platform.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white/10 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:bg-white/20 dark:hover:bg-white/10'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span>{tab.name}</span>
                {tab.count !== null && (
                  <span className="px-2 py-1 bg-white/20 text-xs rounded-full">
                    {tab.count}
                  </span>
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Search and Actions */}
        {activeTab !== 'analytics' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1">
                <SearchBar
                  placeholder={`Search ${activeTab}...`}
                  value={searchTerm}
                  onChange={setSearchTerm}
                  className="w-full"
                />
              </div>
              <Button onClick={handleCreate} className="flex items-center space-x-2">
                <PlusIcon className="w-5 h-5" />
                <span>Add New</span>
              </Button>
            </div>
          </motion.div>
        )}

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {activeTab === 'alumni' && (
            <Card>
              <div className="overflow-x-auto">
                {renderAlumniTable()}
              </div>
            </Card>
          )}

          {activeTab === 'events' && (
            <Card>
              <div className="overflow-x-auto">
                {renderEventsTable()}
              </div>
            </Card>
          )}

          {activeTab === 'wall-of-fame' && (
            <Card>
              <div className="overflow-x-auto">
                {renderWallOfFameTable()}
              </div>
            </Card>
          )}

          {activeTab === 'analytics' && (
            <div className="space-y-8">
              {renderAnalytics()}
              
              <Card>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
                  Recent Activity
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                      <UserGroupIcon className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900 dark:text-slate-100">
                        New alumni registered
                      </p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        2 hours ago
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                      <CalendarIcon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900 dark:text-slate-100">
                        New event created
                      </p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        4 hours ago
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                      <TrophyIcon className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900 dark:text-slate-100">
                        New wall of fame entry
                      </p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        1 day ago
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          )}
        </motion.div>
      </div>

      {/* Create/Edit Modal */}
      <Modal
        isOpen={showCreateModal || showEditModal}
        onClose={() => {
          setShowCreateModal(false);
          setShowEditModal(false);
        }}
        title={showCreateModal ? `Create New ${activeTab.slice(0, -1)}` : `Edit ${activeTab.slice(0, -1)}`}
        size="lg"
      >
        <div className="space-y-4">
          <p className="text-slate-600 dark:text-slate-400">
            {showCreateModal 
              ? `Create a new ${activeTab.slice(0, -1)} entry.` 
              : `Edit the selected ${activeTab.slice(0, -1)} entry.`
            }
          </p>
          <div className="text-sm text-slate-500 dark:text-slate-500">
            This is a demo. In a real application, this would open a form with all the necessary fields.
          </div>
          <div className="flex justify-end space-x-3">
            <Button variant="outline" onClick={() => {
              setShowCreateModal(false);
              setShowEditModal(false);
            }}>
              Cancel
            </Button>
            <Button onClick={() => {
              setShowCreateModal(false);
              setShowEditModal(false);
            }}>
              {showCreateModal ? 'Create' : 'Save Changes'}
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Admin;

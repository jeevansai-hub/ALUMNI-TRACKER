import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  UserGroupIcon,
  StarIcon,
  ChatBubbleLeftRightIcon,
  ClockIcon,
  CheckCircleIcon,
  XCircleIcon,
  PlusIcon
} from '@heroicons/react/24/outline';
import { mockAlumni, mockMentorshipRequests } from '../data/mockData';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import SearchBar from '../components/ui/SearchBar';
import Modal from '../components/ui/Modal';

const Mentorship: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedArea, setSelectedArea] = useState<string>('all');
  const [showRequestModal, setShowRequestModal] = useState(false);
  const [selectedMentor, setSelectedMentor] = useState<string | null>(null);

  const mentorshipAreas = [
    { id: 'all', name: 'All Areas', color: 'from-slate-500 to-slate-600' },
    { id: 'Career Development', name: 'Career Development', color: 'from-blue-500 to-blue-600' },
    { id: 'Technical Skills', name: 'Technical Skills', color: 'from-green-500 to-green-600' },
    { id: 'Leadership', name: 'Leadership', color: 'from-purple-500 to-purple-600' },
    { id: 'Finance', name: 'Finance', color: 'from-yellow-500 to-yellow-600' },
    { id: 'Investment Strategy', name: 'Investment Strategy', color: 'from-orange-500 to-orange-600' },
    { id: 'Data Science', name: 'Data Science', color: 'from-pink-500 to-pink-600' },
    { id: 'Machine Learning', name: 'Machine Learning', color: 'from-indigo-500 to-indigo-600' }
  ];

  const availableMentors = mockAlumni.filter(alumni => 
    alumni.isMentor && alumni.isAvailableForMentorship
  );

  const filteredMentors = availableMentors.filter(mentor => {
    const matchesSearch = 
      mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mentor.currentPosition.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mentor.company.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesArea = selectedArea === 'all' || 
      mentor.mentorshipAreas.includes(selectedArea);
    
    return matchesSearch && matchesArea;
  });

  const getAreaColor = (area: string) => {
    const areaData = mentorshipAreas.find(a => a.id === area);
    return areaData?.color || 'from-gray-500 to-gray-600';
  };

  const handleRequestMentorship = (mentorId: string) => {
    setSelectedMentor(mentorId);
    setShowRequestModal(true);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'accepted':
        return 'text-green-600 bg-green-100 dark:bg-green-900/30';
      case 'pending':
        return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/30';
      case 'rejected':
        return 'text-red-600 bg-red-100 dark:bg-red-900/30';
      case 'completed':
        return 'text-blue-600 bg-blue-100 dark:bg-blue-900/30';
      default:
        return 'text-gray-600 bg-gray-100 dark:bg-gray-900/30';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'accepted':
        return CheckCircleIcon;
      case 'pending':
        return ClockIcon;
      case 'rejected':
        return XCircleIcon;
      case 'completed':
        return CheckCircleIcon;
      default:
        return ClockIcon;
    }
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6">
            Mentorship Program
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Connect with experienced alumni mentors who can guide you on your career journey. 
            Get personalized advice, industry insights, and valuable connections.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12"
        >
          <Card className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <UserGroupIcon className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">
              {availableMentors.length}
            </div>
            <div className="text-slate-600 dark:text-slate-400">
              Available Mentors
            </div>
          </Card>

          <Card className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <ChatBubbleLeftRightIcon className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">
              {mockMentorshipRequests.length}
            </div>
            <div className="text-slate-600 dark:text-slate-400">
              Active Mentorships
            </div>
          </Card>

          <Card className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-600 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <StarIcon className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">
              4.8
            </div>
            <div className="text-slate-600 dark:text-slate-400">
              Average Rating
            </div>
          </Card>

          <Card className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-600 to-rose-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <CheckCircleIcon className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">
              95%
            </div>
            <div className="text-slate-600 dark:text-slate-400">
              Success Rate
            </div>
          </Card>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="flex-1">
              <SearchBar
                placeholder="Search mentors by name, position, or company..."
                value={searchTerm}
                onChange={setSearchTerm}
                className="w-full"
              />
            </div>
            <Button variant="secondary" className="flex items-center space-x-2">
              <PlusIcon className="w-5 h-5" />
              <span>Become a Mentor</span>
            </Button>
          </div>

          {/* Area Filter */}
          <div className="flex flex-wrap gap-2">
            {mentorshipAreas.map((area) => (
              <motion.button
                key={area.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedArea(area.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedArea === area.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white/10 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:bg-white/20 dark:hover:bg-white/10'
                }`}
              >
                {area.name}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Mentors Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
              Available Mentors
            </h2>
            <span className="text-slate-600 dark:text-slate-400">
              {filteredMentors.length} mentors found
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMentors.map((mentor, index) => (
              <motion.div
                key={mentor.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -4, scale: 1.02 }}
              >
                <Card className="h-full">
                  <div className="text-center">
                    {/* Profile Image */}
                    <div className="relative inline-block mb-4">
                      <img
                        src={mentor.profileImage}
                        alt={mentor.name}
                        className="w-20 h-20 rounded-full object-cover mx-auto"
                      />
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <UserGroupIcon className="w-4 h-4 text-white" />
                      </div>
                    </div>

                    {/* Name and Title */}
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
                      {mentor.name}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-1">
                      {mentor.currentPosition}
                    </p>
                    <p className="text-slate-500 dark:text-slate-500 text-sm mb-4">
                      {mentor.company}
                    </p>

                    {/* Mentorship Areas */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2 justify-center">
                        {mentor.mentorshipAreas.slice(0, 3).map((area) => (
                          <span
                            key={area}
                            className={`px-3 py-1 bg-gradient-to-r ${getAreaColor(area)} text-white text-xs rounded-full font-medium`}
                          >
                            {area}
                          </span>
                        ))}
                        {mentor.mentorshipAreas.length > 3 && (
                          <span className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 text-xs rounded-full">
                            +{mentor.mentorshipAreas.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Experience */}
                    <div className="mb-6">
                      <div className="flex items-center justify-center space-x-4 text-sm text-slate-600 dark:text-slate-400">
                        <div className="flex items-center space-x-1">
                          <StarIcon className="w-4 h-4 text-yellow-500" />
                          <span>4.9 rating</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <UserGroupIcon className="w-4 h-4 text-primary-500" />
                          <span>12 mentees</span>
                        </div>
                      </div>
                    </div>

                    {/* Action Button */}
                    <Button 
                      onClick={() => handleRequestMentorship(mentor.id)}
                      className="w-full"
                    >
                      Request Mentorship
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* My Mentorship Requests */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-8">
            My Mentorship Requests
          </h2>

          <div className="space-y-4">
            {mockMentorshipRequests.map((request, index) => {
              const mentor = mockAlumni.find(a => a.id === request.mentorId);
              const StatusIcon = getStatusIcon(request.status);
              
              return (
                <motion.div
                  key={request.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <img
                          src={mentor?.profileImage}
                          alt={mentor?.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                            {mentor?.name}
                          </h3>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            {mentor?.currentPosition} at {mentor?.company}
                          </p>
                          <p className="text-sm text-slate-500 dark:text-slate-500 mt-1">
                            {request.message}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <div className="flex flex-wrap gap-2">
                          {request.areas.map((area) => (
                            <span
                              key={area}
                              className={`px-2 py-1 bg-gradient-to-r ${getAreaColor(area)} text-white text-xs rounded-full`}
                            >
                              {area}
                            </span>
                          ))}
                        </div>
                        
                        <div className={`flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(request.status)}`}>
                          <StatusIcon className="w-4 h-4" />
                          <span className="capitalize">{request.status}</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* No Results */}
        {filteredMentors.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center py-12"
          >
            <div className="w-24 h-24 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6">
              <UserGroupIcon className="w-12 h-12 text-slate-400" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
              No mentors found
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Try adjusting your search terms or area filters to find more mentors.
            </p>
            <Button onClick={() => {
              setSearchTerm('');
              setSelectedArea('all');
            }}>
              Clear Filters
            </Button>
          </motion.div>
        )}
      </div>

      {/* Mentorship Request Modal */}
      <Modal
        isOpen={showRequestModal}
        onClose={() => setShowRequestModal(false)}
        title="Request Mentorship"
        size="lg"
      >
        {selectedMentor && (
          <div className="space-y-6">
            {(() => {
              const mentor = mockAlumni.find(a => a.id === selectedMentor);
              return (
                <div className="flex items-center space-x-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                  <img
                    src={mentor?.profileImage}
                    alt={mentor?.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                      {mentor?.name}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      {mentor?.currentPosition} at {mentor?.company}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {mentor?.mentorshipAreas.map((area) => (
                        <span
                          key={area}
                          className={`px-2 py-1 bg-gradient-to-r ${getAreaColor(area)} text-white text-xs rounded-full`}
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })()}

            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                What areas would you like mentorship in?
              </label>
              <div className="flex flex-wrap gap-2">
                {mentorshipAreas.slice(1).map((area) => (
                  <label key={area.id} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                    />
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      {area.name}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Tell them about your goals and what you'd like to learn
              </label>
              <textarea
                className="input-field w-full h-32 resize-none"
                placeholder="I'm looking for guidance on..."
              />
            </div>

            <div className="flex justify-end space-x-3">
              <Button variant="outline" onClick={() => setShowRequestModal(false)}>
                Cancel
              </Button>
              <Button onClick={() => setShowRequestModal(false)}>
                Send Request
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Mentorship;

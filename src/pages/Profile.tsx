import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeftIcon,
  MapPinIcon,
  BriefcaseIcon,
  AcademicCapIcon,
  CalendarIcon,
  EnvelopeIcon,
  LinkIcon,
  UserIcon,
  TrophyIcon,
  StarIcon,
  CheckBadgeIcon
} from '@heroicons/react/24/outline';
import { mockAlumni } from '../data/mockData';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Modal from '../components/ui/Modal';

const Profile: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [showContactModal, setShowContactModal] = useState(false);
  const [showMentorshipModal, setShowMentorshipModal] = useState(false);

  const alumni = mockAlumni.find(a => a.id === id);

  if (!alumni) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Alumni Not Found
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mb-8">
            The alumni profile you're looking for doesn't exist.
          </p>
          <Link to="/directory">
            <Button>Back to Directory</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleContact = () => {
    setShowContactModal(true);
  };

  const handleMentorshipRequest = () => {
    setShowMentorshipModal(true);
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link
            to="/directory"
            className="inline-flex items-center text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors duration-200"
          >
            <ArrowLeftIcon className="w-5 h-5 mr-2" />
            Back to Directory
          </Link>
        </motion.div>

        {/* Cover Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-8"
        >
          <img
            src={alumni.coverImage}
            alt={`${alumni.name} cover`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </motion.div>

        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative -mt-16 mb-8"
        >
          <Card className="relative">
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
              {/* Profile Image */}
              <div className="relative">
                <img
                  src={alumni.profileImage}
                  alt={alumni.name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-white dark:border-slate-800"
                />
                {alumni.isVerified && (
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                    <CheckBadgeIcon className="w-5 h-5 text-white" />
                  </div>
                )}
              </div>

              {/* Profile Info */}
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                      {alumni.name}
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-400 mb-2">
                      {alumni.currentPosition}
                    </p>
                    <p className="text-lg text-slate-500 dark:text-slate-500 mb-4">
                      {alumni.company}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button onClick={handleContact}>
                      <EnvelopeIcon className="w-5 h-5 mr-2" />
                      Contact
                    </Button>
                    {alumni.isMentor && alumni.isAvailableForMentorship && (
                      <Button variant="secondary" onClick={handleMentorshipRequest}>
                        <UserIcon className="w-5 h-5 mr-2" />
                        Request Mentorship
                      </Button>
                    )}
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-600">
                      {alumni.graduationYear}
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      Graduation Year
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-600">
                      {alumni.achievements.length}
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      Achievements
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-600">
                      {alumni.skills.length}
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      Skills
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-600">
                      {alumni.isMentor ? 'Yes' : 'No'}
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      Mentor
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* About */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                  About
                </h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {alumni.bio}
                </p>
              </Card>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                  Skills & Expertise
                </h2>
                <div className="flex flex-wrap gap-3">
                  {alumni.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Card>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                  Achievements
                </h2>
                <div className="space-y-4">
                  {alumni.achievements.map((achievement) => (
                    <div key={achievement.id} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <TrophyIcon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                          {achievement.title}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 text-sm">
                          {achievement.description}
                        </p>
                        <p className="text-slate-500 dark:text-slate-500 text-xs mt-1">
                          {achievement.year}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Card>
                <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                  Contact Information
                </h2>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <EnvelopeIcon className="w-5 h-5 text-slate-400" />
                    <span className="text-slate-600 dark:text-slate-400">
                      {alumni.email}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPinIcon className="w-5 h-5 text-slate-400" />
                    <span className="text-slate-600 dark:text-slate-400">
                      {alumni.location}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <BriefcaseIcon className="w-5 h-5 text-slate-400" />
                    <span className="text-slate-600 dark:text-slate-400">
                      {alumni.company}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <AcademicCapIcon className="w-5 h-5 text-slate-400" />
                    <span className="text-slate-600 dark:text-slate-400">
                      {alumni.degree} in {alumni.major}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CalendarIcon className="w-5 h-5 text-slate-400" />
                    <span className="text-slate-600 dark:text-slate-400">
                      Class of {alumni.graduationYear}
                    </span>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Social Links */}
            {Object.values(alumni.socialLinks).some(link => link) && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <Card>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                    Social Links
                  </h2>
                  <div className="space-y-2">
                    {alumni.socialLinks.linkedin && (
                      <a
                        href={alumni.socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 text-slate-600 dark:text-slate-400 hover:text-primary-600 transition-colors duration-200"
                      >
                        <LinkIcon className="w-4 h-4" />
                        <span>LinkedIn</span>
                      </a>
                    )}
                    {alumni.socialLinks.twitter && (
                      <a
                        href={alumni.socialLinks.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 text-slate-600 dark:text-slate-400 hover:text-primary-600 transition-colors duration-200"
                      >
                        <LinkIcon className="w-4 h-4" />
                        <span>Twitter</span>
                      </a>
                    )}
                    {alumni.socialLinks.github && (
                      <a
                        href={alumni.socialLinks.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 text-slate-600 dark:text-slate-400 hover:text-primary-600 transition-colors duration-200"
                      >
                        <LinkIcon className="w-4 h-4" />
                        <span>GitHub</span>
                      </a>
                    )}
                    {alumni.socialLinks.website && (
                      <a
                        href={alumni.socialLinks.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 text-slate-600 dark:text-slate-400 hover:text-primary-600 transition-colors duration-200"
                      >
                        <LinkIcon className="w-4 h-4" />
                        <span>Website</span>
                      </a>
                    )}
                  </div>
                </Card>
              </motion.div>
            )}

            {/* Mentorship Info */}
            {alumni.isMentor && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <Card>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                    Mentorship
                  </h2>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <StarIcon className="w-5 h-5 text-yellow-500" />
                      <span className="text-slate-600 dark:text-slate-400">
                        Available for Mentorship
                      </span>
                    </div>
                    <div>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                        Areas of Expertise:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {alumni.mentorshipAreas.map((area) => (
                          <span
                            key={area}
                            className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs rounded-full"
                          >
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      <Modal
        isOpen={showContactModal}
        onClose={() => setShowContactModal(false)}
        title="Contact Information"
        size="md"
      >
        <div className="space-y-4">
          <p className="text-slate-600 dark:text-slate-400">
            You can reach {alumni.name} through the following channels:
          </p>
          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
              <EnvelopeIcon className="w-5 h-5 text-slate-400" />
              <div>
                <p className="font-medium text-slate-900 dark:text-slate-100">Email</p>
                <p className="text-slate-600 dark:text-slate-400">{alumni.email}</p>
              </div>
            </div>
            {alumni.socialLinks.linkedin && (
              <div className="flex items-center space-x-3 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                <LinkIcon className="w-5 h-5 text-slate-400" />
                <div>
                  <p className="font-medium text-slate-900 dark:text-slate-100">LinkedIn</p>
                  <a
                    href={alumni.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700"
                  >
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </Modal>

      {/* Mentorship Request Modal */}
      <Modal
        isOpen={showMentorshipModal}
        onClose={() => setShowMentorshipModal(false)}
        title="Request Mentorship"
        size="lg"
      >
        <div className="space-y-4">
          <p className="text-slate-600 dark:text-slate-400">
            Send a mentorship request to {alumni.name}. They specialize in:
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {alumni.mentorshipAreas.map((area) => (
              <span
                key={area}
                className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm rounded-full"
              >
                {area}
              </span>
            ))}
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              Your Message
            </label>
            <textarea
              className="input-field w-full h-32 resize-none"
              placeholder="Tell them about your goals and what you'd like to learn..."
            />
          </div>
          <div className="flex justify-end space-x-3">
            <Button variant="outline" onClick={() => setShowMentorshipModal(false)}>
              Cancel
            </Button>
            <Button onClick={() => setShowMentorshipModal(false)}>
              Send Request
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Profile;

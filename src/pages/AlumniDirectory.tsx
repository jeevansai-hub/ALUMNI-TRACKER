import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FunnelIcon,
  UserIcon,
  MapPinIcon,
  BriefcaseIcon,
  AcademicCapIcon,
  CheckBadgeIcon
} from '@heroicons/react/24/outline';
import { mockAlumni } from '../data/mockData';
import SearchBar from '../components/ui/SearchBar';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import LoadingSpinner from '../components/ui/LoadingSpinner';

const AlumniDirectory: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({
    graduationYear: '',
    degree: '',
    major: '',
    location: '',
    isMentor: false,
    isVerified: false
  });
  const [showFilters, setShowFilters] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Filter alumni based on search term and filters
  const filteredAlumni = useMemo(() => {
    setIsLoading(true);
    
    let filtered = mockAlumni.filter(alumni => {
      const matchesSearch = 
        alumni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        alumni.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        alumni.currentPosition.toLowerCase().includes(searchTerm.toLowerCase()) ||
        alumni.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesYear = !selectedFilters.graduationYear || 
        alumni.graduationYear.toString() === selectedFilters.graduationYear;
      
      const matchesDegree = !selectedFilters.degree || 
        alumni.degree.toLowerCase().includes(selectedFilters.degree.toLowerCase());
      
      const matchesMajor = !selectedFilters.major || 
        alumni.major.toLowerCase().includes(selectedFilters.major.toLowerCase());
      
      const matchesLocation = !selectedFilters.location || 
        alumni.location.toLowerCase().includes(selectedFilters.location.toLowerCase());
      
      const matchesMentor = !selectedFilters.isMentor || alumni.isMentor;
      const matchesVerified = !selectedFilters.isVerified || alumni.isVerified;
      
      return matchesSearch && matchesYear && matchesDegree && matchesMajor && 
             matchesLocation && matchesMentor && matchesVerified;
    });
    
    setTimeout(() => setIsLoading(false), 300);
    return filtered;
  }, [searchTerm, selectedFilters]);

  const handleFilterChange = (key: string, value: any) => {
    setSelectedFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const clearFilters = () => {
    setSelectedFilters({
      graduationYear: '',
      degree: '',
      major: '',
      location: '',
      isMentor: false,
      isVerified: false
    });
    setSearchTerm('');
  };

  const graduationYears = Array.from(
    new Set(mockAlumni.map(alumni => alumni.graduationYear))
  ).sort((a, b) => b - a);

  const degrees = Array.from(
    new Set(mockAlumni.map(alumni => alumni.degree))
  );

  const majors = Array.from(
    new Set(mockAlumni.map(alumni => alumni.major))
  );

  const locations = Array.from(
    new Set(mockAlumni.map(alumni => alumni.location))
  );

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
            Alumni Directory
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Connect with thousands of alumni worldwide. Search by name, company, skills, or location 
            to find the perfect networking opportunity.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="flex-1">
              <SearchBar
                placeholder="Search by name, company, position, or skills..."
                value={searchTerm}
                onChange={setSearchTerm}
                className="w-full"
              />
            </div>
            <Button
              variant="secondary"
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2"
            >
              <FunnelIcon className="w-5 h-5" />
              <span>Filters</span>
            </Button>
          </div>

          {/* Filters Panel */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="glass-card p-6 mb-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Graduation Year
                    </label>
                    <select
                      value={selectedFilters.graduationYear}
                      onChange={(e) => handleFilterChange('graduationYear', e.target.value)}
                      className="input-field"
                    >
                      <option value="">All Years</option>
                      {graduationYears.map(year => (
                        <option key={year} value={year}>{year}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Degree
                    </label>
                    <select
                      value={selectedFilters.degree}
                      onChange={(e) => handleFilterChange('degree', e.target.value)}
                      className="input-field"
                    >
                      <option value="">All Degrees</option>
                      {degrees.map(degree => (
                        <option key={degree} value={degree}>{degree}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Major
                    </label>
                    <select
                      value={selectedFilters.major}
                      onChange={(e) => handleFilterChange('major', e.target.value)}
                      className="input-field"
                    >
                      <option value="">All Majors</option>
                      {majors.map(major => (
                        <option key={major} value={major}>{major}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Location
                    </label>
                    <select
                      value={selectedFilters.location}
                      onChange={(e) => handleFilterChange('location', e.target.value)}
                      className="input-field"
                    >
                      <option value="">All Locations</option>
                      {locations.map(location => (
                        <option key={location} value={location}>{location}</option>
                      ))}
                    </select>
                  </div>

                  <div className="flex items-center space-x-4">
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={selectedFilters.isMentor}
                        onChange={(e) => handleFilterChange('isMentor', e.target.checked)}
                        className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                      />
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Available for Mentorship
                      </span>
                    </label>
                  </div>

                  <div className="flex items-center space-x-4">
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={selectedFilters.isVerified}
                        onChange={(e) => handleFilterChange('isVerified', e.target.checked)}
                        className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                      />
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Verified Alumni
                      </span>
                    </label>
                  </div>
                </div>

                <div className="flex justify-end mt-4">
                  <Button variant="outline" onClick={clearFilters}>
                    Clear Filters
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-6"
        >
          <p className="text-slate-600 dark:text-slate-400">
            Showing {filteredAlumni.length} of {mockAlumni.length} alumni
          </p>
        </motion.div>

        {/* Alumni Grid */}
        <AnimatePresence mode="wait">
          {isLoading ? (
            <div className="flex justify-center py-12">
              <LoadingSpinner size="lg" />
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredAlumni.map((alumni, index) => (
                <motion.div
                  key={alumni.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <Card className="h-full">
                    <div className="text-center">
                      {/* Profile Image */}
                      <div className="relative inline-block mb-4">
                        <img
                          src={alumni.profileImage}
                          alt={alumni.name}
                          className="w-20 h-20 rounded-full object-cover mx-auto"
                        />
                        {alumni.isVerified && (
                          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center">
                            <CheckBadgeIcon className="w-4 h-4 text-white" />
                          </div>
                        )}
                      </div>

                      {/* Name and Title */}
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
                        {alumni.name}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 mb-1">
                        {alumni.currentPosition}
                      </p>
                      <p className="text-slate-500 dark:text-slate-500 text-sm mb-4">
                        {alumni.company}
                      </p>

                      {/* Details */}
                      <div className="space-y-2 mb-6">
                        <div className="flex items-center justify-center space-x-2 text-sm text-slate-600 dark:text-slate-400">
                          <AcademicCapIcon className="w-4 h-4" />
                          <span>{alumni.degree} in {alumni.major}</span>
                        </div>
                        <div className="flex items-center justify-center space-x-2 text-sm text-slate-600 dark:text-slate-400">
                          <MapPinIcon className="w-4 h-4" />
                          <span>{alumni.location}</span>
                        </div>
                        <div className="flex items-center justify-center space-x-2 text-sm text-slate-600 dark:text-slate-400">
                          <BriefcaseIcon className="w-4 h-4" />
                          <span>Class of {alumni.graduationYear}</span>
                        </div>
                      </div>

                      {/* Skills */}
                      <div className="mb-6">
                        <div className="flex flex-wrap gap-2 justify-center">
                          {alumni.skills.slice(0, 3).map((skill) => (
                            <span
                              key={skill}
                              className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs rounded-full"
                            >
                              {skill}
                            </span>
                          ))}
                          {alumni.skills.length > 3 && (
                            <span className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 text-xs rounded-full">
                              +{alumni.skills.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Mentor Badge */}
                      {alumni.isMentor && alumni.isAvailableForMentorship && (
                        <div className="mb-4">
                          <span className="inline-flex items-center px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm rounded-full">
                            <UserIcon className="w-4 h-4 mr-1" />
                            Available for Mentorship
                          </span>
                        </div>
                      )}

                      {/* Action Button */}
                      <Link to={`/profile/${alumni.id}`}>
                        <Button className="w-full">
                          View Profile
                        </Button>
                      </Link>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* No Results */}
        {!isLoading && filteredAlumni.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center py-12"
          >
            <div className="w-24 h-24 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6">
              <UserIcon className="w-12 h-12 text-slate-400" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
              No alumni found
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Try adjusting your search terms or filters to find more results.
            </p>
            <Button onClick={clearFilters}>
              Clear Filters
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default AlumniDirectory;

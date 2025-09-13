import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CalendarIcon,
  ClockIcon,
  MapPinIcon,
  UserGroupIcon,
  VideoCameraIcon,
  PlusIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import { mockEvents } from '../data/mockData';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import SearchBar from '../components/ui/SearchBar';

const Events: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [showPastEvents, setShowPastEvents] = useState(false);

  const eventTypes = [
    { id: 'all', name: 'All Events', color: 'from-slate-500 to-slate-600' },
    { id: 'networking', name: 'Networking', color: 'from-blue-500 to-blue-600' },
    { id: 'workshop', name: 'Workshop', color: 'from-green-500 to-green-600' },
    { id: 'conference', name: 'Conference', color: 'from-purple-500 to-purple-600' },
    { id: 'social', name: 'Social', color: 'from-pink-500 to-pink-600' },
    { id: 'mentorship', name: 'Mentorship', color: 'from-orange-500 to-orange-600' },
    { id: 'other', name: 'Other', color: 'from-gray-500 to-gray-600' }
  ];

  const filteredEvents = mockEvents.filter(event => {
    const matchesSearch = 
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.organizer.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesType = selectedType === 'all' || event.type === selectedType;
    
    const eventDate = new Date(event.date);
    const now = new Date();
    const isPastEvent = eventDate < now;
    const matchesTimeFilter = showPastEvents ? true : !isPastEvent;
    
    return matchesSearch && matchesType && matchesTimeFilter;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTime = (timeString: string) => {
    const [hours, minutes] = timeString.split(':');
    const date = new Date();
    date.setHours(parseInt(hours), parseInt(minutes));
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  const getEventTypeColor = (type: string) => {
    const eventType = eventTypes.find(et => et.id === type);
    return eventType?.color || 'from-gray-500 to-gray-600';
  };

  const getEventTypeName = (type: string) => {
    const eventType = eventTypes.find(et => et.id === type);
    return eventType?.name || 'Other';
  };

  const isEventPast = (dateString: string) => {
    const eventDate = new Date(dateString);
    const now = new Date();
    return eventDate < now;
  };

  const upcomingEvents = filteredEvents.filter(event => !isEventPast(event.date));
  const pastEvents = filteredEvents.filter(event => isEventPast(event.date));

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
            Events & Networking
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Stay connected with your alumni community through our exciting events, workshops, 
            and networking opportunities. Join us for meaningful conversations and lasting connections.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="flex-1">
              <SearchBar
                placeholder="Search events by title, description, or organizer..."
                value={searchTerm}
                onChange={setSearchTerm}
                className="w-full"
              />
            </div>
            <Button variant="secondary" className="flex items-center space-x-2">
              <PlusIcon className="w-5 h-5" />
              <span>Create Event</span>
            </Button>
          </div>

          {/* Event Type Filter */}
          <div className="flex flex-wrap gap-2 mb-4">
            {eventTypes.map((type) => (
              <motion.button
                key={type.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedType(type.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedType === type.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white/10 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:bg-white/20 dark:hover:bg-white/10'
                }`}
              >
                {type.name}
              </motion.button>
            ))}
          </div>

          {/* Time Filter */}
          <div className="flex items-center space-x-4">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={showPastEvents}
                onChange={(e) => setShowPastEvents(e.target.checked)}
                className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
              />
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Show past events
              </span>
            </label>
          </div>
        </motion.div>

        {/* Upcoming Events */}
        {upcomingEvents.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
                Upcoming Events
              </h2>
              <span className="text-slate-600 dark:text-slate-400">
                {upcomingEvents.length} events
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                >
                  <Card className="h-full overflow-hidden">
                    <div className="relative">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 bg-gradient-to-r ${getEventTypeColor(event.type)} text-white text-sm rounded-full font-medium`}>
                          {getEventTypeName(event.type)}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4">
                        {event.isOnline ? (
                          <div className="flex items-center space-x-1 bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                            <VideoCameraIcon className="w-4 h-4" />
                            <span>Online</span>
                          </div>
                        ) : (
                          <div className="flex items-center space-x-1 bg-green-500 text-white px-3 py-1 rounded-full text-sm">
                            <MapPinIcon className="w-4 h-4" />
                            <span>In-Person</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">
                        {event.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">
                        {event.description}
                      </p>

                      <div className="space-y-3 mb-6">
                        <div className="flex items-center space-x-3 text-sm text-slate-600 dark:text-slate-400">
                          <CalendarIcon className="w-4 h-4" />
                          <span>{formatDate(event.date)}</span>
                        </div>
                        <div className="flex items-center space-x-3 text-sm text-slate-600 dark:text-slate-400">
                          <ClockIcon className="w-4 h-4" />
                          <span>{formatTime(event.time)}</span>
                        </div>
                        <div className="flex items-center space-x-3 text-sm text-slate-600 dark:text-slate-400">
                          {event.isOnline ? (
                            <VideoCameraIcon className="w-4 h-4" />
                          ) : (
                            <MapPinIcon className="w-4 h-4" />
                          )}
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center space-x-3 text-sm text-slate-600 dark:text-slate-400">
                          <UserGroupIcon className="w-4 h-4" />
                          <span>{event.attendees.length} attending</span>
                          {event.maxAttendees && (
                            <span className="text-slate-500">/ {event.maxAttendees} max</span>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="text-sm text-slate-500 dark:text-slate-500">
                          Organized by {event.organizer}
                        </div>
                        <Button>
                          Register
                          <ArrowRightIcon className="w-4 h-4 ml-1" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Past Events */}
        {showPastEvents && pastEvents.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
                Past Events
              </h2>
              <span className="text-slate-600 dark:text-slate-400">
                {pastEvents.length} events
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                >
                  <Card className="h-full">
                    <div className="relative mb-4">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-32 object-cover rounded-lg"
                      />
                      <div className="absolute top-2 left-2">
                        <span className={`px-2 py-1 bg-gradient-to-r ${getEventTypeColor(event.type)} text-white text-xs rounded-full font-medium`}>
                          {getEventTypeName(event.type)}
                        </span>
                      </div>
                      <div className="absolute top-2 right-2">
                        <span className="px-2 py-1 bg-slate-500 text-white text-xs rounded-full">
                          Past Event
                        </span>
                      </div>
                    </div>

                    <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-2 line-clamp-2">
                      {event.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">
                      {event.description}
                    </p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center space-x-2 text-xs text-slate-600 dark:text-slate-400">
                        <CalendarIcon className="w-3 h-3" />
                        <span>{formatDate(event.date)}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-xs text-slate-600 dark:text-slate-400">
                        {event.isOnline ? (
                          <VideoCameraIcon className="w-3 h-3" />
                        ) : (
                          <MapPinIcon className="w-3 h-3" />
                        )}
                        <span className="truncate">{event.location}</span>
                      </div>
                    </div>

                    <div className="text-xs text-slate-500 dark:text-slate-500">
                      {event.attendees.length} attended
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* No Results */}
        {filteredEvents.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center py-12"
          >
            <div className="w-24 h-24 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6">
              <CalendarIcon className="w-12 h-12 text-slate-400" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
              No events found
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Try adjusting your search terms or filters to find more events.
            </p>
            <Button onClick={() => {
              setSearchTerm('');
              setSelectedType('all');
              setShowPastEvents(false);
            }}>
              Clear Filters
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Events;

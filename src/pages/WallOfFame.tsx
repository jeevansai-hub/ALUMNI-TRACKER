import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  TrophyIcon,
  StarIcon,
  FireIcon,
  HeartIcon,
  LightBulbIcon,
  UserGroupIcon,
  ArrowRightIcon,
  CheckBadgeIcon
} from '@heroicons/react/24/outline';
import { mockWallOfFame, mockAlumni } from '../data/mockData';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const WallOfFame: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);

  const categories = [
    { id: 'all', name: 'All', icon: TrophyIcon },
    { id: 'achievement', name: 'Achievements', icon: StarIcon },
    { id: 'innovation', name: 'Innovation', icon: LightBulbIcon },
    { id: 'leadership', name: 'Leadership', icon: UserGroupIcon },
    { id: 'philanthropy', name: 'Philanthropy', icon: HeartIcon },
    { id: 'other', name: 'Other', icon: FireIcon }
  ];

  const filteredEntries = mockWallOfFame.filter(entry => {
    const matchesCategory = selectedCategory === 'all' || entry.category === selectedCategory;
    const matchesFeatured = !showFeaturedOnly || entry.featured;
    return matchesCategory && matchesFeatured;
  });

  const getCategoryIcon = (category: string) => {
    const categoryData = categories.find(cat => cat.id === category);
    return categoryData?.icon || TrophyIcon;
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      achievement: 'from-yellow-500 to-orange-500',
      innovation: 'from-blue-500 to-purple-500',
      leadership: 'from-green-500 to-teal-500',
      philanthropy: 'from-pink-500 to-rose-500',
      other: 'from-gray-500 to-slate-500'
    };
    return colors[category as keyof typeof colors] || 'from-gray-500 to-slate-500';
  };

  const featuredEntries = mockWallOfFame.filter(entry => entry.featured);
  const regularEntries = filteredEntries.filter(entry => !entry.featured);

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
            Wall of Fame
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Celebrate the outstanding achievements and inspiring success stories of our alumni community. 
            These remarkable individuals are making a difference in the world.
          </p>
        </motion.div>

        {/* Featured Section */}
        {featuredEntries.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-16"
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
                Featured Stories
              </h2>
              <div className="flex items-center space-x-2">
                <StarIcon className="w-6 h-6 text-yellow-500" />
                <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                  {featuredEntries.length} featured
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredEntries.map((entry, index) => {
                const alumni = mockAlumni.find(a => a.id === entry.alumniId);
                const CategoryIcon = getCategoryIcon(entry.category);
                
                return (
                  <motion.div
                    key={entry.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                  >
                    <Card className="h-full overflow-hidden">
                      <div className="relative">
                        <img
                          src={entry.image}
                          alt={entry.title}
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute top-4 left-4">
                          <div className={`w-12 h-12 bg-gradient-to-br ${getCategoryColor(entry.category)} rounded-lg flex items-center justify-center`}>
                            <CategoryIcon className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        <div className="absolute top-4 right-4">
                          <div className="flex items-center space-x-1 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                            <StarIcon className="w-4 h-4" />
                            <span>Featured</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <div className="flex items-center space-x-2 mb-3">
                          <img
                            src={alumni?.profileImage}
                            alt={alumni?.name}
                            className="w-8 h-8 rounded-full object-cover"
                          />
                          <div>
                            <p className="font-medium text-slate-900 dark:text-slate-100">
                              {alumni?.name}
                            </p>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                              {alumni?.currentPosition} at {alumni?.company}
                            </p>
                          </div>
                          {alumni?.isVerified && (
                            <CheckBadgeIcon className="w-5 h-5 text-primary-600 ml-auto" />
                          )}
                        </div>
                        
                        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">
                          {entry.title}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-4">
                          {entry.description}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <span className={`px-3 py-1 bg-gradient-to-r ${getCategoryColor(entry.category)} text-white text-sm rounded-full font-medium`}>
                            {categories.find(cat => cat.id === entry.category)?.name}
                          </span>
                          <Link to={`/profile/${entry.alumniId}`}>
                            <Button variant="outline" size="sm">
                              View Profile
                              <ArrowRightIcon className="w-4 h-4 ml-1" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'bg-white/10 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:bg-white/20 dark:hover:bg-white/10'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>
                </motion.button>
              ))}
            </div>

            {/* Featured Toggle */}
            <div className="flex items-center space-x-2">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={showFeaturedOnly}
                  onChange={(e) => setShowFeaturedOnly(e.target.checked)}
                  className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Show featured only
                </span>
              </label>
            </div>
          </div>
        </motion.div>

        {/* All Entries */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
              All Stories
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              {filteredEntries.length} stories found
            </p>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedCategory}-${showFeaturedOnly}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {regularEntries.map((entry, index) => {
                const alumni = mockAlumni.find(a => a.id === entry.alumniId);
                const CategoryIcon = getCategoryIcon(entry.category);
                
                return (
                  <motion.div
                    key={entry.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ y: -4, scale: 1.02 }}
                  >
                    <Card className="h-full">
                      <div className="relative mb-4">
                        <img
                          src={entry.image}
                          alt={entry.title}
                          className="w-full h-32 object-cover rounded-lg"
                        />
                        <div className="absolute top-2 left-2">
                          <div className={`w-8 h-8 bg-gradient-to-br ${getCategoryColor(entry.category)} rounded-lg flex items-center justify-center`}>
                            <CategoryIcon className="w-4 h-4 text-white" />
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2 mb-3">
                        <img
                          src={alumni?.profileImage}
                          alt={alumni?.name}
                          className="w-6 h-6 rounded-full object-cover"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-slate-900 dark:text-slate-100 text-sm truncate">
                            {alumni?.name}
                          </p>
                          <p className="text-xs text-slate-600 dark:text-slate-400 truncate">
                            {alumni?.currentPosition}
                          </p>
                        </div>
                        {alumni?.isVerified && (
                          <CheckBadgeIcon className="w-4 h-4 text-primary-600 flex-shrink-0" />
                        )}
                      </div>
                      
                      <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-2 line-clamp-2">
                        {entry.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-3">
                        {entry.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className={`px-2 py-1 bg-gradient-to-r ${getCategoryColor(entry.category)} text-white text-xs rounded-full font-medium`}>
                          {categories.find(cat => cat.id === entry.category)?.name}
                        </span>
                        <Link to={`/profile/${entry.alumniId}`}>
                          <Button variant="outline" size="sm">
                            View
                            <ArrowRightIcon className="w-3 h-3 ml-1" />
                          </Button>
                        </Link>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {/* No Results */}
          {filteredEntries.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center py-12"
            >
              <div className="w-24 h-24 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrophyIcon className="w-12 h-12 text-slate-400" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
                No stories found
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                Try adjusting your filters to see more stories.
              </p>
              <Button onClick={() => {
                setSelectedCategory('all');
                setShowFeaturedOnly(false);
              }}>
                Clear Filters
              </Button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default WallOfFame;

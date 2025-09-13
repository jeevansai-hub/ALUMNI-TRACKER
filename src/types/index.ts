export interface Alumni {
  id: string;
  name: string;
  email: string;
  graduationYear: number;
  degree: string;
  major: string;
  currentPosition: string;
  company: string;
  location: string;
  bio: string;
  profileImage: string;
  coverImage: string;
  skills: string[];
  achievements: Achievement[];
  socialLinks: SocialLinks;
  isVerified: boolean;
  isMentor: boolean;
  isAvailableForMentorship: boolean;
  mentorshipAreas: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  year: number;
  category: 'academic' | 'professional' | 'award' | 'publication' | 'other';
  image?: string;
}

export interface SocialLinks {
  linkedin?: string;
  twitter?: string;
  github?: string;
  website?: string;
  instagram?: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  type: 'networking' | 'workshop' | 'conference' | 'social' | 'mentorship' | 'other';
  image: string;
  organizer: string;
  attendees: string[];
  maxAttendees?: number;
  isOnline: boolean;
  meetingLink?: string;
  tags: string[];
  createdAt: string;
}

export interface MentorshipRequest {
  id: string;
  menteeId: string;
  mentorId: string;
  message: string;
  areas: string[];
  status: 'pending' | 'accepted' | 'rejected' | 'completed';
  createdAt: string;
  updatedAt: string;
}

export interface WallOfFameEntry {
  id: string;
  alumniId: string;
  title: string;
  description: string;
  image: string;
  category: 'achievement' | 'innovation' | 'leadership' | 'philanthropy' | 'other';
  featured: boolean;
  createdAt: string;
}

export interface SearchFilters {
  graduationYear?: number;
  degree?: string;
  major?: string;
  location?: string;
  skills?: string[];
  isMentor?: boolean;
  isVerified?: boolean;
}

export interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'alumni' | 'student';
  profileImage?: string;
  isActive: boolean;
  lastLogin?: string;
}

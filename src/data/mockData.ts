import { Alumni, Event, WallOfFameEntry, MentorshipRequest } from '../types';

export const mockAlumni: Alumni[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    email: 'sarah.johnson@email.com',
    graduationYear: 2018,
    degree: 'Bachelor of Science',
    major: 'Computer Science',
    currentPosition: 'Senior Software Engineer',
    company: 'Google',
    location: 'San Francisco, CA',
    bio: 'Passionate about building scalable web applications and mentoring the next generation of developers. I love working on open-source projects and contributing to the tech community.',
    profileImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
    coverImage: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=300&fit=crop',
    skills: ['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Machine Learning'],
    achievements: [
      {
        id: '1',
        title: 'Google Cloud Professional Developer',
        description: 'Certified in Google Cloud Platform development',
        year: 2022,
        category: 'professional'
      },
      {
        id: '2',
        title: 'Open Source Contributor',
        description: 'Contributed to 50+ open source projects',
        year: 2023,
        category: 'professional'
      }
    ],
    socialLinks: {
      linkedin: 'https://linkedin.com/in/sarahjohnson',
      github: 'https://github.com/sarahjohnson',
      twitter: 'https://twitter.com/sarahjohnson'
    },
    isVerified: true,
    isMentor: true,
    isAvailableForMentorship: true,
    mentorshipAreas: ['Career Development', 'Technical Skills', 'Leadership'],
    createdAt: '2023-01-15T10:00:00Z',
    updatedAt: '2023-12-01T15:30:00Z'
  },
  {
    id: '2',
    name: 'Michael Chen',
    email: 'michael.chen@email.com',
    graduationYear: 2015,
    degree: 'Master of Business Administration',
    major: 'Finance',
    currentPosition: 'Investment Director',
    company: 'Goldman Sachs',
    location: 'New York, NY',
    bio: 'Finance professional with 8+ years of experience in investment banking and private equity. Passionate about financial literacy and helping others build wealth.',
    profileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    coverImage: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=300&fit=crop',
    skills: ['Financial Analysis', 'Investment Strategy', 'Risk Management', 'Leadership', 'Excel', 'Bloomberg Terminal'],
    achievements: [
      {
        id: '3',
        title: 'CFA Charterholder',
        description: 'Chartered Financial Analyst certification',
        year: 2019,
        category: 'professional'
      },
      {
        id: '4',
        title: 'Forbes 30 Under 30',
        description: 'Recognized in Finance category',
        year: 2021,
        category: 'award'
      }
    ],
    socialLinks: {
      linkedin: 'https://linkedin.com/in/michaelchen',
      twitter: 'https://twitter.com/michaelchen'
    },
    isVerified: true,
    isMentor: true,
    isAvailableForMentorship: true,
    mentorshipAreas: ['Finance', 'Career Development', 'Investment Strategy'],
    createdAt: '2023-01-10T09:00:00Z',
    updatedAt: '2023-11-28T14:20:00Z'
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    email: 'emily.rodriguez@email.com',
    graduationYear: 2020,
    degree: 'Bachelor of Arts',
    major: 'Graphic Design',
    currentPosition: 'Creative Director',
    company: 'Adobe',
    location: 'Los Angeles, CA',
    bio: 'Creative professional specializing in brand identity and user experience design. I believe in the power of design to solve problems and create meaningful connections.',
    profileImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
    coverImage: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=300&fit=crop',
    skills: ['UI/UX Design', 'Branding', 'Adobe Creative Suite', 'Figma', 'Illustration', 'Photography'],
    achievements: [
      {
        id: '5',
        title: 'Adobe Certified Expert',
        description: 'Certified in Adobe Creative Suite',
        year: 2021,
        category: 'professional'
      },
      {
        id: '6',
        title: 'Design Excellence Award',
        description: 'Recognized for outstanding design work',
        year: 2022,
        category: 'award'
      }
    ],
    socialLinks: {
      linkedin: 'https://linkedin.com/in/emilyrodriguez',
      instagram: 'https://instagram.com/emilydesigns',
      website: 'https://emilyrodriguez.design'
    },
    isVerified: true,
    isMentor: false,
    isAvailableForMentorship: false,
    mentorshipAreas: [],
    createdAt: '2023-02-01T11:00:00Z',
    updatedAt: '2023-12-05T16:45:00Z'
  },
  {
    id: '4',
    name: 'David Kim',
    email: 'david.kim@email.com',
    graduationYear: 2017,
    degree: 'Bachelor of Science',
    major: 'Mechanical Engineering',
    currentPosition: 'Product Manager',
    company: 'Tesla',
    location: 'Austin, TX',
    bio: 'Engineering professional turned product manager with a passion for sustainable technology and electric vehicles. Leading cross-functional teams to build the future of transportation.',
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    coverImage: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=300&fit=crop',
    skills: ['Product Management', 'Engineering', 'Project Management', 'Data Analysis', 'Leadership', 'Sustainability'],
    achievements: [
      {
        id: '7',
        title: 'PMP Certification',
        description: 'Project Management Professional certification',
        year: 2020,
        category: 'professional'
      },
      {
        id: '8',
        title: 'Innovation Award',
        description: 'Recognized for innovative product development',
        year: 2023,
        category: 'award'
      }
    ],
    socialLinks: {
      linkedin: 'https://linkedin.com/in/davidkim',
      twitter: 'https://twitter.com/davidkim'
    },
    isVerified: true,
    isMentor: true,
    isAvailableForMentorship: true,
    mentorshipAreas: ['Product Management', 'Engineering', 'Leadership'],
    createdAt: '2023-01-20T08:30:00Z',
    updatedAt: '2023-11-30T12:15:00Z'
  },
  {
    id: '5',
    name: 'Lisa Wang',
    email: 'lisa.wang@email.com',
    graduationYear: 2019,
    degree: 'Master of Science',
    major: 'Data Science',
    currentPosition: 'Senior Data Scientist',
    company: 'Netflix',
    location: 'Seattle, WA',
    bio: 'Data scientist passionate about using machine learning to solve real-world problems. I specialize in recommendation systems and personalization algorithms.',
    profileImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face',
    coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=300&fit=crop',
    skills: ['Python', 'Machine Learning', 'Deep Learning', 'SQL', 'TensorFlow', 'PyTorch', 'Statistics'],
    achievements: [
      {
        id: '9',
        title: 'Kaggle Expert',
        description: 'Top 1% in multiple Kaggle competitions',
        year: 2022,
        category: 'professional'
      },
      {
        id: '10',
        title: 'Research Publication',
        description: 'Published paper on recommendation systems',
        year: 2023,
        category: 'publication'
      }
    ],
    socialLinks: {
      linkedin: 'https://linkedin.com/in/lisawang',
      github: 'https://github.com/lisawang',
      twitter: 'https://twitter.com/lisawang'
    },
    isVerified: true,
    isMentor: true,
    isAvailableForMentorship: true,
    mentorshipAreas: ['Data Science', 'Machine Learning', 'Career Development'],
    createdAt: '2023-02-10T13:00:00Z',
    updatedAt: '2023-12-03T10:30:00Z'
  }
];

export const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Alumni Networking Mixer',
    description: 'Join us for an evening of networking with fellow alumni from various industries. Great opportunity to reconnect and make new connections.',
    date: '2024-01-15',
    time: '18:00',
    location: 'Grand Ballroom, University Center',
    type: 'networking',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=400&fit=crop',
    organizer: 'Alumni Association',
    attendees: ['1', '2', '3', '4'],
    maxAttendees: 100,
    isOnline: false,
    tags: ['networking', 'social', 'career'],
    createdAt: '2023-12-01T10:00:00Z'
  },
  {
    id: '2',
    title: 'Tech Career Workshop',
    description: 'Learn about the latest trends in technology careers and get insights from industry professionals.',
    date: '2024-01-20',
    time: '14:00',
    location: 'Online',
    type: 'workshop',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop',
    organizer: 'Tech Alumni Group',
    attendees: ['1', '5'],
    maxAttendees: 50,
    isOnline: true,
    meetingLink: 'https://zoom.us/j/123456789',
    tags: ['technology', 'career', 'workshop'],
    createdAt: '2023-12-05T14:00:00Z'
  },
  {
    id: '3',
    title: 'Mentorship Program Launch',
    description: 'Kickoff event for our new mentorship program. Connect with potential mentors and mentees.',
    date: '2024-01-25',
    time: '16:00',
    location: 'Conference Room A, Business School',
    type: 'mentorship',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop',
    organizer: 'Career Services',
    attendees: ['2', '4', '5'],
    maxAttendees: 30,
    isOnline: false,
    tags: ['mentorship', 'career', 'development'],
    createdAt: '2023-12-08T09:00:00Z'
  }
];

export const mockWallOfFame: WallOfFameEntry[] = [
  {
    id: '1',
    alumniId: '1',
    title: 'Tech Innovation Award',
    description: 'Recognized for developing a groundbreaking web application that helps students learn programming.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
    category: 'innovation',
    featured: true,
    createdAt: '2023-11-15T10:00:00Z'
  },
  {
    id: '2',
    alumniId: '2',
    title: 'Forbes 30 Under 30',
    description: 'Featured in Forbes 30 Under 30 list for exceptional achievements in finance.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop',
    category: 'achievement',
    featured: true,
    createdAt: '2023-10-20T14:00:00Z'
  },
  {
    id: '3',
    alumniId: '4',
    title: 'Sustainability Leadership',
    description: 'Leading initiatives to make transportation more sustainable and environmentally friendly.',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop',
    category: 'leadership',
    featured: false,
    createdAt: '2023-11-01T16:00:00Z'
  }
];

export const mockMentorshipRequests: MentorshipRequest[] = [
  {
    id: '1',
    menteeId: '3',
    mentorId: '1',
    message: 'I would love to learn more about transitioning from design to tech leadership roles.',
    areas: ['Career Development', 'Leadership'],
    status: 'pending',
    createdAt: '2023-12-01T10:00:00Z',
    updatedAt: '2023-12-01T10:00:00Z'
  },
  {
    id: '2',
    menteeId: '5',
    mentorId: '2',
    message: 'Looking for guidance on financial planning and investment strategies.',
    areas: ['Finance', 'Career Development'],
    status: 'accepted',
    createdAt: '2023-11-28T14:00:00Z',
    updatedAt: '2023-11-30T09:00:00Z'
  }
];

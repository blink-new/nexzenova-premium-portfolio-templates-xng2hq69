import CodeCraftTemplate from '../templates/developer/CodeCraft'
import DevFlowTemplate from '../templates/developer/DevFlow'
import TechStackTemplate from '../templates/developer/TechStack'
import TestLabTemplate from '../templates/qa/TestLab'
import QualityProTemplate from '../templates/qa/QualityPro'
import BugHunterTemplate from '../templates/qa/BugHunter'
import DesignStudioTemplate from '../templates/designer/DesignStudio'
import PixelPerfectTemplate from '../templates/designer/PixelPerfect'
import CreativeFlowTemplate from '../templates/designer/CreativeFlow'
import FreshStartTemplate from '../templates/student/FreshStart'

export interface ProjectData {
  title: string
  description: string
  technologies: string[]
  githubUrl: string
  liveUrl: string
  imageUrl: string
  startDate: string
  endDate: string
  responsibilities: string[]
}

export interface ExperienceData {
  company: string
  position: string
  startDate: string
  endDate: string
  location: string
  responsibilities: string[]
  technologies: string[]
}

export interface EducationData {
  institution: string
  degree: string
  field: string
  startDate: string
  endDate: string
  gpa: string
  achievements: string[]
}

export interface TemplateField {
  id: string
  label: string
  type: 'text' | 'textarea' | 'email' | 'url' | 'array' | 'projects' | 'experience' | 'education'
  placeholder?: string
  required?: boolean
}

export interface Template {
  id: string
  name: string
  category: 'developer' | 'qa' | 'designer' | 'student'
  description: string
  image: string
  price: string
  originalPrice: string
  popular: boolean
  component: React.ComponentType<any>
  fields: TemplateField[]
  preview: string
}

export const templates: Template[] = [
  // Developer Templates
  {
    id: 'codecraft',
    name: 'CodeCraft',
    category: 'developer',
    description: 'Dark terminal-inspired template with neon green accents',
    image: '/api/placeholder/400/300',
    price: '₹2,499',
    originalPrice: '₹4,999',
    popular: true,
    component: CodeCraftTemplate,
    preview: 'Dark theme with terminal aesthetics, perfect for backend developers',
    fields: [
      { id: 'name', label: 'Full Name', type: 'text', required: true },
      { id: 'title', label: 'Professional Title', type: 'text', required: true },
      { id: 'email', label: 'Email', type: 'email', required: true },
      { id: 'phone', label: 'Phone', type: 'text' },
      { id: 'location', label: 'Location', type: 'text' },
      { id: 'bio', label: 'Bio/Summary', type: 'textarea', required: true },
      { id: 'githubUrl', label: 'GitHub URL', type: 'url' },
      { id: 'linkedinUrl', label: 'LinkedIn URL', type: 'url' },
      { id: 'portfolioUrl', label: 'Portfolio URL', type: 'url' },
      { id: 'skills', label: 'Technical Skills', type: 'array' },
      { id: 'projects', label: 'Projects', type: 'projects' },
      { id: 'experience', label: 'Work Experience', type: 'experience' },
      { id: 'education', label: 'Education', type: 'education' },
    ]
  },
  {
    id: 'devflow',
    name: 'DevFlow',
    category: 'developer',
    description: 'Clean SaaS dashboard with blue gradients',
    image: '/api/placeholder/400/300',
    price: '₹2,999',
    originalPrice: '₹5,999',
    popular: false,
    component: DevFlowTemplate,
    preview: 'Professional SaaS-style layout with clean blue design',
    fields: [
      { id: 'name', label: 'Full Name', type: 'text', required: true },
      { id: 'title', label: 'Professional Title', type: 'text', required: true },
      { id: 'email', label: 'Email', type: 'email', required: true },
      { id: 'phone', label: 'Phone', type: 'text' },
      { id: 'location', label: 'Location', type: 'text' },
      { id: 'bio', label: 'Bio/Summary', type: 'textarea', required: true },
      { id: 'githubUrl', label: 'GitHub URL', type: 'url' },
      { id: 'linkedinUrl', label: 'LinkedIn URL', type: 'url' },
      { id: 'portfolioUrl', label: 'Portfolio URL', type: 'url' },
      { id: 'skills', label: 'Technical Skills', type: 'array' },
      { id: 'projects', label: 'Projects', type: 'projects' },
      { id: 'experience', label: 'Work Experience', type: 'experience' },
      { id: 'education', label: 'Education', type: 'education' },
    ]
  },
  {
    id: 'techstack',
    name: 'TechStack',
    category: 'developer',
    description: 'Modern grid layout with tech stack showcase',
    image: '/api/placeholder/400/300',
    price: '₹1,999',
    originalPrice: '₹3,999',
    popular: false,
    component: TechStackTemplate,
    preview: 'Grid-based layout highlighting your technology stack',
    fields: [
      { id: 'name', label: 'Full Name', type: 'text', required: true },
      { id: 'title', label: 'Professional Title', type: 'text', required: true },
      { id: 'email', label: 'Email', type: 'email', required: true },
      { id: 'phone', label: 'Phone', type: 'text' },
      { id: 'location', label: 'Location', type: 'text' },
      { id: 'bio', label: 'Bio/Summary', type: 'textarea', required: true },
      { id: 'githubUrl', label: 'GitHub URL', type: 'url' },
      { id: 'linkedinUrl', label: 'LinkedIn URL', type: 'url' },
      { id: 'portfolioUrl', label: 'Portfolio URL', type: 'url' },
      { id: 'skills', label: 'Technical Skills', type: 'array' },
      { id: 'projects', label: 'Projects', type: 'projects' },
      { id: 'experience', label: 'Work Experience', type: 'experience' },
      { id: 'education', label: 'Education', type: 'education' },
    ]
  },
  // QA Templates
  {
    id: 'testlab',
    name: 'TestLab',
    category: 'qa',
    description: 'Clean analytical dashboard with testing metrics',
    image: '/api/placeholder/400/300',
    price: '₹2,299',
    originalPrice: '₹4,599',
    popular: true,
    component: TestLabTemplate,
    preview: 'Professional QA template with metrics and testing tools showcase',
    fields: [
      { id: 'name', label: 'Full Name', type: 'text', required: true },
      { id: 'title', label: 'Professional Title', type: 'text', required: true },
      { id: 'email', label: 'Email', type: 'email', required: true },
      { id: 'phone', label: 'Phone', type: 'text' },
      { id: 'location', label: 'Location', type: 'text' },
      { id: 'bio', label: 'Bio/Summary', type: 'textarea', required: true },
      { id: 'linkedinUrl', label: 'LinkedIn URL', type: 'url' },
      { id: 'portfolioUrl', label: 'Portfolio URL', type: 'url' },
      { id: 'skills', label: 'Testing Skills & Tools', type: 'array' },
      { id: 'certifications', label: 'Certifications', type: 'array' },
      { id: 'projects', label: 'Testing Projects', type: 'projects' },
      { id: 'experience', label: 'Work Experience', type: 'experience' },
      { id: 'education', label: 'Education', type: 'education' },
    ]
  },
  {
    id: 'qualitypro',
    name: 'QualityPro',
    category: 'qa',
    description: 'Professional white/gray with data visualizations',
    image: '/api/placeholder/400/300',
    price: '₹2,799',
    originalPrice: '₹5,599',
    popular: false,
    component: QualityProTemplate,
    preview: 'Clean professional design with quality metrics focus',
    fields: [
      { id: 'name', label: 'Full Name', type: 'text', required: true },
      { id: 'title', label: 'Professional Title', type: 'text', required: true },
      { id: 'email', label: 'Email', type: 'email', required: true },
      { id: 'phone', label: 'Phone', type: 'text' },
      { id: 'location', label: 'Location', type: 'text' },
      { id: 'bio', label: 'Bio/Summary', type: 'textarea', required: true },
      { id: 'linkedinUrl', label: 'LinkedIn URL', type: 'url' },
      { id: 'portfolioUrl', label: 'Portfolio URL', type: 'url' },
      { id: 'skills', label: 'Testing Skills & Tools', type: 'array' },
      { id: 'certifications', label: 'Certifications', type: 'array' },
      { id: 'projects', label: 'Testing Projects', type: 'projects' },
      { id: 'experience', label: 'Work Experience', type: 'experience' },
      { id: 'education', label: 'Education', type: 'education' },
    ]
  },
  {
    id: 'bughunter',
    name: 'BugHunter',
    category: 'qa',
    description: 'Systematic grid layout with testing tools showcase',
    image: '/api/placeholder/400/300',
    price: '₹1,799',
    originalPrice: '₹3,599',
    popular: false,
    component: BugHunterTemplate,
    preview: 'Systematic approach to showcasing QA expertise',
    fields: [
      { id: 'name', label: 'Full Name', type: 'text', required: true },
      { id: 'title', label: 'Professional Title', type: 'text', required: true },
      { id: 'email', label: 'Email', type: 'email', required: true },
      { id: 'phone', label: 'Phone', type: 'text' },
      { id: 'location', label: 'Location', type: 'text' },
      { id: 'bio', label: 'Bio/Summary', type: 'textarea', required: true },
      { id: 'linkedinUrl', label: 'LinkedIn URL', type: 'url' },
      { id: 'portfolioUrl', label: 'Portfolio URL', type: 'url' },
      { id: 'skills', label: 'Testing Skills & Tools', type: 'array' },
      { id: 'certifications', label: 'Certifications', type: 'array' },
      { id: 'projects', label: 'Testing Projects', type: 'projects' },
      { id: 'experience', label: 'Work Experience', type: 'experience' },
      { id: 'education', label: 'Education', type: 'education' },
    ]
  },
  // Designer Templates
  {
    id: 'designstudio',
    name: 'DesignStudio',
    category: 'designer',
    description: 'Bold typography with creative layouts',
    image: '/api/placeholder/400/300',
    price: '₹3,499',
    originalPrice: '₹6,999',
    popular: true,
    component: DesignStudioTemplate,
    preview: 'Creative design-focused template with bold visuals',
    fields: [
      { id: 'name', label: 'Full Name', type: 'text', required: true },
      { id: 'title', label: 'Professional Title', type: 'text', required: true },
      { id: 'email', label: 'Email', type: 'email', required: true },
      { id: 'phone', label: 'Phone', type: 'text' },
      { id: 'location', label: 'Location', type: 'text' },
      { id: 'bio', label: 'Bio/Summary', type: 'textarea', required: true },
      { id: 'dribbbleUrl', label: 'Dribbble URL', type: 'url' },
      { id: 'behanceUrl', label: 'Behance URL', type: 'url' },
      { id: 'linkedinUrl', label: 'LinkedIn URL', type: 'url' },
      { id: 'portfolioUrl', label: 'Portfolio URL', type: 'url' },
      { id: 'skills', label: 'Design Skills & Tools', type: 'array' },
      { id: 'projects', label: 'Design Projects', type: 'projects' },
      { id: 'experience', label: 'Work Experience', type: 'experience' },
      { id: 'education', label: 'Education', type: 'education' },
    ]
  },
  {
    id: 'pixelperfect',
    name: 'PixelPerfect',
    category: 'designer',
    description: 'Minimalist with large visual showcases',
    image: '/api/placeholder/400/300',
    price: '₹2,999',
    originalPrice: '₹5,999',
    popular: false,
    component: PixelPerfectTemplate,
    preview: 'Minimalist design with focus on visual portfolio',
    fields: [
      { id: 'name', label: 'Full Name', type: 'text', required: true },
      { id: 'title', label: 'Professional Title', type: 'text', required: true },
      { id: 'email', label: 'Email', type: 'email', required: true },
      { id: 'phone', label: 'Phone', type: 'text' },
      { id: 'location', label: 'Location', type: 'text' },
      { id: 'bio', label: 'Bio/Summary', type: 'textarea', required: true },
      { id: 'dribbbleUrl', label: 'Dribbble URL', type: 'url' },
      { id: 'behanceUrl', label: 'Behance URL', type: 'url' },
      { id: 'linkedinUrl', label: 'LinkedIn URL', type: 'url' },
      { id: 'portfolioUrl', label: 'Portfolio URL', type: 'url' },
      { id: 'skills', label: 'Design Skills & Tools', type: 'array' },
      { id: 'projects', label: 'Design Projects', type: 'projects' },
      { id: 'experience', label: 'Work Experience', type: 'experience' },
      { id: 'education', label: 'Education', type: 'education' },
    ]
  },
  {
    id: 'creativeflow',
    name: 'CreativeFlow',
    category: 'designer',
    description: 'Animated interactions with portfolio galleries',
    image: '/api/placeholder/400/300',
    price: '₹3,999',
    originalPrice: '₹7,999',
    popular: false,
    component: CreativeFlowTemplate,
    preview: 'Dynamic template with smooth animations and interactions',
    fields: [
      { id: 'name', label: 'Full Name', type: 'text', required: true },
      { id: 'title', label: 'Professional Title', type: 'text', required: true },
      { id: 'email', label: 'Email', type: 'email', required: true },
      { id: 'phone', label: 'Phone', type: 'text' },
      { id: 'location', label: 'Location', type: 'text' },
      { id: 'bio', label: 'Bio/Summary', type: 'textarea', required: true },
      { id: 'dribbbleUrl', label: 'Dribbble URL', type: 'url' },
      { id: 'behanceUrl', label: 'Behance URL', type: 'url' },
      { id: 'linkedinUrl', label: 'LinkedIn URL', type: 'url' },
      { id: 'portfolioUrl', label: 'Portfolio URL', type: 'url' },
      { id: 'skills', label: 'Design Skills & Tools', type: 'array' },
      { id: 'projects', label: 'Design Projects', type: 'projects' },
      { id: 'experience', label: 'Work Experience', type: 'experience' },
      { id: 'education', label: 'Education', type: 'education' },
    ]
  },
  // Student Template
  {
    id: 'freshstart',
    name: 'FreshStart',
    category: 'student',
    description: 'Bright, energetic with goal-oriented sections',
    image: '/api/placeholder/400/300',
    price: '₹999',
    originalPrice: '₹1,999',
    popular: true,
    component: FreshStartTemplate,
    preview: 'Perfect for students and fresh graduates',
    fields: [
      { id: 'name', label: 'Full Name', type: 'text', required: true },
      { id: 'title', label: 'Desired Role/Field', type: 'text', required: true },
      { id: 'email', label: 'Email', type: 'email', required: true },
      { id: 'phone', label: 'Phone', type: 'text' },
      { id: 'location', label: 'Location', type: 'text' },
      { id: 'bio', label: 'Bio/Summary', type: 'textarea', required: true },
      { id: 'githubUrl', label: 'GitHub URL', type: 'url' },
      { id: 'linkedinUrl', label: 'LinkedIn URL', type: 'url' },
      { id: 'portfolioUrl', label: 'Portfolio URL', type: 'url' },
      { id: 'skills', label: 'Skills & Technologies', type: 'array' },
      { id: 'goals', label: 'Career Goals', type: 'array' },
      { id: 'projects', label: 'Academic/Personal Projects', type: 'projects' },
      { id: 'experience', label: 'Internships/Part-time Work', type: 'experience' },
      { id: 'education', label: 'Education', type: 'education' },
    ]
  }
]
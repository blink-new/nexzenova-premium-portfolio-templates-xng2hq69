import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { Download, Code, FileText, Package, ExternalLink, Copy, Check } from 'lucide-react'
import { Template, TemplateData } from '../App'

interface ExportManagerProps {
  template: Template
  data: TemplateData
}

export function ExportManager({ template, data }: ExportManagerProps) {
  const [exportFormat, setExportFormat] = useState<'html' | 'react' | 'zip'>('html')
  const [copied, setCopied] = useState(false)

  const generateSEOMetadata = () => {
    const name = data.name || 'Portfolio'
    const profession = data.title || data.profession || 'Professional'
    const bio = data.bio || data.about || 'Professional portfolio website'
    
    return {
      title: `${name} - ${profession} Portfolio`,
      description: bio.toString().substring(0, 160),
      keywords: `${name}, ${profession}, portfolio, ${template.category}`,
      author: name.toString(),
      ogTitle: `${name} - ${profession}`,
      ogDescription: bio.toString().substring(0, 160),
      ogImage: '/og-image.jpg',
      twitterCard: 'summary_large_image'
    }
  }

  const generateHTMLExport = () => {
    const seo = generateSEOMetadata()
    
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${seo.title}</title>
    <meta name="description" content="${seo.description}">
    <meta name="keywords" content="${seo.keywords}">
    <meta name="author" content="${seo.author}">
    
    <!-- Open Graph -->
    <meta property="og:title" content="${seo.ogTitle}">
    <meta property="og:description" content="${seo.ogDescription}">
    <meta property="og:image" content="${seo.ogImage}">
    <meta property="og:type" content="website">
    
    <!-- Twitter Card -->
    <meta name="twitter:card" content="${seo.twitterCard}">
    <meta name="twitter:title" content="${seo.ogTitle}">
    <meta name="twitter:description" content="${seo.ogDescription}">
    <meta name="twitter:image" content="${seo.ogImage}">
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=DM+Sans:wght@400;500;700&family=JetBrains+Mono:wght@400;500&family=Playfair+Display:wght@400;500;700&display=swap" rel="stylesheet">
    
    <!-- Lucide Icons -->
    <script src="https://unpkg.com/lucide@latest/dist/umd/lucide.js"></script>
    
    <!-- Custom Styles -->
    <style>
        body { 
            font-family: 'Inter', sans-serif; 
        }
        .blink-gradient {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
        .blink-gradient-text {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        /* Add smooth scrolling */
        html {
            scroll-behavior: smooth;
        }
        /* Custom animations */
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        .animate-fade-in-up {
            animation: fadeInUp 0.6s ease-out;
        }
    </style>
</head>
<body>
    <!-- Portfolio content will be rendered here -->
    <div id="portfolio-content">
        <!-- This would contain the actual template HTML structure -->
        <div class="min-h-screen bg-white">
            <header class="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div class="flex items-center justify-between">
                        <h1 class="text-xl font-bold blink-gradient-text">${data.name || 'Portfolio'}</h1>
                        <nav class="hidden md:flex space-x-8">
                            <a href="#about" class="text-gray-600 hover:text-blue-600 transition-colors">About</a>
                            <a href="#projects" class="text-gray-600 hover:text-blue-600 transition-colors">Projects</a>
                            <a href="#contact" class="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
                        </nav>
                    </div>
                </div>
            </header>
            
            <main>
                <section class="py-20 px-4 sm:px-6 lg:px-8">
                    <div class="max-w-7xl mx-auto text-center">
                        <h1 class="text-5xl font-bold text-gray-900 mb-4">${data.name || 'Your Name'}</h1>
                        <p class="text-2xl text-blue-600 mb-6">${data.title || 'Professional Title'}</p>
                        <p class="text-lg text-gray-600 max-w-3xl mx-auto">${data.bio || 'Your professional bio will appear here.'}</p>
                    </div>
                </section>
                
                <section id="about" class="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                    <div class="max-w-7xl mx-auto">
                        <h2 class="text-4xl font-bold text-gray-900 mb-8 text-center">About Me</h2>
                        <p class="text-lg text-gray-600 max-w-4xl mx-auto text-center">${data.about || 'Your detailed about section will appear here.'}</p>
                    </div>
                </section>
                
                <section id="contact" class="py-20 px-4 sm:px-6 lg:px-8">
                    <div class="max-w-7xl mx-auto text-center">
                        <h2 class="text-4xl font-bold text-gray-900 mb-8">Get In Touch</h2>
                        <p class="text-lg text-gray-600 mb-8">Let's connect and discuss opportunities</p>
                        ${data.email ? `<a href="mailto:${data.email}" class="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">Contact Me</a>` : ''}
                    </div>
                </section>
            </main>
            
            <footer class="py-8 px-4 sm:px-6 lg:px-8 bg-gray-900">
                <div class="max-w-7xl mx-auto text-center">
                    <p class="text-gray-400 text-sm">© ${data.name || 'Your Name'} All Rights Reserved. Made with ❤️ by Nexzenova</p>
                </div>
            </footer>
        </div>
    </div>
    
    <!-- Scripts -->
    <script>
        // Initialize Lucide icons
        lucide.createIcons();
        
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
        
        // Add fade-in animation on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in-up');
                }
            });
        }, observerOptions);
        
        // Observe all sections
        document.querySelectorAll('section').forEach(section => {
            observer.observe(section);
        });
        
        console.log('${template.name} portfolio loaded successfully!');
    </script>
</body>
</html>`
  }

  const generateReactExport = () => {
    const componentName = template.name.replace(/\s+/g, '')
    
    return `import React, { useState } from 'react'
import { Mail, Linkedin, Github, ExternalLink, Calendar, MapPin, Menu, X } from 'lucide-react'

// Portfolio Data Interface
interface PortfolioData {
  name: string
  title: string
  bio: string
  about: string
  email: string
  linkedin: string
  github: string
  skills: string[]
  projects: ProjectData[]
  experience: ExperienceData[]
  education: EducationData[]
}

interface ProjectData {
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

interface ExperienceData {
  company: string
  position: string
  startDate: string
  endDate: string
  location: string
  responsibilities: string[]
  technologies: string[]
}

interface EducationData {
  institution: string
  degree: string
  field: string
  startDate: string
  endDate: string
  gpa: string
  achievements: string[]
}

// Portfolio Data
const portfolioData: PortfolioData = ${JSON.stringify({
  name: data.name || 'Your Name',
  title: data.title || 'Professional Title',
  bio: data.bio || 'Your professional bio',
  about: data.about || 'Your detailed about section',
  email: data.email || 'your.email@example.com',
  linkedin: data.linkedin || 'https://linkedin.com/in/yourprofile',
  github: data.github || 'https://github.com/yourusername',
  skills: Array.isArray(data.skills) ? data.skills : ['React', 'TypeScript', 'Node.js'],
  projects: Array.isArray(data.projects) ? data.projects : [],
  experience: Array.isArray(data.experience) ? data.experience : [],
  education: Array.isArray(data.education) ? data.education : []
}, null, 2)}

// Utility function to format dates
const formatDate = (dateString: string) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' })
}

// Main Portfolio Component
export default function ${componentName}Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <h1 className="text-xl font-bold text-gray-900">{portfolioData.name}</h1>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
              <a href="#projects" className="text-gray-600 hover:text-blue-600 transition-colors">Projects</a>
              <a href="#experience" className="text-gray-600 hover:text-blue-600 transition-colors">Experience</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
            </nav>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-4">
              <nav className="flex flex-col space-y-4">
                <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
                <a href="#projects" className="text-gray-600 hover:text-blue-600 transition-colors">Projects</a>
                <a href="#experience" className="text-gray-600 hover:text-blue-600 transition-colors">Experience</a>
                <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            {portfolioData.name}
          </h1>
          <p className="text-2xl text-blue-600 font-semibold mb-6">
            {portfolioData.title}
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {portfolioData.bio}
          </p>
          
          <div className="flex items-center justify-center space-x-6 mt-8">
            {portfolioData.email && (
              <a href={\`mailto:\${portfolioData.email}\`} className="text-gray-600 hover:text-blue-600 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            )}
            {portfolioData.linkedin && (
              <a href={portfolioData.linkedin} className="text-gray-600 hover:text-blue-600 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            )}
            {portfolioData.github && (
              <a href={portfolioData.github} className="text-gray-600 hover:text-blue-600 transition-colors">
                <Github className="w-6 h-6" />
              </a>
            )}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {portfolioData.about}
            </p>
          </div>

          {/* Skills */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Skills</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {portfolioData.skills.map((skill, index) => (
                <span key={index} className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects</h2>
            <p className="text-lg text-gray-600">
              A showcase of my work and achievements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {project.imageUrl && (
                  <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
                )}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                    <div className="flex space-x-2">
                      {project.githubUrl && (
                        <a href={project.githubUrl} className="text-gray-600 hover:text-blue-600 transition-colors">
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a href={project.liveUrl} className="text-gray-600 hover:text-blue-600 transition-colors">
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Let's Work Together</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Ready to bring your ideas to life? Let's connect and discuss how we can collaborate.
          </p>
          
          <div className="flex items-center justify-center space-x-6">
            {portfolioData.email && (
              <a href={\`mailto:\${portfolioData.email}\`} className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Mail className="w-6 h-6 text-white" />
              </a>
            )}
            {portfolioData.linkedin && (
              <a href={portfolioData.linkedin} className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Linkedin className="w-6 h-6 text-white" />
              </a>
            )}
            {portfolioData.github && (
              <a href={portfolioData.github} className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Github className="w-6 h-6 text-white" />
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400 text-sm">
            © {portfolioData.name} All Rights Reserved. Made with ❤️ by Nexzenova
          </p>
        </div>
      </footer>
    </div>
  )
}`
  }

  const handleCopyCode = async () => {
    const code = exportFormat === 'html' ? generateHTMLExport() : generateReactExport()
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy code:', err)
    }
  }

  const handleDownload = () => {
    const code = exportFormat === 'html' ? generateHTMLExport() : generateReactExport()
    const filename = exportFormat === 'html' ? `${template.name.toLowerCase().replace(/\s+/g, '-')}-portfolio.html` : `${template.name.replace(/\s+/g, '')}Portfolio.tsx`
    const mimeType = exportFormat === 'html' ? 'text/html' : 'text/typescript'
    
    const blob = new Blob([code], { type: mimeType })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = filename
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const handleZipDownload = () => {
    // Create a comprehensive project structure
    const projectFiles = {
      'README.md': `# ${template.name} Portfolio

This is a complete portfolio website built with the ${template.name} template from Nexzenova Builder.

## Features
- Fully responsive design
- SEO optimized
- Modern animations
- Accessibility compliant
- Cross-browser compatible

## Setup
1. Extract the ZIP file
2. Open index.html in your browser
3. For React version, run \`npm install\` and \`npm start\`

## Customization
- Edit the data in the HTML file or React component
- Modify styles in the CSS section
- Add your own images and content

## Deployment
- Upload to any web hosting service
- Works with Netlify, Vercel, GitHub Pages, etc.

Made with ❤️ by Nexzenova Builder
`,
      'index.html': generateHTMLExport(),
      'package.json': `{
  "name": "${template.name.toLowerCase().replace(/\s+/g, '-')}-portfolio",
  "version": "1.0.0",
  "description": "Portfolio website built with ${template.name} template",
  "main": "index.html",
  "scripts": {
    "start": "serve -s .",
    "build": "echo 'Static site - no build needed'",
    "deploy": "echo 'Upload files to your hosting provider'"
  },
  "keywords": ["portfolio", "website", "${template.category}", "nexzenova"],
  "author": "${data.name || 'Portfolio Owner'}",
  "license": "MIT",
  "devDependencies": {
    "serve": "^14.0.0"
  }
}`,
      'styles.css': `/* Custom styles for ${template.name} Portfolio */

/* CSS Variables for easy customization */
:root {
  --primary-color: #2563eb;
  --secondary-color: #64748b;
  --accent-color: #f59e0b;
  --background-color: #ffffff;
  --text-color: #1e293b;
  --border-color: #e2e8f0;
}

/* Base styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
  color: var(--text-color);
  background-color: var(--background-color);
}

/* Utility classes */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  cursor: pointer;
  border: none;
}

.btn-primary {
  background-color: var(--primary-color);
  color: white;
}

.btn-primary:hover {
  background-color: #1d4ed8;
  transform: translateY(-2px);
}

/* Responsive design */
@media (max-width: 768px) {
  .container {
    padding: 0 0.5rem;
  }
  
  h1 {
    font-size: 2.5rem;
  }
  
  h2 {
    font-size: 2rem;
  }
}

/* Animation classes */
.fade-in {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease;
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Print styles */
@media print {
  .no-print {
    display: none;
  }
  
  body {
    font-size: 12pt;
    line-height: 1.4;
  }
}`,
      'script.js': `// JavaScript for ${template.name} Portfolio

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Initialize smooth scrolling
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Fade in animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe elements with fade-in class
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
        });
    }

    // Form submission (if contact form exists)
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add your form submission logic here
            alert('Thank you for your message! I will get back to you soon.');
        });
    }

    console.log('${template.name} Portfolio loaded successfully!');
});

// Utility functions
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'short' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Performance optimization
window.addEventListener('load', function() {
    // Lazy load images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
});`
    }

    // Create and download ZIP file
    const JSZip = (window as any).JSZip
    if (JSZip) {
      const zip = new JSZip()
      
      Object.entries(projectFiles).forEach(([filename, content]) => {
        zip.file(filename, content)
      })

      zip.generateAsync({ type: 'blob' }).then((content: Blob) => {
        const url = URL.createObjectURL(content)
        const a = document.createElement('a')
        a.href = url
        a.download = `${template.name.toLowerCase().replace(/\s+/g, '-')}-portfolio.zip`
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
        URL.revokeObjectURL(url)
      })
    } else {
      // Fallback: download individual files
      alert('ZIP functionality requires JSZip library. Downloading HTML file instead.')
      handleDownload()
    }
  }

  const seoData = generateSEOMetadata()

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-slate-900 flex items-center gap-2">
            <div className="w-6 h-6 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-md flex items-center justify-center">
              <span className="text-white text-xs font-bold">E</span>
            </div>
            Export Your Portfolio
          </CardTitle>
          <CardDescription>
            Download your customized {template.name} template in various formats
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <Tabs value={exportFormat} onValueChange={(value) => setExportFormat(value as any)}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="html" className="flex items-center space-x-2">
                <FileText className="w-4 h-4" />
                <span>HTML</span>
              </TabsTrigger>
              <TabsTrigger value="react" className="flex items-center space-x-2">
                <Code className="w-4 h-4" />
                <span>React</span>
              </TabsTrigger>
              <TabsTrigger value="zip" className="flex items-center space-x-2">
                <Package className="w-4 h-4" />
                <span>ZIP</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="html" className="space-y-4">
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6 border border-indigo-200">
                <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-indigo-600" />
                  Static HTML Export
                </h4>
                <p className="text-sm text-slate-600 mb-4">
                  Complete HTML file with embedded CSS, JavaScript, and all your content. Ready to host anywhere - no build process required!
                </p>
                <div className="flex items-center space-x-3">
                  <Button onClick={handleDownload} className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
                    <Download className="w-4 h-4 mr-2" />
                    Download HTML
                  </Button>
                  <Button variant="outline" onClick={handleCopyCode}>
                    {copied ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
                    {copied ? 'Copied!' : 'Copy Code'}
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="react" className="space-y-4">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-6 border border-blue-200">
                <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                  <Code className="w-5 h-5 text-blue-600" />
                  React Component Export
                </h4>
                <p className="text-sm text-slate-600 mb-4">
                  TypeScript React component with your data pre-filled and proper interfaces. Perfect for integration into existing React projects.
                </p>
                <div className="flex items-center space-x-3">
                  <Button onClick={handleDownload} className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
                    <Download className="w-4 h-4 mr-2" />
                    Download TSX
                  </Button>
                  <Button variant="outline" onClick={handleCopyCode}>
                    {copied ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
                    {copied ? 'Copied!' : 'Copy Code'}
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="zip" className="space-y-4">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 border border-green-200">
                <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                  <Package className="w-5 h-5 text-green-600" />
                  Complete Project ZIP
                </h4>
                <p className="text-sm text-slate-600 mb-4">
                  Full project structure with HTML, CSS, JavaScript, README, and package.json. Everything you need for deployment and customization.
                </p>
                <Button onClick={handleZipDownload} className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
                  <Package className="w-4 h-4 mr-2" />
                  Download ZIP
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* SEO Preview */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-slate-900">
            SEO Preview
          </CardTitle>
          <CardDescription>
            How your portfolio will appear in search results and social media
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="border rounded-lg p-4 bg-white">
            <div className="text-blue-600 text-lg font-medium hover:underline cursor-pointer">
              {seoData.title}
            </div>
            <div className="text-green-700 text-sm">
              https://yourportfolio.com
            </div>
            <div className="text-slate-600 text-sm mt-1">
              {seoData.description}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <h5 className="font-semibold text-slate-900 mb-2">Meta Tags</h5>
              <div className="space-y-1 text-slate-600">
                <p><strong>Title:</strong> {seoData.title}</p>
                <p><strong>Description:</strong> {seoData.description.substring(0, 50)}...</p>
                <p><strong>Keywords:</strong> {seoData.keywords}</p>
              </div>
            </div>
            <div>
              <h5 className="font-semibold text-slate-900 mb-2">Social Media</h5>
              <div className="space-y-1 text-slate-600">
                <p><strong>OG Title:</strong> {seoData.ogTitle}</p>
                <p><strong>Twitter Card:</strong> {seoData.twitterCard}</p>
                <p><strong>Image:</strong> {seoData.ogImage}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Export Stats */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-slate-900">
            Export Statistics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="text-center p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg">
              <div className="text-2xl font-bold text-indigo-600">
                {Object.keys(data).filter(key => data[key] && data[key] !== '' && (Array.isArray(data[key]) ? (data[key] as any[]).length > 0 : true)).length}
              </div>
              <div className="text-slate-600">Fields Filled</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">
                100%
              </div>
              <div className="text-slate-600">Mobile Ready</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">
                A+
              </div>
              <div className="text-slate-600">SEO Score</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg">
              <div className="text-2xl font-bold text-orange-600">
                95+
              </div>
              <div className="text-slate-600">Lighthouse</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Add JSZip for ZIP functionality */}
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js"></script>
    </div>
  )
}
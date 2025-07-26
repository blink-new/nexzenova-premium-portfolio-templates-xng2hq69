import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { TemplateData, ProjectData, ExperienceData, EducationData } from '../../App'
import { Github, ExternalLink, Mail, Phone, MapPin, Calendar, ChevronDown, Menu, X, Download, Briefcase } from 'lucide-react'

interface CodeCraftProps {
  data: TemplateData
}

export default function CodeCraftTemplate({ data }: CodeCraftProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const name = (data.name as string) || 'John Developer'
  const title = (data.title as string) || 'Full Stack Developer'
  const email = (data.email as string) || 'john@example.com'
  const phone = (data.phone as string) || '+1 (555) 123-4567'
  const location = (data.location as string) || 'San Francisco, CA'
  const bio = (data.bio as string) || 'Passionate full-stack developer with expertise in modern web technologies. I love building scalable applications and solving complex problems.'
  const githubUrl = (data.githubUrl as string) || 'https://github.com/johndeveloper'
  const linkedinUrl = (data.linkedinUrl as string) || 'https://linkedin.com/in/johndeveloper'
  const portfolioUrl = (data.portfolioUrl as string) || 'https://johndeveloper.dev'
  const skills = (data.skills as string[]) || ['JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'PostgreSQL', 'Docker', 'AWS']
  const projects = (data.projects as ProjectData[]) || []
  const experience = (data.experience as ExperienceData[]) || []
  const education = (data.education as EducationData[]) || []

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  const formatDate = (dateString: string) => {
    if (!dateString) return 'Present'
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
  }

  return (
    <div className="min-h-screen bg-slate-900 text-green-400 font-mono">
      {/* Sticky Header */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-green-400/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-400 text-slate-900 rounded flex items-center justify-center font-bold">
                {name.charAt(0)}
              </div>
              <span className="text-green-400 font-bold">{name}</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('about')} className="hover:text-green-300 transition-colors">About</button>
              <button onClick={() => scrollToSection('skills')} className="hover:text-green-300 transition-colors">Skills</button>
              <button onClick={() => scrollToSection('experience')} className="hover:text-green-300 transition-colors">Experience</button>
              <button onClick={() => scrollToSection('projects')} className="hover:text-green-300 transition-colors">Projects</button>
              <button onClick={() => scrollToSection('education')} className="hover:text-green-300 transition-colors">Education</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-green-300 transition-colors">Contact</button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md hover:bg-slate-800 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden py-4 border-t border-green-400/20"
            >
              <div className="flex flex-col space-y-2">
                <button onClick={() => scrollToSection('about')} className="text-left py-2 hover:text-green-300 transition-colors">About</button>
                <button onClick={() => scrollToSection('skills')} className="text-left py-2 hover:text-green-300 transition-colors">Skills</button>
                <button onClick={() => scrollToSection('experience')} className="text-left py-2 hover:text-green-300 transition-colors">Experience</button>
                <button onClick={() => scrollToSection('projects')} className="text-left py-2 hover:text-green-300 transition-colors">Projects</button>
                <button onClick={() => scrollToSection('education')} className="text-left py-2 hover:text-green-300 transition-colors">Education</button>
                <button onClick={() => scrollToSection('contact')} className="text-left py-2 hover:text-green-300 transition-colors">Contact</button>
              </div>
            </motion.nav>
          )}
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <span className="text-green-400 text-lg">$ whoami</span>
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 text-green-400">
              {name}
            </h1>
            <div className="text-xl sm:text-2xl lg:text-3xl text-green-300 mb-8">
              <span className="text-green-400">&gt;</span> {title}
            </div>
            <p className="text-lg sm:text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              {bio}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 bg-green-400 text-slate-900 rounded-lg font-semibold hover:bg-green-300 transition-colors flex items-center justify-center gap-2"
              >
                <Briefcase className="w-5 h-5" />
                Hire Me
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border border-green-400 text-green-400 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-colors flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </motion.button>
            </div>
          </motion.div>
        </div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-green-400" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-green-400 mb-4">
              <span className="text-green-400">$</span> cat about.txt
            </h2>
            <div className="w-24 h-1 bg-green-400 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-slate-800 border border-green-400/20 rounded-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-slate-400 text-sm ml-2">terminal</span>
                </div>
                <div className="space-y-2 text-sm">
                  <div><span className="text-green-400">$</span> <span className="text-slate-300">echo $NAME</span></div>
                  <div className="text-green-300">{name}</div>
                  <div><span className="text-green-400">$</span> <span className="text-slate-300">echo $ROLE</span></div>
                  <div className="text-green-300">{title}</div>
                  <div><span className="text-green-400">$</span> <span className="text-slate-300">echo $LOCATION</span></div>
                  <div className="text-green-300">{location}</div>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed">
                {bio}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3 text-slate-300">
                <Mail className="w-5 h-5 text-green-400" />
                <a href={`mailto:${email}`} className="hover:text-green-400 transition-colors">{email}</a>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Phone className="w-5 h-5 text-green-400" />
                <a href={`tel:${phone}`} className="hover:text-green-400 transition-colors">{phone}</a>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <MapPin className="w-5 h-5 text-green-400" />
                <span>{location}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Github className="w-5 h-5 text-green-400" />
                <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">
                  GitHub Profile
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-green-400 mb-4">
              <span className="text-green-400">$</span> ls -la skills/
            </h2>
            <div className="w-24 h-1 bg-green-400 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-slate-800 border border-green-400/20 rounded-lg p-4 text-center hover:border-green-400/40 transition-colors"
              >
                <div className="text-green-400 font-semibold">{skill}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      {experience.length > 0 && (
        <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-green-400 mb-4">
                <span className="text-green-400">$</span> cat experience.log
              </h2>
              <div className="w-24 h-1 bg-green-400 mx-auto"></div>
            </motion.div>

            <div className="space-y-8">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-slate-800 border border-green-400/20 rounded-lg p-6 hover:border-green-400/40 transition-colors"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-green-400">{exp.position}</h3>
                      <p className="text-lg text-green-300">{exp.company}</p>
                    </div>
                    <div className="flex flex-col lg:items-end mt-2 lg:mt-0">
                      <div className="flex items-center gap-2 text-slate-300">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(exp.startDate)} - {formatDate(exp.endDate)}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-400 mt-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  {exp.responsibilities.length > 0 && (
                    <div className="mb-4">
                      <h4 className="text-green-400 font-semibold mb-2">Key Responsibilities:</h4>
                      <ul className="space-y-1 text-slate-300">
                        {exp.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-green-400 mt-1">&gt;</span>
                            <span>{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {exp.technologies.length > 0 && (
                    <div>
                      <h4 className="text-green-400 font-semibold mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <span key={idx} className="px-3 py-1 bg-green-400/10 text-green-400 rounded-full text-sm border border-green-400/20">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Projects Section */}
      {projects.length > 0 && (
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-green-400 mb-4">
                <span className="text-green-400">$</span> ls -la projects/
              </h2>
              <div className="w-24 h-1 bg-green-400 mx-auto"></div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-slate-800 border border-green-400/20 rounded-lg overflow-hidden hover:border-green-400/40 transition-colors"
                >
                  {project.imageUrl && (
                    <div className="aspect-video bg-slate-700 overflow-hidden">
                      <img 
                        src={project.imageUrl} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-green-400">{project.title}</h3>
                      <div className="flex items-center gap-2 text-slate-400 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(project.startDate)} - {formatDate(project.endDate)}</span>
                      </div>
                    </div>
                    <p className="text-slate-300 mb-4 leading-relaxed">{project.description}</p>
                    
                    {project.responsibilities.length > 0 && (
                      <div className="mb-4">
                        <h4 className="text-green-400 font-semibold mb-2">Key Features:</h4>
                        <ul className="space-y-1 text-slate-300 text-sm">
                          {project.responsibilities.map((responsibility, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-green-400 mt-1">&gt;</span>
                              <span>{responsibility}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {project.technologies.length > 0 && (
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, idx) => (
                            <span key={idx} className="px-2 py-1 bg-green-400/10 text-green-400 rounded text-xs border border-green-400/20">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    <div className="flex gap-3">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-green-400/10 text-green-400 rounded-lg hover:bg-green-400/20 transition-colors text-sm"
                        >
                          <Github className="w-4 h-4" />
                          Code
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-green-400 text-slate-900 rounded-lg hover:bg-green-300 transition-colors text-sm font-semibold"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Education Section */}
      {education.length > 0 && (
        <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-green-400 mb-4">
                <span className="text-green-400">$</span> cat education.txt
              </h2>
              <div className="w-24 h-1 bg-green-400 mx-auto"></div>
            </motion.div>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-slate-800 border border-green-400/20 rounded-lg p-6 hover:border-green-400/40 transition-colors"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-green-400">{edu.degree} in {edu.field}</h3>
                      <p className="text-lg text-green-300">{edu.institution}</p>
                    </div>
                    <div className="flex flex-col lg:items-end mt-2 lg:mt-0">
                      <div className="flex items-center gap-2 text-slate-300">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(edu.startDate)} - {formatDate(edu.endDate)}</span>
                      </div>
                      {edu.gpa && (
                        <div className="text-slate-400 mt-1">
                          GPA: {edu.gpa}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {edu.achievements.length > 0 && (
                    <div>
                      <h4 className="text-green-400 font-semibold mb-2">Achievements:</h4>
                      <ul className="space-y-1 text-slate-300">
                        {edu.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-green-400 mt-1">&gt;</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-green-400 mb-4">
              <span className="text-green-400">$</span> ./contact.sh
            </h2>
            <div className="w-24 h-1 bg-green-400 mx-auto mb-8"></div>
            <p className="text-xl text-slate-300 mb-12">
              Ready to collaborate? Let's build something amazing together.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <a
              href={`mailto:${email}`}
              className="flex items-center justify-center gap-3 px-8 py-4 bg-green-400 text-slate-900 rounded-lg font-semibold hover:bg-green-300 transition-colors"
            >
              <Mail className="w-5 h-5" />
              Send Email
            </a>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-4 border border-green-400 text-green-400 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-colors"
            >
              <Github className="w-5 h-5" />
              View GitHub
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-green-400/20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400">
            © {name} All Rights Reserved. Made with ❤️ by Nexzenova
          </p>
        </div>
      </footer>
    </div>
  )
}
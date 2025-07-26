import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { TemplateData, ProjectData, ExperienceData, EducationData } from '../../App'
import { Github, ExternalLink, Mail, Phone, MapPin, Calendar, Menu, X, Download, Briefcase, Award, Code } from 'lucide-react'

interface DevFlowProps {
  data: TemplateData
}

export default function DevFlowTemplate({ data }: DevFlowProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const name = (data.name as string) || 'Sarah Johnson'
  const title = (data.title as string) || 'Senior Frontend Developer'
  const email = (data.email as string) || 'sarah@example.com'
  const phone = (data.phone as string) || '+1 (555) 987-6543'
  const location = (data.location as string) || 'New York, NY'
  const bio = (data.bio as string) || 'Experienced frontend developer specializing in React, TypeScript, and modern web technologies. Passionate about creating exceptional user experiences and scalable applications.'
  const githubUrl = (data.githubUrl as string) || 'https://github.com/sarahjohnson'
  const linkedinUrl = (data.linkedinUrl as string) || 'https://linkedin.com/in/sarahjohnson'
  const portfolioUrl = (data.portfolioUrl as string) || 'https://sarahjohnson.dev'
  const skills = (data.skills as string[]) || ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'GraphQL', 'Node.js', 'MongoDB', 'AWS']
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Sticky Header */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-blue-200 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg flex items-center justify-center font-bold text-lg">
                {name.charAt(0)}
              </div>
              <div>
                <span className="text-slate-900 font-bold text-lg">{name}</span>
                <p className="text-slate-600 text-sm">{title}</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-slate-700 hover:text-blue-600 transition-colors font-medium">About</button>
              <button onClick={() => scrollToSection('skills')} className="text-slate-700 hover:text-blue-600 transition-colors font-medium">Skills</button>
              <button onClick={() => scrollToSection('experience')} className="text-slate-700 hover:text-blue-600 transition-colors font-medium">Experience</button>
              <button onClick={() => scrollToSection('projects')} className="text-slate-700 hover:text-blue-600 transition-colors font-medium">Projects</button>
              <button onClick={() => scrollToSection('education')} className="text-slate-700 hover:text-blue-600 transition-colors font-medium">Education</button>
              <button onClick={() => scrollToSection('contact')} className="text-slate-700 hover:text-blue-600 transition-colors font-medium">Contact</button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md hover:bg-slate-100 transition-colors"
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
              className="md:hidden py-4 border-t border-blue-200"
            >
              <div className="flex flex-col space-y-2">
                <button onClick={() => scrollToSection('about')} className="text-left py-2 text-slate-700 hover:text-blue-600 transition-colors">About</button>
                <button onClick={() => scrollToSection('skills')} className="text-left py-2 text-slate-700 hover:text-blue-600 transition-colors">Skills</button>
                <button onClick={() => scrollToSection('experience')} className="text-left py-2 text-slate-700 hover:text-blue-600 transition-colors">Experience</button>
                <button onClick={() => scrollToSection('projects')} className="text-left py-2 text-slate-700 hover:text-blue-600 transition-colors">Projects</button>
                <button onClick={() => scrollToSection('education')} className="text-left py-2 text-slate-700 hover:text-blue-600 transition-colors">Education</button>
                <button onClick={() => scrollToSection('contact')} className="text-left py-2 text-slate-700 hover:text-blue-600 transition-colors">Contact</button>
              </div>
            </motion.nav>
          )}
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-indigo-600/5"></div>
        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-xl">
                {name.charAt(0)}
              </div>
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 text-slate-900">
              {name}
            </h1>
            <div className="text-xl sm:text-2xl lg:text-3xl text-blue-600 mb-8 font-semibold">
              {title}
            </div>
            <p className="text-lg sm:text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              {bio}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <Briefcase className="w-5 h-5" />
                Let's Work Together
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg text-slate-600 leading-relaxed">
                {bio}
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-blue-50 rounded-xl">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{experience.length}+</div>
                  <div className="text-slate-600">Years Experience</div>
                </div>
                <div className="text-center p-6 bg-indigo-50 rounded-xl">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">{projects.length}+</div>
                  <div className="text-slate-600">Projects Completed</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-500">Email</div>
                      <a href={`mailto:${email}`} className="text-slate-900 hover:text-blue-600 transition-colors font-medium">{email}</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-500">Phone</div>
                      <a href={`tel:${phone}`} className="text-slate-900 hover:text-blue-600 transition-colors font-medium">{phone}</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-500">Location</div>
                      <span className="text-slate-900 font-medium">{location}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Github className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-500">GitHub</div>
                      <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-slate-900 hover:text-blue-600 transition-colors font-medium">
                        View Profile
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Technical Skills</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all border border-blue-100"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <div className="text-slate-900 font-semibold">{skill}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      {experience.length > 0 && (
        <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Work Experience</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto"></div>
            </motion.div>

            <div className="space-y-8">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100 hover:shadow-lg transition-all"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Briefcase className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">{exp.position}</h3>
                        <p className="text-lg text-blue-600 font-semibold">{exp.company}</p>
                        <div className="flex items-center gap-4 mt-2 text-slate-600">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{formatDate(exp.startDate)} - {formatDate(exp.endDate)}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {exp.responsibilities.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-slate-900 font-semibold mb-3 flex items-center gap-2">
                        <Award className="w-5 h-5 text-blue-600" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-slate-600">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {exp.technologies.length > 0 && (
                    <div>
                      <h4 className="text-slate-900 font-semibold mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <span key={idx} className="px-3 py-1 bg-white text-blue-600 rounded-full text-sm font-medium border border-blue-200">
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
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto"></div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-blue-100"
                >
                  {project.imageUrl && (
                    <div className="aspect-video bg-gradient-to-r from-blue-100 to-indigo-100 overflow-hidden">
                      <img 
                        src={project.imageUrl} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-slate-900">{project.title}</h3>
                      <div className="flex items-center gap-1 text-slate-500 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(project.startDate)} - {formatDate(project.endDate)}</span>
                      </div>
                    </div>
                    <p className="text-slate-600 mb-6 leading-relaxed">{project.description}</p>
                    
                    {project.responsibilities.length > 0 && (
                      <div className="mb-6">
                        <h4 className="text-slate-900 font-semibold mb-3">Key Features</h4>
                        <ul className="space-y-1">
                          {project.responsibilities.map((responsibility, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-slate-600 text-sm">
                              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                              <span>{responsibility}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {project.technologies.length > 0 && (
                      <div className="mb-6">
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, idx) => (
                            <span key={idx} className="px-2 py-1 bg-blue-50 text-blue-600 rounded-lg text-xs font-medium border border-blue-200">
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
                          className="flex items-center gap-2 px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors text-sm font-medium"
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
                          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all text-sm font-medium"
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
        <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Education</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto"></div>
            </motion.div>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">{edu.degree} in {edu.field}</h3>
                        <p className="text-lg text-blue-600 font-semibold">{edu.institution}</p>
                        <div className="flex items-center gap-4 mt-2 text-slate-600">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{formatDate(edu.startDate)} - {formatDate(edu.endDate)}</span>
                          </div>
                          {edu.gpa && (
                            <div className="text-slate-600">
                              GPA: {edu.gpa}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {edu.achievements.length > 0 && (
                    <div>
                      <h4 className="text-slate-900 font-semibold mb-3">Achievements & Honors</h4>
                      <ul className="space-y-2">
                        {edu.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-slate-600">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
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
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Let's Work Together</h2>
            <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
            <p className="text-xl text-blue-100 mb-12">
              Ready to bring your ideas to life? Let's create something amazing together.
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
              className="flex items-center justify-center gap-3 px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors shadow-lg"
            >
              <Mail className="w-5 h-5" />
              Send Email
            </a>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              <Github className="w-5 h-5" />
              View GitHub
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400">
            © {name} All Rights Reserved. Made with ❤️ by Nexzenova
          </p>
        </div>
      </footer>
    </div>
  )
}
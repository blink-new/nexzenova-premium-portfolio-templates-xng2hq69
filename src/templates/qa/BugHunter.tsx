import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Bug, Search, Target, Menu, X, Mail, Linkedin, Github, ExternalLink, Calendar, MapPin, Zap } from 'lucide-react'
import { TemplateData, ProjectData, ExperienceData, EducationData } from '../../App'

interface BugHunterProps {
  data: TemplateData
}

function BugHunterTemplate({ data }: BugHunterProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const skills = Array.isArray(data.skills) ? data.skills : []
  const projects = Array.isArray(data.projects) ? data.projects as ProjectData[] : []
  const experience = Array.isArray(data.experience) ? data.experience as ExperienceData[] : []
  const education = Array.isArray(data.education) ? data.education as EducationData[] : []

  const formatDate = (dateString: string) => {
    if (!dateString) return ''
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' })
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-red-500/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-red-600 to-orange-600 rounded-lg flex items-center justify-center">
                <Bug className="w-6 h-6 text-white" />
              </div>
              <span className="text-white font-bold text-lg">
                {data.name || 'Bug Hunter'}
              </span>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-slate-300 hover:text-red-400 transition-colors">About</a>
              <a href="#experience" className="text-slate-300 hover:text-red-400 transition-colors">Experience</a>
              <a href="#projects" className="text-slate-300 hover:text-red-400 transition-colors">Projects</a>
              <a href="#education" className="text-slate-300 hover:text-red-400 transition-colors">Education</a>
              <a href="#contact" className="text-slate-300 hover:text-red-400 transition-colors">Contact</a>
            </nav>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-slate-800 transition-colors"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-red-500/20 py-4"
            >
              <nav className="flex flex-col space-y-4">
                <a href="#about" className="text-slate-300 hover:text-red-400 transition-colors">About</a>
                <a href="#experience" className="text-slate-300 hover:text-red-400 transition-colors">Experience</a>
                <a href="#projects" className="text-slate-300 hover:text-red-400 transition-colors">Projects</a>
                <a href="#education" className="text-slate-300 hover:text-red-400 transition-colors">Education</a>
                <a href="#contact" className="text-slate-300 hover:text-red-400 transition-colors">Contact</a>
              </nav>
            </motion.div>
          )}
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-red-900/20 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Bug className="w-8 h-8 text-red-500" />
                  <span className="text-red-400 font-mono text-lg">SYSTEM.INIT</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                  {data.name || 'Bug Hunter'}
                </h1>
                <p className="text-2xl text-red-400 font-semibold mb-6 font-mono">
                  {data.title || '> QA_AUTOMATION_SPECIALIST'}
                </p>
                <p className="text-lg text-slate-300 leading-relaxed">
                  {data.bio || 'Elite bug hunter specializing in automated testing, security vulnerabilities, and system optimization. No bug escapes my radar.'}
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300"
                >
                  ENGAGE_HUNTER
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border-2 border-red-500 text-red-400 rounded-lg font-semibold hover:bg-red-500 hover:text-white transition-all duration-300"
                >
                  DOWNLOAD_PROFILE
                </motion.button>
              </div>

              <div className="flex items-center space-x-6">
                {data.email && (
                  <a href={`mailto:${data.email}`} className="text-slate-400 hover:text-red-400 transition-colors">
                    <Mail className="w-6 h-6" />
                  </a>
                )}
                {data.linkedin && (
                  <a href={data.linkedin as string} className="text-slate-400 hover:text-red-400 transition-colors">
                    <Linkedin className="w-6 h-6" />
                  </a>
                )}
                {data.github && (
                  <a href={data.github as string} className="text-slate-400 hover:text-red-400 transition-colors">
                    <Github className="w-6 h-6" />
                  </a>
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="bg-slate-800 border border-red-500/30 rounded-2xl p-8 font-mono">
                <div className="text-green-400 mb-4">$ system_status --hunter</div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-400">BUGS_FOUND:</span>
                    <span className="text-red-400">9999+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">AUTOMATION_RATE:</span>
                    <span className="text-green-400">95%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">PROJECTS_SECURED:</span>
                    <span className="text-blue-400">{projects.length}+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">TOOLS_MASTERED:</span>
                    <span className="text-yellow-400">{skills.length}+</span>
                  </div>
                </div>
                <div className="mt-4 text-green-400">
                  <span className="animate-pulse">█</span> READY_FOR_DEPLOYMENT
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">HUNTER_PROFILE</h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              {data.about || 'Specialized in hunting down the most elusive bugs and security vulnerabilities through advanced automation and systematic testing methodologies.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-900 border border-red-500/30 rounded-2xl p-8 text-center hover:border-red-500/50 transition-all duration-300"
            >
              <Search className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">BUG_DETECTION</h3>
              <p className="text-slate-300">
                Advanced scanning techniques to identify critical vulnerabilities and system flaws
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-slate-900 border border-orange-500/30 rounded-2xl p-8 text-center hover:border-orange-500/50 transition-all duration-300"
            >
              <Zap className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">AUTOMATION</h3>
              <p className="text-slate-300">
                High-speed automated testing frameworks for continuous integration and deployment
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-slate-900 border border-green-500/30 rounded-2xl p-8 text-center hover:border-green-500/50 transition-all duration-300"
            >
              <Target className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">PRECISION</h3>
              <p className="text-slate-300">
                Surgical precision in identifying and eliminating critical system vulnerabilities
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">ARSENAL</h2>
            <p className="text-lg text-slate-300">
              Advanced tools and technologies in my bug hunting arsenal
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-slate-800 border border-red-500/20 rounded-lg p-4 text-center hover:border-red-500/50 hover:bg-slate-700 transition-all duration-300"
              >
                <span className="text-slate-200 font-mono text-sm">{skill}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">MISSION_HISTORY</h2>
            <p className="text-lg text-slate-300">
              Combat experience in the war against bugs
            </p>
          </div>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-900 border border-red-500/30 rounded-2xl p-8 hover:border-red-500/50 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 font-mono">{exp.position}</h3>
                    <p className="text-xl text-red-400 font-semibold">{exp.company}</p>
                  </div>
                  <div className="text-right mt-4 md:mt-0">
                    <div className="flex items-center text-slate-300 mb-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      {formatDate(exp.startDate)} - {exp.endDate ? formatDate(exp.endDate) : 'ACTIVE'}
                    </div>
                    <div className="flex items-center text-slate-300">
                      <MapPin className="w-4 h-4 mr-2" />
                      {exp.location}
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3 font-mono">MISSION_OBJECTIVES:</h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-300">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3 font-mono">TECH_STACK:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-red-900/30 border border-red-500/30 text-red-300 text-sm rounded-full font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">HUNT_RECORDS</h2>
            <p className="text-lg text-slate-300">
              Documented bug hunting missions and security assessments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800 border border-red-500/30 rounded-2xl overflow-hidden hover:border-red-500/50 transition-all duration-300"
              >
                {project.imageUrl && (
                  <div className="h-48 bg-gradient-to-br from-red-900/20 to-slate-900 flex items-center justify-center">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title}
                      className="w-full h-full object-cover opacity-80"
                    />
                  </div>
                )}
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white font-mono">{project.title}</h3>
                    <div className="flex space-x-2">
                      {project.githubUrl && (
                        <a href={project.githubUrl} className="text-slate-400 hover:text-red-400 transition-colors">
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a href={project.liveUrl} className="text-slate-400 hover:text-red-400 transition-colors">
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-slate-300 mb-4">{project.description}</p>

                  <div className="mb-4">
                    <div className="flex items-center text-sm text-slate-400 mb-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      {formatDate(project.startDate)} - {formatDate(project.endDate)}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2 font-mono">HUNT_RESULTS:</h4>
                    <ul className="text-sm text-slate-300 space-y-1">
                      {project.responsibilities.slice(0, 3).map((responsibility, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-1 h-1 bg-red-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="px-2 py-1 bg-red-900/30 border border-red-500/30 text-red-300 text-xs rounded-full font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">TRAINING_PROTOCOLS</h2>
            <p className="text-lg text-slate-300">
              Academic foundation and specialized certifications
            </p>
          </div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-900 border border-red-500/30 rounded-2xl p-8 hover:border-red-500/50 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 font-mono">{edu.degree}</h3>
                    <p className="text-xl text-red-400 font-semibold mb-1">{edu.institution}</p>
                    <p className="text-lg text-slate-300">{edu.field}</p>
                  </div>
                  <div className="text-right mt-4 md:mt-0">
                    <div className="flex items-center text-slate-300 mb-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                    </div>
                    {edu.gpa && (
                      <div className="text-slate-300 font-mono">
                        <strong>SCORE:</strong> {edu.gpa}
                      </div>
                    )}
                  </div>
                </div>

                {edu.achievements.length > 0 && (
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3 font-mono">ACHIEVEMENTS:</h4>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-slate-300">{achievement}</span>
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

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-900 to-slate-900">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold text-white mb-4 font-mono">INITIATE_CONTACT</h2>
            <p className="text-xl text-red-200 max-w-2xl mx-auto">
              Ready to deploy the ultimate bug hunting solution? Let's eliminate those critical vulnerabilities together.
            </p>
            
            <div className="flex items-center justify-center space-x-6">
              {data.email && (
                <a href={`mailto:${data.email}`} className="p-4 bg-red-500/20 border border-red-500/30 rounded-lg hover:bg-red-500/30 transition-colors">
                  <Mail className="w-6 h-6 text-red-400" />
                </a>
              )}
              {data.linkedin && (
                <a href={data.linkedin as string} className="p-4 bg-red-500/20 border border-red-500/30 rounded-lg hover:bg-red-500/30 transition-colors">
                  <Linkedin className="w-6 h-6 text-red-400" />
                </a>
              )}
              {data.github && (
                <a href={data.github as string} className="p-4 bg-red-500/20 border border-red-500/30 rounded-lg hover:bg-red-500/30 transition-colors">
                  <Github className="w-6 h-6 text-red-400" />
                </a>
              )}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300 font-mono"
            >
              DEPLOY_HUNTER
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-slate-900 border-t border-red-500/20">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-400 text-sm font-mono">
            © {data.name || 'Bug Hunter'} All Rights Reserved. Made with ❤️ by Nexzenova
          </p>
        </div>
      </footer>
    </div>
  )
}

export default BugHunterTemplate
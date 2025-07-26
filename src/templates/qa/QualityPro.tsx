import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { BarChart3, Shield, Target, Menu, X, Mail, Linkedin, Github, ExternalLink, Calendar, MapPin } from 'lucide-react'
import { TemplateData, ProjectData, ExperienceData, EducationData } from '../../App'

interface QualityProProps {
  data: TemplateData
}

function QualityProTemplate({ data }: QualityProProps) {
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
    <div className="min-h-screen bg-white">
      {/* Header */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-slate-900 font-bold text-lg">
                {data.name || 'QA Professional'}
              </span>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-slate-600 hover:text-blue-600 transition-colors">About</a>
              <a href="#experience" className="text-slate-600 hover:text-blue-600 transition-colors">Experience</a>
              <a href="#projects" className="text-slate-600 hover:text-blue-600 transition-colors">Projects</a>
              <a href="#education" className="text-slate-600 hover:text-blue-600 transition-colors">Education</a>
              <a href="#contact" className="text-slate-600 hover:text-blue-600 transition-colors">Contact</a>
            </nav>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
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
              className="md:hidden border-t border-slate-200 py-4"
            >
              <nav className="flex flex-col space-y-4">
                <a href="#about" className="text-slate-600 hover:text-blue-600 transition-colors">About</a>
                <a href="#experience" className="text-slate-600 hover:text-blue-600 transition-colors">Experience</a>
                <a href="#projects" className="text-slate-600 hover:text-blue-600 transition-colors">Projects</a>
                <a href="#education" className="text-slate-600 hover:text-blue-600 transition-colors">Education</a>
                <a href="#contact" className="text-slate-600 hover:text-blue-600 transition-colors">Contact</a>
              </nav>
            </motion.div>
          )}
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4">
                  {data.name || 'Your Name'}
                </h1>
                <p className="text-2xl text-blue-600 font-semibold mb-6">
                  {data.title || 'Quality Assurance Professional'}
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {data.bio || 'Dedicated QA professional with expertise in ensuring software quality through comprehensive testing strategies and methodologies.'}
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Hire Me
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  Download Resume
                </motion.button>
              </div>

              <div className="flex items-center space-x-6">
                {data.email && (
                  <a href={`mailto:${data.email}`} className="text-slate-600 hover:text-blue-600 transition-colors">
                    <Mail className="w-6 h-6" />
                  </a>
                )}
                {data.linkedin && (
                  <a href={data.linkedin as string} className="text-slate-600 hover:text-blue-600 transition-colors">
                    <Linkedin className="w-6 h-6" />
                  </a>
                )}
                {data.github && (
                  <a href={data.github as string} className="text-slate-600 hover:text-blue-600 transition-colors">
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
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">{experience.length}+</div>
                    <div className="text-sm text-slate-600">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600">{projects.length}+</div>
                    <div className="text-sm text-slate-600">Projects Tested</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">99%</div>
                    <div className="text-sm text-slate-600">Bug Detection</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600">{skills.length}+</div>
                    <div className="text-sm text-slate-600">QA Tools</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">About Me</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              {data.about || 'Passionate about delivering high-quality software through meticulous testing and quality assurance practices.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-blue-50 rounded-2xl p-8 text-center"
            >
              <BarChart3 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-4">Test Analytics</h3>
              <p className="text-slate-600">
                Data-driven testing approach with comprehensive metrics and reporting
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-purple-50 rounded-2xl p-8 text-center"
            >
              <Shield className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-4">Quality Assurance</h3>
              <p className="text-slate-600">
                Comprehensive QA strategies ensuring robust and reliable software delivery
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-green-50 rounded-2xl p-8 text-center"
            >
              <Target className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-4">Process Optimization</h3>
              <p className="text-slate-600">
                Streamlining testing processes for maximum efficiency and coverage
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Technical Skills</h2>
            <p className="text-lg text-slate-600">
              Comprehensive expertise in quality assurance tools and methodologies
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="px-6 py-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 border border-slate-200"
              >
                <span className="text-slate-700 font-medium">{skill}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Professional Experience</h2>
            <p className="text-lg text-slate-600">
              My journey in quality assurance and testing
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
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{exp.position}</h3>
                    <p className="text-xl text-blue-600 font-semibold">{exp.company}</p>
                  </div>
                  <div className="text-right mt-4 md:mt-0">
                    <div className="flex items-center text-slate-600 mb-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      {formatDate(exp.startDate)} - {exp.endDate ? formatDate(exp.endDate) : 'Present'}
                    </div>
                    <div className="flex items-center text-slate-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      {exp.location}
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-slate-900 mb-3">Key Responsibilities:</h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-600">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-slate-900 mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
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
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Testing Projects</h2>
            <p className="text-lg text-slate-600">
              Showcase of quality assurance projects and achievements
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
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {project.imageUrl && (
                  <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-slate-900">{project.title}</h3>
                    <div className="flex space-x-2">
                      {project.githubUrl && (
                        <a href={project.githubUrl} className="text-slate-600 hover:text-blue-600 transition-colors">
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a href={project.liveUrl} className="text-slate-600 hover:text-blue-600 transition-colors">
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-slate-600 mb-4">{project.description}</p>

                  <div className="mb-4">
                    <div className="flex items-center text-sm text-slate-500 mb-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      {formatDate(project.startDate)} - {formatDate(project.endDate)}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-slate-900 mb-2">Key Responsibilities:</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      {project.responsibilities.slice(0, 3).map((responsibility, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-1 h-1 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
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
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Education</h2>
            <p className="text-lg text-slate-600">
              Academic background and continuous learning
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
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{edu.degree}</h3>
                    <p className="text-xl text-purple-600 font-semibold mb-1">{edu.institution}</p>
                    <p className="text-lg text-slate-600">{edu.field}</p>
                  </div>
                  <div className="text-right mt-4 md:mt-0">
                    <div className="flex items-center text-slate-600 mb-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                    </div>
                    {edu.gpa && (
                      <div className="text-slate-600">
                        <strong>GPA:</strong> {edu.gpa}
                      </div>
                    )}
                  </div>
                </div>

                {edu.achievements.length > 0 && (
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-3">Achievements:</h4>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-slate-600">{achievement}</span>
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
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Let's Ensure Quality Together</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Ready to deliver exceptional software quality? Let's discuss how I can help your team achieve testing excellence.
            </p>
            
            <div className="flex items-center justify-center space-x-6">
              {data.email && (
                <a href={`mailto:${data.email}`} className="p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                  <Mail className="w-6 h-6 text-white" />
                </a>
              )}
              {data.linkedin && (
                <a href={data.linkedin as string} className="p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                  <Linkedin className="w-6 h-6 text-white" />
                </a>
              )}
              {data.github && (
                <a href={data.github as string} className="p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                  <Github className="w-6 h-6 text-white" />
                </a>
              )}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-400 text-sm">
            © {data.name || 'Your Name'} All Rights Reserved. Made with ❤️ by Nexzenova
          </p>
        </div>
      </footer>
    </div>
  )
}

export default QualityProTemplate
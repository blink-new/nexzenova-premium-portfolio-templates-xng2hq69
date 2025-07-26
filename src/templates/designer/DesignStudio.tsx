import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Palette, Layers, Sparkles, Menu, X, Mail, Linkedin, Github, ExternalLink, Calendar, MapPin, Eye } from 'lucide-react'
import { TemplateData, ProjectData, ExperienceData, EducationData } from '../../App'

interface DesignStudioProps {
  data: TemplateData
}

function DesignStudioTemplate({ data }: DesignStudioProps) {
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
        className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-purple-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                <Palette className="w-6 h-6 text-white" />
              </div>
              <span className="text-slate-900 font-bold text-lg">
                {data.name || 'Design Studio'}
              </span>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-slate-600 hover:text-purple-600 transition-colors">About</a>
              <a href="#work" className="text-slate-600 hover:text-purple-600 transition-colors">Work</a>
              <a href="#experience" className="text-slate-600 hover:text-purple-600 transition-colors">Experience</a>
              <a href="#education" className="text-slate-600 hover:text-purple-600 transition-colors">Education</a>
              <a href="#contact" className="text-slate-600 hover:text-purple-600 transition-colors">Contact</a>
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
              className="md:hidden border-t border-purple-200 py-4"
            >
              <nav className="flex flex-col space-y-4">
                <a href="#about" className="text-slate-600 hover:text-purple-600 transition-colors">About</a>
                <a href="#work" className="text-slate-600 hover:text-purple-600 transition-colors">Work</a>
                <a href="#experience" className="text-slate-600 hover:text-purple-600 transition-colors">Experience</a>
                <a href="#education" className="text-slate-600 hover:text-purple-600 transition-colors">Education</a>
                <a href="#contact" className="text-slate-600 hover:text-purple-600 transition-colors">Contact</a>
              </nav>
            </motion.div>
          )}
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-pink-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-purple-100 rounded-full text-purple-700 font-medium">
                <Sparkles className="w-4 h-4" />
                <span>Creative Designer</span>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                {data.name || 'Creative Studio'}
              </h1>
              
              <p className="text-2xl md:text-3xl text-slate-700 font-light max-w-4xl mx-auto">
                {data.title || 'UI/UX Designer & Creative Director'}
              </p>
              
              <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                {data.bio || 'Crafting exceptional digital experiences through innovative design, user-centered thinking, and creative storytelling that connects brands with their audiences.'}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap justify-center gap-6"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                View My Work
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-purple-600 text-purple-600 rounded-2xl font-semibold text-lg hover:bg-purple-600 hover:text-white transition-all duration-300"
              >
                Let's Collaborate
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex justify-center space-x-6 pt-8"
            >
              {data.email && (
                <a href={`mailto:${data.email}`} className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl text-slate-600 hover:text-purple-600 transition-all duration-300">
                  <Mail className="w-6 h-6" />
                </a>
              )}
              {data.linkedin && (
                <a href={data.linkedin as string} className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl text-slate-600 hover:text-purple-600 transition-all duration-300">
                  <Linkedin className="w-6 h-6" />
                </a>
              )}
              {data.github && (
                <a href={data.github as string} className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl text-slate-600 hover:text-purple-600 transition-all duration-300">
                  <Github className="w-6 h-6" />
                </a>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-5xl font-bold text-slate-900 mb-6">
                  Design is not just what it looks like — design is how it works.
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {data.about || 'I believe in creating designs that not only look beautiful but also solve real problems and create meaningful connections between users and products. Every pixel has a purpose, every interaction tells a story.'}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
                  <div className="text-3xl font-bold text-purple-600 mb-2">{projects.length}+</div>
                  <div className="text-slate-600">Projects Designed</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-orange-50 rounded-2xl">
                  <div className="text-3xl font-bold text-pink-600 mb-2">{experience.length}+</div>
                  <div className="text-slate-600">Years Experience</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Design Philosophy</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Eye className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">User-Centered</h4>
                      <p className="text-slate-600 text-sm">Every design decision is driven by user needs and behaviors</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Layers className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Systematic</h4>
                      <p className="text-slate-600 text-sm">Building scalable design systems that grow with products</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Innovative</h4>
                      <p className="text-slate-600 text-sm">Pushing creative boundaries while maintaining usability</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Creative Toolkit</h2>
            <p className="text-lg text-slate-600">
              Tools and technologies I use to bring ideas to life
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{skill.charAt(0)}</span>
                </div>
                <span className="text-slate-700 font-medium">{skill}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Work/Projects Section */}
      <section id="work" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Featured Work</h2>
            <p className="text-lg text-slate-600">
              A selection of projects that showcase my design thinking and creative process
            </p>
          </div>

          <div className="space-y-16">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="inline-flex items-center space-x-2 px-3 py-1 bg-purple-100 rounded-full text-purple-700 text-sm font-medium">
                    <span>Project {index + 1}</span>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-slate-900">{project.title}</h3>
                  
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Key Contributions:</h4>
                      <ul className="space-y-1">
                        {project.responsibilities.slice(0, 3).map((responsibility, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-slate-600">{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Tools Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <span key={idx} className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-sm rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 pt-4">
                      {project.liveUrl && (
                        <a 
                          href={project.liveUrl}
                          className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                        >
                          <Eye className="w-4 h-4" />
                          <span>View Project</span>
                        </a>
                      )}
                      {project.githubUrl && (
                        <a 
                          href={project.githubUrl}
                          className="inline-flex items-center space-x-2 px-6 py-3 border-2 border-purple-600 text-purple-600 rounded-xl font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300"
                        >
                          <Github className="w-4 h-4" />
                          <span>View Code</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                    <div className="relative bg-white rounded-3xl p-8 shadow-xl">
                      {project.imageUrl ? (
                        <img 
                          src={project.imageUrl} 
                          alt={project.title}
                          className="w-full h-64 object-cover rounded-2xl"
                        />
                      ) : (
                        <div className="w-full h-64 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center">
                          <Palette className="w-16 h-16 text-purple-400" />
                        </div>
                      )}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Professional Journey</h2>
            <p className="text-lg text-slate-600">
              My career path in design and creative leadership
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
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{exp.position}</h3>
                    <p className="text-xl text-purple-600 font-semibold">{exp.company}</p>
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
                  <h4 className="text-lg font-semibold text-slate-900 mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-600">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-slate-900 mb-3">Tools & Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-sm rounded-full">
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
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Education & Learning</h2>
            <p className="text-lg text-slate-600">
              Continuous learning and formal education that shaped my design thinking
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
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
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
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-5xl font-bold text-white mb-4">
              Let's Create Something Amazing Together
            </h2>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              Ready to bring your vision to life? I'm always excited to work on new projects and collaborate with passionate teams.
            </p>
            
            <div className="flex items-center justify-center space-x-6">
              {data.email && (
                <a href={`mailto:${data.email}`} className="p-4 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                  <Mail className="w-6 h-6 text-white" />
                </a>
              )}
              {data.linkedin && (
                <a href={data.linkedin as string} className="p-4 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                  <Linkedin className="w-6 h-6 text-white" />
                </a>
              )}
              {data.github && (
                <a href={data.github as string} className="p-4 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                  <Github className="w-6 h-6 text-white" />
                </a>
              )}
            </div>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-purple-600 rounded-2xl font-semibold text-lg hover:shadow-xl transition-all duration-300"
            >
              Start a Project
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-400 text-sm">
            © {data.name || 'Design Studio'} All Rights Reserved. Made with ❤️ by Nexzenova
          </p>
        </div>
      </footer>
    </div>
  )
}

export default DesignStudioTemplate
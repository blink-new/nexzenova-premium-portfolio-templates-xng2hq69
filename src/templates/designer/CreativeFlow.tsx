import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Zap, Layers, Sparkles, Menu, X, Mail, Linkedin, Github, ExternalLink, Calendar, MapPin, Play } from 'lucide-react'
import { TemplateData, ProjectData, ExperienceData, EducationData } from '../../App'

interface CreativeFlowProps {
  data: TemplateData
}

function CreativeFlowTemplate({ data }: CreativeFlowProps) {
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Header */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-white font-bold text-lg">
                {data.name || 'CreativeFlow'}
              </span>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-white/70 hover:text-cyan-400 transition-colors">About</a>
              <a href="#work" className="text-white/70 hover:text-cyan-400 transition-colors">Work</a>
              <a href="#experience" className="text-white/70 hover:text-cyan-400 transition-colors">Experience</a>
              <a href="#education" className="text-white/70 hover:text-cyan-400 transition-colors">Education</a>
              <a href="#contact" className="text-white/70 hover:text-cyan-400 transition-colors">Contact</a>
            </nav>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              {isMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-white/10 py-4"
            >
              <nav className="flex flex-col space-y-4">
                <a href="#about" className="text-white/70 hover:text-cyan-400 transition-colors">About</a>
                <a href="#work" className="text-white/70 hover:text-cyan-400 transition-colors">Work</a>
                <a href="#experience" className="text-white/70 hover:text-cyan-400 transition-colors">Experience</a>
                <a href="#education" className="text-white/70 hover:text-cyan-400 transition-colors">Education</a>
                <a href="#contact" className="text-white/70 hover:text-cyan-400 transition-colors">Contact</a>
              </nav>
            </motion.div>
          )}
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <motion.div
                animate={{ 
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm rounded-full border border-white/20"
              >
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">Creative Director</span>
              </motion.div>
              
              <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                {data.name || 'Creative Flow'}
              </h1>
              
              <p className="text-2xl md:text-3xl text-white/80 font-light max-w-4xl mx-auto">
                {data.title || 'Designing the Future of Digital Experiences'}
              </p>
              
              <p className="text-lg text-white/60 max-w-3xl mx-auto leading-relaxed">
                {data.bio || 'Pushing the boundaries of creativity through innovative design, immersive experiences, and cutting-edge technology that transforms ideas into extraordinary digital realities.'}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center gap-6"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-2xl font-semibold text-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
              >
                <div className="flex items-center space-x-2">
                  <Play className="w-5 h-5" />
                  <span>View Showreel</span>
                </div>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-2xl font-semibold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300"
              >
                Explore Work
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex justify-center space-x-6 pt-8"
            >
              {data.email && (
                <motion.a 
                  href={`mailto:${data.email}`} 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="p-4 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 text-white transition-all duration-300"
                >
                  <Mail className="w-6 h-6" />
                </motion.a>
              )}
              {data.linkedin && (
                <motion.a 
                  href={data.linkedin as string} 
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  className="p-4 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 text-white transition-all duration-300"
                >
                  <Linkedin className="w-6 h-6" />
                </motion.a>
              )}
              {data.github && (
                <motion.a 
                  href={data.github as string} 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="p-4 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 text-white transition-all duration-300"
                >
                  <Github className="w-6 h-6" />
                </motion.a>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-5xl font-bold text-white mb-6">
                  Creativity Meets Innovation
                </h2>
                <p className="text-lg text-white/70 leading-relaxed">
                  {data.about || 'I believe in the transformative power of design to create meaningful connections and drive positive change. My work spans across digital experiences, brand identity, and interactive installations that challenge conventional thinking.'}
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"
                >
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{projects.length}+</div>
                  <div className="text-white/60 text-sm">Creative Projects</div>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"
                >
                  <div className="text-3xl font-bold text-purple-400 mb-2">{experience.length}+</div>
                  <div className="text-white/60 text-sm">Years Experience</div>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"
                >
                  <div className="text-3xl font-bold text-pink-400 mb-2">∞</div>
                  <div className="text-white/60 text-sm">Ideas Generated</div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6">Creative Process</h3>
                <div className="space-y-6">
                  <motion.div 
                    whileHover={{ x: 10 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Discover</h4>
                      <p className="text-white/60 text-sm">Understanding the challenge and exploring possibilities</p>
                    </div>
                  </motion.div>
                  <motion.div 
                    whileHover={{ x: 10 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Ideate</h4>
                      <p className="text-white/60 text-sm">Generating innovative concepts and creative solutions</p>
                    </div>
                  </motion.div>
                  <motion.div 
                    whileHover={{ x: 10 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Create</h4>
                      <p className="text-white/60 text-sm">Bringing ideas to life through design and technology</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Creative Arsenal</h2>
            <p className="text-lg text-white/60">
              Tools and technologies that fuel my creative process
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
                whileHover={{ 
                  scale: 1.1, 
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.3 }
                }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{skill.charAt(0)}</span>
                </div>
                <span className="text-white/80 font-medium text-sm">{skill}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Featured Creations</h2>
            <p className="text-lg text-white/60">
              A showcase of innovative projects and creative solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="relative">
                    {project.imageUrl ? (
                      <img 
                        src={project.imageUrl} 
                        alt={project.title}
                        className="w-full h-48 object-cover"
                      />
                    ) : (
                      <div className="w-full h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                        <Layers className="w-16 h-16 text-white/40" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex space-x-2">
                        {project.liveUrl && (
                          <a href={project.liveUrl} className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                            <ExternalLink className="w-4 h-4 text-white" />
                          </a>
                        )}
                        {project.githubUrl && (
                          <a href={project.githubUrl} className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                            <Github className="w-4 h-4 text-white" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                      <div className="text-xs text-white/40">
                        {formatDate(project.startDate)}
                      </div>
                    </div>

                    <p className="text-white/60 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                      <ul className="text-xs text-white/60 space-y-1">
                        {project.responsibilities.slice(0, 2).map((responsibility, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="w-1 h-1 bg-cyan-400 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                            {responsibility}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, idx) => (
                        <span key={idx} className="px-2 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 text-xs rounded-full border border-cyan-400/20">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Creative Journey</h2>
            <p className="text-lg text-white/60">
              My professional evolution in design and creative leadership
            </p>
          </div>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.position}</h3>
                    <p className="text-xl text-cyan-400 font-semibold">{exp.company}</p>
                  </div>
                  <div className="text-right mt-4 md:mt-0">
                    <div className="flex items-center text-white/60 mb-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      {formatDate(exp.startDate)} - {exp.endDate ? formatDate(exp.endDate) : 'Present'}
                    </div>
                    <div className="flex items-center text-white/60">
                      <MapPin className="w-4 h-4 mr-2" />
                      {exp.location}
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Creative Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-white/70">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Creative Tools:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 text-sm rounded-full border border-cyan-400/20">
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
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Learning & Growth</h2>
            <p className="text-lg text-white/60">
              Educational foundation and continuous learning journey
            </p>
          </div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-purple-400/30 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                    <p className="text-xl text-purple-400 font-semibold mb-1">{edu.institution}</p>
                    <p className="text-lg text-white/70">{edu.field}</p>
                  </div>
                  <div className="text-right mt-4 md:mt-0">
                    <div className="flex items-center text-white/60 mb-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                    </div>
                    {edu.gpa && (
                      <div className="text-white/60">
                        <strong>GPA:</strong> {edu.gpa}
                      </div>
                    )}
                  </div>
                </div>

                {edu.achievements.length > 0 && (
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Achievements:</h4>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-white/70">{achievement}</span>
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
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mb-4">
              Let's Create Magic Together
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Ready to push creative boundaries and build something extraordinary? 
              Let's collaborate and bring your wildest ideas to life.
            </p>
            
            <div className="flex items-center justify-center space-x-6">
              {data.email && (
                <motion.a 
                  href={`mailto:${data.email}`} 
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className="p-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-full border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300"
                >
                  <Mail className="w-6 h-6 text-cyan-400" />
                </motion.a>
              )}
              {data.linkedin && (
                <motion.a 
                  href={data.linkedin as string} 
                  whileHover={{ scale: 1.1, rotate: -10 }}
                  className="p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-full border border-purple-400/30 hover:border-purple-400/60 transition-all duration-300"
                >
                  <Linkedin className="w-6 h-6 text-purple-400" />
                </motion.a>
              )}
              {data.github && (
                <motion.a 
                  href={data.github as string} 
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className="p-4 bg-gradient-to-r from-pink-500/20 to-orange-500/20 backdrop-blur-sm rounded-full border border-pink-400/30 hover:border-pink-400/60 transition-all duration-300"
                >
                  <Github className="w-6 h-6 text-pink-400" />
                </motion.a>
              )}
            </div>

            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-2xl font-semibold text-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
            >
              Start Creative Journey
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-black/20 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-white/40 text-sm">
            © {data.name || 'CreativeFlow'} All Rights Reserved. Made with ❤️ by Nexzenova
          </p>
        </div>
      </footer>
    </div>
  )
}

export default CreativeFlowTemplate
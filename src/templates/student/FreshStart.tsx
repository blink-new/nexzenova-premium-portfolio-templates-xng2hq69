import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Target, Rocket, Menu, X, Mail, Linkedin, Github, ExternalLink, Calendar, MapPin, BookOpen, Award } from 'lucide-react'
import { TemplateData, ProjectData, ExperienceData, EducationData } from '../../App'

interface FreshStartProps {
  data: TemplateData
}

function FreshStartTemplate({ data }: FreshStartProps) {
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
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50">
      {/* Header */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-orange-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <span className="text-slate-900 font-bold text-lg">
                {data.name || 'Fresh Start'}
              </span>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-slate-600 hover:text-orange-600 transition-colors">About</a>
              <a href="#education" className="text-slate-600 hover:text-orange-600 transition-colors">Education</a>
              <a href="#projects" className="text-slate-600 hover:text-orange-600 transition-colors">Projects</a>
              <a href="#goals" className="text-slate-600 hover:text-orange-600 transition-colors">Goals</a>
              <a href="#contact" className="text-slate-600 hover:text-orange-600 transition-colors">Contact</a>
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
              className="md:hidden border-t border-orange-200 py-4"
            >
              <nav className="flex flex-col space-y-4">
                <a href="#about" className="text-slate-600 hover:text-orange-600 transition-colors">About</a>
                <a href="#education" className="text-slate-600 hover:text-orange-600 transition-colors">Education</a>
                <a href="#projects" className="text-slate-600 hover:text-orange-600 transition-colors">Projects</a>
                <a href="#goals" className="text-slate-600 hover:text-orange-600 transition-colors">Goals</a>
                <a href="#contact" className="text-slate-600 hover:text-orange-600 transition-colors">Contact</a>
              </nav>
            </motion.div>
          )}
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-yellow-100 via-orange-100 to-red-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div>
                <motion.div
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-yellow-200 to-orange-200 rounded-full text-orange-800 font-medium mb-6"
                >
                  <Rocket className="w-4 h-4" />
                  <span>Ready to Launch My Career!</span>
                </motion.div>
                
                <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4">
                  Hi, I'm {data.name || 'Your Name'}!
                </h1>
                <p className="text-2xl text-orange-600 font-semibold mb-6">
                  {data.title || 'Computer Science Student & Aspiring Developer'}
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  {data.bio || 'Passionate about technology and eager to make a positive impact through code. Currently pursuing my degree while building exciting projects and learning new skills every day!'}
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-2xl font-semibold hover:shadow-lg transition-all duration-300"
                >
                  View My Work
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border-2 border-orange-500 text-orange-600 rounded-2xl font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300"
                >
                  Download Resume
                </motion.button>
              </div>

              <div className="flex items-center space-x-6">
                {data.email && (
                  <a href={`mailto:${data.email}`} className="text-slate-600 hover:text-orange-600 transition-colors">
                    <Mail className="w-6 h-6" />
                  </a>
                )}
                {data.linkedin && (
                  <a href={data.linkedin as string} className="text-slate-600 hover:text-orange-600 transition-colors">
                    <Linkedin className="w-6 h-6" />
                  </a>
                )}
                {data.github && (
                  <a href={data.github as string} className="text-slate-600 hover:text-orange-600 transition-colors">
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
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-orange-200">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Quick Stats</h3>
                  <p className="text-slate-600">My journey so far</p>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="text-center p-4 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl"
                  >
                    <div className="text-3xl font-bold text-yellow-600 mb-2">{education.length}</div>
                    <div className="text-sm text-slate-600">Education</div>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="text-center p-4 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl"
                  >
                    <div className="text-3xl font-bold text-orange-600 mb-2">{projects.length}</div>
                    <div className="text-sm text-slate-600">Projects</div>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="text-center p-4 bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl"
                  >
                    <div className="text-3xl font-bold text-red-600 mb-2">{skills.length}</div>
                    <div className="text-sm text-slate-600">Skills</div>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="text-center p-4 bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl"
                  >
                    <div className="text-3xl font-bold text-pink-600 mb-2">∞</div>
                    <div className="text-sm text-slate-600">Enthusiasm</div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">About Me</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              {data.about || 'I\'m a passionate student with a love for technology and a drive to create meaningful solutions. Always eager to learn, collaborate, and take on new challenges!'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 text-center border border-yellow-200"
            >
              <BookOpen className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-4">Always Learning</h3>
              <p className="text-slate-600">
                Constantly expanding my knowledge through courses, tutorials, and hands-on projects
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 text-center border border-orange-200"
            >
              <Target className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-4">Goal-Oriented</h3>
              <p className="text-slate-600">
                Setting clear objectives and working systematically to achieve them
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-8 text-center border border-red-200"
            >
              <Rocket className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-4">Future-Ready</h3>
              <p className="text-slate-600">
                Preparing for tomorrow's challenges with today's dedication and hard work
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Skills & Technologies</h2>
            <p className="text-lg text-slate-600">
              Technologies I'm learning and working with
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-200"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{skill.charAt(0)}</span>
                </div>
                <span className="text-slate-700 font-medium">{skill}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Education</h2>
            <p className="text-lg text-slate-600">
              My academic journey and achievements
            </p>
          </div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-yellow-200"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">{edu.degree}</h3>
                      <p className="text-xl text-orange-600 font-semibold mb-1">{edu.institution}</p>
                      <p className="text-lg text-slate-600">{edu.field}</p>
                    </div>
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
                    <h4 className="text-lg font-semibold text-slate-900 mb-3 flex items-center">
                      <Award className="w-5 h-5 mr-2 text-yellow-600" />
                      Achievements & Activities:
                    </h4>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
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

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">My Projects</h2>
            <p className="text-lg text-slate-600">
              Personal and academic projects that showcase my learning journey
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
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-200"
              >
                {project.imageUrl && (
                  <div className="h-48 bg-gradient-to-br from-yellow-100 to-orange-100 flex items-center justify-center">
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
                        <a href={project.githubUrl} className="text-slate-600 hover:text-orange-600 transition-colors">
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a href={project.liveUrl} className="text-slate-600 hover:text-orange-600 transition-colors">
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
                    <h4 className="text-sm font-semibold text-slate-900 mb-2">What I Learned:</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      {project.responsibilities.slice(0, 3).map((responsibility, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-1 h-1 bg-orange-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-700 text-xs rounded-full border border-orange-200">
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

      {/* Experience Section (if any) */}
      {experience.length > 0 && (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Experience</h2>
              <p className="text-lg text-slate-600">
                Internships, part-time work, and volunteer experiences
              </p>
            </div>

            <div className="space-y-8">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-r from-orange-50 to-red-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-200"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">{exp.position}</h3>
                      <p className="text-xl text-orange-600 font-semibold">{exp.company}</p>
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
                    <h4 className="text-lg font-semibold text-slate-900 mb-3">Key Contributions:</h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-slate-600">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-700 text-sm rounded-full border border-orange-200">
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
      )}

      {/* Goals Section */}
      <section id="goals" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Future Goals</h2>
            <p className="text-lg text-slate-600">
              Where I see myself heading and what I hope to achieve
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-red-200"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Short-term Goals</h3>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Complete my degree with honors
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Land a summer internship
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Build more complex projects
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-pink-200"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mb-6">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Career Aspirations</h3>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Full-stack developer role
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Work at a tech startup
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Contribute to open source
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-200"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mb-6">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Learning Goals</h3>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Master cloud technologies
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Learn machine learning
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Get industry certifications
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Let's Connect!</h2>
            <p className="text-xl text-yellow-100 max-w-2xl mx-auto">
              I'm always excited to meet new people, learn from experienced professionals, and explore opportunities to grow and contribute.
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
              className="px-8 py-4 bg-white text-orange-600 rounded-2xl font-semibold text-lg hover:shadow-xl transition-all duration-300"
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
            © {data.name || 'Fresh Start'} All Rights Reserved. Made with ❤️ by Nexzenova
          </p>
        </div>
      </footer>
    </div>
  )
}

export default FreshStartTemplate
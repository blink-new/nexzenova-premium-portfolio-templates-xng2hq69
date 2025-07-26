import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Grid, Minimize2, Square, Menu, X, Mail, Linkedin, Github, ExternalLink, Calendar, MapPin } from 'lucide-react'
import { TemplateData, ProjectData, ExperienceData, EducationData } from '../../App'

interface PixelPerfectProps {
  data: TemplateData
}

function PixelPerfectTemplate({ data }: PixelPerfectProps) {
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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-black rounded-sm flex items-center justify-center">
                <Grid className="w-5 h-5 text-white" />
              </div>
              <span className="text-gray-900 font-medium text-lg">
                {data.name || 'PixelPerfect'}
              </span>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <a href="#work" className="text-gray-600 hover:text-black transition-colors text-sm font-medium">Work</a>
              <a href="#about" className="text-gray-600 hover:text-black transition-colors text-sm font-medium">About</a>
              <a href="#experience" className="text-gray-600 hover:text-black transition-colors text-sm font-medium">Experience</a>
              <a href="#contact" className="text-gray-600 hover:text-black transition-colors text-sm font-medium">Contact</a>
            </nav>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-sm hover:bg-gray-100 transition-colors"
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
              className="md:hidden border-t border-gray-200 py-4"
            >
              <nav className="flex flex-col space-y-4">
                <a href="#work" className="text-gray-600 hover:text-black transition-colors text-sm font-medium">Work</a>
                <a href="#about" className="text-gray-600 hover:text-black transition-colors text-sm font-medium">About</a>
                <a href="#experience" className="text-gray-600 hover:text-black transition-colors text-sm font-medium">Experience</a>
                <a href="#contact" className="text-gray-600 hover:text-black transition-colors text-sm font-medium">Contact</a>
              </nav>
            </motion.div>
          )}
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-7xl md:text-9xl font-light text-gray-900 tracking-tight">
                {data.name?.split(' ')[0] || 'Pixel'}
              </h1>
              <h1 className="text-7xl md:text-9xl font-light text-gray-400 tracking-tight -mt-4">
                {data.name?.split(' ')[1] || 'Perfect'}
              </h1>
            </div>
            
            <div className="max-w-2xl">
              <p className="text-xl text-gray-600 font-light leading-relaxed">
                {data.title || 'Product Designer'}
              </p>
              <p className="text-lg text-gray-500 mt-4 leading-relaxed">
                {data.bio || 'Crafting minimal, functional, and beautiful digital experiences with attention to every pixel and interaction detail.'}
              </p>
            </div>

            <div className="flex items-center space-x-6 pt-8">
              {data.email && (
                <a href={`mailto:${data.email}`} className="text-gray-400 hover:text-black transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              )}
              {data.linkedin && (
                <a href={data.linkedin as string} className="text-gray-400 hover:text-black transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
              {data.github && (
                <a href={data.github as string} className="text-gray-400 hover:text-black transition-colors">
                  <Github className="w-5 h-5" />
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl font-light text-gray-900 mb-4">Selected Work</h2>
            <div className="w-16 h-px bg-black"></div>
          </motion.div>

          <div className="space-y-32">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7">
                    <div className="aspect-[4/3] bg-white rounded-sm overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-500">
                      {project.imageUrl ? (
                        <img 
                          src={project.imageUrl} 
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                          <Square className="w-16 h-16 text-gray-300" />
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="lg:col-span-5 space-y-6">
                    <div>
                      <div className="text-sm text-gray-500 font-medium mb-2">
                        {formatDate(project.startDate)} — {formatDate(project.endDate)}
                      </div>
                      <h3 className="text-3xl font-light text-gray-900 mb-4">{project.title}</h3>
                      <p className="text-gray-600 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-gray-900 mb-3">Scope</h4>
                      <ul className="space-y-1">
                        {project.responsibilities.slice(0, 3).map((responsibility, idx) => (
                          <li key={idx} className="text-sm text-gray-600">
                            {responsibility}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-gray-900 mb-3">Tools</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <span key={idx} className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 pt-4">
                      {project.liveUrl && (
                        <a 
                          href={project.liveUrl}
                          className="inline-flex items-center space-x-2 text-sm font-medium text-black hover:text-gray-600 transition-colors"
                        >
                          <span>View Project</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a 
                          href={project.githubUrl}
                          className="inline-flex items-center space-x-2 text-sm font-medium text-gray-600 hover:text-black transition-colors"
                        >
                          <span>Source</span>
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-4xl font-light text-gray-900 mb-4">About</h2>
                <div className="w-16 h-px bg-black mb-8"></div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {data.about || 'I believe in the power of simplicity and the importance of every detail. My approach combines strategic thinking with meticulous execution to create products that are both beautiful and functional.'}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-light text-gray-900 mb-2">{projects.length}+</div>
                  <div className="text-sm text-gray-600">Projects</div>
                </div>
                <div>
                  <div className="text-3xl font-light text-gray-900 mb-2">{experience.length}+</div>
                  <div className="text-sm text-gray-600">Years</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-xl font-light text-gray-900 mb-6">Capabilities</h3>
                <div className="grid grid-cols-2 gap-4">
                  {skills.map((skill, index) => (
                    <div key={index} className="text-sm text-gray-600">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-light text-gray-900 mb-6">Principles</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">Simplicity</h4>
                    <p className="text-sm text-gray-600">Remove the unnecessary to reveal the essential</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">Function</h4>
                    <p className="text-sm text-gray-600">Form follows function, always</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">Detail</h4>
                    <p className="text-sm text-gray-600">Perfection is achieved when there is nothing left to take away</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl font-light text-gray-900 mb-4">Experience</h2>
            <div className="w-16 h-px bg-black"></div>
          </motion.div>

          <div className="space-y-12">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border-b border-gray-200 pb-12 last:border-b-0"
              >
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div className="md:col-span-1">
                    <div className="text-sm text-gray-500 mb-2">
                      {formatDate(exp.startDate)} — {exp.endDate ? formatDate(exp.endDate) : 'Present'}
                    </div>
                    <div className="text-sm text-gray-500">
                      {exp.location}
                    </div>
                  </div>

                  <div className="md:col-span-3 space-y-4">
                    <div>
                      <h3 className="text-xl font-light text-gray-900 mb-1">{exp.position}</h3>
                      <p className="text-gray-600">{exp.company}</p>
                    </div>

                    <div>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="text-sm text-gray-600 leading-relaxed">
                            {responsibility}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span key={idx} className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-sm">
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

      {/* Education Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl font-light text-gray-900 mb-4">Education</h2>
            <div className="w-16 h-px bg-black"></div>
          </motion.div>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border-b border-gray-200 pb-12 last:border-b-0"
              >
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div className="md:col-span-1">
                    <div className="text-sm text-gray-500 mb-2">
                      {formatDate(edu.startDate)} — {formatDate(edu.endDate)}
                    </div>
                    {edu.gpa && (
                      <div className="text-sm text-gray-500">
                        GPA: {edu.gpa}
                      </div>
                    )}
                  </div>

                  <div className="md:col-span-3 space-y-4">
                    <div>
                      <h3 className="text-xl font-light text-gray-900 mb-1">{edu.degree}</h3>
                      <p className="text-gray-600 mb-1">{edu.institution}</p>
                      <p className="text-sm text-gray-500">{edu.field}</p>
                    </div>

                    {edu.achievements.length > 0 && (
                      <div>
                        <ul className="space-y-1">
                          {edu.achievements.map((achievement, idx) => (
                            <li key={idx} className="text-sm text-gray-600">
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <h2 className="text-4xl font-light text-gray-900">Let's Work Together</h2>
            
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              I'm always interested in new opportunities and collaborations. 
              Let's discuss how we can create something exceptional together.
            </p>

            <div className="flex items-center justify-center space-x-8">
              {data.email && (
                <a 
                  href={`mailto:${data.email}`} 
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  <Mail className="w-6 h-6" />
                </a>
              )}
              {data.linkedin && (
                <a 
                  href={data.linkedin as string} 
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              )}
              {data.github && (
                <a 
                  href={data.github as string} 
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
              )}
            </div>

            <motion.a
              href={`mailto:${data.email || 'hello@example.com'}`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-3 bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm text-gray-500">
            © {data.name || 'PixelPerfect'} All Rights Reserved. Made with ❤️ by Nexzenova
          </p>
        </div>
      </footer>
    </div>
  )
}

export default PixelPerfectTemplate
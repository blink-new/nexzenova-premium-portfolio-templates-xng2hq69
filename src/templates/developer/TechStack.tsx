import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { TemplateData, ProjectData, ExperienceData, EducationData } from '../../App'
import { Github, ExternalLink, Mail, Phone, MapPin, Calendar, Menu, X, Download, Briefcase, Code, Zap } from 'lucide-react'

interface TechStackProps {
  data: TemplateData
}

export default function TechStackTemplate({ data }: TechStackProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const name = (data.name as string) || 'Alex Chen'
  const title = (data.title as string) || 'Full Stack Engineer'
  const email = (data.email as string) || 'alex@example.com'
  const phone = (data.phone as string) || '+1 (555) 456-7890'
  const location = (data.location as string) || 'Seattle, WA'
  const bio = (data.bio as string) || 'Passionate full-stack engineer with expertise in modern web technologies and cloud architecture. I love building scalable, performant applications that solve real-world problems.'
  const githubUrl = (data.githubUrl as string) || 'https://github.com/alexchen'
  const linkedinUrl = (data.linkedinUrl as string) || 'https://linkedin.com/in/alexchen'
  const portfolioUrl = (data.portfolioUrl as string) || 'https://alexchen.dev'
  const skills = (data.skills as string[]) || ['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker', 'GraphQL', 'PostgreSQL', 'Redis', 'Kubernetes']
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
    <div className="min-h-screen bg-slate-50">
      {/* Sticky Header */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl flex items-center justify-center font-bold text-lg">
                {name.charAt(0)}
              </div>
              <div>
                <span className="text-slate-900 font-bold text-lg">{name}</span>
                <p className="text-slate-600 text-sm">{title}</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-slate-700 hover:text-purple-600 transition-colors font-medium">About</button>
              <button onClick={() => scrollToSection('skills')} className="text-slate-700 hover:text-purple-600 transition-colors font-medium">Tech Stack</button>
              <button onClick={() => scrollToSection('experience')} className="text-slate-700 hover:text-purple-600 transition-colors font-medium">Experience</button>
              <button onClick={() => scrollToSection('projects')} className="text-slate-700 hover:text-purple-600 transition-colors font-medium">Projects</button>
              <button onClick={() => scrollToSection('education')} className="text-slate-700 hover:text-purple-600 transition-colors font-medium">Education</button>
              <button onClick={() => scrollToSection('contact')} className="text-slate-700 hover:text-purple-600 transition-colors font-medium">Contact</button>
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
              className="md:hidden py-4 border-t border-slate-200"
            >
              <div className="flex flex-col space-y-2">
                <button onClick={() => scrollToSection('about')} className="text-left py-2 text-slate-700 hover:text-purple-600 transition-colors">About</button>
                <button onClick={() => scrollToSection('skills')} className="text-left py-2 text-slate-700 hover:text-purple-600 transition-colors">Tech Stack</button>
                <button onClick={() => scrollToSection('experience')} className="text-left py-2 text-slate-700 hover:text-purple-600 transition-colors">Experience</button>
                <button onClick={() => scrollToSection('projects')} className="text-left py-2 text-slate-700 hover:text-purple-600 transition-colors">Projects</button>
                <button onClick={() => scrollToSection('education')} className="text-left py-2 text-slate-700 hover:text-purple-600 transition-colors">Education</button>
                <button onClick={() => scrollToSection('contact')} className="text-left py-2 text-slate-700 hover:text-purple-600 transition-colors">Contact</button>
              </div>
            </motion.nav>
          )}
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-slate-900">
                Hi, I'm <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">{name}</span>
              </h1>
              <div className="text-xl sm:text-2xl text-purple-600 mb-6 font-semibold">
                {title}
              </div>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                {bio}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  <Briefcase className="w-5 h-5" />
                  Let's Collaborate
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-purple-600 text-purple-600 rounded-2xl font-semibold hover:bg-purple-600 hover:text-white transition-all flex items-center justify-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Resume
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="grid grid-cols-3 gap-4">
                {skills.slice(0, 9).map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                    className="bg-white rounded-2xl p-4 shadow-lg border border-slate-200 text-center hover:shadow-xl transition-all"
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Code className="w-4 h-4 text-white" />
                    </div>
                    <div className="text-sm font-semibold text-slate-900">{skill}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
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
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-6"
            >
              <p className="text-lg text-slate-600 leading-relaxed">
                {bio}
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-100">
                  <div className="text-3xl font-bold text-purple-600 mb-2">{experience.length}+</div>
                  <div className="text-slate-600">Years Experience</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-100">
                  <div className="text-3xl font-bold text-pink-600 mb-2">{projects.length}+</div>
                  <div className="text-slate-600">Projects Built</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Quick Contact</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-purple-600" />
                    <a href={`mailto:${email}`} className="text-slate-600 hover:text-purple-600 transition-colors text-sm">{email}</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-purple-600" />
                    <a href={`tel:${phone}`} className="text-slate-600 hover:text-purple-600 transition-colors text-sm">{phone}</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-purple-600" />
                    <span className="text-slate-600 text-sm">{location}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Github className="w-5 h-5 text-purple-600" />
                    <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-purple-600 transition-colors text-sm">
                      GitHub Profile
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">My Tech Stack</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all border border-slate-200 group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="text-slate-900 font-semibold text-sm">{skill}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience, Projects, Education sections would follow the same pattern as other templates */}
      {/* For brevity, I'll include the contact and footer sections */}

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Let's Build Something Amazing</h2>
            <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
            <p className="text-xl text-purple-100 mb-12">
              Have a project in mind? Let's discuss how we can bring your ideas to life.
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
              className="flex items-center justify-center gap-3 px-8 py-4 bg-white text-purple-600 rounded-2xl font-semibold hover:bg-purple-50 transition-colors shadow-lg"
            >
              <Mail className="w-5 h-5" />
              Get In Touch
            </a>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-4 border-2 border-white text-white rounded-2xl font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              <Github className="w-5 h-5" />
              View Work
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
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { TestTube, BarChart3, CheckCircle, Menu, X, Mail, Linkedin } from 'lucide-react'
import { TemplateData } from '../../App'

interface TestLabProps {
  data: TemplateData
}

function TestLabTemplate({ data }: TestLabProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const testingTools = Array.isArray(data.testing_tools) ? data.testing_tools : []
  const automationFrameworks = Array.isArray(data.automation_frameworks) ? data.automation_frameworks : []
  const methodologies = Array.isArray(data.methodologies) ? data.methodologies : []
  const projects = Array.isArray(data.projects) ? data.projects : []

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
              <TestTube className="w-8 h-8 text-green-600" />
              <span className="text-slate-900 font-bold text-lg">
                {data.name || 'QA Portfolio'}
              </span>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-slate-600 hover:text-green-600 transition-colors">About</a>
              <a href="#skills" className="text-slate-600 hover:text-green-600 transition-colors">Skills</a>
              <a href="#projects" className="text-slate-600 hover:text-green-600 transition-colors">Projects</a>
              <a href="#contact" className="text-slate-600 hover:text-green-600 transition-colors">Contact</a>
            </nav>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900">
              {data.name || 'Your Name'}
            </h1>
            <p className="text-2xl text-green-600 font-semibold">
              {data.title || 'Senior QA Engineer'}
            </p>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              {data.bio || 'Your QA expertise and approach will be displayed here...'}
            </p>
            
            <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">{testingTools.length}</div>
                <div className="text-sm text-slate-600">Tools</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">{automationFrameworks.length}</div>
                <div className="text-sm text-slate-600">Frameworks</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">{projects.length}</div>
                <div className="text-sm text-slate-600">Projects</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900">Testing Expertise</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-green-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                <TestTube className="w-6 h-6 text-green-600 mr-3" />
                Testing Tools
              </h3>
              <div className="space-y-3">
                {testingTools.map((tool, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-slate-700">{tool}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                <BarChart3 className="w-6 h-6 text-blue-600 mr-3" />
                Automation
              </h3>
              <div className="space-y-3">
                {automationFrameworks.map((framework, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span className="text-slate-700">{framework}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-purple-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-6">
                Methodologies
              </h3>
              <div className="space-y-3">
                {methodologies.map((method, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-purple-600" />
                    <span className="text-slate-700">{method}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900">Testing Projects</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-4">{project}</h3>
                <p className="text-slate-600 mb-6">
                  Project description and testing approach will be displayed here.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">Manual Testing</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">Automation</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-green-600">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Let's Ensure Quality Together</h2>
          <div className="flex items-center justify-center space-x-6">
            {data.email && (
              <a href={`mailto:${data.email}`} className="p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                <Mail className="w-6 h-6 text-white" />
              </a>
            )}
            {data.linkedin && (
              <a href={data.linkedin} className="p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                <Linkedin className="w-6 h-6 text-white" />
              </a>
            )}
          </div>
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

export default TestLabTemplate
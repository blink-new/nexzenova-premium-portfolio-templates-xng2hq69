import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { TemplateGallery } from './components/TemplateGallery'
import { TemplatePreview } from './components/TemplatePreview'
import { FormBuilder } from './components/FormBuilder'
import { ExportManager } from './components/ExportManager'
import LandingPage from './components/LandingPage'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs'
import { Card } from './components/ui/card'
import './App.css'

export interface ProjectData {
  title: string
  description: string
  technologies: string[]
  githubUrl: string
  liveUrl: string
  imageUrl: string
  startDate: string
  endDate: string
  responsibilities: string[]
}

export interface ExperienceData {
  company: string
  position: string
  startDate: string
  endDate: string
  location: string
  responsibilities: string[]
  technologies: string[]
}

export interface EducationData {
  institution: string
  degree: string
  field: string
  startDate: string
  endDate: string
  gpa: string
  achievements: string[]
}

export interface TemplateData {
  [key: string]: string | string[] | ProjectData[] | ExperienceData[] | EducationData[]
}

export interface Template {
  id: string
  name: string
  category: 'developer' | 'qa' | 'designer' | 'student'
  description: string
  preview: string
  component: React.ComponentType<{ data: TemplateData }>
  fields: TemplateField[]
}

export interface TemplateField {
  id: string
  label: string
  type: 'text' | 'textarea' | 'email' | 'url' | 'array' | 'projects' | 'experience' | 'education'
  required?: boolean
  placeholder?: string
}

function App() {
  const [showLanding, setShowLanding] = useState(true)
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null)
  const [templateData, setTemplateData] = useState<TemplateData>({})
  const [activeTab, setActiveTab] = useState('gallery')

  const handleTemplateSelect = (template: Template) => {
    setSelectedTemplate(template)
    setActiveTab('preview')
    
    // Initialize template data with default values
    const defaultData: TemplateData = {}
    template.fields.forEach(field => {
      if (field.type === 'array') {
        defaultData[field.id] = []
      } else if (field.type === 'projects') {
        defaultData[field.id] = []
      } else if (field.type === 'experience') {
        defaultData[field.id] = []
      } else if (field.type === 'education') {
        defaultData[field.id] = []
      } else {
        defaultData[field.id] = ''
      }
    })
    setTemplateData(defaultData)
  }

  const handleDataUpdate = (data: TemplateData) => {
    setTemplateData(data)
  }

  const handleSkipLanding = () => {
    setShowLanding(false)
  }

  const handleSignIn = () => {
    // For now, just skip to the builder
    // In a real app, this would handle authentication
    setShowLanding(false)
  }

  const handleSignUp = () => {
    // For now, just skip to the builder
    // In a real app, this would handle user registration
    setShowLanding(false)
  }

  // Show landing page first
  if (showLanding) {
    return (
      <LandingPage
        onSkip={handleSkipLanding}
        onSignIn={handleSignIn}
        onSignUp={handleSignUp}
      />
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blink-background via-blink-surface to-blink-background">
      {/* Header */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/90 backdrop-blur-md border-b border-blink-border sticky top-0 z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 blink-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <div>
                <h1 className="text-xl font-bold blink-gradient-text">Nexzenova Builder</h1>
                <p className="text-sm text-blink-text-muted">Premium Portfolio Templates</p>
              </div>
            </div>
            <div className="text-sm text-blink-text-muted">
              10 Luxury Templates
            </div>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="gallery">Template Gallery</TabsTrigger>
            <TabsTrigger value="preview" disabled={!selectedTemplate}>
              Live Preview
            </TabsTrigger>
            <TabsTrigger value="form" disabled={!selectedTemplate}>
              Form Builder
            </TabsTrigger>
            <TabsTrigger value="export" disabled={!selectedTemplate}>
              Export
            </TabsTrigger>
          </TabsList>

          <TabsContent value="gallery" className="space-y-6">
            <div className="text-center space-y-4">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl font-bold text-slate-900"
              >
                Choose Your Perfect Template
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg text-slate-600 max-w-2xl mx-auto"
              >
                Luxurious, mobile-first portfolio templates designed to impress recruiters and clients
              </motion.p>
            </div>
            <TemplateGallery onTemplateSelect={handleTemplateSelect} />
          </TabsContent>

          <TabsContent value="preview" className="space-y-6">
            {selectedTemplate && (
              <Card className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">
                      {selectedTemplate.name}
                    </h3>
                    <p className="text-slate-600">{selectedTemplate.description}</p>
                  </div>
                  <div className="text-sm text-slate-500 capitalize">
                    {selectedTemplate.category}
                  </div>
                </div>
                <TemplatePreview template={selectedTemplate} data={templateData} />
              </Card>
            )}
          </TabsContent>

          <TabsContent value="form" className="space-y-6">
            {selectedTemplate && (
              <FormBuilder 
                template={selectedTemplate}
                data={templateData}
                onDataUpdate={handleDataUpdate}
              />
            )}
          </TabsContent>

          <TabsContent value="export" className="space-y-6">
            {selectedTemplate && (
              <ExportManager 
                template={selectedTemplate}
                data={templateData}
              />
            )}
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

export default App
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Template, TemplateData, ProjectData, ExperienceData, EducationData } from '../App'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import { Label } from './ui/label'
import { Badge } from './ui/badge'
import { Separator } from './ui/separator'
import { Plus, Trash2, Calendar, MapPin, ExternalLink, Github } from 'lucide-react'

interface FormBuilderProps {
  template: Template
  data: TemplateData
  onDataUpdate: (data: TemplateData) => void
}

export function FormBuilder({ template, data, onDataUpdate }: FormBuilderProps) {
  const [newSkill, setNewSkill] = useState('')

  const updateField = (fieldId: string, value: any) => {
    const updatedData = { ...data, [fieldId]: value }
    onDataUpdate(updatedData)
  }

  const addArrayItem = (fieldId: string, item: string) => {
    if (!item.trim()) return
    const currentArray = (data[fieldId] as string[]) || []
    updateField(fieldId, [...currentArray, item.trim()])
  }

  const removeArrayItem = (fieldId: string, index: number) => {
    const currentArray = (data[fieldId] as string[]) || []
    updateField(fieldId, currentArray.filter((_, i) => i !== index))
  }

  const addProject = (fieldId: string) => {
    const currentProjects = (data[fieldId] as ProjectData[]) || []
    const newProject: ProjectData = {
      title: '',
      description: '',
      technologies: [],
      githubUrl: '',
      liveUrl: '',
      imageUrl: '',
      startDate: '',
      endDate: '',
      responsibilities: []
    }
    updateField(fieldId, [...currentProjects, newProject])
  }

  const updateProject = (fieldId: string, index: number, field: keyof ProjectData, value: any) => {
    const currentProjects = (data[fieldId] as ProjectData[]) || []
    const updatedProjects = [...currentProjects]
    updatedProjects[index] = { ...updatedProjects[index], [field]: value }
    updateField(fieldId, updatedProjects)
  }

  const removeProject = (fieldId: string, index: number) => {
    const currentProjects = (data[fieldId] as ProjectData[]) || []
    updateField(fieldId, currentProjects.filter((_, i) => i !== index))
  }

  const addExperience = (fieldId: string) => {
    const currentExperience = (data[fieldId] as ExperienceData[]) || []
    const newExperience: ExperienceData = {
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      location: '',
      responsibilities: [],
      technologies: []
    }
    updateField(fieldId, [...currentExperience, newExperience])
  }

  const updateExperience = (fieldId: string, index: number, field: keyof ExperienceData, value: any) => {
    const currentExperience = (data[fieldId] as ExperienceData[]) || []
    const updatedExperience = [...currentExperience]
    updatedExperience[index] = { ...updatedExperience[index], [field]: value }
    updateField(fieldId, updatedExperience)
  }

  const removeExperience = (fieldId: string, index: number) => {
    const currentExperience = (data[fieldId] as ExperienceData[]) || []
    updateField(fieldId, currentExperience.filter((_, i) => i !== index))
  }

  const addEducation = (fieldId: string) => {
    const currentEducation = (data[fieldId] as EducationData[]) || []
    const newEducation: EducationData = {
      institution: '',
      degree: '',
      field: '',
      startDate: '',
      endDate: '',
      gpa: '',
      achievements: []
    }
    updateField(fieldId, [...currentEducation, newEducation])
  }

  const updateEducation = (fieldId: string, index: number, field: keyof EducationData, value: any) => {
    const currentEducation = (data[fieldId] as EducationData[]) || []
    const updatedEducation = [...currentEducation]
    updatedEducation[index] = { ...updatedEducation[index], [field]: value }
    updateField(fieldId, updatedEducation)
  }

  const removeEducation = (fieldId: string, index: number) => {
    const currentEducation = (data[fieldId] as EducationData[]) || []
    updateField(fieldId, currentEducation.filter((_, i) => i !== index))
  }

  const renderField = (field: any) => {
    const value = data[field.id]

    switch (field.type) {
      case 'text':
      case 'email':
      case 'url':
        return (
          <div key={field.id} className="space-y-2">
            <Label htmlFor={field.id} className="text-sm font-medium text-slate-700">
              {field.label} {field.required && <span className="text-red-500">*</span>}
            </Label>
            <Input
              id={field.id}
              type={field.type}
              value={(value as string) || ''}
              onChange={(e) => updateField(field.id, e.target.value)}
              placeholder={field.placeholder}
              className="w-full"
            />
          </div>
        )

      case 'textarea':
        return (
          <div key={field.id} className="space-y-2">
            <Label htmlFor={field.id} className="text-sm font-medium text-slate-700">
              {field.label} {field.required && <span className="text-red-500">*</span>}
            </Label>
            <Textarea
              id={field.id}
              value={(value as string) || ''}
              onChange={(e) => updateField(field.id, e.target.value)}
              placeholder={field.placeholder}
              rows={4}
              className="w-full"
            />
          </div>
        )

      case 'array': {
        const arrayValue = (value as string[]) || []
        return (
          <div key={field.id} className="space-y-3">
            <Label className="text-sm font-medium text-slate-700">
              {field.label} {field.required && <span className="text-red-500">*</span>}
            </Label>
            <div className="flex gap-2">
              <Input
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                placeholder={`Add ${field.label.toLowerCase()}`}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    addArrayItem(field.id, newSkill)
                    setNewSkill('')
                  }
                }}
              />
              <Button
                type="button"
                onClick={() => {
                  addArrayItem(field.id, newSkill)
                  setNewSkill('')
                }}
                size="sm"
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {arrayValue.map((item, index) => (
                <Badge key={index} variant="secondary" className="flex items-center gap-1">
                  {item}
                  <button
                    onClick={() => removeArrayItem(field.id, index)}
                    className="ml-1 hover:text-red-500"
                  >
                    <Trash2 className="w-3 h-3" />
                  </button>
                </Badge>
              ))}
            </div>
          </div>
        )
      }

      case 'projects': {
        const projects = (value as ProjectData[]) || []
        return (
          <div key={field.id} className="space-y-4">
            <div className="flex items-center justify-between">
              <Label className="text-sm font-medium text-slate-700">
                {field.label} {field.required && <span className="text-red-500">*</span>}
              </Label>
              <Button
                type="button"
                onClick={() => addProject(field.id)}
                size="sm"
                className="flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                Add Project
              </Button>
            </div>
            {projects.map((project, index) => (
              <Card key={index} className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-medium text-slate-900">Project {index + 1}</h4>
                  <Button
                    type="button"
                    variant="destructive"
                    size="sm"
                    onClick={() => removeProject(field.id, index)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Project Title</Label>
                    <Input
                      value={project.title}
                      onChange={(e) => updateProject(field.id, index, 'title', e.target.value)}
                      placeholder="Enter project title"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Image URL</Label>
                    <Input
                      value={project.imageUrl}
                      onChange={(e) => updateProject(field.id, index, 'imageUrl', e.target.value)}
                      placeholder="Project image URL"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-sm font-medium flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      Start Date
                    </Label>
                    <Input
                      type="date"
                      value={project.startDate}
                      onChange={(e) => updateProject(field.id, index, 'startDate', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-sm font-medium flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      End Date
                    </Label>
                    <Input
                      type="date"
                      value={project.endDate}
                      onChange={(e) => updateProject(field.id, index, 'endDate', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-sm font-medium flex items-center gap-1">
                      <Github className="w-4 h-4" />
                      GitHub URL
                    </Label>
                    <Input
                      value={project.githubUrl}
                      onChange={(e) => updateProject(field.id, index, 'githubUrl', e.target.value)}
                      placeholder="https://github.com/username/repo"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-sm font-medium flex items-center gap-1">
                      <ExternalLink className="w-4 h-4" />
                      Live URL
                    </Label>
                    <Input
                      value={project.liveUrl}
                      onChange={(e) => updateProject(field.id, index, 'liveUrl', e.target.value)}
                      placeholder="https://project-demo.com"
                    />
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <Label className="text-sm font-medium">Description</Label>
                  <Textarea
                    value={project.description}
                    onChange={(e) => updateProject(field.id, index, 'description', e.target.value)}
                    placeholder="Describe the project..."
                    rows={3}
                  />
                </div>
                <div className="mt-4 space-y-2">
                  <Label className="text-sm font-medium">Technologies Used</Label>
                  <Input
                    value={project.technologies.join(', ')}
                    onChange={(e) => updateProject(field.id, index, 'technologies', e.target.value.split(', ').filter(t => t.trim()))}
                    placeholder="React, TypeScript, Node.js, etc."
                  />
                </div>
                <div className="mt-4 space-y-2">
                  <Label className="text-sm font-medium">Key Responsibilities</Label>
                  <Textarea
                    value={project.responsibilities.join('\n')}
                    onChange={(e) => updateProject(field.id, index, 'responsibilities', e.target.value.split('\n').filter(r => r.trim()))}
                    placeholder="• Developed responsive UI components&#10;• Implemented REST API integration&#10;• Optimized performance"
                    rows={3}
                  />
                </div>
              </Card>
            ))}
          </div>
        )
      }

      case 'experience': {
        const experiences = (value as ExperienceData[]) || []
        return (
          <div key={field.id} className="space-y-4">
            <div className="flex items-center justify-between">
              <Label className="text-sm font-medium text-slate-700">
                {field.label} {field.required && <span className="text-red-500">*</span>}
              </Label>
              <Button
                type="button"
                onClick={() => addExperience(field.id)}
                size="sm"
                className="flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                Add Experience
              </Button>
            </div>
            {experiences.map((exp, index) => (
              <Card key={index} className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-medium text-slate-900">Experience {index + 1}</h4>
                  <Button
                    type="button"
                    variant="destructive"
                    size="sm"
                    onClick={() => removeExperience(field.id, index)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Company</Label>
                    <Input
                      value={exp.company}
                      onChange={(e) => updateExperience(field.id, index, 'company', e.target.value)}
                      placeholder="Company name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Position</Label>
                    <Input
                      value={exp.position}
                      onChange={(e) => updateExperience(field.id, index, 'position', e.target.value)}
                      placeholder="Job title"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-sm font-medium flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      Start Date
                    </Label>
                    <Input
                      type="date"
                      value={exp.startDate}
                      onChange={(e) => updateExperience(field.id, index, 'startDate', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-sm font-medium flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      End Date
                    </Label>
                    <Input
                      type="date"
                      value={exp.endDate}
                      onChange={(e) => updateExperience(field.id, index, 'endDate', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label className="text-sm font-medium flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      Location
                    </Label>
                    <Input
                      value={exp.location}
                      onChange={(e) => updateExperience(field.id, index, 'location', e.target.value)}
                      placeholder="City, State/Country"
                    />
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <Label className="text-sm font-medium">Key Responsibilities</Label>
                  <Textarea
                    value={exp.responsibilities.join('\n')}
                    onChange={(e) => updateExperience(field.id, index, 'responsibilities', e.target.value.split('\n').filter(r => r.trim()))}
                    placeholder="• Led development of key features&#10;• Collaborated with cross-functional teams&#10;• Improved system performance by 30%"
                    rows={4}
                  />
                </div>
                <div className="mt-4 space-y-2">
                  <Label className="text-sm font-medium">Technologies Used</Label>
                  <Input
                    value={exp.technologies.join(', ')}
                    onChange={(e) => updateExperience(field.id, index, 'technologies', e.target.value.split(', ').filter(t => t.trim()))}
                    placeholder="React, Node.js, PostgreSQL, etc."
                  />
                </div>
              </Card>
            ))}
          </div>
        )
      }

      case 'education': {
        const educations = (value as EducationData[]) || []
        return (
          <div key={field.id} className="space-y-4">
            <div className="flex items-center justify-between">
              <Label className="text-sm font-medium text-slate-700">
                {field.label} {field.required && <span className="text-red-500">*</span>}
              </Label>
              <Button
                type="button"
                onClick={() => addEducation(field.id)}
                size="sm"
                className="flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                Add Education
              </Button>
            </div>
            {educations.map((edu, index) => (
              <Card key={index} className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-medium text-slate-900">Education {index + 1}</h4>
                  <Button
                    type="button"
                    variant="destructive"
                    size="sm"
                    onClick={() => removeEducation(field.id, index)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Institution</Label>
                    <Input
                      value={edu.institution}
                      onChange={(e) => updateEducation(field.id, index, 'institution', e.target.value)}
                      placeholder="University/College name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Degree</Label>
                    <Input
                      value={edu.degree}
                      onChange={(e) => updateEducation(field.id, index, 'degree', e.target.value)}
                      placeholder="Bachelor's, Master's, etc."
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Field of Study</Label>
                    <Input
                      value={edu.field}
                      onChange={(e) => updateEducation(field.id, index, 'field', e.target.value)}
                      placeholder="Computer Science, Engineering, etc."
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-sm font-medium">GPA</Label>
                    <Input
                      value={edu.gpa}
                      onChange={(e) => updateEducation(field.id, index, 'gpa', e.target.value)}
                      placeholder="3.8/4.0"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-sm font-medium flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      Start Date
                    </Label>
                    <Input
                      type="date"
                      value={edu.startDate}
                      onChange={(e) => updateEducation(field.id, index, 'startDate', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-sm font-medium flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      End Date
                    </Label>
                    <Input
                      type="date"
                      value={edu.endDate}
                      onChange={(e) => updateEducation(field.id, index, 'endDate', e.target.value)}
                    />
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <Label className="text-sm font-medium">Achievements</Label>
                  <Textarea
                    value={edu.achievements.join('\n')}
                    onChange={(e) => updateEducation(field.id, index, 'achievements', e.target.value.split('\n').filter(a => a.trim()))}
                    placeholder="• Dean's List&#10;• Graduated Magna Cum Laude&#10;• Relevant coursework"
                    rows={3}
                  />
                </div>
              </Card>
            ))}
          </div>
        )
      }

      default:
        return null
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="w-6 h-6 blink-gradient rounded-md flex items-center justify-center">
              <span className="text-white text-xs font-bold">F</span>
            </div>
            Form Builder - {template.name}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {template.fields.map((field) => renderField(field))}
        </CardContent>
      </Card>

      <div className="text-center">
        <p className="text-sm text-slate-600">
          Fill out the form above to see your portfolio come to life in the Live Preview tab.
        </p>
      </div>
    </motion.div>
  )
}
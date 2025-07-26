import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { Eye, Code, TestTube, Palette, GraduationCap, Crown } from 'lucide-react'
import { Template } from '../App'
import { templates } from '../data/templates'

interface TemplateGalleryProps {
  onTemplateSelect: (template: Template) => void
}

const categoryIcons = {
  developer: Code,
  qa: TestTube,
  designer: Palette,
  student: GraduationCap
}

const categoryColors = {
  developer: 'bg-blink-primary/10 text-blink-primary border border-blink-primary/20',
  qa: 'bg-emerald-100 text-emerald-700 border border-emerald-200',
  designer: 'bg-blink-accent/10 text-blink-accent border border-blink-accent/20',
  student: 'bg-amber-100 text-amber-700 border border-amber-200'
}

const categoryLabels = {
  developer: 'Software Developer',
  qa: 'Quality Analyst',
  designer: 'Designer',
  student: 'Student/Fresher'
}

export function TemplateGallery({ onTemplateSelect }: TemplateGalleryProps) {
  const categories = ['developer', 'qa', 'designer', 'student'] as const

  return (
    <div className="space-y-12">
      {categories.map((category) => {
        const categoryTemplates = templates.filter(t => t.category === category)
        const Icon = categoryIcons[category]
        
        return (
          <motion.section
            key={category}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3">
              <div className={`p-2 rounded-lg ${categoryColors[category]}`}>
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900">
                  {categoryLabels[category]}
                </h3>
                <p className="text-slate-600">
                  {categoryTemplates.length} premium template{categoryTemplates.length !== 1 ? 's' : ''}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryTemplates.map((template, index) => (
                <motion.div
                  key={template.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <Card className="h-full overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
                    <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 relative overflow-hidden">
                      <img
                        src={template.preview}
                        alt={`${template.name} preview`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                      
                      {/* Popular Badge */}
                      {template.popular && (
                        <div className="absolute top-3 left-3">
                          <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0 shadow-lg">
                            <Crown className="w-3 h-3 mr-1" />
                            Popular
                          </Badge>
                        </div>
                      )}
                      
                      {/* Price Badge */}
                      <div className="absolute top-3 right-3">
                        <div className="bg-white/95 backdrop-blur-sm rounded-lg px-3 py-1 shadow-lg">
                          <div className="flex items-center space-x-2">
                            <span className="text-lg font-bold text-blink-primary">{template.price}</span>
                            <span className="text-sm text-slate-500 line-through">{template.originalPrice}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="space-y-1">
                          <CardTitle className="text-lg font-semibold text-slate-900">
                            {template.name}
                          </CardTitle>
                          <CardDescription className="text-sm text-slate-600">
                            {template.description}
                          </CardDescription>
                        </div>
                        <Badge 
                          variant="secondary" 
                          className={`${categoryColors[template.category]} border-0 text-xs`}
                        >
                          {categoryLabels[template.category]}
                        </Badge>
                      </div>
                    </CardHeader>

                    <CardContent className="pt-0">
                      <Button
                        onClick={() => onTemplateSelect(template)}
                        className="w-full blink-button hover:shadow-lg transition-all duration-200"
                        size="sm"
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        Preview Template
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )
      })}
    </div>
  )
}
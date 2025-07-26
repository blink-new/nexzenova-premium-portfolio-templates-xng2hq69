import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Card } from './ui/card'
import { Button } from './ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { Monitor, Tablet, Smartphone } from 'lucide-react'
import { Template, TemplateData } from '../App'

interface TemplatePreviewProps {
  template: Template
  data: TemplateData
}

export function TemplatePreview({ template, data }: TemplatePreviewProps) {
  const [viewMode, setViewMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop')

  const viewportClasses = {
    desktop: 'w-full max-w-none',
    tablet: 'w-[768px] max-w-full mx-auto',
    mobile: 'w-[375px] max-w-full mx-auto'
  }

  const TemplateComponent = template.component

  return (
    <div className="space-y-4">
      {/* Viewport Controls */}
      <div className="flex items-center justify-between">
        <h4 className="text-lg font-semibold text-slate-900">Live Preview</h4>
        <Tabs value={viewMode} onValueChange={(value) => setViewMode(value as any)}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="desktop" className="flex items-center space-x-2">
              <Monitor className="w-4 h-4" />
              <span className="hidden sm:inline">Desktop</span>
            </TabsTrigger>
            <TabsTrigger value="tablet" className="flex items-center space-x-2">
              <Tablet className="w-4 h-4" />
              <span className="hidden sm:inline">Tablet</span>
            </TabsTrigger>
            <TabsTrigger value="mobile" className="flex items-center space-x-2">
              <Smartphone className="w-4 h-4" />
              <span className="hidden sm:inline">Mobile</span>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Preview Container */}
      <Card className="p-4 bg-slate-100">
        <motion.div
          key={viewMode}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className={`${viewportClasses[viewMode]} transition-all duration-300`}
        >
          <div className="bg-white rounded-lg shadow-lg overflow-hidden min-h-[600px]">
            <TemplateComponent data={data} />
          </div>
        </motion.div>
      </Card>

      {/* Template Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
        <Card className="p-4">
          <h5 className="font-semibold text-slate-900 mb-2">Template Info</h5>
          <div className="space-y-1 text-slate-600">
            <p><strong>Name:</strong> {template.name}</p>
            <p><strong>Category:</strong> {template.category}</p>
            <p><strong>Fields:</strong> {template.fields.length}</p>
          </div>
        </Card>
        
        <Card className="p-4">
          <h5 className="font-semibold text-slate-900 mb-2">Features</h5>
          <div className="space-y-1 text-slate-600">
            <p>✓ Mobile-first responsive</p>
            <p>✓ SEO optimized</p>
            <p>✓ Accessibility compliant</p>
          </div>
        </Card>
        
        <Card className="p-4">
          <h5 className="font-semibold text-slate-900 mb-2">Export Options</h5>
          <div className="space-y-1 text-slate-600">
            <p>• Static HTML/CSS/JS</p>
            <p>• React components</p>
            <p>• ZIP download</p>
          </div>
        </Card>
      </div>
    </div>
  )
}
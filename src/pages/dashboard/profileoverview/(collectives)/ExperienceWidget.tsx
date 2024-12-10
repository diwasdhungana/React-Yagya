'use client'

import React, { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Pencil, Plus, Trash2, Globe, Lock, Users, Briefcase, GraduationCap, Award, ChevronDown } from 'lucide-react'
export function ExperienceWidget({ editMode }) {
    const [experiences, setExperiences] = useState([
      { company: 'Tech Innovators', role: 'Founder & CEO', duration: '2018 - Present' },
      { company: 'StartUp Inc.', role: 'Lead Developer', duration: '2015 - 2018' },
    ])
  
    const addExperience = () => {
      setExperiences([...experiences, { company: 'New Company', role: 'New Role', duration: 'Start - End' }])
    }
  
    return (
      <div>
        <h3 className="font-semibold mb-2">Professional Experience</h3>
        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <div key={index} className="flex items-start">
              <Briefcase  className="mr-2 h-5 w-5 mt-1" />
              <div>
                <h4 className="font-medium">{exp.role}</h4>
                <p className="text-sm text-muted-foreground">{exp.company}</p>
                <p className="text-sm text-muted-foreground">{exp.duration}</p>
              </div>
            </div>
          ))}
        </div>
        {editMode && (
          <Button onClick={addExperience} variant="outline" size="sm" className="mt-4">
            <Plus className="mr-2 h-4 w-4" /> Add Experience
          </Button>
        )}
      </div>
    )
  }
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
export function EducationWidget({ editMode }) {
    const [education, setEducation] = useState([
      { degree: 'MSc in Computer Science', school: 'Tech University', year: '2015' },
      { degree: 'BSc in Software Engineering', school: 'Innovation College', year: '2013' },
    ])
  
    const addEducation = () => {
      setEducation([...education, { degree: 'New Degree', school: 'New School', year: 'Year' }])
    }
  
    return (
      <div>
        <h3 className="font-semibold mb-2">Education</h3>
        <div className="space-y-4">
          {education.map((edu, index) => (
            <div key={index} className="flex items-start">
              <GraduationCap className="mr-2 h-5 w-5 mt-1" />
              <div>
                <h4 className="font-medium">{edu.degree}</h4>
                <p className="text-sm text-muted-foreground">{edu.school}</p>
                <p className="text-sm text-muted-foreground">{edu.year}</p>
              </div>
            </div>
          ))}
        </div>
        {editMode && (
          <Button onClick={addEducation} variant="outline" size="sm" className="mt-4">
            <Plus className="mr-2 h-4 w-4" /> Add Education
          </Button>
        )}
      </div>
    )
  }
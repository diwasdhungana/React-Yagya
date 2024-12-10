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
export function SkillsWidget({ editMode }) {
    const [skills, setSkills] = useState([
      { name: 'React', level: 90 },
      { name: 'Node.js', level: 80 },
      { name: 'Python', level: 75 },
      { name: 'UI/UX Design', level: 85 },
    ])
  
    const addSkill = () => {
      setSkills([...skills, { name: 'New Skill', level: 50 }])
    }
  
    return (
      <div>
        <h3 className="font-semibold mb-2">Skills</h3>
        <div className="space-y-2">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <Progress value={skill.level} className="h-2" />
            </div>
          ))}
        </div>
        {editMode && (
          <Button onClick={addSkill} variant="outline" size="sm" className="mt-4">
            <Plus className="mr-2 h-4 w-4" /> Add Skill
          </Button>
        )}
      </div>
    )
  }
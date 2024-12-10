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
export function AchievementsWidget({ editMode }) {
    const [achievements, setAchievements] = useState([
      { title: 'Best Startup Award', organization: 'Tech Innovators Summit', year: '2022' },
      { title: 'Patent for AI Algorithm', organization: 'US Patent Office', year: '2020' },
    ])
  
    const addAchievement = () => {
      setAchievements([...achievements, { title: 'New Achievement', organization: 'Organization', year: 'Year' }])
    }
  
    return (
      <div>
        <h3 className="font-semibold mb-2">Achievements</h3>
        <div className="space-y-4">
          {achievements.map((achievement, index) => (
            <div key={index} className="flex items-start">
              <Award className="mr-2 h-5 w-5 mt-1" />
              <div>
                <h4 className="font-medium">{achievement.title}</h4>
                <p className="text-sm text-muted-foreground">{achievement.organization}</p>
                <p className="text-sm text-muted-foreground">{achievement.year}</p>
              </div>
            </div>
          ))}
        </div>
        {editMode && (
          <Button onClick={addAchievement} variant="outline" size="sm" className="mt-4">
            <Plus className="mr-2 h-4 w-4" /> Add Achievement
          </Button>
        )}
      </div>
    )
  }
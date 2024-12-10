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
export function LifeGoalsWidget({ editMode }) {
    const [goals, setGoals] = useState([
      'Launch a successful tech startup',
      'Mentor young entrepreneurs',
      'Travel to 50 countries'
    ])
  
    const addGoal = () => {
      setGoals([...goals, 'New Goal'])
    }
  
    return (
      <div>
        <h3 className="font-semibold mb-2">Life Goals and Objectives</h3>
        <ul className="list-disc list-inside mb-4">
          {goals.map((goal, index) => (
            <li key={index}>{goal}</li>
          ))}
        </ul>
        {editMode && (
          <Button onClick={addGoal} variant="outline" size="sm">
            <Plus className="mr-2 h-4 w-4" /> Add Goal
          </Button>
        )}
      </div>
    )
  }
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
export function InterestsHobbiesWidget({ editMode }) {
    const [interests, setInterests] = useState(['Technology', 'Entrepreneurship', 'Travel'])
  
    const addInterest = () => {
      setInterests([...interests, 'New Interest'])
    }
  
    return (
      <div>
        <h3 className="font-semibold mb-2">Interests and Hobbies</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {interests.map((interest, index) => (
            <Badge key={index}>{interest}</Badge>
          ))}
        </div>
        {editMode && (
          <Button onClick={addInterest} variant="outline" size="sm">
            <Plus className="mr-2 h-4 w-4" /> Add Interest
          </Button>
        )}
      </div>
    )
  }
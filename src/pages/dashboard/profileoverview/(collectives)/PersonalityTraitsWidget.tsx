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
export function PersonalityTraitsWidget({ editMode }) {
    const [traits, setTraits] = useState(['Creative', 'Analytical', 'Leader'])
  
    const addTrait = () => {
      setTraits([...traits, 'New Trait'])
    }
  
    return (
      <div>
        <h3 className="font-semibold mb-2">Personality Traits</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {traits.map((trait, index) => (
            <Badge key={index} variant="secondary">{trait}</Badge>
          ))}
        </div>
        {editMode && (
          <Button onClick={addTrait} variant="outline" size="sm">
            <Plus className="mr-2 h-4 w-4" /> Add Trait
          </Button>
        )}
      </div>
    )
  }
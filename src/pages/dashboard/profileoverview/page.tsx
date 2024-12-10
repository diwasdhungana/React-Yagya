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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { PersonalityTraitsWidget } from './(collectives)/PersonalityTraitsWidget'
import { InterestsHobbiesWidget } from './(collectives)/InterestsHobbiesWidget'
import { LifeGoalsWidget } from './(collectives)/LifeGoalsWidget'
import { SkillsWidget } from './(collectives)/SkillsWidget'
import { ExperienceWidget } from './(collectives)/ExperienceWidget'
import { EducationWidget } from './(collectives)/EducationWidget'
import { AchievementsWidget } from './(collectives)/AchievementsWidget'
import { ProfilePictureWidget } from './(collectives)/ProfilePictureWidget'
import { IntroductionWidget } from './(collectives)/IntroductionWidget'

const initialWidgets = [
  { id: 'profile-picture', type: 'ProfilePicture', privacy: 'public' },
  { id: 'introduction', type: 'Introduction', privacy: 'public' },
  { id: 'personality-traits', type: 'PersonalityTraits', privacy: 'connections' },
  { id: 'interests-hobbies', type: 'InterestsHobbies', privacy: 'public' },
  { id: 'life-goals', type: 'LifeGoals', privacy: 'private' },
  { id: 'skills', type: 'Skills', privacy: 'public' },
  { id: 'experience', type: 'Experience', privacy: 'public' },
  { id: 'education', type: 'Education', privacy: 'public' },
  { id: 'achievements', type: 'Achievements', privacy: 'public' },
]
type widget = {id:string,type:string,privacy:string}[]

export default function ProfileOverviewComponent() {
  const [widgets, setWidgets] = useState<widget>(initialWidgets)
  const [editMode, setEditMode] = useState<boolean>(true)

  const onDragEnd = (result) => {
    if (!result.destination) return

    const items = Array.from(widgets)
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)

    setWidgets(items)
  }

  const togglePrivacy = (id) => {
    setWidgets(widgets.map(widget => 
      widget.id === id 
        ? { ...widget, privacy: getNextPrivacy(widget.privacy) } 
        : widget
    ))
  }

  const getNextPrivacy = (current) => {
    const privacyLevels = ['public', 'connections', 'private']
    const currentIndex = privacyLevels.indexOf(current)
    return privacyLevels[(currentIndex + 1) % privacyLevels.length]
  }

  const addWidget = (type) => {
    const newWidget = { id: `widget-${Date.now()}`, type, privacy: 'public' }
    setWidgets([...widgets, newWidget])
  }

  const removeWidget = (id) => {
    setWidgets(widgets.filter(widget => widget.id !== id))
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Profile Overview</h1>
        <div className="flex items-center space-x-4">
          <Switch
            checked={editMode}
            onCheckedChange={setEditMode}
            id="edit-mode"
          />
          <Label htmlFor="edit-mode">Edit Mode</Label>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                Add Widget <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onSelect={() => addWidget('PersonalityTraits')}>Personality Traits</DropdownMenuItem>
              <DropdownMenuItem onSelect={() => addWidget('InterestsHobbies')}>Interests & Hobbies</DropdownMenuItem>
              <DropdownMenuItem onSelect={() => addWidget('LifeGoals')}>Life Goals</DropdownMenuItem>
              <DropdownMenuItem onSelect={() => addWidget('Skills')}>Skills</DropdownMenuItem>
              <DropdownMenuItem onSelect={() => addWidget('Experience')}>Experience</DropdownMenuItem>
              <DropdownMenuItem onSelect={() => addWidget('Education')}>Education</DropdownMenuItem>
              <DropdownMenuItem onSelect={() => addWidget('Achievements')}>Achievements</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="widgets" isDropDisabled={!editMode} isCombineEnabled={false} ignoreContainerClipping={true}>
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {widgets.map((widget, index) => (
                <Draggable key={widget.id} draggableId={widget.id} index={index} isDragDisabled={!editMode}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <WidgetWrapper
                        widget={widget}
                        togglePrivacy={() => togglePrivacy(widget.id)}
                        removeWidget={() => removeWidget(widget.id)}
                        editMode={editMode}
                      >
                        {renderWidget(widget , editMode)}
                      </WidgetWrapper>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}

function WidgetWrapper({ widget, children, togglePrivacy, removeWidget, editMode }) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{widget.type}</CardTitle>
        {editMode && (
          <div className="flex items-center space-x-2">
            <PrivacyBadge privacy={widget.privacy} />
            <Button variant="ghost" size="icon" onClick={togglePrivacy}>
              {widget.privacy === 'public' ? <Globe className="h-4 w-4" /> : 
               widget.privacy === 'connections' ? <Users className="h-4 w-4" /> : 
               <Lock className="h-4 w-4" />}
            </Button>
            <Button variant="ghost" size="icon" onClick={removeWidget}>
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        )}
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  )
}

function PrivacyBadge({ privacy }) {
  return (
    <Badge variant={privacy === 'public' ? 'default' : privacy === 'connections' ? 'secondary' : 'outline'}>
      {privacy}
    </Badge>
  )
}

function renderWidget(widget, editMode) {
  switch (widget.type) {
    case 'ProfilePicture':
      return <ProfilePictureWidget editMode={editMode} />
    case 'Introduction':
      return <IntroductionWidget editMode={editMode} />
    case 'PersonalityTraits':
      return <PersonalityTraitsWidget editMode={editMode} />
    case 'InterestsHobbies':
      return <InterestsHobbiesWidget editMode={editMode} />
    case 'LifeGoals':
      return <LifeGoalsWidget editMode={editMode} />
    case 'Skills':
      return <SkillsWidget editMode={editMode} />
    case 'Experience':
      return <ExperienceWidget editMode={editMode} />
    case 'Education':
      return <EducationWidget editMode={editMode} />
    case 'Achievements':
      return <AchievementsWidget editMode={editMode} />
    default:
      return null
  }
}


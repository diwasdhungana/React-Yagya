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

export function ProfileOverviewComponent() {
  const [widgets, setWidgets] = useState(initialWidgets)
  const [editMode, setEditMode] = useState(false)

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
        <Droppable droppableId="widgets">
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
                        {renderWidget(widget, editMode)}
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

function ProfilePictureWidget({ editMode }) {
  return (
    <div className="flex flex-col items-center">
      <Avatar className="h-32 w-32">
        <AvatarImage src="/placeholder-avatar.jpg" alt="Profile picture" />
        <AvatarFallback>RB</AvatarFallback>
      </Avatar>
      {editMode && (
        <Button variant="outline" size="sm" className="mt-4">
          <Pencil className="mr-2 h-4 w-4" /> Change Picture
        </Button>
      )}
    </div>
  )
}

function IntroductionWidget({ editMode }) {
  const [name, setName] = useState("Rohit Vuvrajchandra Budhathoki")
  const [title, setTitle] = useState("Entrepreneur/Founder")
  const [bio, setBio] = useState("")

  return (
    <div className="space-y-4">
      {editMode ? (
        <>
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <Label htmlFor="title">Title</Label>
            <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div>
            <Label htmlFor="bio">Bio</Label>
            <Textarea id="bio" value={bio} onChange={(e) => setBio(e.target.value)} placeholder="Write a short bio about yourself..." />
          </div>
        </>
      ) : (
        <>
          <h2 className="text-2xl font-bold">{name}</h2>
          <p className="text-lg text-muted-foreground">{title}</p>
          <p>{bio}</p>
        </>
      )}
    </div>
  )
}

function PersonalityTraitsWidget({ editMode }) {
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

function InterestsHobbiesWidget({ editMode }) {
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

function LifeGoalsWidget({ editMode }) {
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

function SkillsWidget({ editMode }) {
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

function ExperienceWidget({ editMode }) {
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

function EducationWidget({ editMode }) {
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

function AchievementsWidget({ editMode }) {
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
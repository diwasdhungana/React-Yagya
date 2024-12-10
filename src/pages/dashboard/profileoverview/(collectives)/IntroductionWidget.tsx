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
export function IntroductionWidget({ editMode }) {
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
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
export function ProfilePictureWidget({ editMode }) {
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
  
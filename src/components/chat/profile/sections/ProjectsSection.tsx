import React from 'react';
import { Plus, Trash2, Link as LinkIcon } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  link?: string;
}

interface ProjectsSectionProps {
  projects: Project[];
  onProjectsChange: (projects: Project[]) => void;
}

export function ProjectsSection({ projects, onProjectsChange }: ProjectsSectionProps) {
  const addProject = () => {
    onProjectsChange([...projects, { title: '', description: '', link: '' }]);
  };

  const removeProject = (index: number) => {
    onProjectsChange(projects.filter((_, i) => i !== index));
  };

  const updateProject = (index: number, field: keyof Project, value: string) => {
    const newProjects = [...projects];
    newProjects[index] = { ...newProjects[index], [field]: value };
    onProjectsChange(newProjects);
  };

  return (
    <div className="space-y-4">
      {projects.map((project, index) => (
        <div key={index} className="border rounded-lg p-4 space-y-3 bg-white shadow-sm">
          <div className="flex justify-between items-start">
            <input
              type="text"
              placeholder="Project Title"
              className="text-lg font-medium focus:outline-none focus:ring-2 focus:ring-purple-500 rounded px-2 py-1 w-full"
              value={project.title}
              onChange={(e) => updateProject(index, 'title', e.target.value)}
            />
            <button
              onClick={() => removeProject(index)}
              className="text-gray-400 hover:text-red-500 transition-colors"
            >
              <Trash2 className="h-5 w-5" />
            </button>
          </div>
          <textarea
            placeholder="Project Description"
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            value={project.description}
            onChange={(e) => updateProject(index, 'description', e.target.value)}
          />
          <div className="relative">
            <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="url"
              placeholder="Project URL (optional)"
              className="w-full pl-9 pr-3 py-2 border rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              value={project.link}
              onChange={(e) => updateProject(index, 'link', e.target.value)}
            />
          </div>
        </div>
      ))}
      <button
        onClick={addProject}
        className="flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium"
      >
        <Plus className="h-5 w-5" />
        Add Project
      </button>
    </div>
  );
}

import React from "react";
import { ExternalLink, Calendar, Globe } from "lucide-react";

interface ExampleCardProps {
  title: string;
  source: string;
  date: string;
  url: string;
  focus: string;
  compatibility: string;
}

export function ExampleCard({
  title,
  source,
  date,
  url,
  focus,
  compatibility,
}: ExampleCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-all duration-200 hover:border-orange-200 group"
    >
      <div className="flex items-start justify-between gap-4 mb-2">
        <h3 className="font-semibold text-lg text-gray-900 group-hover:text-orange-600 transition-colors">
          {title}
        </h3>
        <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-orange-500 transition-colors flex-shrink-0" />
      </div>

      <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
        <div className="flex items-center gap-1">
          <Globe className="w-4 h-4" />
          <span>{source}</span>
        </div>
        <div className="flex items-center gap-1">
          <Calendar className="w-4 h-4" />
          <span>{date}</span>
        </div>
      </div>

      <div className="space-y-3">
        <div>
          <span className="text-sm font-medium text-gray-500">Focus:</span>
          <p className="text-sm text-gray-700 mt-1">{focus}</p>
        </div>
        <div>
          <span className="text-sm font-medium text-gray-500">
            Compatibility:
          </span>
          <p className="text-sm text-gray-700 mt-1">{compatibility}</p>
        </div>
      </div>
    </a>
  );
}

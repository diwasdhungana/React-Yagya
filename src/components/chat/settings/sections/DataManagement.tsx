import React, { useState } from 'react';
import { Download, Trash2, AlertCircle } from 'lucide-react';

export function DataManagement() {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  return (
    <div className="space-y-6">
      <button className="flex items-center gap-2 w-full p-3 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors">
        <Download className="h-5 w-5" />
        <span>Download Your Data</span>
      </button>

      <button className="flex items-center gap-2 w-full p-3 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors">
        <Trash2 className="h-5 w-5" />
        <span>Clear All Data</span>
      </button>

      <div className="relative">
        <button
          onClick={() => setShowDeleteConfirm(true)}
          className="flex items-center gap-2 w-full p-3 bg-red-100 hover:bg-red-200 text-red-600 rounded-md transition-colors"
        >
          <AlertCircle className="h-5 w-5" />
          <span>Delete Account</span>
        </button>

        {showDeleteConfirm && (
          <div className="absolute inset-0 flex items-center justify-center bg-white rounded-md p-4">
            <div className="text-center">
              <p className="mb-4">Are you sure? This action cannot be undone.</p>
              <div className="flex gap-2 justify-center">
                <button
                  onClick={() => setShowDeleteConfirm(false)}
                  className="px-4 py-2 bg-gray-100 rounded-md"
                >
                  Cancel
                </button>
                <button className="px-4 py-2 bg-red-600 text-white rounded-md">Delete</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

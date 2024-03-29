'use client'

import { UploadCloud } from 'lucide-react'
import { useFileInput } from './Root'

export function Trigger() {
  const { id } = useFileInput()

  return (
    <label
      htmlFor={id}
      className="group flex flex-1 cursor-pointer flex-col items-center gap-3 rounded-lg border border-zinc-300 px-6 py-4 text-center text-zinc-500 shadow-sm
                  hover:border-violet-200 hover:bg-violet-25 hover:text-violet-700"
    >
      <div
        className="rounded-full border-6 border-zinc-50 bg-zinc-100 p-2
                  group-hover:border-violet-50
                  group-hover:bg-violet-100
                  "
      >
        <UploadCloud className="h-5 w-5 text-zinc-600 group-hover:text-violet-700" />
      </div>

      <div className="item-center flex flex-col gap-1">
        <span className="text-sm font-medium">
          <span className="font-semibold text-violet-700">Click to upload</span>{' '}
          or drag and drop your photo
        </span>
        <span className="text-xm">SVG, PNG, JPG or GIF (max. 800x400px)</span>
      </div>
    </label>
  )
}

'use client'

import * as SelectBase from '@radix-ui/react-select'
import { ChevronDown } from 'lucide-react'
import { ReactNode } from 'react'

export interface SelectProps extends SelectBase.SelectProps {
  children: ReactNode
  placeholder: string
}

export function Select({ children, placeholder, ...props }: SelectProps) {
  return (
    <SelectBase.Root {...props}>
      <SelectBase.Trigger
        className="flex h-11 w-full items-center justify-between gap-2 rounded-lg border  border-zinc-300 px-3 py-2 shadow-sm outline-none
        focus:border-violet-300  focus:bg-violet-25 focus:ring-4 focus:ring-violet-100 data-[placeholder]:text-zinc-500"
      >
        <SelectBase.Value placeholder={placeholder} className="text-black" />
        <SelectBase.Icon>
          <ChevronDown className="h-5 w-5 text-zinc-500" />
        </SelectBase.Icon>
      </SelectBase.Trigger>

      <SelectBase.Portal>
        <SelectBase.Content
          side="top"
          position="popper"
          sideOffset={8}
          className="
            z-10 w-[--radix-select-trigger-width] flex-1 animate-slideDownAndFade overflow-hidden rounded-lg border border-zinc-200 bg-white
            shadow-sm
            "
        >
          <SelectBase.Viewport>{children}</SelectBase.Viewport>
        </SelectBase.Content>
      </SelectBase.Portal>
    </SelectBase.Root>
  )
}

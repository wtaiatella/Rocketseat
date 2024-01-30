'use client'
import * as Select from '@radix-ui/react-select'
import { Check } from 'lucide-react'

export type SelectItemProps = Select.SelectItemProps & {
  text: string
}

export function SelectItem({ text, ...props }: SelectItemProps) {
  return (
    <Select.Item
      className="item-center flex justify-between gap-2 px-3 py-2.5 outline-none data-[highlighted]:bg-zinc-100"
      {...props}
    >
      <Select.ItemText>{text}</Select.ItemText>
      <Select.ItemIndicator>
        <Check className="h-5 w-5 text-violet-500" />
      </Select.ItemIndicator>
    </Select.Item>
  )
}

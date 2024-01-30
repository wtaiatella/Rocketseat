import { ComponentProps } from 'react'

type InputPrefixProps = ComponentProps<'div'>

function InputPrefix(props: InputPrefixProps) {
  return <div {...props} />
}

type InputControlProps = ComponentProps<'input'>

function InputControl(props: InputControlProps) {
  return (
    <input
      className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600 outline-none"
      {...props}
    />
  )
}

export type InputRootsProps = ComponentProps<'div'>

function InputRoot(props: InputRootsProps) {
  return (
    <div
      className="flex items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm"
      {...props}
    />
  )
}

const Input = {
  Prefix: InputPrefix,
  Control: InputControl,
  Root: InputRoot,
}

export default Input

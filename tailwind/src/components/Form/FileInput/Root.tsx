'use client'

import {
  ComponentProps,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'
import { nanoid } from 'nanoid'

export type RootProps = ComponentProps<'div'>

type FileInputContextType = {
  id: string
  files: File[]
  onFilesSelected: (files: File[], multiple: boolean) => void
}

const FileInputContext = createContext({} as FileInputContextType)

export function Root(props: RootProps) {
  const [id, setId] = useState<string>('')
  const [files, setFiles] = useState<File[]>([])

  useEffect(() => {
    setId(nanoid()) // generate a unique ID on the client side
  }, [])

  function onFilesSelected(files: File[], multiple: boolean) {
    if (multiple) {
      setFiles((state) => [...state, ...files])
    } else {
      setFiles(files)
    }
  }

  return (
    <FileInputContext.Provider value={{ id, files, onFilesSelected }}>
      <div {...props} />
    </FileInputContext.Provider>
  )
}

export const useFileInput = () => useContext(FileInputContext)

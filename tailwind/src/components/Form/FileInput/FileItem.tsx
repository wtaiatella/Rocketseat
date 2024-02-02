import { Button } from '@/components/Button'
import { formatBytes } from '@/utils/format-bytes'
import { CheckCircle2, Trash2, UploadCloud } from 'lucide-react'
import { tv, VariantProps } from 'tailwind-variants'

const fileItem = tv({
  slots: {
    container:
      'group flex items-start gap-4 rounded-lg border border-zinc-200 p-4',
    icon: 'rounded-full border-4 border-violet-100 bg-violet-200 p-2 text-violet-600',
    deleteButton: '',
  },

  variants: {
    state: {
      progress: {
        container: '',
      },
      complete: {
        container: 'border-violet-500',
      },
      error: {
        container: 'bg-error-50 border-error-300',
        icon: 'bg-error-200 border-error-100 text-error-600',
        deleteButton: 'text-error-700 hover:text-error-900 hover:bg-error-200',
      },
    },
  },

  defaultVariants: {
    state: 'progress',
  },
})
export interface FileItemProps extends VariantProps<typeof fileItem> {
  name: string
  size: number
}

export function FileItem({ name, size, state }: FileItemProps) {
  const { container, icon, deleteButton } = fileItem({ state })

  return (
    <div className={container()}>
      <div className={icon()}>
        <UploadCloud className="h-4 w-4" />
      </div>

      {state === 'error' ? (
        <div className="flex flex-1 flex-col items-start gap-1">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-error-700">
              Upload failed, please try again
            </span>
            <span className="text-xs text-error-600">{name}</span>
          </div>

          <button
            type="button"
            className="text-sm font-semibold text-error-700 hover:text-error-900"
          >
            Try again
          </button>
        </div>
      ) : (
        <div className="flex flex-1 flex-col items-start gap-1">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-zinc-700">{name}</span>
            <span className="text-xs text-zinc-500">
              {formatBytes(size)} bytes
            </span>
          </div>

          <div className="flex w-full items-center gap-3">
            <div className="flex h-2 flex-1 rounded-full bg-zinc-200">
              <div
                className="h-full rounded-full bg-violet-600"
                style={{ width: state === 'complete' ? '100%' : '80%' }}
              ></div>
            </div>
            <span className="text-sm text-zinc-700">
              {state === 'complete' ? '100%' : '80%'}
            </span>
          </div>
        </div>
      )}

      {state === 'complete' ? (
        <CheckCircle2 className="m-2 h-5 w-5 fill-violet-600 text-white" />
      ) : (
        <Button type="button" className={deleteButton()} variant="ghost">
          <Trash2 className="h-5 w-5" />
        </Button>
      )}
    </div>
  )
}

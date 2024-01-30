import { SettingsTabs } from '@/components/SettingsTabs'
import Input from '@/components/Input'
import { Bold, Italic, Link, ListOrdered, Mail } from 'lucide-react'
import * as FileInput from '@/components/Form/FileInput'
import { Select } from '@/components/Form/Select/index'
import { SelectItem } from '@/components/Form/Select/SelectItem'
import { Textarea } from '@/components/Form/Textarea'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>

      <SettingsTabs />

      <div className="mt-6 flex flex-col ">
        <div className="flex items-center justify-between border-b border-zinc-200 pb-5">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900">Personal Info</h2>
            <span className="text-sm text-zinc-500">
              Update your photo and personal detail here.{' '}
            </span>
          </div>
          <div className="flex items-center gap-2 ">
            <button
              type="button"
              className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold
                text-zinc-700 shadow-sm hover:bg-zinc-100"
            >
              Cancel
            </button>
            <button
              form="settings"
              type="submit"
              className="rounded-lg border bg-violet-600 px-4 py-2 text-sm font-semibold
              text-white shadow-sm hover:bg-violet-800"
            >
              Save
            </button>
          </div>
        </div>

        <form
          id="settings"
          action=""
          className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200"
        >
          {/* First Name */}
          <div className="grid grid-cols-form items-center gap-3">
            <label
              htmlFor="FirstName"
              className="text-sm font-medium text-zinc-700"
            >
              Name
            </label>
            <div className="grid grid-cols-2 gap-6">
              <Input.Root>
                <Input.Control id="FirstName" defaultValue="Wagner" />
              </Input.Root>
              <Input.Root>
                <Input.Control id="SureName" defaultValue="Taiatella" />
              </Input.Root>
            </div>
          </div>
          {/* Email */}
          <div className="grid grid-cols-form items-center gap-3 pt-5">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-700"
            >
              Email address
            </label>

            <Input.Root>
              <Input.Prefix>
                <Mail className="h-5 w-5 text-zinc-500" />
              </Input.Prefix>
              <Input.Control
                id="email"
                type="email"
                defaultValue="email@email.com"
              />
            </Input.Root>
          </div>
          {/* Photo */}
          <div className="grid grid-cols-form items-center gap-3 pt-5">
            <label
              htmlFor="photo"
              className="text-sm font-medium text-zinc-700"
            >
              Your photo
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                This will be displayed in tour profile.
              </span>
            </label>

            <FileInput.Root className="flex items-start gap-5">
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Control />
            </FileInput.Root>
          </div>
          {/* Role */}
          <div className="grid grid-cols-form items-center gap-3 pt-5">
            <label htmlFor="role" className="text-sm font-medium text-zinc-700">
              Role
            </label>

            <Input.Root>
              <Input.Control id="role" defaultValue="CTO" />
            </Input.Root>
          </div>
          {/* Country */}
          <div className="grid grid-cols-form items-center gap-3 pt-5">
            <label
              htmlFor="country"
              className="text-sm font-medium text-zinc-700"
            >
              Country
            </label>
            <Select placeholder="Select a country...">
              <SelectItem text="Brazil" value="br" />
              <SelectItem text="United States" value="us" />
            </Select>
          </div>
          {/* Timezone */}
          <div className="grid grid-cols-form items-center gap-3 pt-5">
            <label
              htmlFor="timezone"
              className="text-sm font-medium text-zinc-700"
            >
              Time Zone
            </label>

            <Select placeholder="Select a Time Zone...">
              <SelectItem text="UTC-3 São Paulo" value="saopaulo" />
              <SelectItem text="UTC-4 Manaus" value="manaus" />
            </Select>
          </div>
          {/* Bio */}
          <div className="grid grid-cols-form items-center gap-3 pt-5">
            <label htmlFor="bio" className="text-sm font-medium text-zinc-700">
              Bio
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Write a short introduction.
              </span>
            </label>

            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <Select placeholder="" defaultValue="normal">
                  <SelectItem text="Normal Text" value="normal" />
                  <SelectItem text="Markdown" value="md" />
                </Select>

                <div className="item-center flex">
                  <button
                    type="button"
                    className="rounded-md p-2 hover:bg-zinc-100"
                  >
                    <Bold className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </button>

                  <button
                    type="button"
                    className="rounded-md p-2 hover:bg-zinc-100"
                  >
                    <Italic className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </button>

                  <button
                    type="button"
                    className="rounded-md p-2 hover:bg-zinc-100"
                  >
                    <Link className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </button>

                  <button
                    type="button"
                    className="rounded-md p-2 hover:bg-zinc-100"
                  >
                    <ListOrdered
                      className="h-4 w-4 text-zinc-500"
                      strokeWidth={3}
                    />
                  </button>
                </div>
              </div>
              <Textarea
                id="bio"
                defaultValue="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development."
              />
            </div>
          </div>
          {/* Portifolio */}
          <div className="grid grid-cols-form items-center gap-3 pt-5">
            <label
              htmlFor="portifolio"
              className="text-sm font-medium text-zinc-700"
            >
              Portifolio Projects
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Share a few snippets of your work.
              </span>
            </label>

            <FileInput.Root>
              <FileInput.Trigger />
              <FileInput.Control multiple />
              <FileInput.FileList />
            </FileInput.Root>
          </div>
          {/* Form Buttons */}
          <div className="flex items-center justify-end gap-2 pt-5">
            <button
              type="button"
              className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold
                text-zinc-700 shadow-sm hover:bg-zinc-100"
            >
              Cancel
            </button>
            <button
              form="settings"
              type="submit"
              className="rounded-lg border bg-violet-600 px-4 py-2 text-sm font-semibold
              text-white shadow-sm hover:bg-violet-800"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

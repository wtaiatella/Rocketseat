'use client'
import { Logo } from './Logo'
import {
  Search,
  BarChart,
  CheckSquare,
  Flag,
  Home,
  SquareStack,
  Users,
  Cog,
  LifeBuoy,
} from 'lucide-react'
import { NavItem } from './NavItem'
import { UsedSpaceWidget } from './UsedSpaceWidget'
import { Profile } from './Profile'
import Input from '../Input'
import * as Collapsible from '@radix-ui/react-collapsible'

export function Sidebar() {
  return (
    <Collapsible.Root
      className="
      fixed bottom-0 left-0 right-0 top-0 z-20 flex flex-col gap-6 border-b border-zinc-200 bg-white p-4 
      lg:left-0 lg:right-auto lg:h-full lg:w-[18rem] lg:border-b lg:border-r lg:px-5 lg:py-8
      "
    >
      <Logo />

      <Input.Root>
        <Input.Prefix>
          <Search className="h-5 w-5 text-zinc-500" />
        </Input.Prefix>
        <Input.Control placeholder="Search" />
      </Input.Root>

      <nav className="space-y-0.5">
        <NavItem title="Home" href="" icon={Home} />
        <NavItem title="Dashboard" href="" icon={BarChart} />
        <NavItem title="Project" href="" icon={SquareStack} />
        <NavItem title="Tasks" href="" icon={CheckSquare} />
        <NavItem title="Reporting" href="" icon={Flag} />
        <NavItem title="Users" href="" icon={Users} />
      </nav>

      <div className="mt-auto flex flex-col gap-6">
        <nav className="flex flex-col gap-1">
          <NavItem icon={LifeBuoy} href="" title="Support" />
          <NavItem icon={Cog} href="" title="Settings" />
        </nav>

        <UsedSpaceWidget />
        <div className="h-px bg-zinc-200 dark:bg-zinc-800" />
        <Profile />
      </div>
    </Collapsible.Root>
  )
}

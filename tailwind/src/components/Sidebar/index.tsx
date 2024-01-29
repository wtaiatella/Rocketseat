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

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
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
    </aside>
  )
}

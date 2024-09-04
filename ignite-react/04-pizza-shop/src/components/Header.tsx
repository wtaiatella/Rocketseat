import { Home, Pizza, Utensils } from "lucide-react";

import { AccountMenu } from "./AccountMenu";
import { NavLink } from "./NavLink";
import { ModeToggle } from "./theme/mode-toggle";
import { Separator } from "./ui/separator";

export function Header() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center gap-6 px-6">
        <Pizza className="h-6 w-6" />
        <Separator orientation="vertical" className="h-6" />
        <nav className="flex items-center space-x-4 lg:space-x-6">
          <NavLink to="/">
            <Home className="h-4 w-4" />
            Home
          </NavLink>
          <NavLink
            to="/orders"
            className="flex items-center gap-2 text-lg font-semibold lg:text-xl"
          >
            <Utensils className="h-4 w-4" />
            Orders
          </NavLink>
        </nav>
        <div className="ml-auto">
          <ModeToggle />
        </div>
        <AccountMenu />
      </div>
    </div>
  );
}

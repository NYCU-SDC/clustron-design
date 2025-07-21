import { NavLink } from "react-router";
import { useTranslation } from "react-i18next";
import {
  DropdownMenu,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu.tsx";
import ColorModeToggle from "@/components/AppShell/ColorModeToggle.tsx";
import { CircleUserRound } from "lucide-react";
import { LogOut } from "lucide-react";

function navLinkclass(isActive: boolean) {
  return [
    "text-base px-3 py-2 rounded-lg",
    "hover:bg-gray-100 dark:hover:bg-gray-600",
    isActive ? "" : "text-gray-500 dark:text-gray-400",
  ]
    .filter(Boolean)
    .join(" ");
}

export default function Navbar() {
  const { t } = useTranslation();

  return (
    <nav className="sticky top-0 w-full border-b bg-white dark:bg-black">
      <div className="flex items-center justify-between w-full px-6 py-4">
        <div className="flex items-center space-x-4">
          <div className="text-2xl font-bold px-3 py-2">Clustron</div>
          {window.location.pathname != "/onboarding" && (
            <>
              <NavLink
                to="/groups"
                className={({ isActive }) => navLinkclass(isActive)}
              >
                {t("navbar.groupLink")}
              </NavLink>
              <NavLink
                to="/setting"
                className={({ isActive }) => navLinkclass(isActive)}
              >
                {t("navbar.settingLink")}
              </NavLink>
            </>
          )}
        </div>
        <div className="flex items-center space-x-4">
          <ColorModeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger>
              <CircleUserRound />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel className="text-gray-600 dark:text-gray-400">
                example@example.com
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut />
                {t("navbar.logoutBtn")}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}

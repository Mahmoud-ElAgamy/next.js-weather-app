import { SettingsIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ToggleUnits from "./ToggleUnits";

export default function Settings() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          title="Settings"
          className="bg-gradient border-gray-200/5 duration-300 hover:bg-accent/30"
        >
          <SettingsIcon size={16} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="bg-gradient space-y-1 border-gray-200/5 backdrop-blur-[2px]"
        align="end"
      >
        <DropdownMenuLabel>Settings:</DropdownMenuLabel>
        <DropdownMenuLabel>
          <ToggleUnits />
        </DropdownMenuLabel>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

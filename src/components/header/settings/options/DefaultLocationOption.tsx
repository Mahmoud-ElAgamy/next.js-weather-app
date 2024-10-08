import { Save, Trash2, Loader2 } from "lucide-react";
import { InfoCircledIcon, StarFilledIcon } from "@radix-ui/react-icons";

import {
  DropdownMenuItem,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import ToolTip from "@/components/ui/tooltip";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import useDefaultLocation from "@/hooks/useDefaultLocation";

const DefaultLocationOption = () => {
  const {
    isLoading,
    saveLocation,
    removeLocation,
    userDefaultLocation,
    city,
    isDefaultLocationEnabled,
    setIsDefaultLocationEnabled,
  } = useDefaultLocation();

  return (
    <div className="relative">
      {!userDefaultLocation && (
        <DropdownMenuItem
          className="gap-2"
          onSelect={() => saveLocation()}
          disabled={!city}
        >
          <Save size={16} /> Save Location
        </DropdownMenuItem>
      )}

      {!!userDefaultLocation && (
        <DropdownMenuLabel className="rounded-sm py-2 font-normal hover:bg-accent/30">
          <Label className="flex cursor-pointer items-center gap-2">
            <StarFilledIcon />
            {userDefaultLocation.city}
            <Checkbox
              className="size-[14px]"
              checked={isDefaultLocationEnabled}
              onCheckedChange={() =>
                setIsDefaultLocationEnabled(!isDefaultLocationEnabled)
              }
            />
          </Label>
        </DropdownMenuLabel>
      )}

      <div className="absolute right-2 top-[6px]">
        {!userDefaultLocation && (
          <ToolTip
            tooltipTrigger={<InfoCircledIcon className="size-4" />}
            tooltipContent={
              <p>
                This option saves the currently selected city as your default
                location.
              </p>
            }
          />
        )}
        {!!userDefaultLocation && (
          <button
            className="cursor-pointer"
            onClick={removeLocation}
            title="Remove default location"
            disabled={isLoading}
          >
            {isLoading ? (
              <Loader2 size={16} className="animate-spin" />
            ) : (
              <Trash2
                size={16}
                className="text-red-500 transition-colors hover:text-red-600"
              />
            )}
          </button>
        )}
      </div>
    </div>
  );
};
export default DefaultLocationOption;

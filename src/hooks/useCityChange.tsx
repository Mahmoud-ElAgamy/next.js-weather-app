import { useCallback, type Dispatch, type SetStateAction } from "react";
import { useRouter } from "next/navigation";
import buildLocationUrl from "@/utils/buildLocationUrl";
import type { Location } from "@/types/WeatherFlags";

const useCityChange = (setOpen: Dispatch<SetStateAction<boolean>>) => {
  const router = useRouter();

  const handleCityChange = useCallback(
    (selectedCity: Partial<Location>) => {
      setOpen(false);

      try {
        const cityName = selectedCity.name ?? "";

        router.push(
          buildLocationUrl(cityName, selectedCity.lat, selectedCity.lon),
        );
      } catch (error) {
        console.error(
          `Error navigating to ${encodeURIComponent(selectedCity.name ?? "")}:`,
          error,
        );
      }
    },
    [router, setOpen],
  );

  return { handleCityChange };
};

export default useCityChange;

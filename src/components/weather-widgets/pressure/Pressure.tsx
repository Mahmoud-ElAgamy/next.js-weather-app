import { Compass } from "lucide-react";

import type { Location, WeatherFlags } from "@/types/WeatherFlags";
import pressureLevels from "@/components/weather-widgets/pressure/pressureLevels";
import PressureDetails from "./PressureDetails";
import ErrorMessage from "../../ui/error-message";
import getCurrentLevel from "@/utils/getCurrentLevel";
import getForecastWeather from "@/utils/getForecastWeather";

const Pressure = async ({ city, lat, lon }: Partial<Location>) => {
  const weatherData: WeatherFlags | null = await getForecastWeather(
    city,
    lat,
    lon,
  );

  const { current } = weatherData ?? {};

  const { description } = getCurrentLevel(
    current?.pressure_mb ?? 0,
    pressureLevels,
  );

  return (
    <section className="container-style">
      <h2 className="title">
        <Compass size={16} />
        Pressure
      </h2>

      {!current && <ErrorMessage error="Pressure" />}

      {current && (
        <PressureDetails
          pressure_mb={current.pressure_mb}
          pressure_in={current.pressure_in}
          description={description}
        />
      )}
    </section>
  );
};
export default Pressure;

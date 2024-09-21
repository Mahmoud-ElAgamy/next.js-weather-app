import AirPollution from "@/components/AirPollution";
import CurrentTemperature from "@/components/current-temperature/CurrentTemperature";
import FeelsLikeTemp from "@/components/FeelsLikeTemp";
import Header from "@/components/Header";
import Humidity from "@/components/Humidity";
import SunRiseSet from "@/components/SunRiseSet";
import Ultraviolet from "@/components/Ultraviolet";
import WindCompass from "@/components/WindCompass";

export default function Home() {
  return (
    <>
      <Header />
      <main className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-4 lg:grid-cols-4">
        <CurrentTemperature />
        <div className="flex flex-col gap-8 md:gap-4">
          <FeelsLikeTemp />
          <Humidity />
        </div>
        <div className="flex flex-col gap-8 md:gap-4">
          <WindCompass />
          <SunRiseSet />
        </div>
        <div className="flex flex-col gap-8 md:gap-4">
          <AirPollution />
          <Ultraviolet />
        </div>
      </main>
    </>
  );
}

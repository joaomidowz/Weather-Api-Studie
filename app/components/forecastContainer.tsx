import { getForecast } from "~/services/testingApi";
import { ForecastCard } from "./forecastCard"
import React, { useEffect, useState } from "react";

export function ForecastContainer({ city }: { city: string }) {

    const [forecast, setForecast] = useState<any>([]);

    useEffect(() => {
        async function fetchForecast() {
            if (!city) return;

            const forecastData = await getForecast(city)

            const filteredData = forecastData.filter((item: { dt_txt: string | string[]; }) => item.dt_txt.includes("12:00:00")).slice(0, 5)


            setForecast(filteredData)
        }



        fetchForecast();
    }, [city])

    const formatDate = (dateString: string) => {
        return new Intl.DateTimeFormat("pt-BR", {
            weekday: "long",
            day: "2-digit",
            month: "long",
            year: "numeric",
        }).format(new Date(dateString));
    };

    return (
        <div className="grid grid-auto-rows-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
            {forecast?.map((forecast: { dt_txt: string; main: { temp: string; feels_like: string; temp_max: string; temp_min: string; }; weather: { description: string; }[]; }, index: React.Key | null | undefined) => (
                <ForecastCard
                    key={index}
                    day={formatDate(forecast.dt_txt)}
                    temp={forecast.main.temp}
                    feels={forecast.main.feels_like}
                    max={forecast.main.temp_max}
                    min={forecast.main.temp_min}
                    desc={forecast.weather[0].description}
                />
            ))}
        </div>
    )
}
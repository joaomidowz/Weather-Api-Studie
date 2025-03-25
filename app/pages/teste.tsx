// app/pages/teste.tsx
import React, { use, useEffect, useState } from "react";
import { getWeather } from "../services/testingApi";
import { WeatherCard } from "~/components/weatherCard";
import { ForecastContainer } from "~/components/forecastContainer";
export function Teste() {
    const [weather, setWeather] = useState<any>(null);
    const [city, setCity] = useState<string>("");

    async function fecthWeather() {
        if (!city) return;

        const weatherData = await getWeather(city)
        setWeather(weatherData)
    }

    return (
        <main className="flex items-center justify-center bg-primary text-primary py-5 min-h-screen" >
            <div className="flex-1 flex flex-col items-center gap-5">
                <h1 className="text-secundary text-3xl font-extrabold">Clima Agora!</h1>
                <input className="outline text-black outline-secundary p-2 rounded-2xl text-center" type="text" name="city" id="city" onChange={(e) => setCity(e.target.value)} />
                <button className="p-3 bg-secundary outline-primary cursor-pointer outline rounded-2xl font-extrabold" onClick={fecthWeather} onChange={fecthWeather}>Bucar Clima</button>
                {weather && (
                    <WeatherCard
                        city={weather.name}
                        country={weather.sys.country}
                        temp={weather.main.temp}
                        min={weather.main.temp_min.toFixed(1)}
                        max={weather.main.temp_max.toFixed(1)}
                        condition={weather.weather[0].description}
                        rain={weather.rain ? `${weather.rain["1h"]} mn` : "Sem chuva"}
                    />
                )}
                <div className="px-5">
                    <p className="text-secundary text-center text-3xl font-extrabold">Previsão:</p>
                    <ForecastContainer
                        city={city}
                    />
                </div>
            </div>
        </main>
    );
}

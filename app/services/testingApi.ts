// app/services/weatherApi.ts

const API_KEY = "65cb86ec4ab6e45c74aab43696157bfc"; // 🔥 Substitua pela sua API Key
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
const BASE_URL_FORECAST = "https://api.openweathermap.org/data/2.5/forecast"


// Função para buscar o clima de uma cidade
export async function getWeather(city: string) {
    try {
        const response = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric&lang=pt_br`)

        if (!response.ok) throw new Error("Erro ao buscar cidade")

        const data = await response.json()
        return data;
    } catch (error) {
        console.error(error);
        return null
    }
}

export async function getForecast(city: string) {
    try {
        const response = await fetch(`${BASE_URL_FORECAST}?q=${city}&appid=${API_KEY}&units=metric&lang=pt_br`)

        if (!response.ok) throw new Error("Erro ao buscar cidade")

        const data = await response.json()

        return data.list;
    } catch (error) {
        console.error(error);
        return null
    }
}

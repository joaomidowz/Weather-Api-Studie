export function WeatherCard({ city, country, temp, condition, rain }: {
    city: string,
    country: string,
    temp: string,
    condition: string,
    rain: string
}
) {
    return (
        <div className="bg-secundary p-5 rounded-2xl border-terciary border text-primary">
            <h1><strong>Tempo em</strong> - {city}</h1>
            <p><strong>País: </strong>{country}</p>
            <p><strong>Temperatura: </strong>{temp} °C</p>
            <p><strong>Condição: </strong>{condition}</p>
            <p><strong>Chuva na última hora: </strong>{rain}</p>
        </div>
    )
}
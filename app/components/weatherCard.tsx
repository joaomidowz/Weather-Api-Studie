import { getWeatherStyles } from "./getWeatherStyles";

export function WeatherCard({ city, country, temp, min, max, condition, rain }: {
    city: string,
    country: string,
    temp: string,
    min: string,
    max: string,
    condition: string,
    rain: string
}) {
    const styles = getWeatherStyles(condition);
    
    return (
        <div className={`relative p-4 px-7 rounded-2xl border overflow-hidden ${styles.background} ${styles.border} ${styles.text}`}>
            {/* Efeitos de fundo */}
            {condition.toLowerCase().includes('rain') && (
                <div className="rain-effect absolute inset-0 opacity-50"></div>
            )}
            
            {condition.toLowerCase().includes('sun') && (
                <div className="sun-effect"></div>
            )}

            {condition.toLowerCase().includes('cloud') && (
                <div className="cloudy-effect opacity-40"></div>
            )}

            <div className="relative z-10">
                <h1 className="text-2xl font-bold flex items-center gap-4">
                    <span className="text-3xl"></span>
                    Tempo em {city} 
                    <span className="text-2xl">{styles.emoji}</span>
                </h1>
                
                <div className="space-y-2">
                    <p><span className="font-semibold">País:</span> {country}</p>
                    <p><span className="font-semibold">Temperatura:</span> {temp}°C</p>
                    <p className="flex items-center gap-2">
                        <span className="font-semibold">Condição:</span> {condition}
                    </p>
                    <p className="flex items-center gap-2">
                        Mínima: {min}
                    </p>
                    <p className="flex items-center gap-2">
                        Máxima: {max}
                    </p>
                    <p><span className="font-semibold">Chuva:</span> {rain}</p>
                </div>
            </div>
        </div>
    )
}
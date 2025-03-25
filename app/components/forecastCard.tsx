import { getWeatherStyles } from "./getWeatherStyles";

export function ForecastCard({ day, temp, feels, max, min, desc }: {
    day: string,
    temp: string,
    feels: string,
    max: string,
    min: string,
    desc: string
}) {
    const styles = getWeatherStyles(desc);
    
    return (
        <div className={`relative p-4 rounded-xl border overflow-hidden ${styles.background} ${styles.border} ${styles.text}`}>
            <div className="relative z-10">
                <p className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <span className="text-xl">{styles.emoji}</span>
                    {day}
                </p>
                <div className="space-y-1">
                    <p><span className="font-medium">Temp:</span> {temp}°C</p>
                    <p><span className="font-medium">Sensação:</span> {feels}°C</p>
                    <p><span className="font-medium">Máx:</span> {max}</p>
                    <p><span className="font-medium">Min:</span> {min}</p>
                    <p className="flex items-center gap-2">
                        <span className="font-medium">Descrição:</span> {desc}
                    </p>
                </div>
            </div>
        </div>
    )
}
export function ForecastCard({ day, temp, feels, max, min, desc  }: {
    day: string,
    temp: string,
    feels: string,
    max: string,
    min: string,
    desc: string
}
) {
    return (
        <div className="bg-secundary p-5 rounded-2xl border-terciary border text-primary">
            <p><strong>Dia: </strong>{day}</p>
            <p><strong>Temperatura: </strong>{temp}</p>
            <p><strong>Sensação: </strong>{feels} °C</p>
            <p><strong>Máx: </strong>{max}</p>
            <p><strong>Min: </strong>{min}</p>
            <p><strong>Descrição: </strong>{desc}</p>
        </div>
    )
}
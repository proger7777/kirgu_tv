

export const SelectCity = ({ city, setActiveCity, activeCity }) => {

    return (
        <div>
            <select className="mx-[8px]" defaultValue={activeCity} onChange={(e) => setActiveCity(e.target.value) }>

                {Object.keys(city).map(cityName => (
                    <option key={cityName} > 
                        {cityName}
                    </option>
                ))}

            </select>
        </div>
    )
}

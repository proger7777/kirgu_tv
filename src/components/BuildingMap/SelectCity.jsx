

export const SelectCity = ({ city, setActiveCity }) => {

    return (
        <div>
            <select className="mx-[5px]" onChange={(e) => { setActiveCity(e.target.value); console.log(e.target.value) }}>

                {Object.keys(city).map(cityName => (
                    <option key={cityName} >
                        {cityName}
                    </option>
                ))}

            </select>
        </div>
    )
}

import React from 'react'

export const FutureConditionsCard = ({weekDay}) => {
    const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    return (
        <div>{days[weekDay]}</div>
    )
}

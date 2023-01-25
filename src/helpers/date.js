export const dates = (date) => {

    const dateO = new Date(`${date}T00:00:00`);

    const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

    const weekDay = days[dateO.getDay()];

    const shortDate = dateO.getDate() + '/' + (dateO.getMonth()+1);

    //console.log(dateO.getWeekday());

    const formatDate = dateO.toLocaleDateString("es-ar", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });
    return {formatDate, weekDay, shortDate};
}
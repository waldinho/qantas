export const getAirports = () => {
    return fetch('https://api.qantas.com/flight/refData/airport')
}
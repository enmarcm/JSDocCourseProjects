/**
 * Realiza una suma entre dos numeros
 * @param {number} n1 Primer numero a sumar
 * @param {number} n2 Segundo numero a sumar
 * @returns {number} Suma entre n1 y n2
 */
const sumar = (n1,n2) => n1 + n2;


/**
 * Realiza una multiplicacion entre dos numeros
 * @param {Object} obj - Objeto con los valores a multiplicar 
 * @param {number} obj.a - Primer numero a multiplicar
 * @param {number} obj.b - Segundo numero a multiplicar
 * @returns {number} Multiplicacion entre a y b
 */
const multiplicar = ({ a, b }) => {
    console.log(`El primer valor es ${a}`)
    console.log(`El segundo valor es ${b}`)
    return a * b;
}


/**
 * Realiza un fetch a una funcion especifica
 * @param {Object} obj - Objeto que posee la url || Tambien se puede: param {{url: string}} y asi
 * @param {string} obj.url - URL de la Api a consumir
 * @returns {Promise} - Promesa con la informacion en formato JSON
 */
const realizarFetch = async ({ url }) => {
    const response = await fetch(url)

    if(!response.ok) throw 'Hubo un error'

    const data = await response.json()
    return data
}

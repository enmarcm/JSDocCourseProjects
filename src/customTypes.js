/**
 * Usuario
 * @typedef {Object} User
 * @property {number} id - Identificador del usuario
 * @property {string} name - Nombre del usuario
 * @property {number} [age] - Edad del usuario (opcional)
 * @property {boolean} [isActive] - Usuario activo (opcional) 
 */

/**
 * Primer Usuario
 * @type {User} 
 */
const myUser = {
    id: 1,
    name: 'Ryan',
    age: 40,
    isActive: false
}

/**
 * Segundo user
 * @type {User}
 */
const segundoUsuario = {
    id: 2,
    name: 'Jose',
    isActive: true
}
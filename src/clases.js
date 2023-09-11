/**
 * Describe las caracteristicas de un programador
 * @author Enmanuel Colina <theenmanuel123@gmail.com
 * @see https://github.com/enmarcm
 * @example
 * const nuevoProg = new Programador({id: 1, name: 'Jose Martinez', language: 'python'})
 * nuevoProg.diNombre()
 * nuevoProg.cuentaLenguaje()
 * nuevoProg.diNombre().cuentaLenguaje()
 * @todo Falta implementar mas metodos
 */
class Programador{
    /**
     * Permite instanciar un objeto de la clase Programador
     * @param {Object} obj
     * @param {number} obj.id
     * @param {string} obj.name
     * @param {string} obj.language
     */
    constructor({ id, name, language }) {
        this.id = id
        this.name = name
        this.language = language
    }


    /**
     * Permite mostrar el nombre del programador
     * @returns {Programador} - Retorna la misma instancia
     */
    diNombre = () => {
        console.log(this.name)
        return this
    }


    /**
     * Dice cual es el lenguaje favorito
     * @returns {void}
     */
    cuentaLenguaje = () => {
        console.log(`Mi lenguaje de programacion favorito es ${this.language}`)
    }
}


/**
 * Conoce mas de esto en {@link Programador}
 */
const prog = new Programador({ id: 1, name: 'Jose', language: 'JavaScript' })
prog.diNombre().cuentaLenguaje()
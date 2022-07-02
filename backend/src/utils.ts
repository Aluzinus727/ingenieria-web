require('dotenv').config()

export const processRut = (rut: string): string => {
    const modifiedRut = rut.slice(0, -1).replace('.', '')

    return modifiedRut
}
const mult = require('../src/mult')

it('should calculate correct multiplication', () => {
    const result = mult(2, 5)
    expect(result).toBe(10)
})
const {sum} = require("./sum");

describe('sum', () => {
    it('should return sum of 2', () => {
        expect(sum(1, 2)).toBe(3)
    })
});

describe('sum', () => {
    it('should throw error if arguments are not numbers', () => {
        expect(() => sum(1, '2')).toThrow('Arguments must be numbers')
    })
})
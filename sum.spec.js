const {sum} = require("./sum");

describe('sum', () => {
    it('should return sum of 2', () => {
        expect(sum(1, 2)).toBe(3)
    })
});

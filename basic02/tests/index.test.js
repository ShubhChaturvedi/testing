
const sum = require('../index');


describe('sum', () => {
    test('sum(1, 2) should return 3', () => {
        expect(sum(1, 2)).toBe(3);
    });

    test('sum(2, 2) should return 4', () => {
        expect(sum(2, 2)).toBe(4);
    });

    test('sum(3, 2) should return 5', () => {
        expect(sum(3, 2)).toBe(5);
    });
});
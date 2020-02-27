const enhancer = require('./enhancer.js');

describe('enhancer.js test', () => {
    describe('repair function', () => {
        it('Durability restored to 100', () => {
            const item = {
                name: "Excalibur",
                enhancement: 5,
                durability: 95
            }
            const newItem = enhancer.repair(item);
            expect(newItem.durability).toBe(100)
        })
        it('Name and enhancement are untouched', () => {
            const item = {
                name: "Excalibur",
                enhancement: 5,
                durability: 95
            }
            const newItem = enhancer.repair(item);
            expect(newItem.name).toBe("Excalibur");
            expect(newItem.enhancement).toBe(5);
        })
    })
    describe('success function', () => {
        it('Enhancement goes up by one', () => {
            const item = {
                name: "Excalibur",
                enhancement: 5,
                durability: 95
            }
            const newItem = enhancer.succeed(item);
            expect(newItem.enhancement).toBe(6);
        })
        it('Enhancement does not go over 20', () => {
            const item = {
                name: "Excalibur",
                enhancement: 20,
                durability: 95
            }
            const newItem = enhancer.succeed(item);
            expect(newItem.enhancement).toBe(20);
        })
        it('Name and durability are untouched', () => {
            const item = {
                name: "Excalibur",
                enhancement: 5,
                durability: 95
            }
            const newItem = enhancer.succeed(item);
            expect(newItem.name).toBe("Excalibur");
            expect(newItem.durability).toBe(95);
        })
    })
    describe('fail function', () => {
        it('If Enhancement is less than 15, durability decreases by 5', () => {
            const item = {
                name: "Excalibur",
                enhancement: 5,
                durability: 95
            }
            const newItem = enhancer.fail(item);
            expect(newItem.durability).toBe(90);
        })
        it('If Enhancement is 15 or more, durability is decreased by 10.', () => {
            const item = {
                name: "Excalibur",
                enhancement: 15,
                durability: 95
            }
            const newItem = enhancer.fail(item);
            expect(newItem.durability).toBe(85);
        })
        it('If Enhancement is greater than 16, Enhancement decreases by 1', () => {
            const item = {
                name: "Excalibur",
                enhancement: 17,
                durability: 95
            }
            const newItem = enhancer.fail(item);
            expect(newItem.enhancement).toBe(16);
        })
    })
    describe('get function', () => {
        it('If Enhancement is 0, name is not modified', () => {
            const item = {
                name: "Excalibur",
                enhancement: 0,
                durability: 95
            }
            const newItem = enhancer.get(item);
            expect(newItem.name).toBe('Excalibur')
        })
        it('If Enhancement is greater than 0, return name precluded by [+(ENHANCEMENT)]', () => {
            const item = {
                name: "Excalibur",
                enhancement: 5,
                durability: 95
            }
            const newItem = enhancer.get(item);
            expect(newItem.name).toBe('[+5] Excalibur')
        })
    })
})
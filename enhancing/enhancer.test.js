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
            expect(newItem.name).toBe(item.name);
            expect(newItem.enhancement).toBe(item.enhancement);
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
            expect(newItem.enhancement).toBe(item.enhancement + 1);
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
            const newItem = enhancer.repair(item);
            expect(newItem.name).toBe(item.name);
            expect(newItem.durability).toBe(item.durability);
        })
    })
})
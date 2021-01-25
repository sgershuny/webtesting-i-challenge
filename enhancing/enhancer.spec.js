const {repair, success, fail, get}= require('./enhancer.js');
// test away!
describe('enhancer tests', () => {
    it('repair() tests', () => {
        const item = {
            name: 'Samwise Gamgee',
            durability:4,
            enhancement:6
        }
        
        const expected = {
            name: 'Samwise Gamgee',
            durability:100,
            enhancement:6
        }
        
        expect(repair(item)).toEqual(expected)   
    })

    it('success() tests', () => {
        expect(success({enhancement: 20}))
            .toEqual({enhancement:20})

        expect(success({enhancement: 17}))
            .toEqual({enhancement: 18})
        
        const item = {
            durability: 85,
            enhancement:10
        }

        const expected = {
            durability:85,
            enhancement:11
        }

        expect(success(item)).toEqual(expected)
    
    })

    it('fail() tests', () => {
        const test1 = {
            durability: 95,
            enhancement:13,
            name: 'Samwise Gamgee'
        }
        
        const expected1 = {
        //enhancement under 15 durability -5
            durability: 90,
            enhancement:13,
            name: 'Samwise Gamgee'
        }

        const test2 = {
            durability: 95,
            enhancement:15,
            name: 'Samwise Gamgee'
        }
        
        const expected2 = {
        //enhancement under 15 durability -5
            durability: 85,
            enhancement:15,
            name: 'Samwise Gamgee'
        }
        const test3 = {
            durability: 95,
            enhancement:17,
            name: 'Samwise Gamgee'
        }
        
        const expected3 = {
        //enhancement under 15 durability -5
            durability: 85,
            enhancement:16,
            name: 'Samwise Gamgee'
        }

        expect(fail(test1)).toEqual(expected1);
        expect(fail(test2)).toEqual(expected2);
        expect(fail(test3)).toEqual(expected3);

    })

    it('get() tests', () => {
        const test1 = {
            enhancement: 0,
            durability:100,
            name: "Iron Sword"
        }
        const expected1 = {
            enhancement: 0,
            durability:100,
            name: "Iron Sword"
        }
        const test2 = {
            enhancement: 7,
            durability:100,
            name: "Iron Sword"
        }
        const expected2 = {
            enhancement: 7,
            durability:100,
            name: "[+7] Iron Sword"
        }

        expect(get(test1)).toEqual(expected1);
        expect(get(test2)).toEqual(expected2)
    })
})
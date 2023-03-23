export class Burger {
    constructor(data) {
        this.id = data.id
        this.name = data.name
        this.patties = data.patties
        this.bun = data.bun
        this.hasBacon = data.hasBacon != null ? data.hasBacon : false
    }
}


class FakeDB {
    burgers = [
        new Burger({
            id: 1,
            name: 'Pilgrim',
            patties: 1,
            bun: 'white bread',
            hasBacon: true
        }),
        new Burger({
            id: 2,
            name: 'Den Special',
            patties: 2,
            bun: 'white-bread',
            hasBacon: true
        }),
        new Burger({
            id: 3,
            name: 'Cheeseburger',
            patties: 1,
            bun: 'white-bread',
            hasBacon: false
        }),
        new Burger({
            id: 4,
            name: 'Burger',
            patties: 1,
            bun: 'wheat-bread',
            hasBacon: false
        }),
    ]
}

export const fakeDB = new FakeDB()
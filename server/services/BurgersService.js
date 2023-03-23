import { BadRequest } from "@bcwdev/auth0provider/lib/Errors.js"
import { Burger, fakeDB } from "../db/FakeDB.js"



class BurgersService {

    async deleteBurger(burgerId) {
        const burgerIndex = await fakeDB.burgers.findIndex(b => b.id == burgerId)

        if (burgerIndex == -1) {
            throw new BadRequest("No Burger Found")
        }
        fakeDB.burgers.splice(burgerIndex, 1)

    }


    async getBurgerById(burgerId) {
        const burger = await fakeDB.burgers.find(b => b.id == burgerId)
        if (!burger) {
            throw new BadRequest("ID is invalid, no burger found")
        }
        return burger
    }

    async addBurger(burgerData) {

        const newBurger = new Burger(burgerData)
        await fakeDB.burgers.push(newBurger)
        return newBurger
    }

    async getBurgers(query) {
        let burgers = []

        if (query.patties) {
            burgers = await fakeDB.burgers.filter(b => b.patties == query.patties)
        } else {
            burgers = await fakeDB.burgers
        }
        return burgers
    }



}


export const burgersService = new BurgersService()
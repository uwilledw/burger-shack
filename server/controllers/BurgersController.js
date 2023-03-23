import { burgersService } from "../services/BurgersService.js";
import BaseController from "../utils/BaseController.js";



export class BurgersController extends BaseController {
    constructor() {
        super('api/burgers')
        this.router
            .get('', this.getBurgers)
            .get('/:burgerId', this.getBurgerById)
            .post('', this.addBurger)
            .delete('/:burgerId', this.deleteBurger)
    }

    async deleteBurger(req, res, next) {
        try {
            const burgerId = req.params.burgerId
            await burgersService.deleteBurger(burgerId)
            return res.send('Deleted Burger')
        } catch (error) {
            next(error)
        }
    }
    async getBurgerById(req, res, next) {
        try {
            const burgerId = req.params.burgerId
            const burger = await burgersService.getBurgerById(burgerId)
            return res.send(burger)
        } catch (error) {
            next(error)

        }
    }


    async getBurgers(req, res, next) {
        try {
            const query = req.query
            const burgers = await burgersService.getBurgers(query)
            return res.send(burgers)
        } catch (error) {
            next(error)
        }
    }
    async addBurger(req, res, next) {
        try {
            const burgerData = req.body
            const burger = await burgersService.addBurger(burgerData)
            return res.send(burger)
        } catch (error) {
            next(error)
        }
    }

}
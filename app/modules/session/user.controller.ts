import User from '#models/user';
import { HttpContext } from '@adonisjs/core/http'
import UserService from './user.service.js';
import { inject } from '@adonisjs/core';

@inject()
export default class UsersController {
    constructor(protected userService: UserService) {}
    
    async index(ctx: HttpContext) {
        console.log(ctx.auth)
        return [
        {
            id: 1,
            username: 'virk',
        },
        {
            id: 2,
            username: 'romain',
        },
        ]
    }

    async create({request, response}: HttpContext) {
        const {email, password, fullname} = request.only(['email', 'password', 'fullname']);

        const result = await this.userService.create(email, password, fullname)
        if(result.result === 'fail') {
            response.abort('User with email already exitst');
        } else {
            response.send({user: result.user})
        }
    }
        async store({ request }: HttpContext) {}
        async show({ params }: HttpContext) {}
        async edit({ params }: HttpContext) {}
        async update({ params, request }: HttpContext) { console.log(params) }
        async destroy({ params }: HttpContext) {}
}
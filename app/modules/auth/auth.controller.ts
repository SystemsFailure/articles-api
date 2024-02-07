import { HttpContext } from '@adonisjs/core/http'
import hash from '@adonisjs/core/services/hash'
import User from '#models/user'


export default class AuthController{
    async auth({ request, response }: HttpContext) {
        const { email, password } = request.only(['email', 'password'])
        const user = await User.findBy('email', email)
        if(user) {
            await hash.verify(user.password, password)
            const token = await User.accessTokens.create(user)
            response.apiSuccess({
                type: "bearer",
                value: token.value!.release(),
            }, 'token has been created successfully')
        } else {
            response.apiError({}, "Authentication failed")
        }
    }
}

import router from '@adonisjs/core/services/router'
import AuthController from './auth.controller.js'
router.group(() => {
    router.post('/auth/login', [AuthController, 'auth'])
}).prefix('/api/v1/')

export default router

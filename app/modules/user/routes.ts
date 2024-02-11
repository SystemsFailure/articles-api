import router from '@adonisjs/core/services/router'
import UserController from './user.controller.js'

router
  .group(() => {
    router.get('users', [UserController, 'index'])
    router.post('users', [UserController, 'create'])
  })
  .prefix('/api/v1/')

export default router

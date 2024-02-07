import router from '@adonisjs/core/services/router'
import UsersController from './user.controller.js'

router
  .group(() => {
    router.get('users', [UsersController, 'index'])
    router.post('users', [UsersController, 'create'])
  })
  .prefix('/api/v1/')

export default router

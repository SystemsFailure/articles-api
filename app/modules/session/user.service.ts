import User from '#models/user'

export default class UserService {
  async create(email: string, password: string, fullname: string) {
    console.log(email, password, fullname)

    const foundUser = await User.findBy('email', email)

    if (foundUser) {
      return {
        result: 'fail',
        user: foundUser,
      }
    }

    const user = await User.create({
      fullName: fullname,
      email: email,
      password: password,
    })
    return {
      result: 'success',
      user: user,
    }
  }
}

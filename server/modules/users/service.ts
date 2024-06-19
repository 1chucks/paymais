import { UserRepository } from "@/server/db"

export class UserService {
  constructor(private readonly repo: UserRepository) {}

  async createUser(props: { phone: string; bvn: number; password: string }) {
    const user = await this.repo.getUserByPhone({ phone: props.phone })
    if (user?.id) {
      throw new Error("User already exist")
    }
    const res = await this.repo.createUser({
      phone: props.phone,
      password: props.password,
      bvn: props.bvn,
    })
    return res
  }

  async updatePassword(props: { userId: number; newPassword: string }) {
    await this.repo.updatePassword({
      id: props.userId,
      newPassword: props.newPassword,
    })
  }
}

export class UserService {
  async createUser(props: { phone: string; bvn: number; password: string }) {}
  async checkIfPhoneNumberExist() {}
  async findByPhone(
    phone: string
  ): Promise<{ name: string; password: string; id: number }> {
    return {
      name: "",
      password: "",
      id: 0,
    }
  }
  async updatePassword(props: { userId: string; newPassword: string }) {}
}

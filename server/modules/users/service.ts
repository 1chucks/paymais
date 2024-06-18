export class UserService {
  async createUser(props: { phone: string; bvn: number; password: string }) {}
  async checkIfPhoneNumberExist() {}
  async findByPhone(phone: string) {}
  async updatePassword(props: { userId: string; newPassword: string }) {}
}

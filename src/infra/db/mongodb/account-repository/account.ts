import { AccountModel, AddAccountModel, AddAccountRepository, MongoHelper } from './account-repository-protocols'

export class AccountMongoRepository implements AddAccountRepository {
  async add (accountData: AddAccountModel): Promise<AccountModel> {
    const accountCollection = await MongoHelper.getCollection('accounts')
    const result = await accountCollection.insertOne(accountData)
    const { insertedId: id } = result
    const accountWithId = await accountCollection.findOne({ _id: id })
    return MongoHelper.map(accountWithId)
  }
}

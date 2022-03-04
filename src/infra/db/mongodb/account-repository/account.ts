import { AccountModel } from '../../../../domain/account'
import { AddAccountModel } from '../../../../domain/usecases/add-account'
import { AddAccountRepository } from '../../../../data/protocols/add-account-repository'
import { MongoHelper } from '../helper/mongo-helper'

export class AccountMongoRepository implements AddAccountRepository {
  async add (accountData: AddAccountModel): Promise<AccountModel> {
    const accountCollection = MongoHelper.getCollection('accounts')
    const result = await accountCollection.insertOne(accountData)
    const { insertedId: id } = result
    const accountWithId = await accountCollection.findOne({ _id: id })
    return MongoHelper.map(accountWithId)
  }
}

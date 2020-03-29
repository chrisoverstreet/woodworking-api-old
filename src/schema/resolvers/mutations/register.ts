import { UserDocument } from '../../../models/user';
import { RegisterParams } from '../../typeDefs/mutations/register';
import models from '../../../models';

async function registerMutation(
  _: null,
  { email, googleUid, name }: RegisterParams,
): Promise<UserDocument> {
  return models.User.create({ email, googleUid, name });
}

export default {
  Mutation: {
    register: registerMutation,
  },
};

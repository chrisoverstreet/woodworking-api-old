import { UserDocument } from '../../../models/user';
import models from '../../../models';
import { UserArgs } from '../../typeDefs/queries/User';

async function userResolver(
  _: null,
  { identifier }: UserArgs,
): Promise<UserDocument> {
  return models.User.findByIdentifier(identifier);
}

export default {
  Query: {
    user: userResolver,
  },
};

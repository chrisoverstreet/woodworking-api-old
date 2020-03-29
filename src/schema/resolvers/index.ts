import path from 'path';
import { fileLoader, mergeResolvers } from 'merge-graphql-schemas';

const resolversArray = fileLoader(path.join(__dirname, '.'), {
  recursive: true,
});
const resolvers = mergeResolvers(resolversArray);

export default resolvers;

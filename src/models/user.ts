import mongoose, { Document, Model, Schema } from 'mongoose';

export interface UserDocument extends Document {
  email: string;
  googleUid: string;
  name: string;
}

export interface UserModel extends Model<UserDocument> {
  findByIdentifier(identifier: string): UserDocument;
}

const userSchema: Schema = new Schema({
  email: {
    type: String,
    unique: true,
  },
  googleUid: {
    type: String,
    unique: true,
  },
  name: {
    type: String,
  },
});

userSchema.statics.findByIdentifier = async function findByIdentifier(
  identifier: string,
): Promise<UserDocument> {
  let user;

  if (mongoose.Types.ObjectId.isValid(identifier)) {
    user = await this.findById(identifier);
  }

  if (!user) {
    user = await this.findOne({ googleUid: identifier });
  }

  if (!user) {
    user = await this.findOne({ email: identifier });
  }

  return user;
};

const User: UserModel = mongoose.model<UserDocument, UserModel>(
  'User',
  userSchema,
);

export default User;

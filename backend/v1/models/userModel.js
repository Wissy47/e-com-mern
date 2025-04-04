import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const UserSChema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    is_admin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);


UserSChema.methods.verifyPassword = async function (inputPassword) {
    return await bcrypt.compare(inputPassword, this.password);
}

UserSChema.pre('save', async function(next){
    if(!this.isModified('password')) return next();
    this.password = await bcrypt.hashSync(this.password, 10);
    next()
})

const User = mongoose.model('User', UserSChema);

export default User;
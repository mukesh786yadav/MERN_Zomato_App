import mongoose from "mongoose";
import bcrypt  from "bcryptjs";
import jwt from  "jsonwebtoken";
const UserSchema = new mongoose.Schema(
    {
      fullName: { type: String, required: true },
      email: { type: String, required: true },
      password: { type: String },
      address: [{ detail: { type: String }, for: { type: String } }],
      phoneNumber: [{ type: Number }],
    },
    {
      timestamps: true,
    }
  );

// attachments
UserSchema.methods.generateJwtToken = function () {
    return jwt.sign({ user: this._id.toString() }, process.env.JWTSECRET);
  };  

export const UserModel = mongoose.model("users", UserSchema);
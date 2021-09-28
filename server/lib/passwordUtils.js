import crypto from "crypto";

////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
// Generating Password - by creating hash and salt for user by using the user password as parameter
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
export const genPassword = (password) => {
  // Generating salt
  // hex -> convert to hexidecimal string
  const salt = crypto.randomBytes(32).toString("hex");

  // 10.000 = amount of iterations we are doing &&
  // 64 = length of the genHash
  // sha512 -> defines the genHash function we are using for generating the hash
  const genHash = crypto
    .pbkdf2Sync(password, salt, 10000, 64, "sha512")
    .toString("hex");

  return {
    salt: salt,
    hash: genHash,
  };
};
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
// Validating Password - with hash and salt from db
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
export const validPassword = (password, hash, salt) => {
  const hashVerify = crypto
    .pbkdf2Sync(password, salt, 10000, 64, "sha512")
    .toString("hex");
  return hash === hashVerify;
};

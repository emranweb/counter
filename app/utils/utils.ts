// Convert the Databae DateTime to Client DateTime
export function convertToClientDateTime(databaseDateTimeString = "") {
    const dateTime = new Date(databaseDateTimeString);
    const offset = dateTime.getTimezoneOffset();

    const offsetMilliseconds = offset * 60 * 1000;
    const localDateTime = new Date(dateTime.getTime() - offsetMilliseconds);
    return localDateTime.toLocaleString();
}

// Generated a hashed pasword

// export const generatePasword = (password: string) => {
//     const data = process.env.NEXT_BSCRYPT_SALT;
//     const salt = bcrypt.genSaltSync(Number(data));
//     return bcrypt.hashSync(password, salt);
// };

// Compare the password

// export const comparePassword = (
//     currentPassword: string,
//     hashPassword: string
// ) => {
//     return bcrypt.compareSync(currentPassword, hashPassword);
// };

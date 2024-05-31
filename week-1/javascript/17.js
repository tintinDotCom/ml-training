/**
 * Write a function that takes a password input and validates it based on the following rules:
 * - The password must be at least 8 characters long.
 * - The password must contain at least one uppercase letter.
 * - The password must contain at least one lowercase letter.
 * - The password must contain at least one number.
 * - The password must contain at least one special character.
 *
 * It must return a message whether the password is valid or not.
 *
 * Example:
 * - if less than 8 characters, return "Password must be at least 8 characters long"
 * - if no uppercase letter, return "Password must contain at least one uppercase letter"
 * - if no lowercase letter, return "Password must contain at least one lowercase letter"
 * - if no number, return "Password must contain at least one number"
 * - if no special character, return "Password must contain at least one special character"
 * - if all rules are met, return "Password is valid"
 *
 * @param {string} password
 * @returns {string}
 */


function validatePassword(password){

    const oneUppercaseFormat = /[A-Z]/;
    const oneLowercaseFormat = /[a-z]/;
    const oneNumberFormat = /\d/;
    const oneSpecialCharacFormat = /~!`@#$%^&*()-_+={}[]|;:"<>,.?/

        if (password.length < 8) {
            return("Password must be atleast 8 characters long.")
        }

        if (!oneUppercaseFormat.test(password)){
            return('Password must contain atleast one uppercase letter.')
        }

        if(!oneLowercaseFormat.test(password)){
            return('Password must contain atleast one uppercase letter.')
        }

        if (!oneNumberFormat.test(password)){
            return('Password must contain atleast one number.')
        }
        
        if (!oneSpecialCharacFormat.test(password)){
            return('Password must contain atleast one special character.')
        }

        return('Password is valid')
    }




console.log(validatePassword("Ocana0667"))
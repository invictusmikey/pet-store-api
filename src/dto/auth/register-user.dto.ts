export class RegisterUserDto {

    private constructor(

        public name: string,
        public email: string,
        public password: string,

    ) {}

    static create(object: { [key: string]: any }): [string?, RegisterUserDto?] {

        const { name, email, password } = object;

        if (!name) return ['missing name']
        if (!email) return ['missing email']
        if (!password) return ['missing password']
        if (password.length < 6) return ['missing password']

        return []
    }
}


;
import { UserModel } from '../../data/models/users.model'
import {
    AuthDataSource,
    CustomError,
    RegisterUserDto,
    UserEntity
} from "../../domain"

export class AuthDataSourceImpl implements AuthDataSource {

    async register(registerUserDto: RegisterUserDto): Promise<UserEntity> {
        const { name, email, password } = registerUserDto

        try {
            const exists = await UserModel.findOne({ email });
            if (exists) throw CustomError.badRequest("User already exists");
      
            // Crear el usuario
            const user = await UserModel.create({
              name: name,
              email: email,
              password: password,
            });
            // Guardamos el usuario en la base de datos
            await user.save();
            return new UserEntity(
                user.id,
                name,
                email,
                password,
                ['USER']
            )

        } catch (error) {
            if (error instanceof CustomError) {
                throw error;
            }
            throw CustomError.internalServer()
        }
    }

}
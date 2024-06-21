export class UserEntity {

constructor (

    public id: String,
    public name: String,
    public email: string,
    public password: string,
    public role: string[],
    public img?: string,
    


){}

}
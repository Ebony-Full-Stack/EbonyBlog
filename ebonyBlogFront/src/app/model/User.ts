import { Post } from "./Post"

export class User {

  public id_usuario: number
  public nome: string
  public email: string
  public senha: string
  public foto: string
  public tipo: string

  public postagem: Post[]

}

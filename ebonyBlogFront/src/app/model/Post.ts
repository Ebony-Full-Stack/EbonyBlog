import { Theme } from "./Theme"
import { User } from "./User"

export class Post {

  public id_postagem: number
  public titulo: string
  public texto: string
  public data: Date

  public usuario: User
  public tema: Theme

}

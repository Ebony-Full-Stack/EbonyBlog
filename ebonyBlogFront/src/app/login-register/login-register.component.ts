import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit {

  user: User = new User
  userLogin: UserLogin = new UserLogin
  savePass: string
  userType: string

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {  
    window.scroll(0, 0)
  }

  confirmPass(event: any) {
    this.savePass = event.target.value
  }

  typeUser(event: any) {
    this.userType = event.target.value
  }

  register() {
    this.user.tipo = this.userType

    if (this.user.senha != this.savePass) {
      alert('Deu mole, senha errada aee!')
    }
    else {
      this.authService.cadastrar(this.user).subscribe((resp: User) => {
        this.user = resp
        this.router.navigate(['/getin'])
      })
    }
  }

  login() {
    this.authService.entrar(this.userLogin).subscribe((resp: UserLogin) => {
      this.userLogin = resp

      environment.id_usuario = this.userLogin.id_usuario
      environment.nome = this.userLogin.nome
      environment.token = this.userLogin.token
      environment.foto = this.userLogin.foto

      //console.log(environment.id_usuario)
      //console.log(environment.nome)
      //console.log(environment.token)
      //console.log(environment.foto)

      this.router.navigate(['/community'])
    },
    erro =>
    {
      if(erro.status == 500) {
        alert('Einta, a senha e/ou email estão zuados!')
      }
      if(erro.status == 401) {
        alert('Puta merda, deu ruim aqui... atualize pf!')
      }
    })
  }
}

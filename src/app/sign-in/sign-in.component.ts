import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
    selector: 'app-sign-in',
    imports: [RouterLink,FormsModule],
    templateUrl: './sign-in.component.html',
    styleUrl: './sign-in.component.scss'
})
export class SignInComponent {

    loginObj:any = {

        userName:'',
        passWord:''
      };
      router = inject(Router)
    
      onlogin(){
        if(this.loginObj.userName === 'admin' && this.loginObj.passWord === 'admin'){
    
          this.router.navigateByUrl('/')
        }
    
          else{
            alert('Wrong Credential')
          }
        
      }

}

import { AfterContentChecked, Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { tokenGetter, tokenGetter3 } from 'src/app/app.module';
import { ServiceService } from 'src/app/Service/service.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit,AfterContentChecked{

  name:any;
  loggedIn:any;
  searchitem=" ";
  constructor(private route:Router,private data:ServiceService) { }
  ngOnInit(): void {
    
  }
  ngAfterContentChecked(){
    this.loggedIn = localStorage.getItem('token')
    if(this.loggedIn)
    {
      this.name=tokenGetter3();
    }
  }

  logout(){
    localStorage.clear();
    this.route.navigateByUrl('/home');
  }

  search(event: any) {
    this.searchitem=event.target.value.toLowerCase();
  }

  nav(){
    var c1=0;
    for(let p of this.data.veg_products)
    {
      if(p.name.toLowerCase()==this.searchitem)
      {
        c1=1;
        this.route.navigateByUrl('/veg');
        break;
      }
    }
    if(c1==0)
    {
      for(let p of this.data.products)
      {
        if(p.name.toLowerCase()==this.searchitem)
        {
          c1=1;
          this.route.navigateByUrl('/fruit');
          break;
        }
      }
    }
    if(c1==0){
      alert("Not Found!!!");
    }    
  }
}

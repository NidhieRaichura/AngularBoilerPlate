import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  ShowComponent(val:any){
    if (val==2)
    this.router.navigate(['/public/about']);
    else
    this.router.navigate(['/public/home']);
  }
}

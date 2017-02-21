import { Component, OnInit } from '@angular/core';


import { ActivatedRoute, Params }   from '@angular/router';

@Component({
  selector: 'light',
  templateUrl: './light.component.html',
  styleUrls: ['./light.component.css']
})
export class LightComponent implements OnInit {

  private id: String;

  constructor(private route: ActivatedRoute) {  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      console.log(this.id);
    });
  }

}

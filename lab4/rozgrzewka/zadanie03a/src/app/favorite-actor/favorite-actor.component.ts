import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite-actor',
  templateUrl: './favorite-actor.component.html',
  styleUrls: ['./favorite-actor.component.css']
})
export class FavoriteActorComponent implements OnInit {

  public actorSurname : string;
  public actorName : string;
  public actorMovie : string;

  constructor() { }

  displayData() {
    document.querySelector("#output").innerHTML = this.actorSurname;
    console.log("displayed datta");
  }

  ngOnInit(): void {
    document.querySelector("#form").addEventListener("submit", e => {
      console.log("Submitted!");
      e.preventDefault();
      this.actorSurname = document.querySelector("#actor-surname").textContent;
      this.actorName = document.querySelector("#actor-name").textContent;
      this.actorMovie = document.querySelector("#actor-movie").textContent;
      this.displayData();
    });
  }
}

import { Component, OnInit } from "@angular/core";
import { raw_data } from "src/assets/raw_data";

@Component({
  selector: "app-itineraries",
  templateUrl: "./itineraries.component.html",
  styleUrls: ["./itineraries.component.sass"]
})
export class ItinerariesComponent implements OnInit {
  itineraries: [];

  constructor() {}

  ngOnInit() {
    this.itineraries = this.getItineraries(raw_data);
    console.log("first iti :", this.itineraries[0]);
  }

  getItineraries(raw_data) {
    const data = raw_data.data[0];
    if (data && data.attributes && data.attributes.itineraries) {
      return data.attributes.itineraries;
    }
    console.log("Invalid data");
    return null;
  }
}

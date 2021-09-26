import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HeroService } from '../services/hero.service';
import { LoadoutService } from '../services/loadout.service';

@Component({
  selector: 'app-loadoutnew',
  templateUrl: './loadoutnew.component.html',
  styleUrls: ['./loadoutnew.component.css']
})
export class LoadoutnewComponent implements OnInit {

  heroes;
  loadout = {
    name: '',
    cost: 0,
    submitted: '',
    abyss: '',
    heroes: [],
  };

  constructor(
    private location: Location,
    private heroService: HeroService,
    private loadoutService: LoadoutService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.heroes = this.heroService.heroes;
  }

  //Template changes for hero cards
  styleHero(hero) {
    var borderColor;
    var backgroundColor;

    borderColor = hero.selected ? 'white' : 'black';
    backgroundColor = hero.rarity == 'SSR' ? 'brown' : hero.rarity == 'SR' ? 'purple' : 'darkblue';

    return { backgroundColor: backgroundColor, borderColor: borderColor };
  }

  //Function for toggline when a card is selected to add to loadout
  toggleSelect(hero) {
    if (this.loadout.heroes.indexOf(hero.id) > -1) {
      this.loadout.heroes.splice( this.loadout.heroes.indexOf(hero.id, 0) , 1);

      hero.selected = false;
      this.loadout.cost -= hero.rarity == 'R' ? 1 : hero.rarity == 'SR' ? 2 : 3;
    } else {
      this.loadout.heroes.push(hero.id);

      hero.selected = true;
      this.loadout.cost += hero.rarity == 'R' ? 1 : hero.rarity == 'SR' ? 2 : 3;
    }
  }

  submit() {
    //Error Checking

    if (!this.loadout.name) {
      this.toastr.warning("Please enter a name for your loadout");
      return;
    } else if (this.loadout.heroes.length < 1) {
      this.toastr.warning("Please ensure at least 1 hero is selected");
      return;
    }

    //Send to Firestore
    this.loadoutService.create(this.loadout).then(res => {
      this.toastr.success("Loadout Successfully Created!");
      this.location.back();
    });
  }

  back() {
    this.location.back();
  }
}

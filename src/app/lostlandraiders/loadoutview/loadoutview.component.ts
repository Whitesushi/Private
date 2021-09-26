import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../services/hero.service';
import { LoadoutService } from '../services/loadout.service';

@Component({
  selector: 'app-loadoutview',
  templateUrl: './loadoutview.component.html',
  styleUrls: ['./loadoutview.component.css']
})
export class LoadoutviewComponent implements OnInit {

  loadout;
  heroes = [];

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private loadoutService: LoadoutService,
    private heroService: HeroService
  ) { }

  async ngOnInit(): Promise<void> {
    this.loadout = await this.loadoutService.getOne(this.route.snapshot.paramMap.get('id')).subscribe(data => {
      this.loadout = data;

      for (let i=0; i<this.loadout.heroes.length; i++) {
        var matchingHero = this.heroService.heroes.find(hero => hero.id == this.loadout.heroes[i]);
        this.heroes.push(matchingHero);
      }
    });
  }

  back() {
    this.location.back();
  }

}

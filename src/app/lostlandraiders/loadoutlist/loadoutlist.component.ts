import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { HeroService } from '../services/hero.service';
import { LoadoutService } from '../services/loadout.service';

@Component({
  selector: 'app-loadoutlist',
  templateUrl: './loadoutlist.component.html',
  styleUrls: ['./loadoutlist.component.css']
})
export class LoadoutlistComponent implements OnInit {

  loadouts

  constructor(
    private loadoutService: LoadoutService,
    private heroService: HeroService
  ) { }

  async ngOnInit(): Promise<void> {
    this.loadoutService.get().pipe(map (changes =>
      changes.map(c =>
        ({ id: c.payload.doc.id, ...c.payload.doc.data() as {}})
      )
    )
    ).subscribe(data => {
      this.loadouts = data;

      //Map retrieved heroes to local heroes
      this.loadouts.forEach(loadout => {
        loadout.heroes.forEach((hero, index) => {
          var managedHero = this.heroService.heroes.find(i => i.id == hero);
          loadout.heroes[index] = managedHero;
        });
      });

    });
  }

  rarityStyle(hero) {
    var rarityColor = hero.rarity == 'SSR' ? 'brown' : hero.rarity == 'SR' ? 'purple' : 'darkblue';
    return { backgroundColor: rarityColor };
  }

  deleteLoadout(loadout) {
    this.loadoutService.delete(loadout);
  }

}

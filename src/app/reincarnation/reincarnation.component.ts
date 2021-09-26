import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reincarnation',
  templateUrl: './reincarnation.component.html',
  styleUrls: ['./reincarnation.component.css']
})
export class ReincarnationComponent implements OnInit {

  heroes = ['unbidden','novice','warrior','brute','ranger','rogue','mage','devout','exile','barbarian','swordsman','lancer','marksman','hunter','monk','wetboy','arcanist','elementalist','cultist','priest','zerker','druid','bladerider','fencer','beast','technologist','slayer','shadow','trickster','witch','paragon','daeagon','chronomancer','runecaster','bishop','martial','avenger','blood','shaman','knight','sharpshooter','priestess','gunner','samurai','wizard','paladin'];
  dungeons = ['butchers_sepulcher','desolate_stockade','abandoned_mine','centaur_arena','wolfs_cave','harpy_peak','dire_sanctuary','satyr_seer','satyr_conjuror','satyr_demon','satyr_lord','ice_lair','underpass','jungle_temple','sunken_city','lost_woods','desert_pyramid','magma_core','trial_of_flame','abyssal_stronghold'];
  //heroes = ['druid', 'trickster'];
  results = [];

  dungeon_name = "abyssal_stronghold";

  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.getByDungeon();
  }

  getByDungeon() {
    var player_count = 4;

    this.heroes.forEach(async hero => {
      var smolstring = (`[%22${hero}%22]`);
      var result = await this.http.get("http://reincarnationrpg.com:3000/api/dungeons/top10?dungeon_name="+this.dungeon_name+"&heroes="+smolstring+"&num_heroes="+player_count).toPromise()
      .catch(err => {
        var filteredText = err.error.text.replace(/<h1.*?<\/h1>/g, '').replace(/<h2.*?<\/h2>/g, '');
        var div = document.createElement("div");
        div.innerHTML = filteredText;
        var divJson = '['+div.innerText.split('Involved Players :    - ').join('","players": [{"hero": "').split('Time Taken: ').join('"}]}, {"Time": "').split('    - ').join('"}, {"hero": "').split(' - ').join('", "tag": "').substring(6)+'"}]}]';
        var divArray = (JSON.parse(divJson));

        divArray.forEach(result => {
          this.results.push(result);
        });

        if (hero == this.heroes[this.heroes.length-1]) {
          console.log("Finished Populating Data");
        }

      });
    });
  }

  getByHero() {
    var player_count = 2;
    var hero = 'chronomancer';

    this.dungeons.forEach(async dungeon => {
      var smolstring = (`[%22${hero}%22]`);
      var result = await this.http.get("http://reincarnationrpg.com:3000/api/dungeons/top10?dungeon_name="+dungeon+"&heroes="+smolstring+"&num_heroes="+player_count).toPromise()
      .catch(err => {
        var filteredText = err.error.text.replace(/<h1.*?<\/h1>/g, '').replace(/<h2.*?<\/h2>/g, '');
        var div = document.createElement("div");
        div.innerHTML = filteredText;
        var newdiv = "["+(div.innerText.split('Involved Players :    - ').join('", "Hero": "').split('Time Taken: ').join('"}, {"Time": "').split(' - ').join('", "Tag": "')+"\"}]").substring(3);
        var divArray = (JSON.parse(newdiv));

        divArray.forEach(result => {
          result['dungeon'] = dungeon;
          this.results.push(result);
        });

      });
    })
  }

  filter() {
    this.results = this.results.sort((a, b) => parseFloat(a.Time) - parseFloat(b.Time));
    console.log(this.results);
  }
}

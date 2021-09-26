import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-playerprofile',
  templateUrl: './playerprofile.component.html',
  styleUrls: ['./playerprofile.component.css']
})
export class PlayerprofileComponent implements OnInit {

  accountID = this.route.snapshot.params.id;

  playerItems = [];

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private location: Location
  ) { }

  async ngOnInit(): Promise<void> {

    var accountItems = [];
    for (let i=0; i<=5; i++) {

      console.log("Iteration "+i);

      var items
      items = await this.http.get('http://reincarnationrpg.com:3000/api/heroes/retrieve_hero_equipment?accountID='+this.accountID+'&heroIndex='+i).toPromise()
      .catch(error => {
        console.log(error);
      });

      if (items) {
        console.log(items);
        items = items.split(',');
        accountItems.push(items);
      } else {
        console.log("no more");
        break;
      };
    }

    accountItems.forEach((accountItem, i) => {
      accountItem.forEach(async (item, index) => {
        var slot = await this.http.get('https://kobe42.pythonanywhere.com/items/'+item.substring(2, 6)).toPromise();
        //this.playerItems[item.substring(0, 1)-1] = slot;
        accountItem[index] = slot;
      });
    });

    this.playerItems = accountItems;
    console.log(this.playerItems);
  }

  goBack() {
    this.location.back();
  }

}

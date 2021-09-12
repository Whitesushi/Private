import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twitch',
  templateUrl: './twitch.component.html',
  styleUrls: ['./twitch.component.css']
})
export class TwitchComponent implements OnInit {

  streams;

  filter;
  filteredStreams;

  headers_object = new HttpHeaders()
    .set("Authorization", "Bearer vo034mg1tvytw13pncx8mcbgjq19qn")
    .set("Client-Id", "osmntum0qbph9i99aijd92mpx8mkc2");
  httpOptions = {
    headers: this.headers_object
  };

  constructor(
    private http: HttpClient
  ) { }

  async ngOnInit() {
    this.streams = await this.http.get('https://api.twitch.tv/helix/streams?first=100&game_id=27471', this.httpOptions).toPromise();
    this.filteredStreams = this.streams;
    console.log(this.streams);
  }

  async prevPage(before) {
    this.streams = await this.http.get('https://api.twitch.tv/helix/streams?first=100&game_id=27471&before='+before+'', this.httpOptions).toPromise();
    console.log(this.streams);
  }

  async nextPage(after) {
    this.streams = await this.http.get('https://api.twitch.tv/helix/streams?first=100&game_id=27471&after='+after+'', this.httpOptions).toPromise();
    console.log(this.streams);
  }

  filterData() {
    if (this.streams) {
      this.filteredStreams = this.streams.data.filter(stream => stream.title.includes(this.filter));
    }
    console.log(this.filteredStreams);
  }

}

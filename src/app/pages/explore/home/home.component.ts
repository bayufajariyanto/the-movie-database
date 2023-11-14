import { Component, OnInit } from '@angular/core';
import { TMDB_IMG_SMALL } from 'src/app/core/constants/tmdb.constant';
import { HomeService } from 'src/app/services/home/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  imageUrl = TMDB_IMG_SMALL

  listData: Array<any> = []

  constructor(
    private homeService: HomeService,
  ) { }

  ngOnInit() {
    this.getData()
  }

  async getData() {
    try {
      let mapData = await this.homeService.getData("/movie/upcoming");

      this.listData = Array.isArray(mapData?.results) ? mapData?.results.map((item: any) => {
        let temp = item
        temp.poster_path = this.imageUrl + item.poster_path
        return temp
      }) : []

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
}

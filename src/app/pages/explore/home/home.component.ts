import { Component, OnInit } from '@angular/core';
import { TMDB_IMG_URL } from 'src/app/core/tmdb.constants';
import { HomeService } from 'src/app/services/home/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  imageUrl = TMDB_IMG_URL

  listData: Array<any> = []

  obser: any;

  constructor(
    private homeService: HomeService
  ) { }

  async ngOnInit() {
    this.getData()
  }

  async getData() {
    try {
      let mapData = await this.homeService.getData("/movie/upcoming");

      this.listData = Array.isArray(mapData?.results) ? mapData?.results.map((item: any) => {
        let temp = item
        temp.backdrop_path = this.imageUrl + item.backdrop_path
        return temp
      }) : []

      console.log(this.listData)
      // this.setupIntersectionObserver()
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
}

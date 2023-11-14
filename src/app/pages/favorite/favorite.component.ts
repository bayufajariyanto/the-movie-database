import { Component, OnInit } from '@angular/core';
import { TMDB_IMG_SMALL } from 'src/app/core/constants/tmdb.constant';
import { HomeService } from 'src/app/services/home/home.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {

  imageUrl: string = TMDB_IMG_SMALL

  listFavorites: any = []

  model: any

  constructor(
    private homeService: HomeService
  ) { }

  async ngOnInit() {
    this.getAllData()
  }

  getAllData() {
    const jsonData = localStorage.getItem("listBookmarks");
    const listId = jsonData ? JSON.parse(jsonData) : [];
    let result: any[] = []

    const promises = listId.map(async (id: any) => {
      const data = await this.getData(id);
      result.push(data);
    });

    this.listFavorites = result ?? []
  }

  async getData(id: number | string) {
    try {
      let model = await this.homeService.getData(`/movie/${id}`).then((item) => {
        let temp = item
        temp.poster_path = this.imageUrl + item.poster_path

        let arrGenre = temp.genres.map((genre: any) => {
          return genre.name
        })
        temp.genre = arrGenre.join(", ")

        return temp
      }) ?? null;
      return model
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
}

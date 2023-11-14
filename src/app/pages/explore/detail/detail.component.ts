import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TMDB_IMG_SMALL } from 'src/app/core/constants/tmdb.constant';
import { HomeService } from 'src/app/services/home/home.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  id: number | null = null;
  imageUrl: string = TMDB_IMG_SMALL
  isSave: boolean = false;

  label: string | null = "Tandai sebagai Favorite";
  labelTersimpan: string | null = "Tandai sebagai Favorite";
  labelTidakTersimpan: string | null = "Hapus Favorite";

  model: any;

  constructor(
    private route: ActivatedRoute,
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.getData();
    this.setBookmark()
  }

  async getData() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    try {
      this.model = await this.homeService.getData(`/movie/${this.id}`).then((item) => {
        let temp = item
        temp.poster_path = this.imageUrl + item.poster_path

        let arrGenre = temp.genres.map((genre: any) => {
          return genre.name
        })
        temp.genre = arrGenre.join(", ")
        return temp
      }) ?? null;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  setBookmark() {
    const jsonData = localStorage.getItem("listBookmarks");
    const parsedData = jsonData ? JSON.parse(jsonData) : [];

    let cekData = parsedData.filter((item: any) => item == this.id);
    this.isSave = cekData.length == 0 ? false : true;
    this.label = cekData.length == 0 ? this.labelTersimpan : this.labelTidakTersimpan
  }

  save() {
    const jsonData = localStorage.getItem("listBookmarks");
    const parsedData = jsonData ? JSON.parse(jsonData) : [];

    if (this.isSave) {
      let dataTerhapus = parsedData.filter((item: any) => item != this.id);
      localStorage.setItem("listBookmarks", JSON.stringify(dataTerhapus));
      this.isSave = false
      this.label = this.labelTersimpan
    } else {
      parsedData.push(this.id)
      localStorage.setItem("listBookmarks", JSON.stringify(parsedData));
      this.isSave = true
      this.label = this.labelTidakTersimpan
    }
  }
}

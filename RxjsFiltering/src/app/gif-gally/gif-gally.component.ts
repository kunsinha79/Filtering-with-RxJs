import { Component, OnInit } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { gifs } from '../types/gif.type';
import { map, startWith } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-gif-gally',
  templateUrl: './gif-gally.component.html',
  styleUrls: ['./gif-gally.component.scss']
})
export class GifGallyComponent implements OnInit {

  title: 'App title';


  gifs$: Observable<string[]>;
  filteredStates$: Observable<string[]>;
  filter: FormControl;
  filter$: Observable<string>;

constructor(private http: HttpClient) {
  this.gifs$ = http.get<gifs>('https://dog.ceo/api/breed/hound/images').pipe(map(obj=>obj.message));
  this.filter = new FormControl('');
    this.filter$ = this.filter.valueChanges.pipe(startWith(''));
    this.filteredStates$ = combineLatest(this.gifs$, this.filter$).pipe(
      map(([gifs, filterString]) => gifs.filter(gif => gif.toLowerCase().indexOf(filterString.toLowerCase()) !== -1))
    );
}

  ngOnInit(): void {

  }

}

import { Component, OnInit } from '@angular/core';
import { NetflixProfile } from './netflix-profile';

@Component({
  selector: 'netflix-profile-selection-page',
  templateUrl: './netflix-profile-selection-page.component.html',
  styleUrls: ['./netflix-profile-selection-page.component.css'],
})
export class NetflixProfileSelectionPageComponent implements OnInit {
  netflixProfiles: NetflixProfile[];

  constructor() {}

  ngOnInit(): void {
    this.netflixProfiles = [
      {
        name: 'Matthew',
        image:
          'https://occ-0-3010-360.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABYSw2XUJOe-RXGqlMhzAK2kb3m8jiiuICaICOYRemQXvfBcEmoaG0XMebWDsKrQ4fhsAYwzopxK6Cm5l5w2F9iMzCVqZuapW7A.png?r=201',
      },
      {
        name: 'Mark',
        image:
          'https://occ-0-3010-360.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABVAOVZB6hbXn66eL28YYwIrZ3y7G9clKxQtWp-2Dc1_uq2MuLsPa_mD3N1jJlpMc_61au7gZ69iuTZmeg_YjE-5YKAGbR8JFKg.png?r=7c7',
      },
      {
        name: 'Luke',
        image:
          'https://occ-0-3010-360.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABcD0ZrsIMMPdVENlhcMLhAEQsGSplhivXwxPolt5h1wP1bquIL83x4fkrS6we4cwNWTe1nn7exw7GDMLe-72PiRcoMIBjdjmmA.png?r=b39',
      },
      {
        name: 'John',
        image:
          'https://occ-0-3010-360.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABQF7SR467QFM7baRi8ZVxwtPaStoMd9-KZ8qZqba8Tuu8x9OWqkYvzubJwrfBQmJp0spenD2JvuyNz7H1OuY3zhTr6_hZokHwQ.png?r=6a6',
      },
    ];
  }
}

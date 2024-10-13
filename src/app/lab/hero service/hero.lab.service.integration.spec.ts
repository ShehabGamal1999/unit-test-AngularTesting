import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { HeroServiceForLab } from './hero.lab.service';
import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { Hero } from '../../hero';

describe('HeroServiceForLab Tests', () => {
  let heroService: HeroServiceForLab;
  let httpController: HttpTestingController;
  const apiEndpoint = 'http://localhost:3000/heroes';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    httpController = TestBed.inject(HttpTestingController);
    heroService = TestBed.inject(HeroServiceForLab);
  });

  afterEach(() => {
    httpController.verify();
  });

  it('should retrieve a list of heroes', () => {
    const sampleHeroes: Hero[] = [
      { id: 101, name: 'Shady', strength: 12 },
      { id: 102, name: 'John', strength: 9 },
    ];

    heroService.getHeroes().subscribe((result) => {
      expect(result).toEqual(sampleHeroes);
      expect(result.length).toBe(2);
    });

    const req = httpController.expectOne(apiEndpoint);
    expect(req.request.method).toBe('GET');
    req.flush(sampleHeroes);
  });

  it('should update a hero correctly', () => {
    const modifiedHero: Hero = { id: 105, name: 'Shady', strength: 18 };

    heroService.updateHero(modifiedHero).subscribe((response) => {
      expect(response).toEqual(modifiedHero);
    });

    const req = httpController.expectOne(apiEndpoint);
    expect(req.request.method).toBe('PUT');
    expect(req.request.body).toEqual(modifiedHero);
    req.flush(modifiedHero);
  });
});

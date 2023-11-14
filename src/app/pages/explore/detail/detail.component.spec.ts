import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailComponent } from './detail.component';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { DurationPipe } from 'src/app/core/pipes/duration.pipe';

class ActivatedRouteStub {
  // Simulasi observable paramMap
  private subject = new BehaviorSubject(convertToParamMap({ id: 507089 }));
  paramMap = this.subject.asObservable();

  // Fungsi untuk memperbarui nilai paramMap
  setParamMap(params: any) {
    this.subject.next(convertToParamMap(params));
  }
}

describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailComponent, DurationPipe ],
      providers: [
        // Mengganti ActivatedRoute dengan ActivatedRouteStub
        { provide: ActivatedRoute, useClass: ActivatedRouteStub },
        HttpClient, HttpHandler
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

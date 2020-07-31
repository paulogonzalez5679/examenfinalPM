import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginGPage } from './login-g.page';

describe('LoginGPage', () => {
  let component: LoginGPage;
  let fixture: ComponentFixture<LoginGPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginGPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginGPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

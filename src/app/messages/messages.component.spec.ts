import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MessagesComponent } from './messages.component';
import { MessageService } from '../services/message/message.service';

describe('MessagesComponent', () => {
  let component: MessagesComponent;
  let fixture: ComponentFixture<MessagesComponent>;
  let messageServiceMock: jasmine.SpyObj<MessageService>;

  beforeEach(() => {
    messageServiceMock = jasmine.createSpyObj('MessageService', ['messages']);
    TestBed.configureTestingModule({
      imports: [MessagesComponent],
      providers: [{ provide: MessageService, useValue: messageServiceMock }],
    });
    fixture = TestBed.createComponent(MessagesComponent);
    component = fixture.componentInstance;
  });

  it('should initialize with no messages', () => {
    messageServiceMock.messages = [];
    component.ngOnInit();
    expect(component.messageService.messages.length).toBe(0);
  });

  it('should display messages when available', () => {
    const messages = [
      { id: 1, message: 'Hello, Shady!' },
      { id: 2, message: 'This is a test message.' },
    ];
    messageServiceMock.messages = messages;
    component.ngOnInit();
    fixture.detectChanges();
    const msgElements = fixture.nativeElement.querySelectorAll('.msg');
    expect(msgElements.length).toBe(2);
    expect(msgElements[0].textContent).toContain('Hello, Shady!');
    expect(msgElements[1].textContent).toContain('This is a test message.');
  });

  it('should not display messages if none are available', () => {
    messageServiceMock.messages = [];
    component.ngOnInit();
    fixture.detectChanges();
    const msgElement = fixture.nativeElement.querySelector('.msg');
    expect(msgElement).toBeNull();
  });
});

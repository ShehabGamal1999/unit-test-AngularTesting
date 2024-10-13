import { MessageService } from '../../services/message/message.service';
import { MessagesComponentForLab } from './messages.lab.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('Messages Component Tests:', () => {
  let component: MessagesComponentForLab;
  let messageServiceMock: jasmine.SpyObj<MessageService>;
  let fixture: ComponentFixture<MessagesComponentForLab>;

  beforeEach(() => {
    messageServiceMock = jasmine.createSpyObj('MessageService', ['messages']);
    TestBed.configureTestingModule({ imports: [MessagesComponentForLab] });
    fixture = TestBed.createComponent(MessagesComponentForLab);
    component = fixture.componentInstance;
  });

  it('should start with no messages', () => {
    component.ngOnInit();
    expect(component.messageService.messages.length).toBe(0);
    const msgElement = fixture.nativeElement.querySelector('.msg');
    expect(msgElement).toBeNull();
  });

  it('should display messages when assigned', () => {
    const mockMessages = [
      { id: 456, message: 'Guten Morgen' },
      { id: 789, message: 'Shady' },
    ];
    component.messageService.messages = mockMessages;
    component.ngOnInit();
    expect(component.messageService.messages.length).toBe(2);
    fixture.detectChanges();
    const msgElements = fixture.nativeElement.querySelectorAll('.msg');
    expect(msgElements.length).toBe(2);
    expect(msgElements[0].textContent).toContain('Guten Morgen');
    expect(msgElements[1].textContent).toContain('Shady');
  });
});

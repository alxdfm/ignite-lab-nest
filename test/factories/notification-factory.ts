import { Content } from '@application/entities/notification/content';
import {
  Notification,
  NotificationProps,
} from '@application/entities/notification/notification';

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    category: 'testttt',
    content: new Content('Testtttt'),
    recipientId: 'outro-id',
    ...override,
  });
}

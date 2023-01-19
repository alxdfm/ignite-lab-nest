import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { CountRecipientNotifications } from './count-recipient-notifications';

describe('Count recipient notifications', () => {
  it('it should be able to count recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countRecipientNotifications = new CountRecipientNotifications(
      notificationsRepository,
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'testtttttt' }),
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'testtttttt' }),
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'outro-id' }),
    );

    const { count } = await countRecipientNotifications.execute({
      recipientId: 'testtttttt',
    });

    expect(count).toEqual(2);
  });
});

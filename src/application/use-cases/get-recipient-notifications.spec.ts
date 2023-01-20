import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { GetRecipientNotifications } from './get-recipient-notifications';

describe('Get recipient notifications', () => {
  it('it should be able to get recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const getRecipientNotifications = new GetRecipientNotifications(
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

    const { notifications } = await getRecipientNotifications.execute({
      recipientId: 'testtttttt',
    });

    expect(notifications).toHaveLength(2);
    expect(notifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ recipientId: 'testtttttt' }),
        expect.objectContaining({ recipientId: 'testtttttt' }),
      ]),
    );
  });
});

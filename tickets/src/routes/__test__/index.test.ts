import request from 'supertest';
import { app } from '../../app';

const createTicket = (title: string, price: number) => request(app)
    .post('/api/tickets')
    .set('Cookie', signup())
    .send({ title, price })
    .expect(201)

it('can fetch a list of tickets', async () => {
  await createTicket('asd', 20);
  await createTicket('qwe', 40);
  await createTicket('pfe', 100);

  const response = await request(app)
    .get('/api/tickets')
    .send()
    .expect(200);

  expect(response.body.length).toEqual(3);
});

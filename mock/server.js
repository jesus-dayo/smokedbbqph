import { createServer } from 'miragejs';

export const makeServer = (env) => {
  console.log('env', env);
  if (env !== 'mock') {
    return;
  }
  createServer({
    routes() {
      this.namespace = 'api';
      this.get('/products', () => {
        return {
          products: [
            {
              id: 1,
              name: 'Beef Brisket',
              category: 'beef',
              description:
                'Smoked barbecued for 12hrs until tender with our secret rub. Best partnered with your favorite wine or whisky. Prices are per 1kg.',
              price: 1800,
              currency: 'php',
              isRecommended: false,
              availability: [
                {
                  date: '21 Aug 2022',
                  quantity: 2,
                },
              ],
              picture: {
                web: '/sliced_beef_brisket.jpg',
                iphone: '',
              },
            },
            {
              id: 2,
              name: 'Pork Ribs',
              category: 'pork',
              description:
                'Smoked barbecued for 8hrs until tender with our secret rub. Warning: Very Addictive. Prices are per 1kg.',
              price: 1200,
              currency: 'php',
              isRecommended: false,
              availability: [
                {
                  date: '21 Aug 2022',
                  quantity: 4,
                },
              ],
              picture: {
                web: '/pork_ribs.jpg',
                iphone: '',
              },
            },
            {
              id: 3,
              name: 'Blood Sausage',
              category: 'beef',
              description:
                'Try our homemade blood sausages and you wont regret trying it. Best combined with your favorite rice. Prices are per 1kg.',
              price: 1200,
              currency: 'php',
              isRecommended: false,
              availability: [
                {
                  date: '21 Aug 2022',
                  quantity: 10,
                },
              ],
              picture: {
                web: '/blood_sausage.jpg',
                iphone: '',
              },
            },
            {
              id: 4,
              name: 'Angus Beef',
              description:
                'Angus Beef is a crowd favorite. Smoked for 8hrs, this precious piece of meat is taste tested. Prices are per 1kg.',
              price: 1200,
              currency: 'php',
              isRecommended: false,
              category: 'beef',
              availability: [
                {
                  date: '21 Aug 2022',
                  quantity: 4,
                },
              ],
              picture: {
                web: '/angus_beef.jpg',
                iphone: '',
              },
            },
          ],
        };
      });
      this.namespace = '';
      this.passthrough();
    },
  });
};

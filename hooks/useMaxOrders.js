import { API } from 'aws-amplify';
import { useEffect, useState } from 'react';
import { MAX_RIBS } from '../common/staticConfigs';
import { listBills, listOrders } from '../src/graphql/queries';

const useMaxOrders = (deliveryId) => {
  const [max, setMax] = useState(0);
  useEffect(() => {
    if (deliveryId) {
      computeMax();
    }
  }, [deliveryId]);

  const computeMax = async () => {
    const bills = await getBill();
    if (bills?.data?.listBills?.items?.length) {
      let newMax = 0;
      const items = bills?.data?.listBills?.items;
      for (let item of items) {
        const billId = item.id;
        const orders = await API.graphql({
          query: listOrders,
          variables: {
            filter: {
              billOrdersId: {
                eq: billId,
              },
            },
            limit: 100,
          },
        });
        if (orders.data?.listOrders?.items?.length) {
          const orderItems = orders.data?.listOrders?.items;
          const filteredUnfrozenOrders = orderItems.filter(
            (order) => !order.isFrozen
          );
          if (filteredUnfrozenOrders.length) {
            newMax =
              newMax +
              filteredUnfrozenOrders.reduce(
                (prev, next) => prev + next.quantity,
                0
              );
          }
        }
        if (newMax) {
          setMax(newMax);
        } else {
          setMax(MAX_RIBS);
        }
      }
    }
  };

  const getBill = () => {
    return API.graphql({
      query: listBills,
      variables: {
        filter: {
          billDeliveryId: {
            eq: deliveryId,
          },
          status: {
            ne: 'CANCELLED',
          },
        },
      },
    });
  };

  return max;
};

export default useMaxOrders;

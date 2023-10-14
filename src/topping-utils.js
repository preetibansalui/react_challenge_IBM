import { useEffect, useState } from 'react';

let currentToppings;

/**
 * Simulates persisting a list of toppings on a server.
 *
 * @returns {Promise<void>} A promise that resolves upon successful apply or rejects if there was
 * an error.
 */
export async function applyToppings(toppings) {
  console.log('applyToppings was called', toppings);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // There is a 1 in 3 chance the applyToppings request will fail if the list is non-empty
      const rand = Math.ceil(Math.random() * 3);
      if (toppings.length > 0 && rand === 3) {
        reject(new Error('Apply topping request failed'));
      } else {
        currentToppings = toppings;
        resolve(undefined);
      }
    }, 500);
  });
}

/**
 * Simulates retrieving a list of toppings from across a network.
 *
 * @returns {Array<{text: string, category: string | undefined}>}
 */
export function useToppings() {
  const [toppings, setToppings] = useState(undefined);

  useEffect(() => {
    const interval = setInterval(() => {
      setToppings(currentToppings);
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return toppings;
}

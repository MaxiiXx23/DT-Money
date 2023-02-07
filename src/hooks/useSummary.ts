import { TransactionsContext } from '../contexts/TransactionsContext'

import { useContextSelector } from 'use-context-selector'

export function useSummary() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })

  /*
  podemos passar um valor inicial ao reduce: { income: 0, outcome: 0, total: 0 }
  assim definindo o acc, evitando de usar um map.
*/

  const summary = transactions.reduce(
    (acc, currentTransaction) => {
      if (currentTransaction.type === 'income') {
        acc.income += currentTransaction.price
        acc.total += currentTransaction.price
      } else {
        acc.outcome += currentTransaction.price
        acc.total -= currentTransaction.price
      }

      // acc.total = acc.income - acc.outcome

      return acc
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    },
  )

  return summary
}

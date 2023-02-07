import { ReactNode, useCallback, useEffect, useState } from 'react'

import { createContext } from 'use-context-selector'

import { api } from '../lib/axios'

interface ITransaction {
  id: number
  description: string
  price: number
  category: string
  type: 'income' | 'outcome'
  createdAt: string
}

interface INewTransactionData {
  description: string
  price: number
  category: string
  type: 'income' | 'outcome'
}

interface ITransactionsContextType {
  transactions: ITransaction[]
  fectchTransactions: (query?: string) => Promise<void>
  createNewTransaction: (data: INewTransactionData) => Promise<void>
}

interface ITransactionProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext({} as ITransactionsContextType)

export function TransactionProvider({ children }: ITransactionProviderProps) {
  const [transactions, setTransactions] = useState<ITransaction[]>([])

  async function fectchTransactions(query?: string) {
    const response = await api.get('/transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    })

    setTransactions(response.data)

    /* 
    
      const url = new URL('http://localhost:3000/transactions')

    if (query) {
      url.searchParams.append('q', query)
    }

    const response = await fetch(url).then((result) => {
      return result.json()
    })
    setTransactions(response)

    */
  }

  const createNewTransaction = useCallback(
    async (data: INewTransactionData) => {
      const { description, price, category, type } = data

      const responseNewTransaction = await api.post('/transactions', {
        description,
        price,
        category,
        type,
        createdAt: new Date(),
      })

      setTransactions((state) => [responseNewTransaction.data, ...state])
    },
    [],
  )

  useEffect(() => {
    fectchTransactions()
  }, [])

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        fectchTransactions,
        createNewTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}

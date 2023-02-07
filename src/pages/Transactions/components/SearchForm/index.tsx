import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useContextSelector } from 'use-context-selector'

import { SeachFormContainer } from './styles'

import { TransactionsContext } from '../../../../contexts/TransactionsContext'

const searchSchema = zod.object({
  query: zod.string(),
})

type SearchFormInputs = zod.infer<typeof searchSchema>

export function SearchForm() {
  const fectchTransactions = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.fectchTransactions
    },
  )

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchSchema),
  })

  async function handleSearchSubmit(data: SearchFormInputs) {
    await fectchTransactions(data.query)
  }

  return (
    <SeachFormContainer onSubmit={handleSubmit(handleSearchSubmit)}>
      <input
        type="text"
        placeholder="Busque por transações"
        {...register('query')}
        autoComplete="off"
      />
      <button disabled={isSubmitting}>
        <MagnifyingGlass size={24} />
        <span>Buscar</span>
      </button>
    </SeachFormContainer>
  )
}

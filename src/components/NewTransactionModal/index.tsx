// import { useContext } from 'react'

import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useForm, Controller } from 'react-hook-form'
import { useContextSelector } from 'use-context-selector'

import {
  ButtonRegister,
  CloseButton,
  Content,
  Input,
  Overlay,
  TransactionType,
  TransactionTypeButton,
} from './styles'

import { TransactionsContext } from '../../contexts/TransactionsContext'

const newTransactionSchema = zod.object({
  description: zod.string(),
  price: zod.number(),
  category: zod.string(),
  type: zod.enum(['income', 'outcome']),
})

type newTransactionInputs = zod.infer<typeof newTransactionSchema>

export function NewTransactionModal() {
  /*
    com o use-context-selector o componente só irá ser renderizado caso o
    seletor( function createNewTransaction) atualize, evitando uma renderização desnecessária
  */
  const createNewTransaction = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.createNewTransaction
    },
  )

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { isSubmitting },
  } = useForm<newTransactionInputs>({
    resolver: zodResolver(newTransactionSchema),
  })

  async function handleNewTransactionSubmit(data: newTransactionInputs) {
    await createNewTransaction(data)
    reset()
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Nova transação</Dialog.Title>
        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form onSubmit={handleSubmit(handleNewTransactionSubmit)} action="">
          <Input
            type="text"
            placeholder="Descrição"
            {...register('description')}
            autoComplete="off"
            required
          />

          <Input
            type="number"
            placeholder="Preço"
            {...register('price', { valueAsNumber: true })}
            autoComplete="off"
            required
          />

          <Input
            type="text"
            placeholder="Categoria"
            {...register('category')}
            autoComplete="off"
            required
          />

          <Controller
            control={control}
            name="type"
            render={({ field }) => {
              // console.log(props)
              return (
                <TransactionType onValueChange={field.onChange}>
                  <TransactionTypeButton variant="income" value="income">
                    <ArrowCircleUp size={24} />
                    Entrada
                  </TransactionTypeButton>
                  <TransactionTypeButton variant="outcome" value="outcome">
                    <ArrowCircleDown size={24} />
                    Saída
                  </TransactionTypeButton>
                </TransactionType>
              )
            }}
          />

          <ButtonRegister type="submit" disabled={isSubmitting}>
            Cadastrar
          </ButtonRegister>
        </form>
      </Content>
    </Dialog.Portal>
  )
}

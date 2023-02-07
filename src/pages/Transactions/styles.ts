import styled from 'styled-components'

export const TransactionsContainer = styled.div`
  width: 100%;
  max-width: 70rem;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
`

export const TransactionTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;

  td {
    padding: 1.5rem 2rem;
    background-color: ${({ theme }) => theme['gray-700']};

    &:first-child {
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
    }

    &:last-child {
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
    }
  }
`

interface priceHighLightProps {
  variant: 'income' | 'outcome'
}

export const PriceHighLight = styled.span<priceHighLightProps>`
  color: ${({ theme, variant }) =>
    variant === 'income' ? theme['green-300'] : theme['red-300']};
`

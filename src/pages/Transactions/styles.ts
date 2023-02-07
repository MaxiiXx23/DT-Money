import styled from 'styled-components'

export const TransactionsContainer = styled.div`
  flex: 1;
  max-width: 70rem;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
`

export const TableContainer = styled.div`
  width: 100%;
  overflow: auto;
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
    }

    &:last-child {
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

export const ContainerList = styled.div`
  flex: 1;
  padding: 0rem 1.5rem;
  margin-top: 0.75rem;
`

export const List = styled.ul`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  list-style-type: none;
`

export const Card = styled.li`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 1.5rem;
  margin-top: 12px;
  gap: 0.5rem;

  background-color: ${({ theme }) => theme['gray-700']};
  border: 0;
  border-radius: 6px;
`

export const WrapperInfo = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 0.25;
`

export const Description = styled.span`
  color: ${({ theme }) => theme['gray-300']};
  line-height: 1.6;
`

interface IPriceProps {
  variant: 'income' | 'outcome'
}

export const Price = styled.strong<IPriceProps>`
  color: ${({ theme, variant }) =>
    variant === 'income' ? theme['green-300'] : theme['red-300']};
  line-height: 1.6;
`
export const WrapperCategoryAndData = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`
export const Badge = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
`

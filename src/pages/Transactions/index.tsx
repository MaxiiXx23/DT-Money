import { useContextSelector } from 'use-context-selector'
import { Tag, CalendarBlank } from 'phosphor-react'

import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { SearchForm } from './components/SearchForm'
import {
  PriceHighLight,
  TransactionTable,
  TransactionsContainer,
  TableContainer,
  ContainerList,
  Card,
  List,
  WrapperInfo,
  Description,
  Price,
  WrapperCategoryAndData,
  Badge,
} from './styles'

import { TransactionsContext } from '../../contexts/TransactionsContext'
import { dateFormatter, priceFormatter } from '../../utils/formatter'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import { size } from '../../styles/themes/defaultTheme'

export function Transactions() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })

  const isAboveMediumScreen = useMediaQuery(`(min-width: ${size.tabletS})`)

  return (
    <main>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />

        {isAboveMediumScreen ? (
          <TableContainer>
            <TransactionTable>
              <tbody>
                {transactions.map((transaction) => {
                  return (
                    <tr key={transaction.id}>
                      <td width="50%">{transaction.description}</td>
                      <td>
                        <PriceHighLight variant={transaction.type}>
                          {transaction.type === 'outcome' && '- '}
                          {priceFormatter.format(transaction.price)}
                        </PriceHighLight>
                      </td>
                      <td>{transaction.category}</td>
                      <td>
                        {dateFormatter.format(new Date(transaction.createdAt))}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </TransactionTable>
          </TableContainer>
        ) : (
          <ContainerList>
            <List>
              {transactions.map((transaction) => {
                return (
                  <Card key={transaction.id}>
                    <WrapperInfo>
                      <Description>{transaction.description}</Description>
                      <Price variant={transaction.type}>
                        {priceFormatter.format(transaction.price)}
                      </Price>
                    </WrapperInfo>
                    <WrapperCategoryAndData>
                      <Badge>
                        <Tag size={16} />
                        {transaction.category}
                      </Badge>
                      <Badge>
                        <CalendarBlank size={16} />
                        {dateFormatter.format(new Date(transaction.createdAt))}
                      </Badge>
                    </WrapperCategoryAndData>
                  </Card>
                )
              })}
            </List>
          </ContainerList>
        )}
      </TransactionsContainer>
    </main>
  )
}

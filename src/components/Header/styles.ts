import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme['gray-900']};
  padding: 2.5rem 0 7.5rem 0;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 70rem;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const NewTransactionButton = styled.button`
  cursor: pointer;
  width: 9.5rem;
  height: 3.125rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme['green-500']};
  border: 0;
  border-radius: 6px;
  color: ${({ theme }) => theme.white};
  font-weight: bold;

  &:hover {
    background-color: ${({ theme }) => theme['green-300']};
    transition: 0.3s;
  }
`

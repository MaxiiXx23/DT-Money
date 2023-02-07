import styled, { css } from 'styled-components'

export const SummaryContainer = styled.section`
  flex: 1;
  max-width: 70rem;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  margin-top: -5rem;

  @media ${({ theme }) => theme.device.laptop} {
    overflow-x: auto;
  }
`
interface SummaryCardProps {
  variant?: 'green'
}

export const SummaryCard = styled.div<SummaryCardProps>`
  width: 17.5rem;
  background-color: ${({ theme }) => theme['gray-600']};
  border-radius: 6px;
  padding: 1.5rem 2rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${({ theme }) => theme['gray-300']};
  }

  strong {
    display: block;
    margin-top: 0.75rem;
    font-weight: bold;
    font-size: 2rem;
  }

  ${({ theme, variant }) =>
    variant === 'green' &&
    css`
      background-color: ${theme['green-700']};
    `}

  @media ${({ theme }) => theme.device.laptop} {
    padding: 1.5rem 1.5rem;
    strong {
      font-size: 1.75rem;
    }
  }
`

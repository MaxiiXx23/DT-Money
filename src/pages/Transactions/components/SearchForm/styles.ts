import styled from 'styled-components'

export const SeachFormContainer = styled.form`
  width: 100%;
  display: flex;
  gap: 1rem;
  margin: 0 auto;

  @media ${({ theme }) => theme.device.mobileS} {
    gap: 0.5rem;
  }

  input {
    flex: 1;
    border: 0;
    border-radius: 6px;
    background-color: ${({ theme }) => theme['gray-900']};
    color: ${({ theme }) => theme['gray-300']};
    padding: 1rem;

    &::placeholder {
      color: ${({ theme }) => theme['gray-500']};
    }
  }

  button {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    padding: 1rem;

    border: 0;
    border: 1px solid ${({ theme }) => theme['green-300']};
    border-radius: 6px;
    background-color: transparent;
    color: ${({ theme }) => theme['green-300']};
    font-weight: bold;

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background-color: ${({ theme }) => theme['green-500']};
      border-color: ${({ theme }) => theme['green-500']};
      color: ${({ theme }) => theme.white};
      transition: 0.3s;
    }

    @media ${({ theme }) => theme.device.mobileL} {
      span {
        display: none;
      }
    }

    @media ${({ theme }) => theme.device.mobileS} {
      padding: 0.25rem 0.5rem;
      span {
        display: none;
      }
    }
  }
`

import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
  width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background: ${({ theme }) => theme['gray-800']};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media ${({ theme }) => theme.device.tabletS} {
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    width: 85%;
    transform: translate(-50%, -40%);
  }

  @media ${({ theme }) => theme.device.mobileL} {
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    width: 80%;
    transform: translate(-50%, -40%);
  }

  @media ${({ theme }) => theme.device.mobileM} {
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    width: 70%;
    transform: translate(-50%, -40%);
  }

  form {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`

export const CloseButton = styled(Dialog.Close)`
  cursor: pointer;
  position: absolute;
  background: transparent;
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;

  color: ${({ theme }) => theme['gray-500']};
`

export const Input = styled.input`
  border: 0;
  border-radius: 6px;
  background: ${({ theme }) => theme['gray-900']};
  color: ${({ theme }) => theme['gray-300']};

  padding: 1rem;

  &::placeholder {
    color: ${({ theme }) => theme['gray-500']};
  }
`
export const ButtonRegister = styled.button`
  cursor: pointer;
  height: 3.625rem;
  border: 0;
  border-radius: 6px;
  background-color: ${({ theme }) => theme['green-500']};
  padding: 0 1.25rem;
  margin-top: 1.5rem;

  color: ${({ theme }) => theme.white};
  font-weight: bold;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme['green-300']};
    transition: background-color 0.3s;
  }
`

export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 0.5rem;
`

interface TransactionTypeButtonProps {
  variant: 'income' | 'outcome'
}

export const TransactionTypeButton = styled(
  RadioGroup.Item,
)<TransactionTypeButtonProps>`
  cursor: pointer;
  background-color: ${({ theme }) => theme['gray-700']};
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 6px;
  border: 0;
  color: ${({ theme }) => theme['gray-300']};

  svg {
    color: ${({ theme, variant }) =>
      variant === 'income' ? theme['green-300'] : theme['red-300']};
  }

  &[data-state='unchecked']:hover {
    background-color: ${({ theme }) => theme['gray-600']};
    transition: background-color 0.3s;
  }

  &[data-state='checked'] {
    color: ${({ theme }) => theme.white};
    background-color: ${({ theme, variant }) =>
      variant === 'income' ? theme['green-500'] : theme['red-500']};

    svg {
      color: ${({ theme }) => theme.white};
    }
  }
`

import styled, { keyframes, css } from 'styled-components'

const donutSpin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

const animation = () =>
  css`
    ${donutSpin}
  `

export const Spinner = styled.div`
  animation: ${animation} 0.8s linear infinite;
  border: 4px solid ${(props) => props.theme.border.default};
  border-left-color: ${(props) => props.theme.text.primary};
  border-radius: 50%;
  height: 30px;
  width: 30px;
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`

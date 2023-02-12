import styled from 'styled-components'

const LoaderStyled = styled.span`
  width: 5rem;
  height: 5rem;
  display: block;
  margin: 1rem auto;
  position: relative;
  color: var(--white);
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  &::after,
  &::before {
    content: '';
    box-sizing: border-box;
    position: absolute;
    width: 2.5rem;
    height: 2.5rem;
    top: 50%;
    left: 50%;
    transform: scale(0.5) translate(0, 0);
    background-color: var(--text);
    border-radius: 50%;
    animation: animloader 1s infinite ease-in-out;
  }
  &::before {
    background-color: var(--primary);
    transform: scale(0.5) translate(-5rem, -5rem);
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes animloader {
    50% {
      transform: scale(1) translate(-50%, -50%);
    }
  }
`

function Loader () {
  return <LoaderStyled />
}

export default Loader

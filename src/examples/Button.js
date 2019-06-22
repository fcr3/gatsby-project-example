import styled from 'styled-components'


const Button = styled.button`
  /* color: red */

  color ${(props) => props.color};
  background: green;
  /* font-size: 1rem; */

  font-size: ${props => props.big ? "3rem" : "1rem"};
  padding: 1rem;
  margin: 1rem;
`

export default Button

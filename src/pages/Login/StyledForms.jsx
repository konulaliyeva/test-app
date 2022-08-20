import styled from 'styled-components';


export const Form = styled.form`
  justify-content: ${(props) => props.justify || 'flex-start'};
  align-items: ${(props) => props.align || 'stretch'};
  background-color: ${(props) => props.background || 'white'};
  flex-direction: ${(props) => props.direction || 'row'};
  flex-wrap: ${(props) => props.wrap || 'nowrap'};
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};
  position: ${(props) => props.position || 'relative'};
  left: ${(props) => props.left || '20px'};
  right: ${(props) => props.right || '20px'};
  transform: ${(props) => props.transform || 'translate'};
  border-radius: ${(props) => props.border || '8px'};
  padding: ${(props) => props.padding || '34px'};
  z-index: ${(props) => props.index || '99'};
`;
export const Header = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || 'row'};
  justify-content: ${(props) => props.justify || 'center'};
  align-items: ${(props) => props.align || 'center'};
  padding: ${(props) => props.padding || '19px'};
  color: ${(props) => props.color || '#574B90'};
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};
`;

function StyledForm() {
  return <Form></Form>;
}

export default StyledForm;

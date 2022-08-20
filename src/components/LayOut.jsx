import styled from 'styled-components';
import SideBar from './SideBar';

export const Container = styled.div`
  width: 100%;
  background: red;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: ${(props) => props.justify || 'flex-start'};
  align-items: ${(props) => props.align || 'stretch'};
  background-color: ${(props) => props.background || 'white'};
  flex-direction: ${(props) => props.direction || 'row'};
  flex-wrap: ${(props) => props.wrap || 'nowrap'};
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};
`;

export const FlexItem = styled.div`
  align-self: ${(props) => props.self || 'stretch'};
  flex-grow: ${(props) => props.grow || 'inherit'};
  flex-shrink: ${(props) => props.shrink || 'inherit'};
  flex-basis: ${(props) => props.basis || 'inherit'};
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};
  background-color: ${(props) => props.background || 'white'};
  padding: ${(props) => props.padding || '0'};
  margin: ${(props) => props.margin || '0'};
  &:hover {
    background: ${(props) => props.hover};
  }
  &:active {
    background: ${(props) => props.selected};
  }
`;

function LayOut() {
  return (
    <Container>
      <Flex>
        <SideBar />
        <FlexItem grow="1">Main</FlexItem>
      </Flex>
    </Container>
  );
}

export default LayOut;

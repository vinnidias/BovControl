import styled from 'styled-components/native';
import { StatusBar } from 'react-native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff8dc;
  padding-top: ${20 + StatusBar.currentHeight};
  align-items: center ;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;
import { Dimensions, Platform } from 'react-native';
import styled from 'styled-components/native';

export const { height, width } = Dimensions.get('window');

export const defaultRedColor = '#EE593A';

export const DEFAULT_COLORS = {
  ORANGE: '#EA8025',
  RED: '#BD202E',
};

const isAndroid = Platform.OS === 'android';

export const shadow = {
  backgroundColor: '#FFFFFF',
  ...Platform.select({
    ios: {
      shadowColor: '#000000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowRadius: 2,
      shadowOpacity: 0.21,
    },
    android: {
      elevation: 2,
    },
  }),
};

export const ImageView = styled.Image`
  flex: 1;
  height: auto;
  width: auto;
`;

export const RowView = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const FullView = styled.View`
  flex: 1;
  background-color: #ffffff;
  padding-top: ${isAndroid ? 0 : 20};
`;

export const FlexView = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

export const CenterView = styled.View`
  align-items: center;
  justify-content: center;
`;

export const TransparentButton = styled.TouchableHighlight`
  padding-top: 5;
  padding-bottom: 5;
  padding-left: 5;
  padding-right: 5;
`;

export const Text34 = styled.Text`
  font-size: ${width > 320 ? 34 : 32};
`;

export const Text26 = styled.Text`
  font-size: ${width > 320 ? 26 : 23};
`;

export const Text24 = styled.Text`
  font-size: ${width > 320 ? 24 : 22};
`;

export const Text22 = styled.Text`
  font-size: ${width > 320 ? 22 : 21};
`;

export const Text20 = styled.Text`
  font-size: 20;
`;

export const Text18 = styled.Text`
  font-size: 18;
`;

export const Text17 = styled.Text`
  font-size: 17;
`;

export const Text16 = styled.Text`
  font-size: 16;
`;

export const Text14 = styled.Text`
  font-size: 14;
`;

export const Text12 = styled.Text`
  font-size: 12;
`;

export const Text10 = styled.Text`
  font-size: 10;
`;

export const BottomView = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

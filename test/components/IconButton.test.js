import React from 'react';
import IconButton from '../../components/IconButton';
import { TouchableOpacity } from 'react-native';
import renderer from 'react-test-renderer';

describe('IconButton', () => {
    it('renders correctly', () => {
        const mockOnPress = jest.fn();
        const tree = renderer
            .create(<IconButton onPress={mockOnPress} name="home" />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('calls onPress when pressed', () => {
        const mockOnPress = jest.fn();
        const testRenderer = renderer.create(<IconButton onPress={mockOnPress} name="home" />);
        const testInstance = testRenderer.root;

        // Find the TouchableOpacity component and simulate a press
        const touchableOpacity = testInstance.findByType(TouchableOpacity);
        touchableOpacity.props.onPress();

        // Check if onPress was called
        expect(mockOnPress).toHaveBeenCalled();
    });
});
import React from 'react';
import { render } from '@testing-library/react-native';
import OverlayLabel from '../../components/OverlayLabel';

describe('OverlayLabel', () => {
    it('renders correctly', () => {
        const { getByText } = render(<OverlayLabel label="Test Label" color="red" />);

        const labelElement = getByText('Test Label');
        expect(labelElement).toBeTruthy();

    });
});
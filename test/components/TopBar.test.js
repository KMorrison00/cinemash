import React from 'react';
import { render } from '@testing-library/react-native';
import TopBar from '../../components/TopBar';

// Mock the useNavigation hook from '@react-navigation/native'
jest.mock('@react-navigation/native', () => {
    return {
        useNavigation: jest.fn(() => ({
            navigate: jest.fn(),
        })),
    };
});

describe('TopBar', () => {
    it('renders correctly', () => {
        render(<TopBar />);
    });
});
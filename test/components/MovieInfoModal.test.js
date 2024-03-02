import React from 'react';
import { render } from '@testing-library/react-native';
import MovieInfoModal from '../../components/MovieInfoModal';

// Mock the MovieCredits component
jest.mock('../../components/MovieCredits', () => {
    return jest.fn(() => null);
});

describe('MovieInfoModal', () => {
    it('renders correctly', () => {
        const movie = {
            id: '1',
            title: 'Test Movie',
            release_date: '2022-01-01',
            vote_average: '8.5',
            overview: 'This is a test movie.',
            adult: false,
            backdrop_path: '/test.jpg',
        };

        const { getByText } = render(<MovieInfoModal movie={movie} />);

        expect(getByText('Test Movie')).toBeTruthy();
        expect(getByText('2021')).toBeTruthy();
        expect(getByText('8.5/10')).toBeTruthy();
        expect(getByText('This is a test movie.')).toBeTruthy();
    });
});

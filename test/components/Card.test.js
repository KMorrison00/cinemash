import React from 'react';
import { render } from '@testing-library/react-native';

import Card from '../../components/Card';

describe('Card', () => {
    it('renders the movie title and release date', () => {
    const testMovie = {
        original_title: 'Test Movie',
        release_date: '2022-01-01',
        poster_path: '/test.jpg',
    };

    const { getByText } = render(<Card movie={testMovie} />);
    expect(getByText('Test Movie')).toBeTruthy();
    expect(getByText('2022-01-01')).toBeTruthy();
    });
});
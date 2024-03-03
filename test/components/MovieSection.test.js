import React from 'react';
import { render } from '@testing-library/react-native';
import MovieSection from '../../components/MovieSection';

// Mock the MovieCard component
jest.mock('../../components/MovieCard', () => {
  return jest.fn(() => null);
});

describe('MovieSection', () => {
  it('renders correctly', () => {
    const movies = [
      {
        id: '1',
        title: 'Test Movie',
        release_date: '2022-01-01',
        vote_average: '8.5',
        overview: 'This is a test movie.',
        adult: false,
        backdrop_path: '/test.jpg',
      },
    ];

    const { getByText } = render(<MovieSection movies={movies} sectionTitle="Test Section" />);

    expect(getByText('Test Section')).toBeTruthy();
  });
});
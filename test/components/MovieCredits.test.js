import { render } from '@testing-library/react-native';
import MovieCredits from '../../components/MovieCredits';
const fetch = require('node-fetch');
global.fetch = fetch;

describe('MovieCredits', () => {
    it('renders without crashing', () => {
        const movieId = 1; // replace with a valid movieId for your test
        render(<MovieCredits movieId={movieId} />);
    });
});
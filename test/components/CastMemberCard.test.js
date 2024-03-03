import React from 'react';
import CastMemberCard from '../../components/CastMemberCard';
import renderer from 'react-test-renderer';

describe('CastMemberCard', () => {
    it('renders correctly', () => {
    const castMember = {
        profile_path: 'https://image.tmdb.org/t/p/w500/',
        name: 'John Doe',
    };

    const tree = renderer
        .create(<CastMemberCard castMember={castMember} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
    });
});

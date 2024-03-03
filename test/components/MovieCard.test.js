import React from 'react';
import { TouchableOpacity, Modal } from 'react-native';
import MovieCard from '../../components/MovieCard';
import renderer from 'react-test-renderer';

describe('MovieCard', () => {
    it('renders correctly', () => {
        const movie = {
            backdrop_path: '/4MCKNAc6AbWjEsM2h9Xc29owo4z.jpg',
            title: 'The Beekeeper',
        };

        const tree = renderer
            .create(<MovieCard movie={movie} height={100} width={100} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('opens and closes modal', () => {
        const movie = {
            backdrop_path: '/4MCKNAc6AbWjEsM2h9Xc29owo4z.jpg',
            title: 'The Beekeeper',
        };

        const testRenderer = renderer.create(<MovieCard movie={movie} height={100} width={100} />);
        const testInstance = testRenderer.root;

        // Find the TouchableOpacity components
        const touchableOpacities = testInstance.findAllByType(TouchableOpacity);

        // Check if the TouchableOpacity components exist
        if (touchableOpacities.length > 1) {
            // Simulate a press to open the modal
            touchableOpacities[1].props.onPress();

            // Check if modal is visible
            let modal = testInstance.findByType(Modal);
            expect(modal.props.visible).toBe(true);

            // Simulate a press to close the modal
            touchableOpacities[1].props.onPress();

            // Check if modal is not visible
            modal = testInstance.findByType(Modal);
            expect(modal.props.visible).toBe(false);
        }
    });
})
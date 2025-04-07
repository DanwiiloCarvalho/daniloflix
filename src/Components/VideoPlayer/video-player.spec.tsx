import { render } from "@testing-library/react";
import { VideoPlayer } from ".";
import styles from './VideoPlayer.module.css';

describe('VideoPlayer', () => {
    it('should have the class video', () => {
        const { container } = render(
            <VideoPlayer key_trailer="0v6MO0EB7UY" />
        );

        const videoPlayer = container.querySelector('iframe');
        expect(videoPlayer).toHaveClass(styles.video)
    })
})
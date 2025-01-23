import { useEffect, useState } from 'react';

const AnimatedText = ({ pre, texts }) => {
    const phrases = texts;

    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentPhrase = phrases[index];
        const typingSpeed = 150;
        const deletingSpeed = 50;
        const displayDuration = 3000;

        let timeoutId;

        if (isDeleting) {
            if (displayedText.length > 0) {
                timeoutId = setTimeout(() => {
                    setDisplayedText(currentPhrase.substring(0, displayedText.length - 1));
                }, deletingSpeed);
            } else {
                setIsDeleting(false);
                setIndex((index + 1) % phrases.length);
            }
        } else {
            if (displayedText.length < currentPhrase.length) {
                timeoutId = setTimeout(() => {
                    setDisplayedText(currentPhrase.substring(0, displayedText.length + 1));
                }, typingSpeed);
            } else {
                timeoutId = setTimeout(() => {
                    setIsDeleting(true);
                }, displayDuration);
            }
        }

        return () => clearTimeout(timeoutId);
    }, [displayedText, isDeleting, index, phrases]);

    return (
        <div className="flex flex-col items-center justify-center text-lg sm:text-xl md:text-2xl text-[var(--accent-primary)] font-bold">
            <p className="text-center">
                {pre}
            </p>
            <p className="text-center">
                {displayedText}
                <span> |</span>
            </p>
        </div>
    );
};

export default AnimatedText;

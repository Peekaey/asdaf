

const BrushIcon = ({ theme = 'Light' }) => {
    // Determine the stroke color based on the theme
    const strokeColor = theme === 'Dark' ? '#000000' : '#ffffff';

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="96"
            height="96"
            viewBox="0 0 24 24"
            fill="none"
            stroke={strokeColor}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icon-tabler-outline icon-tabler-brush"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 21v-4a4 4 0 1 1 4 4h-4" />
            <path d="M21 3a16 16 0 0 0 -12.8 10.2" />
            <path d="M21 3a16 16 0 0 1 -10.2 12.8" />
            <path d="M10.6 9a9 9 0 0 1 4.4 4.4" />
        </svg>
    );
};

export default BrushIcon;
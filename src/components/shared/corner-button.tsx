import React, { MouseEventHandler } from 'react';
import { clsx } from 'clsx';
import '../../index.css';

type ButtonColor = 'lightBlue' | 'blue';

const tailwindColor = {
    lightBlue: 'bg-sky-400',
    blue: 'bg-blue-800'
}

const disabledColor = 'bg-slate-500';

type ButtonProps = {
    Icon?: string
    color: ButtonColor;
    dataTestId?: string;
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
};

const CornerButton: React.FC<ButtonProps> = ({
    dataTestId,
    color = 'lightBlue',
    onClick,
    disabled,
    Icon,
}) => {

    return (
        <button
            data-testid={dataTestId}
            disabled={disabled}
            onClick={onClick}
            className={`${disabled ? disabledColor : tailwindColor[color]} aspect-square`}
        >
            <svg fill="#000000" width="100px" height="100px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <g data-name="Layer 2">
                <g data-name="arrow-ios-back">
                <rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/>
                <path d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64z"/>
                </g>
                </g>
            </svg>
        </button>
    );
};

export default CornerButton;

import { FunctionalComponent, h } from 'preact';
import cn from 'classnames';

interface InputProps {
    className?: string;
    value?: string;
    onInput?: (event: HTMLElementInputEvent<HTMLInputElement>) => void;
}

const Input: FunctionalComponent<InputProps> = ({ className, ...rest }) => {
    return <input class={cn('Input', className)} {...rest} />;
};

export default Input;

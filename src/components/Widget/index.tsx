import { FunctionalComponent, h } from 'preact';
import { useEffect } from 'preact/hooks';
import Foo from '../Foo';

import styles from './styles.css';

interface WidgetProps {
    title: string;
    color?: string;
}

// Adopted from: https://github.com/omgovich/react-colorful/blob/master/src/hooks/useStyleSheet.ts
let styleElement: HTMLStyleElement | undefined;

const Widget: FunctionalComponent<WidgetProps> = ({ title, color }) => {

    useEffect(() => {
        if (typeof document !== 'undefined' && !styleElement) {
            styleElement = document.head.appendChild(document.createElement('style'));
            styleElement.innerHTML = styles;
        }
    }, []);

    return (
        <div class="Widget">
            <h1 style={{ color }}>{title}</h1>
            <Foo firstName="Joe" />
        </div>
    );
};

export default Widget;

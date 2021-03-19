import { FunctionalComponent, h } from 'preact';
import Foo from '../Foo';

import styles from './styles.css';

interface WidgetProps {
    title: string;
    color?: string;
}

const Widget: FunctionalComponent<WidgetProps> = ({ title, color }) => {
    console.log(styles);
    return (
        <div class="Widget">
            <h1 style={{ color }}>{title}</h1>
            <Foo firstName="Joe" />
        </div>
    );
};

export default Widget;

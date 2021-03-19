type HTMLElementEvent<T extends HTMLElement> = Event & {
    target: T;
    currentTarget: T;
};

type HTMLElementInputEvent<T extends HTMLElement> = InputEvent & {
    target: T;
    currentTarget: T;
};

type HTMLElementMouseEvent<T extends HTMLElement> = MouseEvent & {
    target: T;
    currentTarget: T;
};

type HTMLElementTouchEvent<T extends HTMLElement> = TouchEvent & {
    target: T;
    currentTarget: T;
};

type HTMLElementKeyboardEvent<T extends HTMLElement> = KeyboardEvent & {
    target: T;
    currentTarget: T;
};

declare module '*.css' {
    const classes: string;
    export default classes;
}

declare module '*.module.scss' {
    const classes: { [key: string]: string };
    export default classes;
}

declare module '*.module.sass' {
    const classes: { [key: string]: string };
    export default classes;
}

declare module 'classnames';

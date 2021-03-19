import { FunctionalComponent, h } from 'preact';
import { useCallback, useState } from 'preact/hooks';
import Input from '../Input';

interface FooProps {
    firstName: string;
}

const Foo: FunctionalComponent<FooProps> = ({ firstName }) => {
    const [lastName, setLastName] = useState<string>('User');

    const onLastNameInput = useCallback(
        (event: HTMLElementInputEvent<HTMLInputElement>) => {
            console.log('last name updated!', event.target.value);
            setLastName(event.target.value);
        },
        []
    );

    return (
        <div class="Foo">
            <p>
                Hello, {firstName} {lastName}
            </p>
            <p>
                <Input value={lastName} onInput={onLastNameInput} />
            </p>
        </div>
    );
};

export default Foo;

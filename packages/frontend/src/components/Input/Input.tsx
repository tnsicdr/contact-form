import clsx from 'clsx';
import React, { HTMLProps } from 'react';
import styles from './Input.module.scss';

interface IInputProps extends HTMLProps<HTMLInputElement> {
    label: string;
}

const Input = (props: IInputProps) => {
    const { label } = props;

    return (
        <div className={styles.inputContainer}>
            <label className={styles.inputLabel}>{label}</label>
            <input className={styles.inputControl} {...props} />
        </div>
    );
};

export default Input;

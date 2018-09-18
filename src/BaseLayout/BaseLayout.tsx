import * as React from 'react';
import { css } from 'aphrodite';
import { styles } from './BaseLayout.styles';

export const BaseLayout = () => {
    return (
        <h1 className={css(styles.header)}>This was server rendered</h1>
    );
}
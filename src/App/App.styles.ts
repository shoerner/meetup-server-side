import { StyleSheet } from 'aphrodite';

const logoSpinKeyframes = {
    'from': { transform: 'rotate(0deg)' },
    'to': { transform: 'rotate(360deg)' }
  }

export const styles = StyleSheet.create({
    app: {
        textAlign: 'center',
    },
    appLogo: {
        animationName: [logoSpinKeyframes],
        animationDuration: '20s',
        animationIterationCount: 'infinite',
        height: '80px',
    },
    appHeader: {
        backgroundColor: '#222',
        height: '150px',
        padding: '20px',
        color: 'white',
      },
      appTitle: {
        fontSize: '1.5em',
      },
      appIntro: {
        fontSize: 'large',
      },
})
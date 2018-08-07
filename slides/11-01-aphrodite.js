import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
  red: { backgroundColor: 'red' },

  hover: {
    ':hover': { backgroundColor: 'fuchsia' }
  },

  small: {
    '@media (max-width: 600px)': { backgroundColor: 'seagreen' }
  }
})

const Component = () => (
  <div>
    <span className={css(styles.red)}>This is red.</span>
    <span className={css(styles.hover)}>This turns red on hover.</span>
    <span className={css(styles.small)}>
      This turns red when the browser is less than 600px width.
    </span>
  </div>
)

export default Component

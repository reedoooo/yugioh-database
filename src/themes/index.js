import { extendTheme } from '@chakra-ui/react'

// Global style overrides
import styles from './theme/styles.js'

// Foundational style overrides
import borders from './foundations/borders.js'

// Component style overrides
import Button from './single_part_components/button.js'

const overrides = {
  styles,
  borders,
  // Other foundational style overrides go here
  components: {
    Button,
    // Grid,
    // Navbar,
    // Card,
    // Other components go here
  },
}

export default extendTheme(overrides)
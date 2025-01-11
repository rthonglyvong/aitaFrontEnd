/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'lightTheme', // Set the default theme
    themes: {
      lightTheme: {
        dark: false, // Specify it's a light theme
        colors: {
          primary: '#B3E5FC', // Light pastel blue
          secondary: '#FFCDD2', // Light pastel pink
          background: '#FFF8E1', // Soft pastel yellow
          surface: '#F3E5F5', // Pastel lavender
          error: '#FFAB91', // Soft pastel red
          success: '#C8E6C9', // Pastel green
          warning: '#FFE082', // Pastel orange
          info: '#80DEEA', // Pastel cyan
        },
      },
    },
  },
})

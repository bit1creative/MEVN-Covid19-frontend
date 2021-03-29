const plugin = require('tailwindcss/plugin');

module.exports = {
    purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
    darkMode: 'media', // or 'media' or 'class'
    theme: {
        extend: {
            width: {
                '150': '150%',
                '125': '125%',
            },
            colors: {
                'main-color': '#ff1453',
                'dark-mode-bg': '#222831',
                'dark-mode-bg2': '#363b4e',
                'dark-mode-bg3': '#4d546e',
                'dark-mode-main-color': '#90b8f8',
                'dark-mode-secondary-color': '#c4bbf0',
                'dark-mode-title': '#639cd9',
                linkedin: '#2867B2',
                facebook: '#4267B2',
                telegram: '#0088cc',
                twitter: '#1DA1F2',
            },
            backgroundImage: theme => ({
                'mask-girl-photo':
                    "url('https://www.who.int/images/default-source/health-topics/coronavirus/gettyimages-1203376093.tmb-1366v.png?Culture=en&sfvrsn=6e0c1bc7_6%201366w')",
            }),
            spacing: {
                '112': '28rem',
                '1/10': '10%',
                '50per': '50%',
            },
            theme: {
                borderColor: theme => ({
                    ...theme('colors'),
                    'dark-mode-main-color': '#f2a365',
                }),
            },
            keyframes: {
                slidein: {
                    '10%': { right: '-50%' },
                    '100%': { right: '-8.333333%' },
                },
                slideout: {
                    '0%': { right: '-8.333333%' },
                    '30%': { right: '0' },
                    '100%': { right: '-50%;' },
                },
                appear: {
                    '0%, 28%': { opacity: '0' },
                    // '30%': { opacity: '1', width: '100%' },
                    // '90%': { width: '100%' },
                    // '100%': { width: '58.333333%' },
                    '30%': { opacity: '1' },
                },
            },
            fill: theme => ({
                'main-color': theme('colors.main-color'),
                'dark-mode-bg': theme('colors.dark-mode-bg'),
                'dark-mode-bg2': theme('colors.dark-mode-bg2'),
                'dark-mode-bg3': theme('colors.dark-mode-bg3'),
                'dark-mode-main-color': theme('colors.dark-mode-main-color'),
                'dark-mode-secondary-color': theme(
                    'colors.dark-mode-secondary-color'
                ),
                'dark-mode-title': theme('colors.dark-mode-title'),
                'pink-200': theme('colors.pink.200'),
                'pink-100': theme('colors.pink.100'),
            }),
            animation: {
                slidein: 'slidein 0.7s ease-in-out',
                appear: 'appear 0.4s forwards',
                slideout: 'slideout 5s ease-in-out',
            },
            transitionProperty: {
                width: 'width',
                margin: 'margin',
                inset: 'inset',
            },
            transitionTimingFunction: {
                'slow-in-quick-out': 'cubic-bezier(0,1.21,.87,.68)',
            },
        },
    },
    variants: {
        extend: {
            backgroundColor: ['active'],
            animation: ['responsive', 'hover'],
            margin: ['responsive', 'hover', 'group-hover'],
            opacity: ['active', 'dark'],
            fontSize: ['responsive', 'hover', 'group-hover'],
            lineHeight: ['responsive', 'hover'],
            fill: ['hover', 'focus', 'dark'],
            borderWidth: ['dark'],
            boxShadow: ['dark'],
            inset: ['hover', 'focus', 'group-hover'],
        },
    },
    plugins: [require('tailwindcss-textshadow')],
};

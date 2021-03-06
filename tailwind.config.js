module.exports = {
    purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
    darkMode: 'media', // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'main-color': '#ff1453',
                'dark-mode-bg': '#222831',
                'dark-mode-bg2': '#363b4e',
                'dark-mode-bg3':'#4d546e',
                'dark-mode-main-color': '#f2a365',
                'dark-mode-title':'#fcdab7'
            },
            backgroundImage: theme => ({
                'mask-girl-photo':
                    "url('https://www.who.int/images/default-source/health-topics/coronavirus/gettyimages-1203376093.tmb-1366v.png?Culture=en&sfvrsn=6e0c1bc7_6%201366w')",
            }),
            spacing: {
                '112': '28rem',
                '1/10':'10%'
            },
            theme: {
                borderColor: theme => ({
                 ...theme('colors'),
                 'dark-mode-main-color': '#f2a365',
                })
            },
        },
    },
    variants: {
        extend: {
            backgroundColor: ['active'],
            animation: ['responsive', 'hover'],
        },
    },
    plugins: [],
};

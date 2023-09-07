const { data } = require('autoprefixer');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                "kivotos": "url('../images/background/BG_View_Kivotos.jpg')",
                "BG_Abydos_Collection.jpg":"url('../images/background/BG_Abydos_Collection.jpg')",
                "BG_BunnyGirl_Collection.jpg":"url('../images/background/BG_BunnyGirl_Collection.jpg')",
                "BG_CH0066_Collection.jpg":"url('../images/background/BG_CH0066_Collection.jpg')",
                "BG_CH9999_Collection.jpg":"url('../images/background/BG_CH9999_Collection.jpg')",
                "BG_Cheerleading_Collection.jpg":"url('../images/background/BG_Cheerleading_Collection.jpg')",
                "BG_CraftChamber_Night.jpg":"url('../images/background/BG_CraftChamber_Night.jpg')",
                "BG_FishingVillage_Collection.jpg":"url('../images/background/BG_FishingVillage_Collection.jpg')",
                "BG_Gehenna_Collection.jpg":"url('../images/background/BG_Gehenna_Collection.jpg')",
                "BG_Holiday_Collection.jpg":"url('../images/background/BG_Holiday_Collection.jpg')",
                "BG_HQ.jpg":"url('../images/background/BG_HQ.jpg')",
                "BG_Hyakkiyako_Collection.jpg":"url('../images/background/BG_Hyakkiyako_Collection.jpg')",
                "BG_MainOffice_Night.jpg":"url('../images/background/BG_MainOffice_Night.jpg')",
                "BG_MainOffice_Night2:":"url('../images/background/BG_MainOffice_Night2.jpg')",
                "BG_Millennium_Collection.jpg":"url('../images/background/BG_Millennium_Collection.jpg')",
                "BG_Newyear_Collection.jpg":"url('../images/background/BG_Newyear_Collection.jpg')",
                "BG_NewYearFestival2.jpg":"url('../images/background/BG_NewYearFestival2.jpg')",
                "BG_OldHouseOutside_Collection.jpg":"url('../images/background/BG_OldHouseOutside_Collection.jpg')",
                "BG_Onsen_Collection.jpg":"url('../images/background/BG_Onsen_Collection.jpg')",
                "BG_Raid.jpg":"url('../images/background/BG_Raid.jpg')",
                "BG_ReceptionRoom.jpg":"url('../images/background/BG_ReceptionRoom.jpg')",
                "BG_Redwinter_Collection.jpg":"url('../images/background/BG_Redwinter_Collection.jpg')",
                "BG_Ridingsuit_Collection.jpg":"url('../images/background/BG_Ridingsuit_Collection.jpg')",
                "BG_Sanhaijing_Collection.jpg":"url('../images/background/BG_Sanhaijing_Collection.jpg')",
                "BG_Saya_casual_Collection.jpg":"url('../images/background/BG_Saya_casual_Collection.jpg')",
                "BG_SRT_Collection.jpg":"url('../images/background/BG_SRT_Collection.jpg')",
                "BG_Swimsuit_Collection.jpg":"url('../images/background/BG_Swimsuit_Collection.jpg')",
                "BG_Swimsuit02_Collection.jpg":"url('../images/background/BG_Swimsuit02_Collection.jpg')",
                "BG_Swimsuit03_Collection.jpg":"url('../images/background/BG_Swimsuit03_Collection.jpg')",
                "BG_Trinity_Collection.jpg":"url('../images/background/BG_Trinity_Collection.jpg')",
                "BG_Valkyrie_Collection.jpg":"url('../images/background/BG_Valkyrie_Collection.jpg')",
                "BG_View_Kivotos.jpg":"url('../images/background/BG_View_Kivotos.jpg')",
                "BG_WaterFaill.jpg":"url('../images/background/BG_WaterFaill.jpg')",
                
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            fontFamily: {
                lugrasimo: ['Lugrasimo', 'cursive'],
                montserrat: ['Montserrat', 'sans-serif'],
                nunito: ['Nunito', 'sans-serif'],
                roboto: ['Roboto', 'sans-serif'],
            },
            margin: {
                '30': '30px',
              },
        },
    },
    plugins: [],
};

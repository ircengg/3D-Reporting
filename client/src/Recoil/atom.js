import { atom } from 'recoil'

export const appState = atom(
    {
        key: 'appState',
        default: {
            userEmail: 'ychjaat@gmail.com',
            userName: 'Yogesh Chaudhary',
            userDepartment: "",
            companyLogo: 'https://drive.google.com/uc?export=download&id=1JbXqFVztKBGGlvt-Qr-2vhcs1iRmt6jl',
            companyName: "IRC ENGINEERING SERVICES INDIA PVT. LTD.",
            isUserLoggedIn: true,
            userProfilePic: '',
            drawerWidth: 200
          }
    }
)

export const waitLoaderState = atom(
    {
        key: 'waitLoaderState',
        default: false
    }
)

export const alertState = atom(
    {
        key: 'alertState',
        default: {
            open: false,
            message: '',
            type: 'success'
        }
    }
)
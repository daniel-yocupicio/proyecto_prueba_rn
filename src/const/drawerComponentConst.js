const drawerComponent = {
    isloged: {
        iconsdraweraccount: ['account-cog', 'logout'],
        textbuttonsdraweraccount: ['Editar cuenta', 'Cerrar sesión'],
        colorsicon: ['#517fa4', '#BF4343'],
        routes: ['DrawerSettings','DrawerSettings']
    },
    isnotloged: {
        iconsdraweraccount: ['login', 'account-plus'],
        textbuttonsdraweraccount: ['Iniciar sesión', 'Crear cuenta'],
        colorsicon: ['#517fa4', '#517fa4'],
        routes: ['DrawerLogin','DrawerRegister']
    },
    screenoptions: {
        headerShown: false,
        drawerActiveBackgroundColor: '#DADADA',
        drawerActiveTintColor: '#DADADA',
        drawerInactiveTintColor: '#fff',
        drawerLabelStyle: {
            fontSize: 15,
            color: '#aa18ea',
        }
    }
}

export default drawerComponent;
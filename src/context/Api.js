const server = 'https://backendgrupo32.herokuapp.com/';
const apiRegistro = `${server}/user`;
const apiLogin = `${server}/user/auth`; 
const apiProducto = `${server}/product`;
const apiProductByUser = `${apiProducto}/user`;

export {server, apiRegistro, apiLogin, apiProductByUser, apiProducto}
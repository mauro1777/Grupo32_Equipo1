const server = 'http://localhost:4000';
const apiRegistro = `${server}/user`;
const apiLogin = `${server}/user/auth`; 
const apiProducto = `${server}/product`;
const apiProductByUser = `${apiProducto}/user`;

export {server, apiRegistro, apiLogin, apiProductByUser, apiProducto}
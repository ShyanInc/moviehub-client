// // import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';


// // interface User {
// //     email:string,
// //     password:string,
// // }

// // export const UserRegister = createApi({
// //     reducerPath: 'UserRegister',
// //     baseQuery: fetchBaseQuery({ baseUrl: 'https://moviehub-api-8l85.onrender.com/' }),
// //     endpoints: (builder: any) => ({
// //         RegisterUserMutation: builder.mutation({
// //             query: () => `auth/register`,
// //             mutation: (data: any) => {
// //                 return fetch(`${data.url}`, {
// //                     method: "POST",
// //                     body: JSON.stringify(data.body),
// //                 });
// //             },
// //         }),
// //     }),
// // });
// // export const { RegisterUserMutation } = UserRegister;
// // interface IUserData {
// //     email: string,
// //     password: string
// // }

// // export const authApi = createApi({
// //     reducerPath: 'authApi',
// //     baseQuery: fetchBaseQuery({ baseUrl: 'https://moviehub-api-8l85.onrender.com/' }),
// //     endpoints: (builder: any) => ({
// //         RegisterUserMutation: builder.mutation({
// //             query: (body: IUserData) => {
// //             return{
// //                 url:"/auth/register",
// //                 method:"POST",
// //                 body
// //             }

// //             }
// //         }),
// //     }),
// // });

// // export const {useRegisterUserMutation } = authApi;
// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

// interface User {
//     email: string;
//     password: string;
// }

// export const UserRegister = createApi({
//   reducerPath: 'UserRegister',
//   baseQuery: fetchBaseQuery({ baseUrl: 'https://moviehub-api-8l85.onrender.com/' }),
//   endpoints: (builder: any) => ({
//     RegisterUserMutation: builder.mutation({
//       query: () => `auth/register`,
//       mutation: (data: User) => {
//         return fetch(`${data.url}`, {
//           method: "POST",
//           body: JSON.stringify(data),
//         });
//       },
//     }),
//   }),
// });


// export const { RegisterUserMutation } = UserRegister;
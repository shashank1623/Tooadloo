"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
//similar to import monggose from monggose
// mongoose.connect()
// async function insertUser(username: string, password: string, firstName: string, lastName: string) {
//     const res = await prisma.user.create({
//       data: {
//           username,
//           password,
//           firstName,
//           lastName
//       }
//     })
//     console.log(res);
//   }
// insertUser("shashankbhardwaj2030@gmail.com", "asdfasdf", "bhardwaj", "shashank")
//create Todo
// async function createTodo(userId : number , title : string , description : string){
//   const res = await prisma.todo.create({
//     data : {
//       title,
//       description,
//       userId
//     }
//   });
//   console.log(res)
// }
// createTodo(1,"Go to Gym","Go To Gym and do 20 pushups");
// getTodos
// async function getTodos(userId : number) {
//   const res = await prisma.todo.findMany({
//     where :{
//       userId
//     }
//   });
//   console.log(res)
// }
// getTodos(1);
// GetTodosAndUserDetails
function getTodosAndUserDetails(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.todo.findMany({
            where: {
                userId
            },
            select: {
                user: true,
                title: true,
                description: true
            }
        });
        console.log(res);
    });
}
getTodosAndUserDetails(1);

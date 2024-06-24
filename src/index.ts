import { PrismaClient } from "@prisma/client";
import { todo } from "node:test";
const prisma = new PrismaClient();

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

async function getTodosAndUserDetails(userId : number) {

  const res = await prisma.todo.findMany({
    where : {
      userId 
    },
    select :{
      user : true,
      title : true,
      description : true
    }
  })
  
  console.log(res);
  
}

getTodosAndUserDetails(1);
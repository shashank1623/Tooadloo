import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

//similar to import monggose from monggose
// mongoose.connect()

async function insertUser(username: string, password: string, firstName: string, lastName: string) {
    const res = await prisma.user.create({
      data: {
          username,
          password,
          firstName,
          lastName
      }
    })
    console.log(res);
  }
  
  insertUser("admin1", "123456", "harkirat", "singh")
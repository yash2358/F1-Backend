const {z}=require('zod');

const signupSchema=z.object({
    username:z.string({required_error:"Name is Required"}).trim().min(3,{message:"Name Must be 3 letter"}),
    email:z.string({required_error:"Email is Required"}).trim().min(10,{message:"Email Must be 10 letter"}),
    phone:z.string({required_error:"Number is Required"}).trim().min(10,{message:"Number Must be 10 letter"}),
    password:z.string({required_error:"Password is Required"}).trim().min(3,{message:"Password Must be 3 letter"}),
})

const loginSchema=z.object({
    email:z.string({required_error:"Email is Required"}).trim().min(10,{message:" EmailMust be 10 letter"}),
    password:z.string({required_error:"Password is Required"}).trim().min(3,{message:"Password Must be 3 letter"}),
})

const contactSchema=z.object({
    username:z.string({required_error:"Username is Required"}).trim().min(4,{message:"Username must be at least 4 characters"}),
    email:z.string({required_error:"Email is Required"}).trim().min(10,{message:"Email must be at least 10 characters"}),
    message:z.string({required_error:"Message is Required"}).trim().min(3,{message:"Message must be at least 3 characters"}),
})

module.exports={signupSchema,loginSchema,contactSchema};
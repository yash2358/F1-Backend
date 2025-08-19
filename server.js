require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app=express();
const router=require('./router/auth-router');
const contactRouter=require('./router/contact-router');
const serviceRouter=require('./router/service-router');
const adminRouter=require('./router/admin-router');
const connectDb=require('./utils/db');
const errorMiddleware = require('./middlewares/error-middleware');

app.use(cors());
app.use(express.json());
app.use('/api/auth',router);
app.use('/api/form',contactRouter);
app.use('/api/data',serviceRouter)
app.use('/api/admin',adminRouter)
app.use(errorMiddleware);  //when next function is used for error then it should go to errorMiddleware

const PORT=process.env.PORT;
connectDb().then(()=>{
app.listen(PORT,()=>{
    console.log(`PORT IS ${PORT}`);
})
})
import { contactMe } from "../Models/User.js";

// creating contactMe
export const contact = async (req, res)=> {
    const {name, email, message} = req.body;

    console.log('Request body:', req.body);

    try{
        if(!name || !email || !message){
            return res.status(400).json({message:"All fields are required."});
        }
        const contact = await contactMe.create({name, email, message});
        console.log("Contact message saved:", contact);
        res.status(201).json({message: "Message sent successfully!", contact});
    }catch(error){
        console.error("Error creating contact message:", error);
        res.status(500).json({ message: `Failed to send the message. Error: ${error.message}`});
    }
};
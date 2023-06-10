import UserDetails from "../models/user.js";

export const getUser = async (req, res) =>  {
    try {
        const usersCreated = await UserDetails.find()
        console.log(usersCreated)
        res.status(200).json(usersCreated);
    } catch(err) {
        res.status(404).json({message: error.message});

    }
}

export const createUser = async (req,res) => {
    const body = req.body;
    const newUser = new UserDetails(user)
    try {
        await newUser.save();
        res.status(200).json(newUser);
    } catch (err) {
        res.status(409).json({message: err.message});
    }
    
}
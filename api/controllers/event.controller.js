import Event from "../model/event.model.js"

export const createEvent = async (req,res,next) => {
    const {title, description, startingDate, endingDate, location, image, resgestrationOpen, registrationStartDate, registrationEndDate, allowTeams, limitOfMembers, comments, createdBy } = req.body

    const addEvent = new Event({
        title,
        description,
        startingDate,
        endingDate,
        location,
        image,
        resgestrationOpen,
        registrationStartDate,
        registrationEndDate,
        allowTeams,
        limitOfMembers,
        comments,
        createdBy
    })

    try {
        const event = await addEvent.save()
        res.status(200).json(event)
    } catch (error) {
        next(error)
    }
}

export const getAllEvents = async (req,res,next) => {
    try {
        const events = await Event.find()
        res.status(200).json(events)
    } catch (error) {
        next(error)
    }
}

export const getEvent = async (req,res,next) => {
    const id = req.params.id
    try {
        const event = await Event.findById(id)
        res.status(200).json(event)
    } catch (error) {
        next(error)
    }
}

export const updateEvent = async (req,res,next) => {
    const id = req.params.id
    const {title, description, startingDate, endingDate, location, image, resgestrationOpen, registrationStartDate, registrationEndDate, allowTeams, limitOfMembers, comments, createdBy } = req.body

    try {
        const event = await Event.findByIdAndUpdate(id,{
            title,
            description,
            startingDate,
            endingDate,
            location,
            image,
            resgestrationOpen,
            registrationStartDate,
            registrationEndDate,
            allowTeams,
            limitOfMembers,
            comments,
            createdBy
        },{new:true})
        if(!event) return res.status(404).json({message:"Event not found"})
        res.status(200).json(event)
    } catch (error) {
        next(error)
    }
}

export const deleteEvent = async (req,res,next) => {
    const id = req.params.id
    try {
        const event = await Event.findByIdAndDelete(id)
        res.status(200).json(event)
    } catch (error) {
        next(error)
    }
}
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
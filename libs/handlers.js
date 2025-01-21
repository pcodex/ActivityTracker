exports.saveActivity = (req,res) => {
    console.log("Activity Description " + req.body.actdesc)
    res.redirect(303, '/activitySubmitted')
}


exports.endActivity = (req,res) => {

    console.log("Activity Submitted " + req.body)

    res.render('actaubmitted')    
}
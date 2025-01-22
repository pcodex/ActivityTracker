const { MongoClient, ServerApiVersion } = require("mongodb");

exports.saveActivity = (req,res) => {
    console.log("Activity Description " + req.body.actdesc)
    //DB stuff
    
    const uri = 'mongodb://localhost:27017'
    // Create a MongoClient with a MongoClientOptions object to set the Stable API version
    const client = new MongoClient(uri,  {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
}
);    

    async function run() {
        try {
          // Connect the client to the server (optional starting in v4.7)
          await client.connect();
          // Send a ping to confirm a successful connection
          await client.db("PrabActive").collection("activities").insertOne({
            date:new Date(),
            name:req.body.actdesc
          })
          console.log("Pinged your deployment. You successfully connected to MongoDB!");
        } finally {
          // Ensures that the client will close when you finish/error
          await client.close();
        }
      }
      run().catch(console.dir);

    res.redirect(303, '/activitySubmitted')

}


exports.endActivity = (req,res) => {

    console.log("Activity Submitted " + req.body)

    res.render('actaubmitted')    
}
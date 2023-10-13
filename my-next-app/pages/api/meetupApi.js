import { MongoClient } from "mongodb";

function handler() {
  async function meetupApi(req, res) {
    if (req.method === "POST") {
      const data = req.body;

      const client = await MongoClient.connect(
        "mongodb+srv://meetup:meetup7890@cluster0.8dsqzra.mongodb.net/meetupApi?retryWrites=true&w=majority"
      );
      const db = client.db();

      const meetupCollection = db.collection("meetupApi");
      const result = await meetupCollection.insertOne(data);

      console.log(result);
      client.close();

      res.status(201).json({ message: "meetup message" });
    }
  }
}
export default handler;

const mongoose = require("mongoose");
const Blog = require("./src/model/blog"); // Adjust the path to your Blog model

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/blog-app", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const DEFAULT_USER_ID = "67e11d156c8c410d4b13d3e9"; // Replace with an actual user ID

const updateBlogs = async () => {
  try {
    // Update all blogs where userId is missing
    const result = await Blog.updateMany(
      { userId: { $exists: false } }, // Find blogs without userId
      { $set: { userId: DEFAULT_USER_ID } } // Set default userId
    );

    console.log(`✅ Updated ${result.modifiedCount} blogs successfully.`);
  } catch (error) {
    console.error("❌ Error updating blogs:", error);
  } finally {
    mongoose.connection.close(); // Close connection after execution
  }
};

// Run the update function
updateBlogs();

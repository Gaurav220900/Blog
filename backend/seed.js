const mongoose = require('mongoose');
const blog = require('./src/model/blog');

const dummyblogs = [

    {
        title : 'Nature',
        url : 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Startrails_above_Gunung_Bromo_-_Indonesia.jpg/435px-Startrails_above_Gunung_Bromo_-_Indonesia.jpg',
        content: 'Nature is an inherent character or constitution,[1] particularly of the ecosphere or the universe as a whole. In this general sense nature refers to the laws, elements and phenomena of the physical world, including life. Although humans are part of nature, human activity or humans as a whole are often described as at times at odds, or outright separate and even superior to nature.[2] During the advent of modern scientific method in the last several centuries, nature became the passive reality, organized and moved by divine laws.[3][4] With the Industrial Revolution, nature increasingly became seen as the part of reality deprived from intentional intervention: it was hence considered as sacred by some traditions (Rousseau, American transcendentalism) or a mere decorum for divine providence or human history (Hegel, Marx). However, a vitalist vision of nature, closer to the pre-Socratic one, got reborn at the same time, especially after Charles Darwin.[2]'
    },
    {
        title : 'Food',
        url : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/450px-Good_Food_Display_-_NCI_Visuals_Online.jpg',
        content: 'Food is any substance consumed by an organism for nutritional support. Food is usually of plant, animal, or fungal origin and contains essential nutrients such as carbohydrates, fats, proteins, vitamins, or minerals. The substance is ingested by an organism and assimilated by the organism\'s cells to provide energy, maintain life, or stimulate growth. Different species of animals have different feeding behaviours that satisfy the needs of their metabolisms and have evolved to fill a specific ecological niche within specific geographical contexts.'
    }
]

mongoose
  .connect("mongodb://127.0.0.1:27017/blog-app",{
  }).then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

  const seedDB = async () => {
   
  
    await blog.insertMany(dummyblogs);
    console.log("DB Seeded");
  };
  
  seedDB();
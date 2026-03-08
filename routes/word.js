const express = require('express');

const router = express.Router();
const {readFile, writeFile} = require('fs').promises; //Destructuring


  

router.get('/', (req, res)=>{

res.send('Word Home Page');

});
router.get('/wotd', async (req, res)=>{
    let wordArray =await getWordFromDictionary();
    let [ word, part, definition ] = wordArray;
res.render('wotd', {word:word, part:part, definition:definition});
// do something w/ func
});

 router.get('/addword', (req, res)=>{

 });
 router.get('/allwords', async (req, res) => {
    try {
        const data = await readFile('resources/allwords.txt', 'utf8');

        // Split into lines
        let lines = data.split('\n');

        // Map each line to an object
        let words = lines.map(line => {
            let [word, part, definition] = line.split('\t');
            return { word, part, definition };
        });

        // Sort alphabetically
        words.sort((a, b) => a.word.localeCompare(b.word));

        // Render only once
        res.render('allwords', { words: words });

    } catch (err) {
        console.log("There was an error reading the file", err);
        res.send("Error loading words");
    }
});


 let getWordFromDictionary = async () => {
    try{
        const data = await readFile('resources/allwords.txt','utf8');
        let lines=data .split('\n');
        let randomNumber = parseInt (Math.random() * lines.length);
        let randomLine= lines[randomNumber];
        let wordArray = randomLine.split('\t');
        console.log(wordArray);
        return wordArray;
    }
    catch(err){
        console.log("There was an error reading the file", err);
    
    }
};  
module.exports = router;
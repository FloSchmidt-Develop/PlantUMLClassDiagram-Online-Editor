const antlr4 = require('./node_modules/antlr4')
var PlantUMLLexer = require('./parser/PlantUMLLexer').PlantUMLLexer;
var PlantUMLParser = require('./parser/PlantUMLParser').PlantUMLParser;
var DiagramListener = require('./parser/DiagramListener').DiagramListener;

const express = require('./node_modules/express');
const fileUpload = require('./node_modules/express-fileupload');
const cors = require('./node_modules/cors');

const app = express();

app.use(fileUpload());
app.use(cors());

app.post('/upload', (req, res) => {
    if(req.file === null){
        return res.status(400).json({msg: 'no file uploaded'})
    }

    const file = req.files.file;
    console.log(file.data);
    var input = file.data.toString('utf8');

    var chars = new antlr4.InputStream(input);
    var lexer = new PlantUMLLexer(chars);
    var tokens  = new antlr4.CommonTokenStream(lexer);
    var parser = new PlantUMLParser(tokens);
    parser.buildParseTrees = true;
    var tree = parser.diagram();

    var o = {};

    var listener = new DiagramListener(o);
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener,tree);
    
    console.log(listener.Res.class_declaration);

    res.json(listener);
})


app.listen(1234, () => console.log('Server Started'));



//let data = JSON.stringify(listener);
//fs.writeFileSync('result.json', data);


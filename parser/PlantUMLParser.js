// Generated from PlantUML.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var PlantUMLListener = require('./PlantUMLListener').PlantUMLListener;
var PlantUMLVisitor = require('./PlantUMLVisitor').PlantUMLVisitor;

var grammarFileName = "PlantUML.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003-\u01dc\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004",
    "\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0004$\t$\u0004",
    "%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004*\t*\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0005\u0002X\n\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0007\u0003`\n\u0003",
    "\f\u0003\u000e\u0003c\u000b\u0003\u0003\u0004\u0003\u0004\u0005\u0004",
    "g\n\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004",
    "m\n\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0007\u0004",
    "s\n\u0004\f\u0004\u000e\u0004v\u000b\u0004\u0003\u0004\u0005\u0004y",
    "\n\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0005\u0005~\n\u0005\u0003",
    "\u0005\u0005\u0005\u0081\n\u0005\u0003\u0006\u0003\u0006\u0005\u0006",
    "\u0085\n\u0006\u0003\u0006\u0003\u0006\u0005\u0006\u0089\n\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0007\u0006\u0090",
    "\n\u0006\f\u0006\u000e\u0006\u0093\u000b\u0006\u0003\u0006\u0005\u0006",
    "\u0096\n\u0006\u0003\u0007\u0003\u0007\u0005\u0007\u009a\n\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0005\u0007\u009f\n\u0007\u0003\b\u0005",
    "\b\u00a2\n\b\u0003\b\u0003\b\u0005\b\u00a6\n\b\u0003\b\u0003\b\u0005",
    "\b\u00aa\n\b\u0003\t\u0003\t\u0003\t\u0005\t\u00af\n\t\u0003\t\u0003",
    "\t\u0005\t\u00b3\n\t\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\f\u0005\f\u00bb\n\f\u0003\f\u0005\f\u00be\n\f\u0003\f\u0003\f",
    "\u0003\f\u0005\f\u00c3\n\f\u0003\f\u0003\f\u0005\f\u00c7\n\f\u0003\r",
    "\u0006\r\u00ca\n\r\r\r\u000e\r\u00cb\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0003\u000e\u0005\u000e\u00d2\n\u000e\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0005\u000f\u00d8\n\u000f\u0003\u0010\u0005\u0010",
    "\u00db\n\u0010\u0003\u0010\u0005\u0010\u00de\n\u0010\u0003\u0010\u0003",
    "\u0010\u0003\u0010\u0005\u0010\u00e3\n\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0005\u0010\u00e8\n\u0010\u0003\u0010\u0005\u0010\u00eb",
    "\n\u0010\u0003\u0010\u0005\u0010\u00ee\n\u0010\u0003\u0011\u0007\u0011",
    "\u00f1\n\u0011\f\u0011\u000e\u0011\u00f4\u000b\u0011\u0003\u0012\u0005",
    "\u0012\u00f7\n\u0012\u0003\u0012\u0005\u0012\u00fa\n\u0012\u0003\u0012",
    "\u0003\u0012\u0005\u0012\u00fe\n\u0012\u0003\u0012\u0003\u0012\u0005",
    "\u0012\u0102\n\u0012\u0003\u0012\u0003\u0012\u0003\u0013\u0006\u0013",
    "\u0107\n\u0013\r\u0013\u000e\u0013\u0108\u0003\u0014\u0006\u0014\u010c",
    "\n\u0014\r\u0014\u000e\u0014\u010d\u0003\u0014\u0006\u0014\u0111\n\u0014",
    "\r\u0014\u000e\u0014\u0112\u0003\u0014\u0003\u0014\u0003\u0014\u0003",
    "\u0014\u0007\u0014\u0119\n\u0014\f\u0014\u000e\u0014\u011c\u000b\u0014",
    "\u0003\u0014\u0003\u0014\u0003\u0014\u0006\u0014\u0121\n\u0014\r\u0014",
    "\u000e\u0014\u0122\u0003\u0014\u0003\u0014\u0007\u0014\u0127\n\u0014",
    "\f\u0014\u000e\u0014\u012a\u000b\u0014\u0003\u0014\u0005\u0014\u012d",
    "\n\u0014\u0003\u0015\u0003\u0015\u0005\u0015\u0131\n\u0015\u0003\u0015",
    "\u0003\u0015\u0005\u0015\u0135\n\u0015\u0003\u0015\u0005\u0015\u0138",
    "\n\u0015\u0003\u0016\u0003\u0016\u0005\u0016\u013c\n\u0016\u0003\u0016",
    "\u0005\u0016\u013f\n\u0016\u0003\u0016\u0005\u0016\u0142\n\u0016\u0003",
    "\u0016\u0003\u0016\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0005",
    "\u0017\u014a\n\u0017\u0003\u0017\u0003\u0017\u0005\u0017\u014e\n\u0017",
    "\u0003\u0017\u0005\u0017\u0151\n\u0017\u0003\u0017\u0005\u0017\u0154",
    "\n\u0017\u0003\u0018\u0003\u0018\u0003\u0019\u0003\u0019\u0003\u001a",
    "\u0003\u001a\u0003\u001b\u0003\u001b\u0003\u001b\u0005\u001b\u015f\n",
    "\u001b\u0003\u001b\u0003\u001b\u0005\u001b\u0163\n\u001b\u0003\u001c",
    "\u0003\u001c\u0003\u001c\u0006\u001c\u0168\n\u001c\r\u001c\u000e\u001c",
    "\u0169\u0003\u001d\u0003\u001d\u0003\u001d\u0005\u001d\u016f\n\u001d",
    "\u0003\u001d\u0007\u001d\u0172\n\u001d\f\u001d\u000e\u001d\u0175\u000b",
    "\u001d\u0003\u001e\u0003\u001e\u0003\u001f\u0003\u001f\u0003\u001f\u0007",
    "\u001f\u017c\n\u001f\f\u001f\u000e\u001f\u017f\u000b\u001f\u0003 \u0005",
    " \u0182\n \u0003 \u0007 \u0185\n \f \u000e \u0188\u000b \u0003 \u0005",
    " \u018b\n \u0003 \u0003 \u0005 \u018f\n \u0003!\u0007!\u0192\n!\f!\u000e",
    "!\u0195\u000b!\u0003\"\u0007\"\u0198\n\"\f\"\u000e\"\u019b\u000b\"\u0003",
    "#\u0007#\u019e\n#\f#\u000e#\u01a1\u000b#\u0003$\u0007$\u01a4\n$\f$\u000e",
    "$\u01a7\u000b$\u0003%\u0003%\u0003&\u0003&\u0005&\u01ad\n&\u0003\'\u0003",
    "\'\u0003\'\u0003\'\u0003\'\u0003\'\u0005\'\u01b5\n\'\u0003\'\u0005\'",
    "\u01b8\n\'\u0003\'\u0003\'\u0003\'\u0003(\u0003(\u0003(\u0005(\u01c0",
    "\n(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003(\u0005(\u01c9\n",
    "(\u0003)\u0003)\u0003)\u0006)\u01ce\n)\r)\u000e)\u01cf\u0003*\u0003",
    "*\u0003*\u0003*\u0003*\u0005*\u01d7\n*\u0003*\u0005*\u01da\n*\u0003",
    "*\u0002\u0002+\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016",
    "\u0018\u001a\u001c\u001e \"$&(*,.02468:<>@BDFHJLNPR\u0002\u0004\u0004",
    "\u0002\u000e\u0011))\u0003\u0002\u0012\u0014\u0002\u020f\u0002T\u0003",
    "\u0002\u0002\u0002\u0004a\u0003\u0002\u0002\u0002\u0006d\u0003\u0002",
    "\u0002\u0002\bz\u0003\u0002\u0002\u0002\n\u0082\u0003\u0002\u0002\u0002",
    "\f\u009e\u0003\u0002\u0002\u0002\u000e\u00a1\u0003\u0002\u0002\u0002",
    "\u0010\u00b2\u0003\u0002\u0002\u0002\u0012\u00b4\u0003\u0002\u0002\u0002",
    "\u0014\u00b6\u0003\u0002\u0002\u0002\u0016\u00ba\u0003\u0002\u0002\u0002",
    "\u0018\u00c9\u0003\u0002\u0002\u0002\u001a\u00d1\u0003\u0002\u0002\u0002",
    "\u001c\u00d7\u0003\u0002\u0002\u0002\u001e\u00da\u0003\u0002\u0002\u0002",
    " \u00f2\u0003\u0002\u0002\u0002\"\u00f6\u0003\u0002\u0002\u0002$\u0106",
    "\u0003\u0002\u0002\u0002&\u012c\u0003\u0002\u0002\u0002(\u012e\u0003",
    "\u0002\u0002\u0002*\u013e\u0003\u0002\u0002\u0002,\u0145\u0003\u0002",
    "\u0002\u0002.\u0155\u0003\u0002\u0002\u00020\u0157\u0003\u0002\u0002",
    "\u00022\u0159\u0003\u0002\u0002\u00024\u015b\u0003\u0002\u0002\u0002",
    "6\u0164\u0003\u0002\u0002\u00028\u016b\u0003\u0002\u0002\u0002:\u0176",
    "\u0003\u0002\u0002\u0002<\u0178\u0003\u0002\u0002\u0002>\u0181\u0003",
    "\u0002\u0002\u0002@\u0193\u0003\u0002\u0002\u0002B\u0199\u0003\u0002",
    "\u0002\u0002D\u019f\u0003\u0002\u0002\u0002F\u01a5\u0003\u0002\u0002",
    "\u0002H\u01a8\u0003\u0002\u0002\u0002J\u01ac\u0003\u0002\u0002\u0002",
    "L\u01ae\u0003\u0002\u0002\u0002N\u01c8\u0003\u0002\u0002\u0002P\u01cd",
    "\u0003\u0002\u0002\u0002R\u01d1\u0003\u0002\u0002\u0002TW\u0007\u0003",
    "\u0002\u0002UX\u0007$\u0002\u0002VX\u0005\u0004\u0003\u0002WU\u0003",
    "\u0002\u0002\u0002WV\u0003\u0002\u0002\u0002XY\u0003\u0002\u0002\u0002",
    "YZ\u0007\u0004\u0002\u0002Z\u0003\u0003\u0002\u0002\u0002[`\u0005\n",
    "\u0006\u0002\\`\u0005,\u0017\u0002]`\u0005\u0006\u0004\u0002^`\u0007",
    "$\u0002\u0002_[\u0003\u0002\u0002\u0002_\\\u0003\u0002\u0002\u0002_",
    "]\u0003\u0002\u0002\u0002_^\u0003\u0002\u0002\u0002`c\u0003\u0002\u0002",
    "\u0002a_\u0003\u0002\u0002\u0002ab\u0003\u0002\u0002\u0002b\u0005\u0003",
    "\u0002\u0002\u0002ca\u0003\u0002\u0002\u0002df\u0007!\u0002\u0002eg",
    "\u0007+\u0002\u0002fe\u0003\u0002\u0002\u0002fg\u0003\u0002\u0002\u0002",
    "gh\u0003\u0002\u0002\u0002hi\u0007,\u0002\u0002ij\u0005\b\u0005\u0002",
    "jl\u0007,\u0002\u0002km\u0007+\u0002\u0002lk\u0003\u0002\u0002\u0002",
    "lm\u0003\u0002\u0002\u0002mx\u0003\u0002\u0002\u0002nt\u0007\u0005\u0002",
    "\u0002os\u0005\n\u0006\u0002ps\u0005,\u0017\u0002qs\u0007$\u0002\u0002",
    "ro\u0003\u0002\u0002\u0002rp\u0003\u0002\u0002\u0002rq\u0003\u0002\u0002",
    "\u0002sv\u0003\u0002\u0002\u0002tr\u0003\u0002\u0002\u0002tu\u0003\u0002",
    "\u0002\u0002uw\u0003\u0002\u0002\u0002vt\u0003\u0002\u0002\u0002wy\u0007",
    "\u0006\u0002\u0002xn\u0003\u0002\u0002\u0002xy\u0003\u0002\u0002\u0002",
    "y\u0007\u0003\u0002\u0002\u0002z\u0080\u0007&\u0002\u0002{}\u0007*\u0002",
    "\u0002|~\u0007+\u0002\u0002}|\u0003\u0002\u0002\u0002}~\u0003\u0002",
    "\u0002\u0002~\u007f\u0003\u0002\u0002\u0002\u007f\u0081\u0007&\u0002",
    "\u0002\u0080{\u0003\u0002\u0002\u0002\u0080\u0081\u0003\u0002\u0002",
    "\u0002\u0081\t\u0003\u0002\u0002\u0002\u0082\u0084\u0005\f\u0007\u0002",
    "\u0083\u0085\u0007+\u0002\u0002\u0084\u0083\u0003\u0002\u0002\u0002",
    "\u0084\u0085\u0003\u0002\u0002\u0002\u0085\u0086\u0003\u0002\u0002\u0002",
    "\u0086\u0088\u0005\u000e\b\u0002\u0087\u0089\u0007+\u0002\u0002\u0088",
    "\u0087\u0003\u0002\u0002\u0002\u0088\u0089\u0003\u0002\u0002\u0002\u0089",
    "\u0095\u0003\u0002\u0002\u0002\u008a\u0091\u0007\u0005\u0002\u0002\u008b",
    "\u0090\u0005\u0016\f\u0002\u008c\u0090\u0005\u001e\u0010\u0002\u008d",
    "\u0090\u0005\"\u0012\u0002\u008e\u0090\u0007$\u0002\u0002\u008f\u008b",
    "\u0003\u0002\u0002\u0002\u008f\u008c\u0003\u0002\u0002\u0002\u008f\u008d",
    "\u0003\u0002\u0002\u0002\u008f\u008e\u0003\u0002\u0002\u0002\u0090\u0093",
    "\u0003\u0002\u0002\u0002\u0091\u008f\u0003\u0002\u0002\u0002\u0091\u0092",
    "\u0003\u0002\u0002\u0002\u0092\u0094\u0003\u0002\u0002\u0002\u0093\u0091",
    "\u0003\u0002\u0002\u0002\u0094\u0096\u0007\u0006\u0002\u0002\u0095\u008a",
    "\u0003\u0002\u0002\u0002\u0095\u0096\u0003\u0002\u0002\u0002\u0096\u000b",
    "\u0003\u0002\u0002\u0002\u0097\u0099\u0007\u001f\u0002\u0002\u0098\u009a",
    "\u0007\u001d\u0002\u0002\u0099\u0098\u0003\u0002\u0002\u0002\u0099\u009a",
    "\u0003\u0002\u0002\u0002\u009a\u009f\u0003\u0002\u0002\u0002\u009b\u009f",
    "\u0007\u001d\u0002\u0002\u009c\u009f\u0007\u001e\u0002\u0002\u009d\u009f",
    "\u0007 \u0002\u0002\u009e\u0097\u0003\u0002\u0002\u0002\u009e\u009b",
    "\u0003\u0002\u0002\u0002\u009e\u009c\u0003\u0002\u0002\u0002\u009e\u009d",
    "\u0003\u0002\u0002\u0002\u009f\r\u0003\u0002\u0002\u0002\u00a0\u00a2",
    "\u0007,\u0002\u0002\u00a1\u00a0\u0003\u0002\u0002\u0002\u00a1\u00a2",
    "\u0003\u0002\u0002\u0002\u00a2\u00a3\u0003\u0002\u0002\u0002\u00a3\u00a5",
    "\u0005\u0010\t\u0002\u00a4\u00a6\u0007,\u0002\u0002\u00a5\u00a4\u0003",
    "\u0002\u0002\u0002\u00a5\u00a6\u0003\u0002\u0002\u0002\u00a6\u00a9\u0003",
    "\u0002\u0002\u0002\u00a7\u00a8\u0007\"\u0002\u0002\u00a8\u00aa\u0005",
    "\u0012\n\u0002\u00a9\u00a7\u0003\u0002\u0002\u0002\u00a9\u00aa\u0003",
    "\u0002\u0002\u0002\u00aa\u000f\u0003\u0002\u0002\u0002\u00ab\u00ac\u0007",
    "&\u0002\u0002\u00ac\u00ae\u0007*\u0002\u0002\u00ad\u00af\u0007+\u0002",
    "\u0002\u00ae\u00ad\u0003\u0002\u0002\u0002\u00ae\u00af\u0003\u0002\u0002",
    "\u0002\u00af\u00b0\u0003\u0002\u0002\u0002\u00b0\u00b3\u0007&\u0002",
    "\u0002\u00b1\u00b3\u0007&\u0002\u0002\u00b2\u00ab\u0003\u0002\u0002",
    "\u0002\u00b2\u00b1\u0003\u0002\u0002\u0002\u00b3\u0011\u0003\u0002\u0002",
    "\u0002\u00b4\u00b5\u0007&\u0002\u0002\u00b5\u0013\u0003\u0002\u0002",
    "\u0002\u00b6\u00b7\u0007\u0007\u0002\u0002\u00b7\u00b8\u0005> \u0002",
    "\u00b8\u0015\u0003\u0002\u0002\u0002\u00b9\u00bb\u00052\u001a\u0002",
    "\u00ba\u00b9\u0003\u0002\u0002\u0002\u00ba\u00bb\u0003\u0002\u0002\u0002",
    "\u00bb\u00bd\u0003\u0002\u0002\u0002\u00bc\u00be\u0005J&\u0002\u00bd",
    "\u00bc\u0003\u0002\u0002\u0002\u00bd\u00be\u0003\u0002\u0002\u0002\u00be",
    "\u00bf\u0003\u0002\u0002\u0002\u00bf\u00c0\u0005\u0018\r\u0002\u00c0",
    "\u00c2\u0007*\u0002\u0002\u00c1\u00c3\u0007+\u0002\u0002\u00c2\u00c1",
    "\u0003\u0002\u0002\u0002\u00c2\u00c3\u0003\u0002\u0002\u0002\u00c3\u00c4",
    "\u0003\u0002\u0002\u0002\u00c4\u00c6\u0005\u001a\u000e\u0002\u00c5\u00c7",
    "\u0007$\u0002\u0002\u00c6\u00c5\u0003\u0002\u0002\u0002\u00c6\u00c7",
    "\u0003\u0002\u0002\u0002\u00c7\u0017\u0003\u0002\u0002\u0002\u00c8\u00ca",
    "\u0007&\u0002\u0002\u00c9\u00c8\u0003\u0002\u0002\u0002\u00ca\u00cb",
    "\u0003\u0002\u0002\u0002\u00cb\u00c9\u0003\u0002\u0002\u0002\u00cb\u00cc",
    "\u0003\u0002\u0002\u0002\u00cc\u0019\u0003\u0002\u0002\u0002\u00cd\u00d2",
    "\u0005B\"\u0002\u00ce\u00d2\u0007%\u0002\u0002\u00cf\u00d2\u0007)\u0002",
    "\u0002\u00d0\u00d2\u0007(\u0002\u0002\u00d1\u00cd\u0003\u0002\u0002",
    "\u0002\u00d1\u00ce\u0003\u0002\u0002\u0002\u00d1\u00cf\u0003\u0002\u0002",
    "\u0002\u00d1\u00d0\u0003\u0002\u0002\u0002\u00d2\u001b\u0003\u0002\u0002",
    "\u0002\u00d3\u00d8\u0005B\"\u0002\u00d4\u00d8\u0007%\u0002\u0002\u00d5",
    "\u00d8\u0007)\u0002\u0002\u00d6\u00d8\u0007(\u0002\u0002\u00d7\u00d3",
    "\u0003\u0002\u0002\u0002\u00d7\u00d4\u0003\u0002\u0002\u0002\u00d7\u00d5",
    "\u0003\u0002\u0002\u0002\u00d7\u00d6\u0003\u0002\u0002\u0002\u00d8\u001d",
    "\u0003\u0002\u0002\u0002\u00d9\u00db\u00052\u001a\u0002\u00da\u00d9",
    "\u0003\u0002\u0002\u0002\u00da\u00db\u0003\u0002\u0002\u0002\u00db\u00dd",
    "\u0003\u0002\u0002\u0002\u00dc\u00de\u0005J&\u0002\u00dd\u00dc\u0003",
    "\u0002\u0002\u0002\u00dd\u00de\u0003\u0002\u0002\u0002\u00de\u00df\u0003",
    "\u0002\u0002\u0002\u00df\u00e0\u0005 \u0011\u0002\u00e0\u00e2\u0007",
    "\b\u0002\u0002\u00e1\u00e3\u00058\u001d\u0002\u00e2\u00e1\u0003\u0002",
    "\u0002\u0002\u00e2\u00e3\u0003\u0002\u0002\u0002\u00e3\u00e4\u0003\u0002",
    "\u0002\u0002\u00e4\u00ea\u0007\t\u0002\u0002\u00e5\u00e7\u0007*\u0002",
    "\u0002\u00e6\u00e8\u0007+\u0002\u0002\u00e7\u00e6\u0003\u0002\u0002",
    "\u0002\u00e7\u00e8\u0003\u0002\u0002\u0002\u00e8\u00e9\u0003\u0002\u0002",
    "\u0002\u00e9\u00eb\u0005@!\u0002\u00ea\u00e5\u0003\u0002\u0002\u0002",
    "\u00ea\u00eb\u0003\u0002\u0002\u0002\u00eb\u00ed\u0003\u0002\u0002\u0002",
    "\u00ec\u00ee\u0007$\u0002\u0002\u00ed\u00ec\u0003\u0002\u0002\u0002",
    "\u00ed\u00ee\u0003\u0002\u0002\u0002\u00ee\u001f\u0003\u0002\u0002\u0002",
    "\u00ef\u00f1\u0007&\u0002\u0002\u00f0\u00ef\u0003\u0002\u0002\u0002",
    "\u00f1\u00f4\u0003\u0002\u0002\u0002\u00f2\u00f0\u0003\u0002\u0002\u0002",
    "\u00f2\u00f3\u0003\u0002\u0002\u0002\u00f3!\u0003\u0002\u0002\u0002",
    "\u00f4\u00f2\u0003\u0002\u0002\u0002\u00f5\u00f7\u00052\u001a\u0002",
    "\u00f6\u00f5\u0003\u0002\u0002\u0002\u00f6\u00f7\u0003\u0002\u0002\u0002",
    "\u00f7\u00f9\u0003\u0002\u0002\u0002\u00f8\u00fa\u0005J&\u0002\u00f9",
    "\u00f8\u0003\u0002\u0002\u0002\u00f9\u00fa\u0003\u0002\u0002\u0002\u00fa",
    "\u00fb\u0003\u0002\u0002\u0002\u00fb\u00fd\u0005$\u0013\u0002\u00fc",
    "\u00fe\u0007+\u0002\u0002\u00fd\u00fc\u0003\u0002\u0002\u0002\u00fd",
    "\u00fe\u0003\u0002\u0002\u0002\u00fe\u00ff\u0003\u0002\u0002\u0002\u00ff",
    "\u0101\u0007\n\u0002\u0002\u0100\u0102\u0007+\u0002\u0002\u0101\u0100",
    "\u0003\u0002\u0002\u0002\u0101\u0102\u0003\u0002\u0002\u0002\u0102\u0103",
    "\u0003\u0002\u0002\u0002\u0103\u0104\u0005&\u0014\u0002\u0104#\u0003",
    "\u0002\u0002\u0002\u0105\u0107\u0007&\u0002\u0002\u0106\u0105\u0003",
    "\u0002\u0002\u0002\u0107\u0108\u0003\u0002\u0002\u0002\u0108\u0106\u0003",
    "\u0002\u0002\u0002\u0108\u0109\u0003\u0002\u0002\u0002\u0109%\u0003",
    "\u0002\u0002\u0002\u010a\u010c\u0007&\u0002\u0002\u010b\u010a\u0003",
    "\u0002\u0002\u0002\u010c\u010d\u0003\u0002\u0002\u0002\u010d\u010b\u0003",
    "\u0002\u0002\u0002\u010d\u010e\u0003\u0002\u0002\u0002\u010e\u012d\u0003",
    "\u0002\u0002\u0002\u010f\u0111\u0007\'\u0002\u0002\u0110\u010f\u0003",
    "\u0002\u0002\u0002\u0111\u0112\u0003\u0002\u0002\u0002\u0112\u0110\u0003",
    "\u0002\u0002\u0002\u0112\u0113\u0003\u0002\u0002\u0002\u0113\u012d\u0003",
    "\u0002\u0002\u0002\u0114\u0115\u0007\u000b\u0002\u0002\u0115\u011a\u0007",
    "&\u0002\u0002\u0116\u0117\u0007\f\u0002\u0002\u0117\u0119\u0007&\u0002",
    "\u0002\u0118\u0116\u0003\u0002\u0002\u0002\u0119\u011c\u0003\u0002\u0002",
    "\u0002\u011a\u0118\u0003\u0002\u0002\u0002\u011a\u011b\u0003\u0002\u0002",
    "\u0002\u011b\u011d\u0003\u0002\u0002\u0002\u011c\u011a\u0003\u0002\u0002",
    "\u0002\u011d\u012d\u0007\r\u0002\u0002\u011e\u0120\u0007\u000b\u0002",
    "\u0002\u011f\u0121\u0007\'\u0002\u0002\u0120\u011f\u0003\u0002\u0002",
    "\u0002\u0121\u0122\u0003\u0002\u0002\u0002\u0122\u0120\u0003\u0002\u0002",
    "\u0002\u0122\u0123\u0003\u0002\u0002\u0002\u0123\u0128\u0003\u0002\u0002",
    "\u0002\u0124\u0125\u0007\f\u0002\u0002\u0125\u0127\u0007\'\u0002\u0002",
    "\u0126\u0124\u0003\u0002\u0002\u0002\u0127\u012a\u0003\u0002\u0002\u0002",
    "\u0128\u0126\u0003\u0002\u0002\u0002\u0128\u0129\u0003\u0002\u0002\u0002",
    "\u0129\u012b\u0003\u0002\u0002\u0002\u012a\u0128\u0003\u0002\u0002\u0002",
    "\u012b\u012d\u0007\r\u0002\u0002\u012c\u010b\u0003\u0002\u0002\u0002",
    "\u012c\u0110\u0003\u0002\u0002\u0002\u012c\u0114\u0003\u0002\u0002\u0002",
    "\u012c\u011e\u0003\u0002\u0002\u0002\u012d\'\u0003\u0002\u0002\u0002",
    "\u012e\u0130\u0005H%\u0002\u012f\u0131\u0007+\u0002\u0002\u0130\u012f",
    "\u0003\u0002\u0002\u0002\u0130\u0131\u0003\u0002\u0002\u0002\u0131\u0137",
    "\u0003\u0002\u0002\u0002\u0132\u0134\u0007,\u0002\u0002\u0133\u0135",
    "\u00050\u0019\u0002\u0134\u0133\u0003\u0002\u0002\u0002\u0134\u0135",
    "\u0003\u0002\u0002\u0002\u0135\u0136\u0003\u0002\u0002\u0002\u0136\u0138",
    "\u0007,\u0002\u0002\u0137\u0132\u0003\u0002\u0002\u0002\u0137\u0138",
    "\u0003\u0002\u0002\u0002\u0138)\u0003\u0002\u0002\u0002\u0139\u013b",
    "\u0007,\u0002\u0002\u013a\u013c\u00050\u0019\u0002\u013b\u013a\u0003",
    "\u0002\u0002\u0002\u013b\u013c\u0003\u0002\u0002\u0002\u013c\u013d\u0003",
    "\u0002\u0002\u0002\u013d\u013f\u0007,\u0002\u0002\u013e\u0139\u0003",
    "\u0002\u0002\u0002\u013e\u013f\u0003\u0002\u0002\u0002\u013f\u0141\u0003",
    "\u0002\u0002\u0002\u0140\u0142\u0007+\u0002\u0002\u0141\u0140\u0003",
    "\u0002\u0002\u0002\u0141\u0142\u0003\u0002\u0002\u0002\u0142\u0143\u0003",
    "\u0002\u0002\u0002\u0143\u0144\u0005H%\u0002\u0144+\u0003\u0002\u0002",
    "\u0002\u0145\u0146\u0005(\u0015\u0002\u0146\u0147\u0005.\u0018\u0002",
    "\u0147\u0149\u0005*\u0016\u0002\u0148\u014a\u0007+\u0002\u0002\u0149",
    "\u0148\u0003\u0002\u0002\u0002\u0149\u014a\u0003\u0002\u0002\u0002\u014a",
    "\u0150\u0003\u0002\u0002\u0002\u014b\u014d\u0007*\u0002\u0002\u014c",
    "\u014e\u0007+\u0002\u0002\u014d\u014c\u0003\u0002\u0002\u0002\u014d",
    "\u014e\u0003\u0002\u0002\u0002\u014e\u014f\u0003\u0002\u0002\u0002\u014f",
    "\u0151\u0005L\'\u0002\u0150\u014b\u0003\u0002\u0002\u0002\u0150\u0151",
    "\u0003\u0002\u0002\u0002\u0151\u0153\u0003\u0002\u0002\u0002\u0152\u0154",
    "\u0007$\u0002\u0002\u0153\u0152\u0003\u0002\u0002\u0002\u0153\u0154",
    "\u0003\u0002\u0002\u0002\u0154-\u0003\u0002\u0002\u0002\u0155\u0156",
    "\u0007\u001b\u0002\u0002\u0156/\u0003\u0002\u0002\u0002\u0157\u0158",
    "\t\u0002\u0002\u0002\u01581\u0003\u0002\u0002\u0002\u0159\u015a\t\u0003",
    "\u0002\u0002\u015a3\u0003\u0002\u0002\u0002\u015b\u015c\u0005F$\u0002",
    "\u015c\u015e\u0007*\u0002\u0002\u015d\u015f\u0007+\u0002\u0002\u015e",
    "\u015d\u0003\u0002\u0002\u0002\u015e\u015f\u0003\u0002\u0002\u0002\u015f",
    "\u0162\u0003\u0002\u0002\u0002\u0160\u0163\u0005\u001c\u000f\u0002\u0161",
    "\u0163\u00056\u001c\u0002\u0162\u0160\u0003\u0002\u0002\u0002\u0162",
    "\u0161\u0003\u0002\u0002\u0002\u01635\u0003\u0002\u0002\u0002\u0164",
    "\u0167\u0005\u001c\u000f\u0002\u0165\u0166\u0007\u0015\u0002\u0002\u0166",
    "\u0168\u0005\u001c\u000f\u0002\u0167\u0165\u0003\u0002\u0002\u0002\u0168",
    "\u0169\u0003\u0002\u0002\u0002\u0169\u0167\u0003\u0002\u0002\u0002\u0169",
    "\u016a\u0003\u0002\u0002\u0002\u016a7\u0003\u0002\u0002\u0002\u016b",
    "\u0173\u00054\u001b\u0002\u016c\u016e\u0007\f\u0002\u0002\u016d\u016f",
    "\u0007+\u0002\u0002\u016e\u016d\u0003\u0002\u0002\u0002\u016e\u016f",
    "\u0003\u0002\u0002\u0002\u016f\u0170\u0003\u0002\u0002\u0002\u0170\u0172",
    "\u00054\u001b\u0002\u0171\u016c\u0003\u0002\u0002\u0002\u0172\u0175",
    "\u0003\u0002\u0002\u0002\u0173\u0171\u0003\u0002\u0002\u0002\u0173\u0174",
    "\u0003\u0002\u0002\u0002\u01749\u0003\u0002\u0002\u0002\u0175\u0173",
    "\u0003\u0002\u0002\u0002\u0176\u0177\u0005N(\u0002\u0177;\u0003\u0002",
    "\u0002\u0002\u0178\u017d\u0005:\u001e\u0002\u0179\u017a\u0007\f\u0002",
    "\u0002\u017a\u017c\u0005:\u001e\u0002\u017b\u0179\u0003\u0002\u0002",
    "\u0002\u017c\u017f\u0003\u0002\u0002\u0002\u017d\u017b\u0003\u0002\u0002",
    "\u0002\u017d\u017e\u0003\u0002\u0002\u0002\u017e=\u0003\u0002\u0002",
    "\u0002\u017f\u017d\u0003\u0002\u0002\u0002\u0180\u0182\u0007,\u0002",
    "\u0002\u0181\u0180\u0003\u0002\u0002\u0002\u0181\u0182\u0003\u0002\u0002",
    "\u0002\u0182\u0186\u0003\u0002\u0002\u0002\u0183\u0185\u0007&\u0002",
    "\u0002\u0184\u0183\u0003\u0002\u0002\u0002\u0185\u0188\u0003\u0002\u0002",
    "\u0002\u0186\u0184\u0003\u0002\u0002\u0002\u0186\u0187\u0003\u0002\u0002",
    "\u0002\u0187\u018a\u0003\u0002\u0002\u0002\u0188\u0186\u0003\u0002\u0002",
    "\u0002\u0189\u018b\u0007,\u0002\u0002\u018a\u0189\u0003\u0002\u0002",
    "\u0002\u018a\u018b\u0003\u0002\u0002\u0002\u018b\u018e\u0003\u0002\u0002",
    "\u0002\u018c\u018d\u0007\"\u0002\u0002\u018d\u018f\u0005\u001a\u000e",
    "\u0002\u018e\u018c\u0003\u0002\u0002\u0002\u018e\u018f\u0003\u0002\u0002",
    "\u0002\u018f?\u0003\u0002\u0002\u0002\u0190\u0192\u0007&\u0002\u0002",
    "\u0191\u0190\u0003\u0002\u0002\u0002\u0192\u0195\u0003\u0002\u0002\u0002",
    "\u0193\u0191\u0003\u0002\u0002\u0002\u0193\u0194\u0003\u0002\u0002\u0002",
    "\u0194A\u0003\u0002\u0002\u0002\u0195\u0193\u0003\u0002\u0002\u0002",
    "\u0196\u0198\u0007&\u0002\u0002\u0197\u0196\u0003\u0002\u0002\u0002",
    "\u0198\u019b\u0003\u0002\u0002\u0002\u0199\u0197\u0003\u0002\u0002\u0002",
    "\u0199\u019a\u0003\u0002\u0002\u0002\u019aC\u0003\u0002\u0002\u0002",
    "\u019b\u0199\u0003\u0002\u0002\u0002\u019c\u019e\u0007&\u0002\u0002",
    "\u019d\u019c\u0003\u0002\u0002\u0002\u019e\u01a1\u0003\u0002\u0002\u0002",
    "\u019f\u019d\u0003\u0002\u0002\u0002\u019f\u01a0\u0003\u0002\u0002\u0002",
    "\u01a0E\u0003\u0002\u0002\u0002\u01a1\u019f\u0003\u0002\u0002\u0002",
    "\u01a2\u01a4\u0007&\u0002\u0002\u01a3\u01a2\u0003\u0002\u0002\u0002",
    "\u01a4\u01a7\u0003\u0002\u0002\u0002\u01a5\u01a3\u0003\u0002\u0002\u0002",
    "\u01a5\u01a6\u0003\u0002\u0002\u0002\u01a6G\u0003\u0002\u0002\u0002",
    "\u01a7\u01a5\u0003\u0002\u0002\u0002\u01a8\u01a9\u0007&\u0002\u0002",
    "\u01a9I\u0003\u0002\u0002\u0002\u01aa\u01ad\u0007\u0016\u0002\u0002",
    "\u01ab\u01ad\u0007\u0017\u0002\u0002\u01ac\u01aa\u0003\u0002\u0002\u0002",
    "\u01ac\u01ab\u0003\u0002\u0002\u0002\u01adK\u0003\u0002\u0002\u0002",
    "\u01ae\u01af\u0007,\u0002\u0002\u01af\u01b4\u0005> \u0002\u01b0\u01b1",
    "\u0007\b\u0002\u0002\u01b1\u01b2\u0005> \u0002\u01b2\u01b3\u0007\t\u0002",
    "\u0002\u01b3\u01b5\u0003\u0002\u0002\u0002\u01b4\u01b0\u0003\u0002\u0002",
    "\u0002\u01b4\u01b5\u0003\u0002\u0002\u0002\u01b5\u01b7\u0003\u0002\u0002",
    "\u0002\u01b6\u01b8\u0007*\u0002\u0002\u01b7\u01b6\u0003\u0002\u0002",
    "\u0002\u01b7\u01b8\u0003\u0002\u0002\u0002\u01b8\u01b9\u0003\u0002\u0002",
    "\u0002\u01b9\u01ba\u0007&\u0002\u0002\u01ba\u01bb\u0007,\u0002\u0002",
    "\u01bbM\u0003\u0002\u0002\u0002\u01bc\u01bd\u0005> \u0002\u01bd\u01bf",
    "\u0007\u0018\u0002\u0002\u01be\u01c0\u0005<\u001f\u0002\u01bf\u01be",
    "\u0003\u0002\u0002\u0002\u01bf\u01c0\u0003\u0002\u0002\u0002\u01c0\u01c1",
    "\u0003\u0002\u0002\u0002\u01c1\u01c2\u0007\u0019\u0002\u0002\u01c2\u01c9",
    "\u0003\u0002\u0002\u0002\u01c3\u01c4\u0005> \u0002\u01c4\u01c5\u0007",
    "\u000b\u0002\u0002\u01c5\u01c6\u0007\r\u0002\u0002\u01c6\u01c9\u0003",
    "\u0002\u0002\u0002\u01c7\u01c9\u0005> \u0002\u01c8\u01bc\u0003\u0002",
    "\u0002\u0002\u01c8\u01c3\u0003\u0002\u0002\u0002\u01c8\u01c7\u0003\u0002",
    "\u0002\u0002\u01c9O\u0003\u0002\u0002\u0002\u01ca\u01cb\u0005> \u0002",
    "\u01cb\u01cc\u0007$\u0002\u0002\u01cc\u01ce\u0003\u0002\u0002\u0002",
    "\u01cd\u01ca\u0003\u0002\u0002\u0002\u01ce\u01cf\u0003\u0002\u0002\u0002",
    "\u01cf\u01cd\u0003\u0002\u0002\u0002\u01cf\u01d0\u0003\u0002\u0002\u0002",
    "\u01d0Q\u0003\u0002\u0002\u0002\u01d1\u01d2\u0007\u001a\u0002\u0002",
    "\u01d2\u01d9\u0005> \u0002\u01d3\u01d4\u0007\u0005\u0002\u0002\u01d4",
    "\u01d6\u0007$\u0002\u0002\u01d5\u01d7\u0005P)\u0002\u01d6\u01d5\u0003",
    "\u0002\u0002\u0002\u01d6\u01d7\u0003\u0002\u0002\u0002\u01d7\u01d8\u0003",
    "\u0002\u0002\u0002\u01d8\u01da\u0007\u0006\u0002\u0002\u01d9\u01d3\u0003",
    "\u0002\u0002\u0002\u01d9\u01da\u0003\u0002\u0002\u0002\u01daS\u0003",
    "\u0002\u0002\u0002QW_aflrtx}\u0080\u0084\u0088\u008f\u0091\u0095\u0099",
    "\u009e\u00a1\u00a5\u00a9\u00ae\u00b2\u00ba\u00bd\u00c2\u00c6\u00cb\u00d1",
    "\u00d7\u00da\u00dd\u00e2\u00e7\u00ea\u00ed\u00f2\u00f6\u00f9\u00fd\u0101",
    "\u0108\u010d\u0112\u011a\u0122\u0128\u012c\u0130\u0134\u0137\u013b\u013e",
    "\u0141\u0149\u014d\u0150\u0153\u015e\u0162\u0169\u016e\u0173\u017d\u0181",
    "\u0186\u018a\u018e\u0193\u0199\u019f\u01a5\u01ac\u01b4\u01b7\u01bf\u01c8",
    "\u01cf\u01d6\u01d9"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'@startuml'", "'@enduml'", "'{'", "'}'", "'hide'", 
                     "'('", "')'", "'='", "'['", "','", "']'", "'0..1'", 
                     "'0..*'", "'1..*'", "'1'", "'+'", "'-'", "'#'", "'.'", 
                     "'{static}'", "'{abstract}'", "'<'", "'>'", "'enum'", 
                     null, null, "'class'", "'interface'", "'abstract'", 
                     "'object'", "'package'", "'as'", "'newpage'", null, 
                     null, null, null, "'*[]'", "'*'", "':'", null, "'\"'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, "CONNECTOR", 
                      "DIRECTION", "CLASS", "INTERFACE", "ABSTRACT", "OBJECT", 
                      "PACKAGE", "AS", "NEWPAGE", "NEWLINE", "ARRAY", "WORD", 
                      "INTEGER", "ANYARRAY", "ANY", "DOTDOT", "WHITESPACE", 
                      "QUOTATION", "COMMENT" ];

var ruleNames =  [ "diagram", "class_diagram", "package_section", "package_name", 
                   "class_declaration", "class_type", "class_description", 
                   "class_name", "class_dataType", "hide_declaration", "attribute", 
                   "attribute_name", "attribute_type", "function_argument_attribute_type", 
                   "method", "mathode_name", "declaration", "declaration_name", 
                   "declaration_argument", "connection_left", "connection_right", 
                   "connection", "connection_symbol", "multiplicity", "visibility", 
                   "function_argument", "nested_argument_type", "function_argument_list", 
                   "template_argument", "template_argument_list", "ident", 
                   "methode_data_type", "attribute_data_type", "data_type", 
                   "variable_name", "connection_name", "modifiers", "stereotype", 
                   "type_declaration", "item_list", "enum_declaration" ];

function PlantUMLParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

PlantUMLParser.prototype = Object.create(antlr4.Parser.prototype);
PlantUMLParser.prototype.constructor = PlantUMLParser;

Object.defineProperty(PlantUMLParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

PlantUMLParser.EOF = antlr4.Token.EOF;
PlantUMLParser.T__0 = 1;
PlantUMLParser.T__1 = 2;
PlantUMLParser.T__2 = 3;
PlantUMLParser.T__3 = 4;
PlantUMLParser.T__4 = 5;
PlantUMLParser.T__5 = 6;
PlantUMLParser.T__6 = 7;
PlantUMLParser.T__7 = 8;
PlantUMLParser.T__8 = 9;
PlantUMLParser.T__9 = 10;
PlantUMLParser.T__10 = 11;
PlantUMLParser.T__11 = 12;
PlantUMLParser.T__12 = 13;
PlantUMLParser.T__13 = 14;
PlantUMLParser.T__14 = 15;
PlantUMLParser.T__15 = 16;
PlantUMLParser.T__16 = 17;
PlantUMLParser.T__17 = 18;
PlantUMLParser.T__18 = 19;
PlantUMLParser.T__19 = 20;
PlantUMLParser.T__20 = 21;
PlantUMLParser.T__21 = 22;
PlantUMLParser.T__22 = 23;
PlantUMLParser.T__23 = 24;
PlantUMLParser.CONNECTOR = 25;
PlantUMLParser.DIRECTION = 26;
PlantUMLParser.CLASS = 27;
PlantUMLParser.INTERFACE = 28;
PlantUMLParser.ABSTRACT = 29;
PlantUMLParser.OBJECT = 30;
PlantUMLParser.PACKAGE = 31;
PlantUMLParser.AS = 32;
PlantUMLParser.NEWPAGE = 33;
PlantUMLParser.NEWLINE = 34;
PlantUMLParser.ARRAY = 35;
PlantUMLParser.WORD = 36;
PlantUMLParser.INTEGER = 37;
PlantUMLParser.ANYARRAY = 38;
PlantUMLParser.ANY = 39;
PlantUMLParser.DOTDOT = 40;
PlantUMLParser.WHITESPACE = 41;
PlantUMLParser.QUOTATION = 42;
PlantUMLParser.COMMENT = 43;

PlantUMLParser.RULE_diagram = 0;
PlantUMLParser.RULE_class_diagram = 1;
PlantUMLParser.RULE_package_section = 2;
PlantUMLParser.RULE_package_name = 3;
PlantUMLParser.RULE_class_declaration = 4;
PlantUMLParser.RULE_class_type = 5;
PlantUMLParser.RULE_class_description = 6;
PlantUMLParser.RULE_class_name = 7;
PlantUMLParser.RULE_class_dataType = 8;
PlantUMLParser.RULE_hide_declaration = 9;
PlantUMLParser.RULE_attribute = 10;
PlantUMLParser.RULE_attribute_name = 11;
PlantUMLParser.RULE_attribute_type = 12;
PlantUMLParser.RULE_function_argument_attribute_type = 13;
PlantUMLParser.RULE_method = 14;
PlantUMLParser.RULE_mathode_name = 15;
PlantUMLParser.RULE_declaration = 16;
PlantUMLParser.RULE_declaration_name = 17;
PlantUMLParser.RULE_declaration_argument = 18;
PlantUMLParser.RULE_connection_left = 19;
PlantUMLParser.RULE_connection_right = 20;
PlantUMLParser.RULE_connection = 21;
PlantUMLParser.RULE_connection_symbol = 22;
PlantUMLParser.RULE_multiplicity = 23;
PlantUMLParser.RULE_visibility = 24;
PlantUMLParser.RULE_function_argument = 25;
PlantUMLParser.RULE_nested_argument_type = 26;
PlantUMLParser.RULE_function_argument_list = 27;
PlantUMLParser.RULE_template_argument = 28;
PlantUMLParser.RULE_template_argument_list = 29;
PlantUMLParser.RULE_ident = 30;
PlantUMLParser.RULE_methode_data_type = 31;
PlantUMLParser.RULE_attribute_data_type = 32;
PlantUMLParser.RULE_data_type = 33;
PlantUMLParser.RULE_variable_name = 34;
PlantUMLParser.RULE_connection_name = 35;
PlantUMLParser.RULE_modifiers = 36;
PlantUMLParser.RULE_stereotype = 37;
PlantUMLParser.RULE_type_declaration = 38;
PlantUMLParser.RULE_item_list = 39;
PlantUMLParser.RULE_enum_declaration = 40;


function DiagramContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlantUMLParser.RULE_diagram;
    return this;
}

DiagramContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DiagramContext.prototype.constructor = DiagramContext;

DiagramContext.prototype.NEWLINE = function() {
    return this.getToken(PlantUMLParser.NEWLINE, 0);
};

DiagramContext.prototype.class_diagram = function() {
    return this.getTypedRuleContext(Class_diagramContext,0);
};

DiagramContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlantUMLListener ) {
        listener.enterDiagram(this);
	}
};

DiagramContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlantUMLListener ) {
        listener.exitDiagram(this);
	}
};

DiagramContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlantUMLVisitor ) {
        return visitor.visitDiagram(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlantUMLParser.DiagramContext = DiagramContext;

PlantUMLParser.prototype.diagram = function() {

    var localctx = new DiagramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, PlantUMLParser.RULE_diagram);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 82;
        this.match(PlantUMLParser.T__0);
        this.state = 85;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
        switch(la_) {
        case 1:
            this.state = 83;
            this.match(PlantUMLParser.NEWLINE);
            break;

        case 2:
            this.state = 84;
            this.class_diagram();
            break;

        }
        this.state = 87;
        this.match(PlantUMLParser.T__1);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Class_diagramContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlantUMLParser.RULE_class_diagram;
    return this;
}

Class_diagramContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Class_diagramContext.prototype.constructor = Class_diagramContext;

Class_diagramContext.prototype.class_declaration = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Class_declarationContext);
    } else {
        return this.getTypedRuleContext(Class_declarationContext,i);
    }
};

Class_diagramContext.prototype.connection = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ConnectionContext);
    } else {
        return this.getTypedRuleContext(ConnectionContext,i);
    }
};

Class_diagramContext.prototype.package_section = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Package_sectionContext);
    } else {
        return this.getTypedRuleContext(Package_sectionContext,i);
    }
};

Class_diagramContext.prototype.NEWLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PlantUMLParser.NEWLINE);
    } else {
        return this.getToken(PlantUMLParser.NEWLINE, i);
    }
};


Class_diagramContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlantUMLListener ) {
        listener.enterClass_diagram(this);
	}
};

Class_diagramContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlantUMLListener ) {
        listener.exitClass_diagram(this);
	}
};

Class_diagramContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlantUMLVisitor ) {
        return visitor.visitClass_diagram(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlantUMLParser.Class_diagramContext = Class_diagramContext;

PlantUMLParser.prototype.class_diagram = function() {

    var localctx = new Class_diagramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, PlantUMLParser.RULE_class_diagram);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 95;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 27)) & ~0x1f) == 0 && ((1 << (_la - 27)) & ((1 << (PlantUMLParser.CLASS - 27)) | (1 << (PlantUMLParser.INTERFACE - 27)) | (1 << (PlantUMLParser.ABSTRACT - 27)) | (1 << (PlantUMLParser.OBJECT - 27)) | (1 << (PlantUMLParser.PACKAGE - 27)) | (1 << (PlantUMLParser.NEWLINE - 27)) | (1 << (PlantUMLParser.WORD - 27)))) !== 0)) {
            this.state = 93;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case PlantUMLParser.CLASS:
            case PlantUMLParser.INTERFACE:
            case PlantUMLParser.ABSTRACT:
            case PlantUMLParser.OBJECT:
                this.state = 89;
                this.class_declaration();
                break;
            case PlantUMLParser.WORD:
                this.state = 90;
                this.connection();
                break;
            case PlantUMLParser.PACKAGE:
                this.state = 91;
                this.package_section();
                break;
            case PlantUMLParser.NEWLINE:
                this.state = 92;
                this.match(PlantUMLParser.NEWLINE);
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 97;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Package_sectionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlantUMLParser.RULE_package_section;
    return this;
}

Package_sectionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Package_sectionContext.prototype.constructor = Package_sectionContext;

Package_sectionContext.prototype.PACKAGE = function() {
    return this.getToken(PlantUMLParser.PACKAGE, 0);
};

Package_sectionContext.prototype.QUOTATION = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PlantUMLParser.QUOTATION);
    } else {
        return this.getToken(PlantUMLParser.QUOTATION, i);
    }
};


Package_sectionContext.prototype.package_name = function() {
    return this.getTypedRuleContext(Package_nameContext,0);
};

Package_sectionContext.prototype.WHITESPACE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PlantUMLParser.WHITESPACE);
    } else {
        return this.getToken(PlantUMLParser.WHITESPACE, i);
    }
};


Package_sectionContext.prototype.class_declaration = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Class_declarationContext);
    } else {
        return this.getTypedRuleContext(Class_declarationContext,i);
    }
};

Package_sectionContext.prototype.connection = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ConnectionContext);
    } else {
        return this.getTypedRuleContext(ConnectionContext,i);
    }
};

Package_sectionContext.prototype.NEWLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PlantUMLParser.NEWLINE);
    } else {
        return this.getToken(PlantUMLParser.NEWLINE, i);
    }
};


Package_sectionContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlantUMLListener ) {
        listener.enterPackage_section(this);
	}
};

Package_sectionContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlantUMLListener ) {
        listener.exitPackage_section(this);
	}
};

Package_sectionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlantUMLVisitor ) {
        return visitor.visitPackage_section(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlantUMLParser.Package_sectionContext = Package_sectionContext;

PlantUMLParser.prototype.package_section = function() {

    var localctx = new Package_sectionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, PlantUMLParser.RULE_package_section);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 98;
        this.match(PlantUMLParser.PACKAGE);
        this.state = 100;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PlantUMLParser.WHITESPACE) {
            this.state = 99;
            this.match(PlantUMLParser.WHITESPACE);
        }

        this.state = 102;
        this.match(PlantUMLParser.QUOTATION);
        this.state = 103;
        this.package_name();
        this.state = 104;
        this.match(PlantUMLParser.QUOTATION);
        this.state = 106;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PlantUMLParser.WHITESPACE) {
            this.state = 105;
            this.match(PlantUMLParser.WHITESPACE);
        }

        this.state = 118;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PlantUMLParser.T__2) {
            this.state = 108;
            this.match(PlantUMLParser.T__2);
            this.state = 114;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(((((_la - 27)) & ~0x1f) == 0 && ((1 << (_la - 27)) & ((1 << (PlantUMLParser.CLASS - 27)) | (1 << (PlantUMLParser.INTERFACE - 27)) | (1 << (PlantUMLParser.ABSTRACT - 27)) | (1 << (PlantUMLParser.OBJECT - 27)) | (1 << (PlantUMLParser.NEWLINE - 27)) | (1 << (PlantUMLParser.WORD - 27)))) !== 0)) {
                this.state = 112;
                this._errHandler.sync(this);
                switch(this._input.LA(1)) {
                case PlantUMLParser.CLASS:
                case PlantUMLParser.INTERFACE:
                case PlantUMLParser.ABSTRACT:
                case PlantUMLParser.OBJECT:
                    this.state = 109;
                    this.class_declaration();
                    break;
                case PlantUMLParser.WORD:
                    this.state = 110;
                    this.connection();
                    break;
                case PlantUMLParser.NEWLINE:
                    this.state = 111;
                    this.match(PlantUMLParser.NEWLINE);
                    break;
                default:
                    throw new antlr4.error.NoViableAltException(this);
                }
                this.state = 116;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 117;
            this.match(PlantUMLParser.T__3);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Package_nameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlantUMLParser.RULE_package_name;
    return this;
}

Package_nameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Package_nameContext.prototype.constructor = Package_nameContext;

Package_nameContext.prototype.WORD = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PlantUMLParser.WORD);
    } else {
        return this.getToken(PlantUMLParser.WORD, i);
    }
};


Package_nameContext.prototype.DOTDOT = function() {
    return this.getToken(PlantUMLParser.DOTDOT, 0);
};

Package_nameContext.prototype.WHITESPACE = function() {
    return this.getToken(PlantUMLParser.WHITESPACE, 0);
};

Package_nameContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlantUMLListener ) {
        listener.enterPackage_name(this);
	}
};

Package_nameContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlantUMLListener ) {
        listener.exitPackage_name(this);
	}
};

Package_nameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlantUMLVisitor ) {
        return visitor.visitPackage_name(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlantUMLParser.Package_nameContext = Package_nameContext;

PlantUMLParser.prototype.package_name = function() {

    var localctx = new Package_nameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, PlantUMLParser.RULE_package_name);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 120;
        this.match(PlantUMLParser.WORD);
        this.state = 126;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PlantUMLParser.DOTDOT) {
            this.state = 121;
            this.match(PlantUMLParser.DOTDOT);
            this.state = 123;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===PlantUMLParser.WHITESPACE) {
                this.state = 122;
                this.match(PlantUMLParser.WHITESPACE);
            }

            this.state = 125;
            this.match(PlantUMLParser.WORD);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Class_declarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlantUMLParser.RULE_class_declaration;
    return this;
}

Class_declarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Class_declarationContext.prototype.constructor = Class_declarationContext;

Class_declarationContext.prototype.class_type = function() {
    return this.getTypedRuleContext(Class_typeContext,0);
};

Class_declarationContext.prototype.class_description = function() {
    return this.getTypedRuleContext(Class_descriptionContext,0);
};

Class_declarationContext.prototype.WHITESPACE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PlantUMLParser.WHITESPACE);
    } else {
        return this.getToken(PlantUMLParser.WHITESPACE, i);
    }
};


Class_declarationContext.prototype.attribute = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AttributeContext);
    } else {
        return this.getTypedRuleContext(AttributeContext,i);
    }
};

Class_declarationContext.prototype.method = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(MethodContext);
    } else {
        return this.getTypedRuleContext(MethodContext,i);
    }
};

Class_declarationContext.prototype.declaration = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(DeclarationContext);
    } else {
        return this.getTypedRuleContext(DeclarationContext,i);
    }
};

Class_declarationContext.prototype.NEWLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PlantUMLParser.NEWLINE);
    } else {
        return this.getToken(PlantUMLParser.NEWLINE, i);
    }
};


Class_declarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlantUMLListener ) {
        listener.enterClass_declaration(this);
	}
};

Class_declarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlantUMLListener ) {
        listener.exitClass_declaration(this);
	}
};

Class_declarationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlantUMLVisitor ) {
        return visitor.visitClass_declaration(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlantUMLParser.Class_declarationContext = Class_declarationContext;

PlantUMLParser.prototype.class_declaration = function() {

    var localctx = new Class_declarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, PlantUMLParser.RULE_class_declaration);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 128;
        this.class_type();
        this.state = 130;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PlantUMLParser.WHITESPACE) {
            this.state = 129;
            this.match(PlantUMLParser.WHITESPACE);
        }

        this.state = 132;
        this.class_description();
        this.state = 134;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PlantUMLParser.WHITESPACE) {
            this.state = 133;
            this.match(PlantUMLParser.WHITESPACE);
        }

        this.state = 147;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PlantUMLParser.T__2) {
            this.state = 136;
            this.match(PlantUMLParser.T__2);
            this.state = 143;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(((((_la - 6)) & ~0x1f) == 0 && ((1 << (_la - 6)) & ((1 << (PlantUMLParser.T__5 - 6)) | (1 << (PlantUMLParser.T__15 - 6)) | (1 << (PlantUMLParser.T__16 - 6)) | (1 << (PlantUMLParser.T__17 - 6)) | (1 << (PlantUMLParser.T__19 - 6)) | (1 << (PlantUMLParser.T__20 - 6)) | (1 << (PlantUMLParser.NEWLINE - 6)) | (1 << (PlantUMLParser.WORD - 6)))) !== 0)) {
                this.state = 141;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
                switch(la_) {
                case 1:
                    this.state = 137;
                    this.attribute();
                    break;

                case 2:
                    this.state = 138;
                    this.method();
                    break;

                case 3:
                    this.state = 139;
                    this.declaration();
                    break;

                case 4:
                    this.state = 140;
                    this.match(PlantUMLParser.NEWLINE);
                    break;

                }
                this.state = 145;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 146;
            this.match(PlantUMLParser.T__3);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Class_typeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlantUMLParser.RULE_class_type;
    return this;
}

Class_typeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Class_typeContext.prototype.constructor = Class_typeContext;

Class_typeContext.prototype.ABSTRACT = function() {
    return this.getToken(PlantUMLParser.ABSTRACT, 0);
};

Class_typeContext.prototype.CLASS = function() {
    return this.getToken(PlantUMLParser.CLASS, 0);
};

Class_typeContext.prototype.INTERFACE = function() {
    return this.getToken(PlantUMLParser.INTERFACE, 0);
};

Class_typeContext.prototype.OBJECT = function() {
    return this.getToken(PlantUMLParser.OBJECT, 0);
};

Class_typeContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlantUMLListener ) {
        listener.enterClass_type(this);
	}
};

Class_typeContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlantUMLListener ) {
        listener.exitClass_type(this);
	}
};

Class_typeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlantUMLVisitor ) {
        return visitor.visitClass_type(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlantUMLParser.Class_typeContext = Class_typeContext;

PlantUMLParser.prototype.class_type = function() {

    var localctx = new Class_typeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, PlantUMLParser.RULE_class_type);
    var _la = 0; // Token type
    try {
        this.state = 156;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case PlantUMLParser.ABSTRACT:
            this.enterOuterAlt(localctx, 1);
            this.state = 149;
            this.match(PlantUMLParser.ABSTRACT);
            this.state = 151;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===PlantUMLParser.CLASS) {
                this.state = 150;
                this.match(PlantUMLParser.CLASS);
            }

            break;
        case PlantUMLParser.CLASS:
            this.enterOuterAlt(localctx, 2);
            this.state = 153;
            this.match(PlantUMLParser.CLASS);
            break;
        case PlantUMLParser.INTERFACE:
            this.enterOuterAlt(localctx, 3);
            this.state = 154;
            this.match(PlantUMLParser.INTERFACE);
            break;
        case PlantUMLParser.OBJECT:
            this.enterOuterAlt(localctx, 4);
            this.state = 155;
            this.match(PlantUMLParser.OBJECT);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Class_descriptionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlantUMLParser.RULE_class_description;
    return this;
}

Class_descriptionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Class_descriptionContext.prototype.constructor = Class_descriptionContext;

Class_descriptionContext.prototype.class_name = function() {
    return this.getTypedRuleContext(Class_nameContext,0);
};

Class_descriptionContext.prototype.QUOTATION = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PlantUMLParser.QUOTATION);
    } else {
        return this.getToken(PlantUMLParser.QUOTATION, i);
    }
};


Class_descriptionContext.prototype.AS = function() {
    return this.getToken(PlantUMLParser.AS, 0);
};

Class_descriptionContext.prototype.class_dataType = function() {
    return this.getTypedRuleContext(Class_dataTypeContext,0);
};

Class_descriptionContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlantUMLListener ) {
        listener.enterClass_description(this);
	}
};

Class_descriptionContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlantUMLListener ) {
        listener.exitClass_description(this);
	}
};

Class_descriptionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlantUMLVisitor ) {
        return visitor.visitClass_description(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlantUMLParser.Class_descriptionContext = Class_descriptionContext;

PlantUMLParser.prototype.class_description = function() {

    var localctx = new Class_descriptionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, PlantUMLParser.RULE_class_description);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 159;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PlantUMLParser.QUOTATION) {
            this.state = 158;
            this.match(PlantUMLParser.QUOTATION);
        }

        this.state = 161;
        this.class_name();
        this.state = 163;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PlantUMLParser.QUOTATION) {
            this.state = 162;
            this.match(PlantUMLParser.QUOTATION);
        }

        this.state = 167;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PlantUMLParser.AS) {
            this.state = 165;
            this.match(PlantUMLParser.AS);
            this.state = 166;
            this.class_dataType();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Class_nameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlantUMLParser.RULE_class_name;
    return this;
}

Class_nameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Class_nameContext.prototype.constructor = Class_nameContext;

Class_nameContext.prototype.WORD = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PlantUMLParser.WORD);
    } else {
        return this.getToken(PlantUMLParser.WORD, i);
    }
};


Class_nameContext.prototype.DOTDOT = function() {
    return this.getToken(PlantUMLParser.DOTDOT, 0);
};

Class_nameContext.prototype.WHITESPACE = function() {
    return this.getToken(PlantUMLParser.WHITESPACE, 0);
};

Class_nameContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlantUMLListener ) {
        listener.enterClass_name(this);
	}
};

Class_nameContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlantUMLListener ) {
        listener.exitClass_name(this);
	}
};

Class_nameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlantUMLVisitor ) {
        return visitor.visitClass_name(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlantUMLParser.Class_nameContext = Class_nameContext;

PlantUMLParser.prototype.class_name = function() {

    var localctx = new Class_nameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, PlantUMLParser.RULE_class_name);
    var _la = 0; // Token type
    try {
        this.state = 176;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 169;
            this.match(PlantUMLParser.WORD);
            this.state = 170;
            this.match(PlantUMLParser.DOTDOT);
            this.state = 172;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===PlantUMLParser.WHITESPACE) {
                this.state = 171;
                this.match(PlantUMLParser.WHITESPACE);
            }

            this.state = 174;
            this.match(PlantUMLParser.WORD);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 175;
            this.match(PlantUMLParser.WORD);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Class_dataTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlantUMLParser.RULE_class_dataType;
    return this;
}

Class_dataTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Class_dataTypeContext.prototype.constructor = Class_dataTypeContext;

Class_dataTypeContext.prototype.WORD = function() {
    return this.getToken(PlantUMLParser.WORD, 0);
};

Class_dataTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlantUMLListener ) {
        listener.enterClass_dataType(this);
	}
};

Class_dataTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlantUMLListener ) {
        listener.exitClass_dataType(this);
	}
};

Class_dataTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlantUMLVisitor ) {
        return visitor.visitClass_dataType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlantUMLParser.Class_dataTypeContext = Class_dataTypeContext;

PlantUMLParser.prototype.class_dataType = function() {

    var localctx = new Class_dataTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, PlantUMLParser.RULE_class_dataType);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 178;
        this.match(PlantUMLParser.WORD);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Hide_declarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlantUMLParser.RULE_hide_declaration;
    return this;
}

Hide_declarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Hide_declarationContext.prototype.constructor = Hide_declarationContext;

Hide_declarationContext.prototype.ident = function() {
    return this.getTypedRuleContext(IdentContext,0);
};

Hide_declarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlantUMLListener ) {
        listener.enterHide_declaration(this);
	}
};

Hide_declarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlantUMLListener ) {
        listener.exitHide_declaration(this);
	}
};

Hide_declarationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlantUMLVisitor ) {
        return visitor.visitHide_declaration(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlantUMLParser.Hide_declarationContext = Hide_declarationContext;

PlantUMLParser.prototype.hide_declaration = function() {

    var localctx = new Hide_declarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, PlantUMLParser.RULE_hide_declaration);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 180;
        this.match(PlantUMLParser.T__4);
        this.state = 181;
        this.ident();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function AttributeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlantUMLParser.RULE_attribute;
    return this;
}

AttributeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AttributeContext.prototype.constructor = AttributeContext;

AttributeContext.prototype.attribute_name = function() {
    return this.getTypedRuleContext(Attribute_nameContext,0);
};

AttributeContext.prototype.DOTDOT = function() {
    return this.getToken(PlantUMLParser.DOTDOT, 0);
};

AttributeContext.prototype.attribute_type = function() {
    return this.getTypedRuleContext(Attribute_typeContext,0);
};

AttributeContext.prototype.visibility = function() {
    return this.getTypedRuleContext(VisibilityContext,0);
};

AttributeContext.prototype.modifiers = function() {
    return this.getTypedRuleContext(ModifiersContext,0);
};

AttributeContext.prototype.WHITESPACE = function() {
    return this.getToken(PlantUMLParser.WHITESPACE, 0);
};

AttributeContext.prototype.NEWLINE = function() {
    return this.getToken(PlantUMLParser.NEWLINE, 0);
};

AttributeContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlantUMLListener ) {
        listener.enterAttribute(this);
	}
};

AttributeContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlantUMLListener ) {
        listener.exitAttribute(this);
	}
};

AttributeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlantUMLVisitor ) {
        return visitor.visitAttribute(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlantUMLParser.AttributeContext = AttributeContext;

PlantUMLParser.prototype.attribute = function() {

    var localctx = new AttributeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, PlantUMLParser.RULE_attribute);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 184;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << PlantUMLParser.T__15) | (1 << PlantUMLParser.T__16) | (1 << PlantUMLParser.T__17))) !== 0)) {
            this.state = 183;
            this.visibility();
        }

        this.state = 187;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PlantUMLParser.T__19 || _la===PlantUMLParser.T__20) {
            this.state = 186;
            this.modifiers();
        }

        this.state = 189;
        this.attribute_name();
        this.state = 190;
        this.match(PlantUMLParser.DOTDOT);
        this.state = 192;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PlantUMLParser.WHITESPACE) {
            this.state = 191;
            this.match(PlantUMLParser.WHITESPACE);
        }

        this.state = 194;
        this.attribute_type();
        this.state = 196;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
        if(la_===1) {
            this.state = 195;
            this.match(PlantUMLParser.NEWLINE);

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Attribute_nameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlantUMLParser.RULE_attribute_name;
    return this;
}

Attribute_nameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Attribute_nameContext.prototype.constructor = Attribute_nameContext;

Attribute_nameContext.prototype.WORD = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PlantUMLParser.WORD);
    } else {
        return this.getToken(PlantUMLParser.WORD, i);
    }
};


Attribute_nameContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlantUMLListener ) {
        listener.enterAttribute_name(this);
	}
};

Attribute_nameContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlantUMLListener ) {
        listener.exitAttribute_name(this);
	}
};

Attribute_nameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlantUMLVisitor ) {
        return visitor.visitAttribute_name(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlantUMLParser.Attribute_nameContext = Attribute_nameContext;

PlantUMLParser.prototype.attribute_name = function() {

    var localctx = new Attribute_nameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, PlantUMLParser.RULE_attribute_name);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 199; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 198;
            this.match(PlantUMLParser.WORD);
            this.state = 201; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===PlantUMLParser.WORD);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Attribute_typeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlantUMLParser.RULE_attribute_type;
    return this;
}

Attribute_typeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Attribute_typeContext.prototype.constructor = Attribute_typeContext;

Attribute_typeContext.prototype.attribute_data_type = function() {
    return this.getTypedRuleContext(Attribute_data_typeContext,0);
};

Attribute_typeContext.prototype.ARRAY = function() {
    return this.getToken(PlantUMLParser.ARRAY, 0);
};

Attribute_typeContext.prototype.ANY = function() {
    return this.getToken(PlantUMLParser.ANY, 0);
};

Attribute_typeContext.prototype.ANYARRAY = function() {
    return this.getToken(PlantUMLParser.ANYARRAY, 0);
};

Attribute_typeContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlantUMLListener ) {
        listener.enterAttribute_type(this);
	}
};

Attribute_typeContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlantUMLListener ) {
        listener.exitAttribute_type(this);
	}
};

Attribute_typeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlantUMLVisitor ) {
        return visitor.visitAttribute_type(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlantUMLParser.Attribute_typeContext = Attribute_typeContext;

PlantUMLParser.prototype.attribute_type = function() {

    var localctx = new Attribute_typeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, PlantUMLParser.RULE_attribute_type);
    try {
        this.state = 207;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case PlantUMLParser.EOF:
        case PlantUMLParser.T__2:
        case PlantUMLParser.T__3:
        case PlantUMLParser.T__5:
        case PlantUMLParser.T__6:
        case PlantUMLParser.T__8:
        case PlantUMLParser.T__9:
        case PlantUMLParser.T__15:
        case PlantUMLParser.T__16:
        case PlantUMLParser.T__17:
        case PlantUMLParser.T__19:
        case PlantUMLParser.T__20:
        case PlantUMLParser.T__21:
        case PlantUMLParser.T__22:
        case PlantUMLParser.NEWLINE:
        case PlantUMLParser.WORD:
        case PlantUMLParser.DOTDOT:
            this.enterOuterAlt(localctx, 1);
            this.state = 203;
            this.attribute_data_type();
            break;
        case PlantUMLParser.ARRAY:
            this.enterOuterAlt(localctx, 2);
            this.state = 204;
            this.match(PlantUMLParser.ARRAY);
            break;
        case PlantUMLParser.ANY:
            this.enterOuterAlt(localctx, 3);
            this.state = 205;
            this.match(PlantUMLParser.ANY);
            break;
        case PlantUMLParser.ANYARRAY:
            this.enterOuterAlt(localctx, 4);
            this.state = 206;
            this.match(PlantUMLParser.ANYARRAY);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Function_argument_attribute_typeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlantUMLParser.RULE_function_argument_attribute_type;
    return this;
}

Function_argument_attribute_typeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Function_argument_attribute_typeContext.prototype.constructor = Function_argument_attribute_typeContext;

Function_argument_attribute_typeContext.prototype.attribute_data_type = function() {
    return this.getTypedRuleContext(Attribute_data_typeContext,0);
};

Function_argument_attribute_typeContext.prototype.ARRAY = function() {
    return this.getToken(PlantUMLParser.ARRAY, 0);
};

Function_argument_attribute_typeContext.prototype.ANY = function() {
    return this.getToken(PlantUMLParser.ANY, 0);
};

Function_argument_attribute_typeContext.prototype.ANYARRAY = function() {
    return this.getToken(PlantUMLParser.ANYARRAY, 0);
};

Function_argument_attribute_typeContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlantUMLListener ) {
        listener.enterFunction_argument_attribute_type(this);
	}
};

Function_argument_attribute_typeContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlantUMLListener ) {
        listener.exitFunction_argument_attribute_type(this);
	}
};

Function_argument_attribute_typeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlantUMLVisitor ) {
        return visitor.visitFunction_argument_attribute_type(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlantUMLParser.Function_argument_attribute_typeContext = Function_argument_attribute_typeContext;

PlantUMLParser.prototype.function_argument_attribute_type = function() {

    var localctx = new Function_argument_attribute_typeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, PlantUMLParser.RULE_function_argument_attribute_type);
    try {
        this.state = 213;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case PlantUMLParser.T__6:
        case PlantUMLParser.T__9:
        case PlantUMLParser.T__18:
        case PlantUMLParser.WORD:
            this.enterOuterAlt(localctx, 1);
            this.state = 209;
            this.attribute_data_type();
            break;
        case PlantUMLParser.ARRAY:
            this.enterOuterAlt(localctx, 2);
            this.state = 210;
            this.match(PlantUMLParser.ARRAY);
            break;
        case PlantUMLParser.ANY:
            this.enterOuterAlt(localctx, 3);
            this.state = 211;
            this.match(PlantUMLParser.ANY);
            break;
        case PlantUMLParser.ANYARRAY:
            this.enterOuterAlt(localctx, 4);
            this.state = 212;
            this.match(PlantUMLParser.ANYARRAY);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function MethodContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlantUMLParser.RULE_method;
    return this;
}

MethodContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MethodContext.prototype.constructor = MethodContext;

MethodContext.prototype.mathode_name = function() {
    return this.getTypedRuleContext(Mathode_nameContext,0);
};

MethodContext.prototype.visibility = function() {
    return this.getTypedRuleContext(VisibilityContext,0);
};

MethodContext.prototype.modifiers = function() {
    return this.getTypedRuleContext(ModifiersContext,0);
};

MethodContext.prototype.function_argument_list = function() {
    return this.getTypedRuleContext(Function_argument_listContext,0);
};

MethodContext.prototype.DOTDOT = function() {
    return this.getToken(PlantUMLParser.DOTDOT, 0);
};

MethodContext.prototype.methode_data_type = function() {
    return this.getTypedRuleContext(Methode_data_typeContext,0);
};

MethodContext.prototype.NEWLINE = function() {
    return this.getToken(PlantUMLParser.NEWLINE, 0);
};

MethodContext.prototype.WHITESPACE = function() {
    return this.getToken(PlantUMLParser.WHITESPACE, 0);
};

MethodContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlantUMLListener ) {
        listener.enterMethod(this);
	}
};

MethodContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlantUMLListener ) {
        listener.exitMethod(this);
	}
};

MethodContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlantUMLVisitor ) {
        return visitor.visitMethod(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlantUMLParser.MethodContext = MethodContext;

PlantUMLParser.prototype.method = function() {

    var localctx = new MethodContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, PlantUMLParser.RULE_method);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 216;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << PlantUMLParser.T__15) | (1 << PlantUMLParser.T__16) | (1 << PlantUMLParser.T__17))) !== 0)) {
            this.state = 215;
            this.visibility();
        }

        this.state = 219;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PlantUMLParser.T__19 || _la===PlantUMLParser.T__20) {
            this.state = 218;
            this.modifiers();
        }

        this.state = 221;
        this.mathode_name();
        this.state = 222;
        this.match(PlantUMLParser.T__5);
        this.state = 224;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PlantUMLParser.WORD || _la===PlantUMLParser.DOTDOT) {
            this.state = 223;
            this.function_argument_list();
        }

        this.state = 226;
        this.match(PlantUMLParser.T__6);
        this.state = 232;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PlantUMLParser.DOTDOT) {
            this.state = 227;
            this.match(PlantUMLParser.DOTDOT);
            this.state = 229;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===PlantUMLParser.WHITESPACE) {
                this.state = 228;
                this.match(PlantUMLParser.WHITESPACE);
            }

            this.state = 231;
            this.methode_data_type();
        }

        this.state = 235;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,34,this._ctx);
        if(la_===1) {
            this.state = 234;
            this.match(PlantUMLParser.NEWLINE);

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Mathode_nameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlantUMLParser.RULE_mathode_name;
    return this;
}

Mathode_nameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Mathode_nameContext.prototype.constructor = Mathode_nameContext;

Mathode_nameContext.prototype.WORD = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PlantUMLParser.WORD);
    } else {
        return this.getToken(PlantUMLParser.WORD, i);
    }
};


Mathode_nameContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlantUMLListener ) {
        listener.enterMathode_name(this);
	}
};

Mathode_nameContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlantUMLListener ) {
        listener.exitMathode_name(this);
	}
};

Mathode_nameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlantUMLVisitor ) {
        return visitor.visitMathode_name(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlantUMLParser.Mathode_nameContext = Mathode_nameContext;

PlantUMLParser.prototype.mathode_name = function() {

    var localctx = new Mathode_nameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, PlantUMLParser.RULE_mathode_name);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 240;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===PlantUMLParser.WORD) {
            this.state = 237;
            this.match(PlantUMLParser.WORD);
            this.state = 242;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function DeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlantUMLParser.RULE_declaration;
    return this;
}

DeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DeclarationContext.prototype.constructor = DeclarationContext;

DeclarationContext.prototype.declaration_name = function() {
    return this.getTypedRuleContext(Declaration_nameContext,0);
};

DeclarationContext.prototype.declaration_argument = function() {
    return this.getTypedRuleContext(Declaration_argumentContext,0);
};

DeclarationContext.prototype.visibility = function() {
    return this.getTypedRuleContext(VisibilityContext,0);
};

DeclarationContext.prototype.modifiers = function() {
    return this.getTypedRuleContext(ModifiersContext,0);
};

DeclarationContext.prototype.WHITESPACE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PlantUMLParser.WHITESPACE);
    } else {
        return this.getToken(PlantUMLParser.WHITESPACE, i);
    }
};


DeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlantUMLListener ) {
        listener.enterDeclaration(this);
	}
};

DeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlantUMLListener ) {
        listener.exitDeclaration(this);
	}
};

DeclarationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlantUMLVisitor ) {
        return visitor.visitDeclaration(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlantUMLParser.DeclarationContext = DeclarationContext;

PlantUMLParser.prototype.declaration = function() {

    var localctx = new DeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, PlantUMLParser.RULE_declaration);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 244;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << PlantUMLParser.T__15) | (1 << PlantUMLParser.T__16) | (1 << PlantUMLParser.T__17))) !== 0)) {
            this.state = 243;
            this.visibility();
        }

        this.state = 247;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PlantUMLParser.T__19 || _la===PlantUMLParser.T__20) {
            this.state = 246;
            this.modifiers();
        }

        this.state = 249;
        this.declaration_name();
        this.state = 251;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PlantUMLParser.WHITESPACE) {
            this.state = 250;
            this.match(PlantUMLParser.WHITESPACE);
        }

        this.state = 253;
        this.match(PlantUMLParser.T__7);
        this.state = 255;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PlantUMLParser.WHITESPACE) {
            this.state = 254;
            this.match(PlantUMLParser.WHITESPACE);
        }

        this.state = 257;
        this.declaration_argument();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Declaration_nameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlantUMLParser.RULE_declaration_name;
    return this;
}

Declaration_nameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Declaration_nameContext.prototype.constructor = Declaration_nameContext;

Declaration_nameContext.prototype.WORD = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PlantUMLParser.WORD);
    } else {
        return this.getToken(PlantUMLParser.WORD, i);
    }
};


Declaration_nameContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlantUMLListener ) {
        listener.enterDeclaration_name(this);
	}
};

Declaration_nameContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlantUMLListener ) {
        listener.exitDeclaration_name(this);
	}
};

Declaration_nameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlantUMLVisitor ) {
        return visitor.visitDeclaration_name(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlantUMLParser.Declaration_nameContext = Declaration_nameContext;

PlantUMLParser.prototype.declaration_name = function() {

    var localctx = new Declaration_nameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, PlantUMLParser.RULE_declaration_name);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 260; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 259;
            this.match(PlantUMLParser.WORD);
            this.state = 262; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===PlantUMLParser.WORD);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Declaration_argumentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlantUMLParser.RULE_declaration_argument;
    return this;
}

Declaration_argumentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Declaration_argumentContext.prototype.constructor = Declaration_argumentContext;

Declaration_argumentContext.prototype.WORD = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PlantUMLParser.WORD);
    } else {
        return this.getToken(PlantUMLParser.WORD, i);
    }
};


Declaration_argumentContext.prototype.INTEGER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PlantUMLParser.INTEGER);
    } else {
        return this.getToken(PlantUMLParser.INTEGER, i);
    }
};


Declaration_argumentContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlantUMLListener ) {
        listener.enterDeclaration_argument(this);
	}
};

Declaration_argumentContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlantUMLListener ) {
        listener.exitDeclaration_argument(this);
	}
};

Declaration_argumentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlantUMLVisitor ) {
        return visitor.visitDeclaration_argument(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlantUMLParser.Declaration_argumentContext = Declaration_argumentContext;

PlantUMLParser.prototype.declaration_argument = function() {

    var localctx = new Declaration_argumentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, PlantUMLParser.RULE_declaration_argument);
    var _la = 0; // Token type
    try {
        this.state = 298;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,46,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 265; 
            this._errHandler.sync(this);
            var _alt = 1;
            do {
            	switch (_alt) {
            	case 1:
            		this.state = 264;
            		this.match(PlantUMLParser.WORD);
            		break;
            	default:
            		throw new antlr4.error.NoViableAltException(this);
            	}
            	this.state = 267; 
            	this._errHandler.sync(this);
            	_alt = this._interp.adaptivePredict(this._input,41, this._ctx);
            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 270; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 269;
                this.match(PlantUMLParser.INTEGER);
                this.state = 272; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while(_la===PlantUMLParser.INTEGER);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 274;
            this.match(PlantUMLParser.T__8);
            this.state = 275;
            this.match(PlantUMLParser.WORD);
            this.state = 280;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===PlantUMLParser.T__9) {
                this.state = 276;
                this.match(PlantUMLParser.T__9);
                this.state = 277;
                this.match(PlantUMLParser.WORD);
                this.state = 282;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 283;
            this.match(PlantUMLParser.T__10);
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 284;
            this.match(PlantUMLParser.T__8);
            this.state = 286; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 285;
                this.match(PlantUMLParser.INTEGER);
                this.state = 288; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while(_la===PlantUMLParser.INTEGER);
            this.state = 294;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===PlantUMLParser.T__9) {
                this.state = 290;
                this.match(PlantUMLParser.T__9);
                this.state = 291;
                this.match(PlantUMLParser.INTEGER);
                this.state = 296;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 297;
            this.match(PlantUMLParser.T__10);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Connection_leftContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlantUMLParser.RULE_connection_left;
    this.instance = null; // Connection_nameContext
    this.mult = null; // MultiplicityContext
    return this;
}

Connection_leftContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Connection_leftContext.prototype.constructor = Connection_leftContext;

Connection_leftContext.prototype.connection_name = function() {
    return this.getTypedRuleContext(Connection_nameContext,0);
};

Connection_leftContext.prototype.WHITESPACE = function() {
    return this.getToken(PlantUMLParser.WHITESPACE, 0);
};

Connection_leftContext.prototype.QUOTATION = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PlantUMLParser.QUOTATION);
    } else {
        return this.getToken(PlantUMLParser.QUOTATION, i);
    }
};


Connection_leftContext.prototype.multiplicity = function() {
    return this.getTypedRuleContext(MultiplicityContext,0);
};

Connection_leftContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlantUMLListener ) {
        listener.enterConnection_left(this);
	}
};

Connection_leftContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlantUMLListener ) {
        listener.exitConnection_left(this);
	}
};

Connection_leftContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlantUMLVisitor ) {
        return visitor.visitConnection_left(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlantUMLParser.Connection_leftContext = Connection_leftContext;

PlantUMLParser.prototype.connection_left = function() {

    var localctx = new Connection_leftContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, PlantUMLParser.RULE_connection_left);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 300;
        localctx.instance = this.connection_name();
        this.state = 302;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PlantUMLParser.WHITESPACE) {
            this.state = 301;
            this.match(PlantUMLParser.WHITESPACE);
        }

        this.state = 309;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PlantUMLParser.QUOTATION) {
            this.state = 304;
            this.match(PlantUMLParser.QUOTATION);
            this.state = 306;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(((((_la - 12)) & ~0x1f) == 0 && ((1 << (_la - 12)) & ((1 << (PlantUMLParser.T__11 - 12)) | (1 << (PlantUMLParser.T__12 - 12)) | (1 << (PlantUMLParser.T__13 - 12)) | (1 << (PlantUMLParser.T__14 - 12)) | (1 << (PlantUMLParser.ANY - 12)))) !== 0)) {
                this.state = 305;
                localctx.mult = this.multiplicity();
            }

            this.state = 308;
            this.match(PlantUMLParser.QUOTATION);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Connection_rightContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlantUMLParser.RULE_connection_right;
    this.mult = null; // MultiplicityContext
    this.instance = null; // Connection_nameContext
    return this;
}

Connection_rightContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Connection_rightContext.prototype.constructor = Connection_rightContext;

Connection_rightContext.prototype.connection_name = function() {
    return this.getTypedRuleContext(Connection_nameContext,0);
};

Connection_rightContext.prototype.QUOTATION = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PlantUMLParser.QUOTATION);
    } else {
        return this.getToken(PlantUMLParser.QUOTATION, i);
    }
};


Connection_rightContext.prototype.WHITESPACE = function() {
    return this.getToken(PlantUMLParser.WHITESPACE, 0);
};

Connection_rightContext.prototype.multiplicity = function() {
    return this.getTypedRuleContext(MultiplicityContext,0);
};

Connection_rightContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlantUMLListener ) {
        listener.enterConnection_right(this);
	}
};

Connection_rightContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlantUMLListener ) {
        listener.exitConnection_right(this);
	}
};

Connection_rightContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlantUMLVisitor ) {
        return visitor.visitConnection_right(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlantUMLParser.Connection_rightContext = Connection_rightContext;

PlantUMLParser.prototype.connection_right = function() {

    var localctx = new Connection_rightContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, PlantUMLParser.RULE_connection_right);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 316;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PlantUMLParser.QUOTATION) {
            this.state = 311;
            this.match(PlantUMLParser.QUOTATION);
            this.state = 313;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(((((_la - 12)) & ~0x1f) == 0 && ((1 << (_la - 12)) & ((1 << (PlantUMLParser.T__11 - 12)) | (1 << (PlantUMLParser.T__12 - 12)) | (1 << (PlantUMLParser.T__13 - 12)) | (1 << (PlantUMLParser.T__14 - 12)) | (1 << (PlantUMLParser.ANY - 12)))) !== 0)) {
                this.state = 312;
                localctx.mult = this.multiplicity();
            }

            this.state = 315;
            this.match(PlantUMLParser.QUOTATION);
        }

        this.state = 319;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PlantUMLParser.WHITESPACE) {
            this.state = 318;
            this.match(PlantUMLParser.WHITESPACE);
        }

        this.state = 321;
        localctx.instance = this.connection_name();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ConnectionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlantUMLParser.RULE_connection;
    this.left = null; // Connection_leftContext
    this.right = null; // Connection_rightContext
    return this;
}

ConnectionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConnectionContext.prototype.constructor = ConnectionContext;

ConnectionContext.prototype.connection_symbol = function() {
    return this.getTypedRuleContext(Connection_symbolContext,0);
};

ConnectionContext.prototype.connection_left = function() {
    return this.getTypedRuleContext(Connection_leftContext,0);
};

ConnectionContext.prototype.connection_right = function() {
    return this.getTypedRuleContext(Connection_rightContext,0);
};

ConnectionContext.prototype.WHITESPACE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PlantUMLParser.WHITESPACE);
    } else {
        return this.getToken(PlantUMLParser.WHITESPACE, i);
    }
};


ConnectionContext.prototype.DOTDOT = function() {
    return this.getToken(PlantUMLParser.DOTDOT, 0);
};

ConnectionContext.prototype.stereotype = function() {
    return this.getTypedRuleContext(StereotypeContext,0);
};

ConnectionContext.prototype.NEWLINE = function() {
    return this.getToken(PlantUMLParser.NEWLINE, 0);
};

ConnectionContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlantUMLListener ) {
        listener.enterConnection(this);
	}
};

ConnectionContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlantUMLListener ) {
        listener.exitConnection(this);
	}
};

ConnectionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlantUMLVisitor ) {
        return visitor.visitConnection(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlantUMLParser.ConnectionContext = ConnectionContext;

PlantUMLParser.prototype.connection = function() {

    var localctx = new ConnectionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, PlantUMLParser.RULE_connection);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 323;
        localctx.left = this.connection_left();
        this.state = 324;
        this.connection_symbol();
        this.state = 325;
        localctx.right = this.connection_right();
        this.state = 327;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PlantUMLParser.WHITESPACE) {
            this.state = 326;
            this.match(PlantUMLParser.WHITESPACE);
        }

        this.state = 334;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PlantUMLParser.DOTDOT) {
            this.state = 329;
            this.match(PlantUMLParser.DOTDOT);
            this.state = 331;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===PlantUMLParser.WHITESPACE) {
                this.state = 330;
                this.match(PlantUMLParser.WHITESPACE);
            }

            this.state = 333;
            this.stereotype();
        }

        this.state = 337;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,56,this._ctx);
        if(la_===1) {
            this.state = 336;
            this.match(PlantUMLParser.NEWLINE);

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Connection_symbolContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlantUMLParser.RULE_connection_symbol;
    return this;
}

Connection_symbolContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Connection_symbolContext.prototype.constructor = Connection_symbolContext;

Connection_symbolContext.prototype.CONNECTOR = function() {
    return this.getToken(PlantUMLParser.CONNECTOR, 0);
};

Connection_symbolContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlantUMLListener ) {
        listener.enterConnection_symbol(this);
	}
};

Connection_symbolContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlantUMLListener ) {
        listener.exitConnection_symbol(this);
	}
};

Connection_symbolContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlantUMLVisitor ) {
        return visitor.visitConnection_symbol(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlantUMLParser.Connection_symbolContext = Connection_symbolContext;

PlantUMLParser.prototype.connection_symbol = function() {

    var localctx = new Connection_symbolContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, PlantUMLParser.RULE_connection_symbol);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 339;
        this.match(PlantUMLParser.CONNECTOR);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function MultiplicityContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlantUMLParser.RULE_multiplicity;
    return this;
}

MultiplicityContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MultiplicityContext.prototype.constructor = MultiplicityContext;

MultiplicityContext.prototype.ANY = function() {
    return this.getToken(PlantUMLParser.ANY, 0);
};

MultiplicityContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlantUMLListener ) {
        listener.enterMultiplicity(this);
	}
};

MultiplicityContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlantUMLListener ) {
        listener.exitMultiplicity(this);
	}
};

MultiplicityContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlantUMLVisitor ) {
        return visitor.visitMultiplicity(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlantUMLParser.MultiplicityContext = MultiplicityContext;

PlantUMLParser.prototype.multiplicity = function() {

    var localctx = new MultiplicityContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, PlantUMLParser.RULE_multiplicity);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 341;
        _la = this._input.LA(1);
        if(!(((((_la - 12)) & ~0x1f) == 0 && ((1 << (_la - 12)) & ((1 << (PlantUMLParser.T__11 - 12)) | (1 << (PlantUMLParser.T__12 - 12)) | (1 << (PlantUMLParser.T__13 - 12)) | (1 << (PlantUMLParser.T__14 - 12)) | (1 << (PlantUMLParser.ANY - 12)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function VisibilityContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlantUMLParser.RULE_visibility;
    return this;
}

VisibilityContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VisibilityContext.prototype.constructor = VisibilityContext;


VisibilityContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlantUMLListener ) {
        listener.enterVisibility(this);
	}
};

VisibilityContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlantUMLListener ) {
        listener.exitVisibility(this);
	}
};

VisibilityContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlantUMLVisitor ) {
        return visitor.visitVisibility(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlantUMLParser.VisibilityContext = VisibilityContext;

PlantUMLParser.prototype.visibility = function() {

    var localctx = new VisibilityContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, PlantUMLParser.RULE_visibility);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 343;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << PlantUMLParser.T__15) | (1 << PlantUMLParser.T__16) | (1 << PlantUMLParser.T__17))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Function_argumentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlantUMLParser.RULE_function_argument;
    return this;
}

Function_argumentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Function_argumentContext.prototype.constructor = Function_argumentContext;

Function_argumentContext.prototype.variable_name = function() {
    return this.getTypedRuleContext(Variable_nameContext,0);
};

Function_argumentContext.prototype.DOTDOT = function() {
    return this.getToken(PlantUMLParser.DOTDOT, 0);
};

Function_argumentContext.prototype.function_argument_attribute_type = function() {
    return this.getTypedRuleContext(Function_argument_attribute_typeContext,0);
};

Function_argumentContext.prototype.nested_argument_type = function() {
    return this.getTypedRuleContext(Nested_argument_typeContext,0);
};

Function_argumentContext.prototype.WHITESPACE = function() {
    return this.getToken(PlantUMLParser.WHITESPACE, 0);
};

Function_argumentContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlantUMLListener ) {
        listener.enterFunction_argument(this);
	}
};

Function_argumentContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlantUMLListener ) {
        listener.exitFunction_argument(this);
	}
};

Function_argumentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlantUMLVisitor ) {
        return visitor.visitFunction_argument(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlantUMLParser.Function_argumentContext = Function_argumentContext;

PlantUMLParser.prototype.function_argument = function() {

    var localctx = new Function_argumentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, PlantUMLParser.RULE_function_argument);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 345;
        this.variable_name();
        this.state = 346;
        this.match(PlantUMLParser.DOTDOT);
        this.state = 348;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PlantUMLParser.WHITESPACE) {
            this.state = 347;
            this.match(PlantUMLParser.WHITESPACE);
        }

        this.state = 352;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,58,this._ctx);
        switch(la_) {
        case 1:
            this.state = 350;
            this.function_argument_attribute_type();
            break;

        case 2:
            this.state = 351;
            this.nested_argument_type();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Nested_argument_typeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlantUMLParser.RULE_nested_argument_type;
    return this;
}

Nested_argument_typeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Nested_argument_typeContext.prototype.constructor = Nested_argument_typeContext;

Nested_argument_typeContext.prototype.function_argument_attribute_type = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Function_argument_attribute_typeContext);
    } else {
        return this.getTypedRuleContext(Function_argument_attribute_typeContext,i);
    }
};

Nested_argument_typeContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlantUMLListener ) {
        listener.enterNested_argument_type(this);
	}
};

Nested_argument_typeContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlantUMLListener ) {
        listener.exitNested_argument_type(this);
	}
};

Nested_argument_typeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlantUMLVisitor ) {
        return visitor.visitNested_argument_type(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlantUMLParser.Nested_argument_typeContext = Nested_argument_typeContext;

PlantUMLParser.prototype.nested_argument_type = function() {

    var localctx = new Nested_argument_typeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, PlantUMLParser.RULE_nested_argument_type);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 354;
        this.function_argument_attribute_type();
        this.state = 357; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 355;
            this.match(PlantUMLParser.T__18);
            this.state = 356;
            this.function_argument_attribute_type();
            this.state = 359; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===PlantUMLParser.T__18);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Function_argument_listContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlantUMLParser.RULE_function_argument_list;
    return this;
}

Function_argument_listContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Function_argument_listContext.prototype.constructor = Function_argument_listContext;

Function_argument_listContext.prototype.function_argument = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Function_argumentContext);
    } else {
        return this.getTypedRuleContext(Function_argumentContext,i);
    }
};

Function_argument_listContext.prototype.WHITESPACE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PlantUMLParser.WHITESPACE);
    } else {
        return this.getToken(PlantUMLParser.WHITESPACE, i);
    }
};


Function_argument_listContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlantUMLListener ) {
        listener.enterFunction_argument_list(this);
	}
};

Function_argument_listContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlantUMLListener ) {
        listener.exitFunction_argument_list(this);
	}
};

Function_argument_listContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlantUMLVisitor ) {
        return visitor.visitFunction_argument_list(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlantUMLParser.Function_argument_listContext = Function_argument_listContext;

PlantUMLParser.prototype.function_argument_list = function() {

    var localctx = new Function_argument_listContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, PlantUMLParser.RULE_function_argument_list);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 361;
        this.function_argument();
        this.state = 369;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===PlantUMLParser.T__9) {
            this.state = 362;
            this.match(PlantUMLParser.T__9);
            this.state = 364;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===PlantUMLParser.WHITESPACE) {
                this.state = 363;
                this.match(PlantUMLParser.WHITESPACE);
            }

            this.state = 366;
            this.function_argument();
            this.state = 371;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Template_argumentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlantUMLParser.RULE_template_argument;
    return this;
}

Template_argumentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Template_argumentContext.prototype.constructor = Template_argumentContext;

Template_argumentContext.prototype.type_declaration = function() {
    return this.getTypedRuleContext(Type_declarationContext,0);
};

Template_argumentContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlantUMLListener ) {
        listener.enterTemplate_argument(this);
	}
};

Template_argumentContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlantUMLListener ) {
        listener.exitTemplate_argument(this);
	}
};

Template_argumentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlantUMLVisitor ) {
        return visitor.visitTemplate_argument(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlantUMLParser.Template_argumentContext = Template_argumentContext;

PlantUMLParser.prototype.template_argument = function() {

    var localctx = new Template_argumentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, PlantUMLParser.RULE_template_argument);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 372;
        this.type_declaration();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Template_argument_listContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlantUMLParser.RULE_template_argument_list;
    return this;
}

Template_argument_listContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Template_argument_listContext.prototype.constructor = Template_argument_listContext;

Template_argument_listContext.prototype.template_argument = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Template_argumentContext);
    } else {
        return this.getTypedRuleContext(Template_argumentContext,i);
    }
};

Template_argument_listContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlantUMLListener ) {
        listener.enterTemplate_argument_list(this);
	}
};

Template_argument_listContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlantUMLListener ) {
        listener.exitTemplate_argument_list(this);
	}
};

Template_argument_listContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlantUMLVisitor ) {
        return visitor.visitTemplate_argument_list(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlantUMLParser.Template_argument_listContext = Template_argument_listContext;

PlantUMLParser.prototype.template_argument_list = function() {

    var localctx = new Template_argument_listContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, PlantUMLParser.RULE_template_argument_list);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 374;
        this.template_argument();
        this.state = 379;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===PlantUMLParser.T__9) {
            this.state = 375;
            this.match(PlantUMLParser.T__9);
            this.state = 376;
            this.template_argument();
            this.state = 381;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function IdentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlantUMLParser.RULE_ident;
    return this;
}

IdentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IdentContext.prototype.constructor = IdentContext;

IdentContext.prototype.QUOTATION = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PlantUMLParser.QUOTATION);
    } else {
        return this.getToken(PlantUMLParser.QUOTATION, i);
    }
};


IdentContext.prototype.WORD = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PlantUMLParser.WORD);
    } else {
        return this.getToken(PlantUMLParser.WORD, i);
    }
};


IdentContext.prototype.AS = function() {
    return this.getToken(PlantUMLParser.AS, 0);
};

IdentContext.prototype.attribute_type = function() {
    return this.getTypedRuleContext(Attribute_typeContext,0);
};

IdentContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlantUMLListener ) {
        listener.enterIdent(this);
	}
};

IdentContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlantUMLListener ) {
        listener.exitIdent(this);
	}
};

IdentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlantUMLVisitor ) {
        return visitor.visitIdent(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlantUMLParser.IdentContext = IdentContext;

PlantUMLParser.prototype.ident = function() {

    var localctx = new IdentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, PlantUMLParser.RULE_ident);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 383;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,63,this._ctx);
        if(la_===1) {
            this.state = 382;
            this.match(PlantUMLParser.QUOTATION);

        }
        this.state = 388;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,64,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 385;
                this.match(PlantUMLParser.WORD); 
            }
            this.state = 390;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,64,this._ctx);
        }

        this.state = 392;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PlantUMLParser.QUOTATION) {
            this.state = 391;
            this.match(PlantUMLParser.QUOTATION);
        }

        this.state = 396;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PlantUMLParser.AS) {
            this.state = 394;
            this.match(PlantUMLParser.AS);
            this.state = 395;
            this.attribute_type();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Methode_data_typeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlantUMLParser.RULE_methode_data_type;
    return this;
}

Methode_data_typeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Methode_data_typeContext.prototype.constructor = Methode_data_typeContext;

Methode_data_typeContext.prototype.WORD = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PlantUMLParser.WORD);
    } else {
        return this.getToken(PlantUMLParser.WORD, i);
    }
};


Methode_data_typeContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlantUMLListener ) {
        listener.enterMethode_data_type(this);
	}
};

Methode_data_typeContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlantUMLListener ) {
        listener.exitMethode_data_type(this);
	}
};

Methode_data_typeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlantUMLVisitor ) {
        return visitor.visitMethode_data_type(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlantUMLParser.Methode_data_typeContext = Methode_data_typeContext;

PlantUMLParser.prototype.methode_data_type = function() {

    var localctx = new Methode_data_typeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, PlantUMLParser.RULE_methode_data_type);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 401;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,67,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 398;
                this.match(PlantUMLParser.WORD); 
            }
            this.state = 403;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,67,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Attribute_data_typeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlantUMLParser.RULE_attribute_data_type;
    return this;
}

Attribute_data_typeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Attribute_data_typeContext.prototype.constructor = Attribute_data_typeContext;

Attribute_data_typeContext.prototype.WORD = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PlantUMLParser.WORD);
    } else {
        return this.getToken(PlantUMLParser.WORD, i);
    }
};


Attribute_data_typeContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlantUMLListener ) {
        listener.enterAttribute_data_type(this);
	}
};

Attribute_data_typeContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlantUMLListener ) {
        listener.exitAttribute_data_type(this);
	}
};

Attribute_data_typeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlantUMLVisitor ) {
        return visitor.visitAttribute_data_type(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlantUMLParser.Attribute_data_typeContext = Attribute_data_typeContext;

PlantUMLParser.prototype.attribute_data_type = function() {

    var localctx = new Attribute_data_typeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 64, PlantUMLParser.RULE_attribute_data_type);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 407;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,68,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 404;
                this.match(PlantUMLParser.WORD); 
            }
            this.state = 409;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,68,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Data_typeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlantUMLParser.RULE_data_type;
    return this;
}

Data_typeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Data_typeContext.prototype.constructor = Data_typeContext;

Data_typeContext.prototype.WORD = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PlantUMLParser.WORD);
    } else {
        return this.getToken(PlantUMLParser.WORD, i);
    }
};


Data_typeContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlantUMLListener ) {
        listener.enterData_type(this);
	}
};

Data_typeContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlantUMLListener ) {
        listener.exitData_type(this);
	}
};

Data_typeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlantUMLVisitor ) {
        return visitor.visitData_type(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlantUMLParser.Data_typeContext = Data_typeContext;

PlantUMLParser.prototype.data_type = function() {

    var localctx = new Data_typeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 66, PlantUMLParser.RULE_data_type);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 413;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===PlantUMLParser.WORD) {
            this.state = 410;
            this.match(PlantUMLParser.WORD);
            this.state = 415;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Variable_nameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlantUMLParser.RULE_variable_name;
    return this;
}

Variable_nameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Variable_nameContext.prototype.constructor = Variable_nameContext;

Variable_nameContext.prototype.WORD = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PlantUMLParser.WORD);
    } else {
        return this.getToken(PlantUMLParser.WORD, i);
    }
};


Variable_nameContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlantUMLListener ) {
        listener.enterVariable_name(this);
	}
};

Variable_nameContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlantUMLListener ) {
        listener.exitVariable_name(this);
	}
};

Variable_nameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlantUMLVisitor ) {
        return visitor.visitVariable_name(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlantUMLParser.Variable_nameContext = Variable_nameContext;

PlantUMLParser.prototype.variable_name = function() {

    var localctx = new Variable_nameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 68, PlantUMLParser.RULE_variable_name);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 419;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===PlantUMLParser.WORD) {
            this.state = 416;
            this.match(PlantUMLParser.WORD);
            this.state = 421;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Connection_nameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlantUMLParser.RULE_connection_name;
    return this;
}

Connection_nameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Connection_nameContext.prototype.constructor = Connection_nameContext;

Connection_nameContext.prototype.WORD = function() {
    return this.getToken(PlantUMLParser.WORD, 0);
};

Connection_nameContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlantUMLListener ) {
        listener.enterConnection_name(this);
	}
};

Connection_nameContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlantUMLListener ) {
        listener.exitConnection_name(this);
	}
};

Connection_nameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlantUMLVisitor ) {
        return visitor.visitConnection_name(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlantUMLParser.Connection_nameContext = Connection_nameContext;

PlantUMLParser.prototype.connection_name = function() {

    var localctx = new Connection_nameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 70, PlantUMLParser.RULE_connection_name);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 422;
        this.match(PlantUMLParser.WORD);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ModifiersContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlantUMLParser.RULE_modifiers;
    this.static_mod = null; // Token
    this.abstract_mod = null; // Token
    return this;
}

ModifiersContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ModifiersContext.prototype.constructor = ModifiersContext;


ModifiersContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlantUMLListener ) {
        listener.enterModifiers(this);
	}
};

ModifiersContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlantUMLListener ) {
        listener.exitModifiers(this);
	}
};

ModifiersContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlantUMLVisitor ) {
        return visitor.visitModifiers(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlantUMLParser.ModifiersContext = ModifiersContext;

PlantUMLParser.prototype.modifiers = function() {

    var localctx = new ModifiersContext(this, this._ctx, this.state);
    this.enterRule(localctx, 72, PlantUMLParser.RULE_modifiers);
    try {
        this.state = 426;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case PlantUMLParser.T__19:
            this.enterOuterAlt(localctx, 1);
            this.state = 424;
            localctx.static_mod = this.match(PlantUMLParser.T__19);
            break;
        case PlantUMLParser.T__20:
            this.enterOuterAlt(localctx, 2);
            this.state = 425;
            localctx.abstract_mod = this.match(PlantUMLParser.T__20);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function StereotypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlantUMLParser.RULE_stereotype;
    this._ident = null; // IdentContext
    this.args = []; // of IdentContexts
    return this;
}

StereotypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StereotypeContext.prototype.constructor = StereotypeContext;

StereotypeContext.prototype.QUOTATION = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PlantUMLParser.QUOTATION);
    } else {
        return this.getToken(PlantUMLParser.QUOTATION, i);
    }
};


StereotypeContext.prototype.ident = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(IdentContext);
    } else {
        return this.getTypedRuleContext(IdentContext,i);
    }
};

StereotypeContext.prototype.WORD = function() {
    return this.getToken(PlantUMLParser.WORD, 0);
};

StereotypeContext.prototype.DOTDOT = function() {
    return this.getToken(PlantUMLParser.DOTDOT, 0);
};

StereotypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlantUMLListener ) {
        listener.enterStereotype(this);
	}
};

StereotypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlantUMLListener ) {
        listener.exitStereotype(this);
	}
};

StereotypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlantUMLVisitor ) {
        return visitor.visitStereotype(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlantUMLParser.StereotypeContext = StereotypeContext;

PlantUMLParser.prototype.stereotype = function() {

    var localctx = new StereotypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 74, PlantUMLParser.RULE_stereotype);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 428;
        this.match(PlantUMLParser.QUOTATION);
        this.state = 429;
        this.ident();
        this.state = 434;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PlantUMLParser.T__5) {
            this.state = 430;
            this.match(PlantUMLParser.T__5);
            this.state = 431;
            localctx._ident = this.ident();
            localctx.args.push(localctx._ident);
            this.state = 432;
            this.match(PlantUMLParser.T__6);
        }

        this.state = 437;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PlantUMLParser.DOTDOT) {
            this.state = 436;
            this.match(PlantUMLParser.DOTDOT);
        }

        this.state = 439;
        this.match(PlantUMLParser.WORD);
        this.state = 440;
        this.match(PlantUMLParser.QUOTATION);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Type_declarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlantUMLParser.RULE_type_declaration;
    return this;
}

Type_declarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Type_declarationContext.prototype.constructor = Type_declarationContext;


 
Type_declarationContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function List_typeContext(parser, ctx) {
	Type_declarationContext.call(this, parser);
    Type_declarationContext.prototype.copyFrom.call(this, ctx);
    return this;
}

List_typeContext.prototype = Object.create(Type_declarationContext.prototype);
List_typeContext.prototype.constructor = List_typeContext;

PlantUMLParser.List_typeContext = List_typeContext;

List_typeContext.prototype.ident = function() {
    return this.getTypedRuleContext(IdentContext,0);
};
List_typeContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlantUMLListener ) {
        listener.enterList_type(this);
	}
};

List_typeContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlantUMLListener ) {
        listener.exitList_type(this);
	}
};

List_typeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlantUMLVisitor ) {
        return visitor.visitList_type(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function Simple_typeContext(parser, ctx) {
	Type_declarationContext.call(this, parser);
    Type_declarationContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Simple_typeContext.prototype = Object.create(Type_declarationContext.prototype);
Simple_typeContext.prototype.constructor = Simple_typeContext;

PlantUMLParser.Simple_typeContext = Simple_typeContext;

Simple_typeContext.prototype.ident = function() {
    return this.getTypedRuleContext(IdentContext,0);
};
Simple_typeContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlantUMLListener ) {
        listener.enterSimple_type(this);
	}
};

Simple_typeContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlantUMLListener ) {
        listener.exitSimple_type(this);
	}
};

Simple_typeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlantUMLVisitor ) {
        return visitor.visitSimple_type(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function Template_typeContext(parser, ctx) {
	Type_declarationContext.call(this, parser);
    Type_declarationContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Template_typeContext.prototype = Object.create(Type_declarationContext.prototype);
Template_typeContext.prototype.constructor = Template_typeContext;

PlantUMLParser.Template_typeContext = Template_typeContext;

Template_typeContext.prototype.ident = function() {
    return this.getTypedRuleContext(IdentContext,0);
};

Template_typeContext.prototype.template_argument_list = function() {
    return this.getTypedRuleContext(Template_argument_listContext,0);
};
Template_typeContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlantUMLListener ) {
        listener.enterTemplate_type(this);
	}
};

Template_typeContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlantUMLListener ) {
        listener.exitTemplate_type(this);
	}
};

Template_typeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlantUMLVisitor ) {
        return visitor.visitTemplate_type(this);
    } else {
        return visitor.visitChildren(this);
    }
};



PlantUMLParser.Type_declarationContext = Type_declarationContext;

PlantUMLParser.prototype.type_declaration = function() {

    var localctx = new Type_declarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 76, PlantUMLParser.RULE_type_declaration);
    try {
        this.state = 454;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,75,this._ctx);
        switch(la_) {
        case 1:
            localctx = new Template_typeContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 442;
            this.ident();
            this.state = 443;
            this.match(PlantUMLParser.T__21);
            this.state = 445;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,74,this._ctx);
            if(la_===1) {
                this.state = 444;
                this.template_argument_list();

            }
            this.state = 447;
            this.match(PlantUMLParser.T__22);
            break;

        case 2:
            localctx = new List_typeContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 449;
            this.ident();
            this.state = 450;
            this.match(PlantUMLParser.T__8);
            this.state = 451;
            this.match(PlantUMLParser.T__10);
            break;

        case 3:
            localctx = new Simple_typeContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 453;
            this.ident();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Item_listContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlantUMLParser.RULE_item_list;
    return this;
}

Item_listContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Item_listContext.prototype.constructor = Item_listContext;

Item_listContext.prototype.ident = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(IdentContext);
    } else {
        return this.getTypedRuleContext(IdentContext,i);
    }
};

Item_listContext.prototype.NEWLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PlantUMLParser.NEWLINE);
    } else {
        return this.getToken(PlantUMLParser.NEWLINE, i);
    }
};


Item_listContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlantUMLListener ) {
        listener.enterItem_list(this);
	}
};

Item_listContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlantUMLListener ) {
        listener.exitItem_list(this);
	}
};

Item_listContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlantUMLVisitor ) {
        return visitor.visitItem_list(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlantUMLParser.Item_listContext = Item_listContext;

PlantUMLParser.prototype.item_list = function() {

    var localctx = new Item_listContext(this, this._ctx, this.state);
    this.enterRule(localctx, 78, PlantUMLParser.RULE_item_list);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 459; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 456;
            this.ident();
            this.state = 457;
            this.match(PlantUMLParser.NEWLINE);
            this.state = 461; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (PlantUMLParser.AS - 32)) | (1 << (PlantUMLParser.NEWLINE - 32)) | (1 << (PlantUMLParser.WORD - 32)) | (1 << (PlantUMLParser.QUOTATION - 32)))) !== 0));
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Enum_declarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlantUMLParser.RULE_enum_declaration;
    return this;
}

Enum_declarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Enum_declarationContext.prototype.constructor = Enum_declarationContext;

Enum_declarationContext.prototype.ident = function() {
    return this.getTypedRuleContext(IdentContext,0);
};

Enum_declarationContext.prototype.NEWLINE = function() {
    return this.getToken(PlantUMLParser.NEWLINE, 0);
};

Enum_declarationContext.prototype.item_list = function() {
    return this.getTypedRuleContext(Item_listContext,0);
};

Enum_declarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlantUMLListener ) {
        listener.enterEnum_declaration(this);
	}
};

Enum_declarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlantUMLListener ) {
        listener.exitEnum_declaration(this);
	}
};

Enum_declarationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlantUMLVisitor ) {
        return visitor.visitEnum_declaration(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlantUMLParser.Enum_declarationContext = Enum_declarationContext;

PlantUMLParser.prototype.enum_declaration = function() {

    var localctx = new Enum_declarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 80, PlantUMLParser.RULE_enum_declaration);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 463;
        this.match(PlantUMLParser.T__23);
        this.state = 464;
        this.ident();
        this.state = 471;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PlantUMLParser.T__2) {
            this.state = 465;
            this.match(PlantUMLParser.T__2);
            this.state = 466;
            this.match(PlantUMLParser.NEWLINE);
            this.state = 468;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (PlantUMLParser.AS - 32)) | (1 << (PlantUMLParser.NEWLINE - 32)) | (1 << (PlantUMLParser.WORD - 32)) | (1 << (PlantUMLParser.QUOTATION - 32)))) !== 0)) {
                this.state = 467;
                this.item_list();
            }

            this.state = 470;
            this.match(PlantUMLParser.T__3);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.PlantUMLParser = PlantUMLParser;

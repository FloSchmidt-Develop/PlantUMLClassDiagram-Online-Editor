// Generated from PlantUML.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var PlantUMLListener = require('./PlantUMLListener').PlantUMLListener;
var PlantUMLVisitor = require('./PlantUMLVisitor').PlantUMLVisitor;

var grammarFileName = "PlantUML.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u00038\u0223\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004",
    "\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0004$\t$\u0004",
    "%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004*\t*\u0004+\t+\u0004",
    ",\t,\u0004-\t-\u0004.\t.\u0004/\t/\u00040\t0\u00041\t1\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0005\u0002f\n\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0007\u0003n\n\u0003\f\u0003",
    "\u000e\u0003q\u000b\u0003\u0003\u0004\u0003\u0004\u0005\u0004u\n\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004{\n\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0007\u0004",
    "\u0082\n\u0004\f\u0004\u000e\u0004\u0085\u000b\u0004\u0003\u0004\u0005",
    "\u0004\u0088\n\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0005\u0005",
    "\u008d\n\u0005\u0003\u0005\u0005\u0005\u0090\n\u0005\u0003\u0006\u0003",
    "\u0006\u0005\u0006\u0094\n\u0006\u0003\u0006\u0003\u0006\u0005\u0006",
    "\u0098\n\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0007\u0006\u00a0\n\u0006\f\u0006\u000e\u0006\u00a3",
    "\u000b\u0006\u0003\u0006\u0005\u0006\u00a6\n\u0006\u0003\u0007\u0003",
    "\u0007\u0005\u0007\u00aa\n\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0005\u0007\u00af\n\u0007\u0003\b\u0005\b\u00b2\n\b\u0003\b\u0003\b",
    "\u0005\b\u00b6\n\b\u0003\b\u0003\b\u0005\b\u00ba\n\b\u0003\t\u0003\t",
    "\u0003\t\u0005\t\u00bf\n\t\u0003\t\u0003\t\u0005\t\u00c3\n\t\u0003\n",
    "\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0006\f",
    "\u00cc\n\f\r\f\u000e\f\u00cd\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r",
    "\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003",
    "\u0010\u0005\u0010\u00dc\n\u0010\u0003\u0010\u0005\u0010\u00df\n\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0005\u0010\u00e4\n\u0010\u0003",
    "\u0010\u0003\u0010\u0005\u0010\u00e8\n\u0010\u0003\u0011\u0006\u0011",
    "\u00eb\n\u0011\r\u0011\u000e\u0011\u00ec\u0003\u0012\u0003\u0012\u0003",
    "\u0012\u0003\u0012\u0005\u0012\u00f3\n\u0012\u0003\u0013\u0003\u0013",
    "\u0003\u0013\u0003\u0013\u0005\u0013\u00f9\n\u0013\u0003\u0014\u0005",
    "\u0014\u00fc\n\u0014\u0003\u0014\u0005\u0014\u00ff\n\u0014\u0003\u0014",
    "\u0003\u0014\u0003\u0014\u0005\u0014\u0104\n\u0014\u0003\u0014\u0003",
    "\u0014\u0003\u0014\u0005\u0014\u0109\n\u0014\u0003\u0014\u0005\u0014",
    "\u010c\n\u0014\u0003\u0014\u0005\u0014\u010f\n\u0014\u0003\u0015\u0007",
    "\u0015\u0112\n\u0015\f\u0015\u000e\u0015\u0115\u000b\u0015\u0003\u0016",
    "\u0005\u0016\u0118\n\u0016\u0003\u0016\u0005\u0016\u011b\n\u0016\u0003",
    "\u0016\u0003\u0016\u0005\u0016\u011f\n\u0016\u0003\u0016\u0003\u0016",
    "\u0005\u0016\u0123\n\u0016\u0003\u0016\u0003\u0016\u0003\u0017\u0006",
    "\u0017\u0128\n\u0017\r\u0017\u000e\u0017\u0129\u0003\u0018\u0006\u0018",
    "\u012d\n\u0018\r\u0018\u000e\u0018\u012e\u0003\u0018\u0006\u0018\u0132",
    "\n\u0018\r\u0018\u000e\u0018\u0133\u0003\u0018\u0003\u0018\u0003\u0018",
    "\u0003\u0018\u0007\u0018\u013a\n\u0018\f\u0018\u000e\u0018\u013d\u000b",
    "\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0006\u0018\u0142\n\u0018",
    "\r\u0018\u000e\u0018\u0143\u0003\u0018\u0003\u0018\u0007\u0018\u0148",
    "\n\u0018\f\u0018\u000e\u0018\u014b\u000b\u0018\u0003\u0018\u0005\u0018",
    "\u014e\n\u0018\u0003\u0019\u0003\u0019\u0005\u0019\u0152\n\u0019\u0003",
    "\u0019\u0003\u0019\u0005\u0019\u0156\n\u0019\u0003\u0019\u0005\u0019",
    "\u0159\n\u0019\u0003\u001a\u0003\u001a\u0005\u001a\u015d\n\u001a\u0003",
    "\u001a\u0005\u001a\u0160\n\u001a\u0003\u001a\u0005\u001a\u0163\n\u001a",
    "\u0003\u001a\u0003\u001a\u0003\u001b\u0003\u001b\u0003\u001b\u0005\u001b",
    "\u016a\n\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0005",
    "\u001b\u0170\n\u001b\u0003\u001b\u0003\u001b\u0005\u001b\u0174\n\u001b",
    "\u0003\u001b\u0005\u001b\u0177\n\u001b\u0003\u001b\u0005\u001b\u017a",
    "\n\u001b\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001d",
    "\u0003\u001d\u0007\u001d\u0182\n\u001d\f\u001d\u000e\u001d\u0185\u000b",
    "\u001d\u0003\u001d\u0003\u001d\u0003\u001e\u0003\u001e\u0003\u001e\u0003",
    "\u001e\u0003\u001e\u0003\u001e\u0005\u001e\u018f\n\u001e\u0003\u001f",
    "\u0003\u001f\u0003 \u0003 \u0003!\u0005!\u0196\n!\u0003!\u0003!\u0003",
    "\"\u0003\"\u0003\"\u0005\"\u019d\n\"\u0003\"\u0003\"\u0005\"\u01a1\n",
    "\"\u0003#\u0003#\u0003#\u0006#\u01a6\n#\r#\u000e#\u01a7\u0003$\u0003",
    "$\u0003$\u0005$\u01ad\n$\u0003$\u0007$\u01b0\n$\f$\u000e$\u01b3\u000b",
    "$\u0003%\u0003%\u0003&\u0003&\u0003&\u0007&\u01ba\n&\f&\u000e&\u01bd",
    "\u000b&\u0003\'\u0005\'\u01c0\n\'\u0003\'\u0007\'\u01c3\n\'\f\'\u000e",
    "\'\u01c6\u000b\'\u0003\'\u0005\'\u01c9\n\'\u0003\'\u0003\'\u0005\'\u01cd",
    "\n\'\u0003(\u0007(\u01d0\n(\f(\u000e(\u01d3\u000b(\u0003)\u0007)\u01d6",
    "\n)\f)\u000e)\u01d9\u000b)\u0003*\u0007*\u01dc\n*\f*\u000e*\u01df\u000b",
    "*\u0003+\u0007+\u01e2\n+\f+\u000e+\u01e5\u000b+\u0003,\u0003,\u0003",
    ",\u0003,\u0003,\u0005,\u01ec\n,\u0003,\u0003,\u0005,\u01f0\n,\u0003",
    "-\u0003-\u0005-\u01f4\n-\u0003.\u0003.\u0003.\u0003.\u0003.\u0003.\u0005",
    ".\u01fc\n.\u0003.\u0005.\u01ff\n.\u0003.\u0003.\u0003.\u0003/\u0003",
    "/\u0003/\u0005/\u0207\n/\u0003/\u0003/\u0003/\u0003/\u0003/\u0003/\u0003",
    "/\u0005/\u0210\n/\u00030\u00030\u00030\u00060\u0215\n0\r0\u000e0\u0216",
    "\u00031\u00031\u00031\u00031\u00031\u00051\u021e\n1\u00031\u00051\u0221",
    "\n1\u00031\u0002\u00022\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014",
    "\u0016\u0018\u001a\u001c\u001e \"$&(*,.02468:<>@BDFHJLNPRTVXZ\\^`\u0002",
    "\u0006\u0003\u0002\n\r\u0003\u000201\u0004\u0002\u0018\u001b44\u0003",
    "\u0002\u001d\u001f\u0002\u0258\u0002b\u0003\u0002\u0002\u0002\u0004",
    "o\u0003\u0002\u0002\u0002\u0006r\u0003\u0002\u0002\u0002\b\u0089\u0003",
    "\u0002\u0002\u0002\n\u0091\u0003\u0002\u0002\u0002\f\u00ae\u0003\u0002",
    "\u0002\u0002\u000e\u00b1\u0003\u0002\u0002\u0002\u0010\u00c2\u0003\u0002",
    "\u0002\u0002\u0012\u00c4\u0003\u0002\u0002\u0002\u0014\u00c6\u0003\u0002",
    "\u0002\u0002\u0016\u00c9\u0003\u0002\u0002\u0002\u0018\u00d1\u0003\u0002",
    "\u0002\u0002\u001a\u00d6\u0003\u0002\u0002\u0002\u001c\u00d8\u0003\u0002",
    "\u0002\u0002\u001e\u00db\u0003\u0002\u0002\u0002 \u00ea\u0003\u0002",
    "\u0002\u0002\"\u00f2\u0003\u0002\u0002\u0002$\u00f8\u0003\u0002\u0002",
    "\u0002&\u00fb\u0003\u0002\u0002\u0002(\u0113\u0003\u0002\u0002\u0002",
    "*\u0117\u0003\u0002\u0002\u0002,\u0127\u0003\u0002\u0002\u0002.\u014d",
    "\u0003\u0002\u0002\u00020\u014f\u0003\u0002\u0002\u00022\u015f\u0003",
    "\u0002\u0002\u00024\u0169\u0003\u0002\u0002\u00026\u017b\u0003\u0002",
    "\u0002\u00028\u017f\u0003\u0002\u0002\u0002:\u0188\u0003\u0002\u0002",
    "\u0002<\u0190\u0003\u0002\u0002\u0002>\u0192\u0003\u0002\u0002\u0002",
    "@\u0195\u0003\u0002\u0002\u0002B\u0199\u0003\u0002\u0002\u0002D\u01a2",
    "\u0003\u0002\u0002\u0002F\u01a9\u0003\u0002\u0002\u0002H\u01b4\u0003",
    "\u0002\u0002\u0002J\u01b6\u0003\u0002\u0002\u0002L\u01bf\u0003\u0002",
    "\u0002\u0002N\u01d1\u0003\u0002\u0002\u0002P\u01d7\u0003\u0002\u0002",
    "\u0002R\u01dd\u0003\u0002\u0002\u0002T\u01e3\u0003\u0002\u0002\u0002",
    "V\u01ef\u0003\u0002\u0002\u0002X\u01f3\u0003\u0002\u0002\u0002Z\u01f5",
    "\u0003\u0002\u0002\u0002\\\u020f\u0003\u0002\u0002\u0002^\u0214\u0003",
    "\u0002\u0002\u0002`\u0218\u0003\u0002\u0002\u0002be\u0007\u0003\u0002",
    "\u0002cf\u0007.\u0002\u0002df\u0005\u0004\u0003\u0002ec\u0003\u0002",
    "\u0002\u0002ed\u0003\u0002\u0002\u0002fg\u0003\u0002\u0002\u0002gh\u0007",
    "\u0004\u0002\u0002h\u0003\u0003\u0002\u0002\u0002in\u0005\n\u0006\u0002",
    "jn\u00054\u001b\u0002kn\u0005\u0006\u0004\u0002ln\u0007.\u0002\u0002",
    "mi\u0003\u0002\u0002\u0002mj\u0003\u0002\u0002\u0002mk\u0003\u0002\u0002",
    "\u0002ml\u0003\u0002\u0002\u0002nq\u0003\u0002\u0002\u0002om\u0003\u0002",
    "\u0002\u0002op\u0003\u0002\u0002\u0002p\u0005\u0003\u0002\u0002\u0002",
    "qo\u0003\u0002\u0002\u0002rt\u0007+\u0002\u0002su\u00076\u0002\u0002",
    "ts\u0003\u0002\u0002\u0002tu\u0003\u0002\u0002\u0002uv\u0003\u0002\u0002",
    "\u0002vw\u00077\u0002\u0002wx\u0005\b\u0005\u0002xz\u00077\u0002\u0002",
    "y{\u00076\u0002\u0002zy\u0003\u0002\u0002\u0002z{\u0003\u0002\u0002",
    "\u0002{\u0087\u0003\u0002\u0002\u0002|\u0083\u0007\u0005\u0002\u0002",
    "}\u0082\u0005\n\u0006\u0002~\u0082\u00054\u001b\u0002\u007f\u0082\u0005",
    "\u0016\f\u0002\u0080\u0082\u0007.\u0002\u0002\u0081}\u0003\u0002\u0002",
    "\u0002\u0081~\u0003\u0002\u0002\u0002\u0081\u007f\u0003\u0002\u0002",
    "\u0002\u0081\u0080\u0003\u0002\u0002\u0002\u0082\u0085\u0003\u0002\u0002",
    "\u0002\u0083\u0081\u0003\u0002\u0002\u0002\u0083\u0084\u0003\u0002\u0002",
    "\u0002\u0084\u0086\u0003\u0002\u0002\u0002\u0085\u0083\u0003\u0002\u0002",
    "\u0002\u0086\u0088\u0007\u0006\u0002\u0002\u0087|\u0003\u0002\u0002",
    "\u0002\u0087\u0088\u0003\u0002\u0002\u0002\u0088\u0007\u0003\u0002\u0002",
    "\u0002\u0089\u008f\u00072\u0002\u0002\u008a\u008c\u00075\u0002\u0002",
    "\u008b\u008d\u00076\u0002\u0002\u008c\u008b\u0003\u0002\u0002\u0002",
    "\u008c\u008d\u0003\u0002\u0002\u0002\u008d\u008e\u0003\u0002\u0002\u0002",
    "\u008e\u0090\u00072\u0002\u0002\u008f\u008a\u0003\u0002\u0002\u0002",
    "\u008f\u0090\u0003\u0002\u0002\u0002\u0090\t\u0003\u0002\u0002\u0002",
    "\u0091\u0093\u0005\f\u0007\u0002\u0092\u0094\u00076\u0002\u0002\u0093",
    "\u0092\u0003\u0002\u0002\u0002\u0093\u0094\u0003\u0002\u0002\u0002\u0094",
    "\u0095\u0003\u0002\u0002\u0002\u0095\u0097\u0005\u000e\b\u0002\u0096",
    "\u0098\u00076\u0002\u0002\u0097\u0096\u0003\u0002\u0002\u0002\u0097",
    "\u0098\u0003\u0002\u0002\u0002\u0098\u00a5\u0003\u0002\u0002\u0002\u0099",
    "\u00a1\u0007\u0005\u0002\u0002\u009a\u00a0\u0005\u001e\u0010\u0002\u009b",
    "\u00a0\u0005&\u0014\u0002\u009c\u00a0\u0005*\u0016\u0002\u009d\u00a0",
    "\u0005\u0016\f\u0002\u009e\u00a0\u0007.\u0002\u0002\u009f\u009a\u0003",
    "\u0002\u0002\u0002\u009f\u009b\u0003\u0002\u0002\u0002\u009f\u009c\u0003",
    "\u0002\u0002\u0002\u009f\u009d\u0003\u0002\u0002\u0002\u009f\u009e\u0003",
    "\u0002\u0002\u0002\u00a0\u00a3\u0003\u0002\u0002\u0002\u00a1\u009f\u0003",
    "\u0002\u0002\u0002\u00a1\u00a2\u0003\u0002\u0002\u0002\u00a2\u00a4\u0003",
    "\u0002\u0002\u0002\u00a3\u00a1\u0003\u0002\u0002\u0002\u00a4\u00a6\u0007",
    "\u0006\u0002\u0002\u00a5\u0099\u0003\u0002\u0002\u0002\u00a5\u00a6\u0003",
    "\u0002\u0002\u0002\u00a6\u000b\u0003\u0002\u0002\u0002\u00a7\u00a9\u0007",
    ")\u0002\u0002\u00a8\u00aa\u0007\'\u0002\u0002\u00a9\u00a8\u0003\u0002",
    "\u0002\u0002\u00a9\u00aa\u0003\u0002\u0002\u0002\u00aa\u00af\u0003\u0002",
    "\u0002\u0002\u00ab\u00af\u0007\'\u0002\u0002\u00ac\u00af\u0007(\u0002",
    "\u0002\u00ad\u00af\u0007*\u0002\u0002\u00ae\u00a7\u0003\u0002\u0002",
    "\u0002\u00ae\u00ab\u0003\u0002\u0002\u0002\u00ae\u00ac\u0003\u0002\u0002",
    "\u0002\u00ae\u00ad\u0003\u0002\u0002\u0002\u00af\r\u0003\u0002\u0002",
    "\u0002\u00b0\u00b2\u00077\u0002\u0002\u00b1\u00b0\u0003\u0002\u0002",
    "\u0002\u00b1\u00b2\u0003\u0002\u0002\u0002\u00b2\u00b3\u0003\u0002\u0002",
    "\u0002\u00b3\u00b5\u0005\u0010\t\u0002\u00b4\u00b6\u00077\u0002\u0002",
    "\u00b5\u00b4\u0003\u0002\u0002\u0002\u00b5\u00b6\u0003\u0002\u0002\u0002",
    "\u00b6\u00b9\u0003\u0002\u0002\u0002\u00b7\u00b8\u0007,\u0002\u0002",
    "\u00b8\u00ba\u0005\u0012\n\u0002\u00b9\u00b7\u0003\u0002\u0002\u0002",
    "\u00b9\u00ba\u0003\u0002\u0002\u0002\u00ba\u000f\u0003\u0002\u0002\u0002",
    "\u00bb\u00bc\u00072\u0002\u0002\u00bc\u00be\u00075\u0002\u0002\u00bd",
    "\u00bf\u00076\u0002\u0002\u00be\u00bd\u0003\u0002\u0002\u0002\u00be",
    "\u00bf\u0003\u0002\u0002\u0002\u00bf\u00c0\u0003\u0002\u0002\u0002\u00c0",
    "\u00c3\u00072\u0002\u0002\u00c1\u00c3\u00072\u0002\u0002\u00c2\u00bb",
    "\u0003\u0002\u0002\u0002\u00c2\u00c1\u0003\u0002\u0002\u0002\u00c3\u0011",
    "\u0003\u0002\u0002\u0002\u00c4\u00c5\u00072\u0002\u0002\u00c5\u0013",
    "\u0003\u0002\u0002\u0002\u00c6\u00c7\u0007\u0007\u0002\u0002\u00c7\u00c8",
    "\u0005L\'\u0002\u00c8\u0015\u0003\u0002\u0002\u0002\u00c9\u00cb\u0007",
    "\b\u0002\u0002\u00ca\u00cc\u0005\u0018\r\u0002\u00cb\u00ca\u0003\u0002",
    "\u0002\u0002\u00cc\u00cd\u0003\u0002\u0002\u0002\u00cd\u00cb\u0003\u0002",
    "\u0002\u0002\u00cd\u00ce\u0003\u0002\u0002\u0002\u00ce\u00cf\u0003\u0002",
    "\u0002\u0002\u00cf\u00d0\u0007\b\u0002\u0002\u00d0\u0017\u0003\u0002",
    "\u0002\u0002\u00d1\u00d2\u0005\u001a\u000e\u0002\u00d2\u00d3\u00075",
    "\u0002\u0002\u00d3\u00d4\u0005\u001c\u000f\u0002\u00d4\u00d5\u0007\t",
    "\u0002\u0002\u00d5\u0019\u0003\u0002\u0002\u0002\u00d6\u00d7\t\u0002",
    "\u0002\u0002\u00d7\u001b\u0003\u0002\u0002\u0002\u00d8\u00d9\t\u0003",
    "\u0002\u0002\u00d9\u001d\u0003\u0002\u0002\u0002\u00da\u00dc\u0005@",
    "!\u0002\u00db\u00da\u0003\u0002\u0002\u0002\u00db\u00dc\u0003\u0002",
    "\u0002\u0002\u00dc\u00de\u0003\u0002\u0002\u0002\u00dd\u00df\u0005X",
    "-\u0002\u00de\u00dd\u0003\u0002\u0002\u0002\u00de\u00df\u0003\u0002",
    "\u0002\u0002\u00df\u00e0\u0003\u0002\u0002\u0002\u00e0\u00e1\u0005 ",
    "\u0011\u0002\u00e1\u00e3\u00075\u0002\u0002\u00e2\u00e4\u00076\u0002",
    "\u0002\u00e3\u00e2\u0003\u0002\u0002\u0002\u00e3\u00e4\u0003\u0002\u0002",
    "\u0002\u00e4\u00e5\u0003\u0002\u0002\u0002\u00e5\u00e7\u0005\"\u0012",
    "\u0002\u00e6\u00e8\u0007.\u0002\u0002\u00e7\u00e6\u0003\u0002\u0002",
    "\u0002\u00e7\u00e8\u0003\u0002\u0002\u0002\u00e8\u001f\u0003\u0002\u0002",
    "\u0002\u00e9\u00eb\u00072\u0002\u0002\u00ea\u00e9\u0003\u0002\u0002",
    "\u0002\u00eb\u00ec\u0003\u0002\u0002\u0002\u00ec\u00ea\u0003\u0002\u0002",
    "\u0002\u00ec\u00ed\u0003\u0002\u0002\u0002\u00ed!\u0003\u0002\u0002",
    "\u0002\u00ee\u00f3\u0005P)\u0002\u00ef\u00f3\u0007/\u0002\u0002\u00f0",
    "\u00f3\u00074\u0002\u0002\u00f1\u00f3\u00073\u0002\u0002\u00f2\u00ee",
    "\u0003\u0002\u0002\u0002\u00f2\u00ef\u0003\u0002\u0002\u0002\u00f2\u00f0",
    "\u0003\u0002\u0002\u0002\u00f2\u00f1\u0003\u0002\u0002\u0002\u00f3#",
    "\u0003\u0002\u0002\u0002\u00f4\u00f9\u0005P)\u0002\u00f5\u00f9\u0007",
    "/\u0002\u0002\u00f6\u00f9\u00074\u0002\u0002\u00f7\u00f9\u00073\u0002",
    "\u0002\u00f8\u00f4\u0003\u0002\u0002\u0002\u00f8\u00f5\u0003\u0002\u0002",
    "\u0002\u00f8\u00f6\u0003\u0002\u0002\u0002\u00f8\u00f7\u0003\u0002\u0002",
    "\u0002\u00f9%\u0003\u0002\u0002\u0002\u00fa\u00fc\u0005@!\u0002\u00fb",
    "\u00fa\u0003\u0002\u0002\u0002\u00fb\u00fc\u0003\u0002\u0002\u0002\u00fc",
    "\u00fe\u0003\u0002\u0002\u0002\u00fd\u00ff\u0005X-\u0002\u00fe\u00fd",
    "\u0003\u0002\u0002\u0002\u00fe\u00ff\u0003\u0002\u0002\u0002\u00ff\u0100",
    "\u0003\u0002\u0002\u0002\u0100\u0101\u0005(\u0015\u0002\u0101\u0103",
    "\u0007\u000e\u0002\u0002\u0102\u0104\u0005F$\u0002\u0103\u0102\u0003",
    "\u0002\u0002\u0002\u0103\u0104\u0003\u0002\u0002\u0002\u0104\u0105\u0003",
    "\u0002\u0002\u0002\u0105\u010b\u0007\u000f\u0002\u0002\u0106\u0108\u0007",
    "5\u0002\u0002\u0107\u0109\u00076\u0002\u0002\u0108\u0107\u0003\u0002",
    "\u0002\u0002\u0108\u0109\u0003\u0002\u0002\u0002\u0109\u010a\u0003\u0002",
    "\u0002\u0002\u010a\u010c\u0005N(\u0002\u010b\u0106\u0003\u0002\u0002",
    "\u0002\u010b\u010c\u0003\u0002\u0002\u0002\u010c\u010e\u0003\u0002\u0002",
    "\u0002\u010d\u010f\u0007.\u0002\u0002\u010e\u010d\u0003\u0002\u0002",
    "\u0002\u010e\u010f\u0003\u0002\u0002\u0002\u010f\'\u0003\u0002\u0002",
    "\u0002\u0110\u0112\u00072\u0002\u0002\u0111\u0110\u0003\u0002\u0002",
    "\u0002\u0112\u0115\u0003\u0002\u0002\u0002\u0113\u0111\u0003\u0002\u0002",
    "\u0002\u0113\u0114\u0003\u0002\u0002\u0002\u0114)\u0003\u0002\u0002",
    "\u0002\u0115\u0113\u0003\u0002\u0002\u0002\u0116\u0118\u0005@!\u0002",
    "\u0117\u0116\u0003\u0002\u0002\u0002\u0117\u0118\u0003\u0002\u0002\u0002",
    "\u0118\u011a\u0003\u0002\u0002\u0002\u0119\u011b\u0005X-\u0002\u011a",
    "\u0119\u0003\u0002\u0002\u0002\u011a\u011b\u0003\u0002\u0002\u0002\u011b",
    "\u011c\u0003\u0002\u0002\u0002\u011c\u011e\u0005,\u0017\u0002\u011d",
    "\u011f\u00076\u0002\u0002\u011e\u011d\u0003\u0002\u0002\u0002\u011e",
    "\u011f\u0003\u0002\u0002\u0002\u011f\u0120\u0003\u0002\u0002\u0002\u0120",
    "\u0122\u0007\u0010\u0002\u0002\u0121\u0123\u00076\u0002\u0002\u0122",
    "\u0121\u0003\u0002\u0002\u0002\u0122\u0123\u0003\u0002\u0002\u0002\u0123",
    "\u0124\u0003\u0002\u0002\u0002\u0124\u0125\u0005.\u0018\u0002\u0125",
    "+\u0003\u0002\u0002\u0002\u0126\u0128\u00072\u0002\u0002\u0127\u0126",
    "\u0003\u0002\u0002\u0002\u0128\u0129\u0003\u0002\u0002\u0002\u0129\u0127",
    "\u0003\u0002\u0002\u0002\u0129\u012a\u0003\u0002\u0002\u0002\u012a-",
    "\u0003\u0002\u0002\u0002\u012b\u012d\u00072\u0002\u0002\u012c\u012b",
    "\u0003\u0002\u0002\u0002\u012d\u012e\u0003\u0002\u0002\u0002\u012e\u012c",
    "\u0003\u0002\u0002\u0002\u012e\u012f\u0003\u0002\u0002\u0002\u012f\u014e",
    "\u0003\u0002\u0002\u0002\u0130\u0132\u00070\u0002\u0002\u0131\u0130",
    "\u0003\u0002\u0002\u0002\u0132\u0133\u0003\u0002\u0002\u0002\u0133\u0131",
    "\u0003\u0002\u0002\u0002\u0133\u0134\u0003\u0002\u0002\u0002\u0134\u014e",
    "\u0003\u0002\u0002\u0002\u0135\u0136\u0007\u0011\u0002\u0002\u0136\u013b",
    "\u00072\u0002\u0002\u0137\u0138\u0007\u0012\u0002\u0002\u0138\u013a",
    "\u00072\u0002\u0002\u0139\u0137\u0003\u0002\u0002\u0002\u013a\u013d",
    "\u0003\u0002\u0002\u0002\u013b\u0139\u0003\u0002\u0002\u0002\u013b\u013c",
    "\u0003\u0002\u0002\u0002\u013c\u013e\u0003\u0002\u0002\u0002\u013d\u013b",
    "\u0003\u0002\u0002\u0002\u013e\u014e\u0007\u0013\u0002\u0002\u013f\u0141",
    "\u0007\u0011\u0002\u0002\u0140\u0142\u00070\u0002\u0002\u0141\u0140",
    "\u0003\u0002\u0002\u0002\u0142\u0143\u0003\u0002\u0002\u0002\u0143\u0141",
    "\u0003\u0002\u0002\u0002\u0143\u0144\u0003\u0002\u0002\u0002\u0144\u0149",
    "\u0003\u0002\u0002\u0002\u0145\u0146\u0007\u0012\u0002\u0002\u0146\u0148",
    "\u00070\u0002\u0002\u0147\u0145\u0003\u0002\u0002\u0002\u0148\u014b",
    "\u0003\u0002\u0002\u0002\u0149\u0147\u0003\u0002\u0002\u0002\u0149\u014a",
    "\u0003\u0002\u0002\u0002\u014a\u014c\u0003\u0002\u0002\u0002\u014b\u0149",
    "\u0003\u0002\u0002\u0002\u014c\u014e\u0007\u0013\u0002\u0002\u014d\u012c",
    "\u0003\u0002\u0002\u0002\u014d\u0131\u0003\u0002\u0002\u0002\u014d\u0135",
    "\u0003\u0002\u0002\u0002\u014d\u013f\u0003\u0002\u0002\u0002\u014e/",
    "\u0003\u0002\u0002\u0002\u014f\u0151\u0005V,\u0002\u0150\u0152\u0007",
    "6\u0002\u0002\u0151\u0150\u0003\u0002\u0002\u0002\u0151\u0152\u0003",
    "\u0002\u0002\u0002\u0152\u0158\u0003\u0002\u0002\u0002\u0153\u0155\u0007",
    "7\u0002\u0002\u0154\u0156\u0005> \u0002\u0155\u0154\u0003\u0002\u0002",
    "\u0002\u0155\u0156\u0003\u0002\u0002\u0002\u0156\u0157\u0003\u0002\u0002",
    "\u0002\u0157\u0159\u00077\u0002\u0002\u0158\u0153\u0003\u0002\u0002",
    "\u0002\u0158\u0159\u0003\u0002\u0002\u0002\u01591\u0003\u0002\u0002",
    "\u0002\u015a\u015c\u00077\u0002\u0002\u015b\u015d\u0005> \u0002\u015c",
    "\u015b\u0003\u0002\u0002\u0002\u015c\u015d\u0003\u0002\u0002\u0002\u015d",
    "\u015e\u0003\u0002\u0002\u0002\u015e\u0160\u00077\u0002\u0002\u015f",
    "\u015a\u0003\u0002\u0002\u0002\u015f\u0160\u0003\u0002\u0002\u0002\u0160",
    "\u0162\u0003\u0002\u0002\u0002\u0161\u0163\u00076\u0002\u0002\u0162",
    "\u0161\u0003\u0002\u0002\u0002\u0162\u0163\u0003\u0002\u0002\u0002\u0163",
    "\u0164\u0003\u0002\u0002\u0002\u0164\u0165\u0005V,\u0002\u01653\u0003",
    "\u0002\u0002\u0002\u0166\u0167\u00056\u001c\u0002\u0167\u0168\u0007",
    ".\u0002\u0002\u0168\u016a\u0003\u0002\u0002\u0002\u0169\u0166\u0003",
    "\u0002\u0002\u0002\u0169\u016a\u0003\u0002\u0002\u0002\u016a\u016b\u0003",
    "\u0002\u0002\u0002\u016b\u016c\u00050\u0019\u0002\u016c\u016d\u0005",
    "<\u001f\u0002\u016d\u0176\u00052\u001a\u0002\u016e\u0170\u00076\u0002",
    "\u0002\u016f\u016e\u0003\u0002\u0002\u0002\u016f\u0170\u0003\u0002\u0002",
    "\u0002\u0170\u0171\u0003\u0002\u0002\u0002\u0171\u0173\u00075\u0002",
    "\u0002\u0172\u0174\u00076\u0002\u0002\u0173\u0172\u0003\u0002\u0002",
    "\u0002\u0173\u0174\u0003\u0002\u0002\u0002\u0174\u0175\u0003\u0002\u0002",
    "\u0002\u0175\u0177\u0005Z.\u0002\u0176\u016f\u0003\u0002\u0002\u0002",
    "\u0176\u0177\u0003\u0002\u0002\u0002\u0177\u0179\u0003\u0002\u0002\u0002",
    "\u0178\u017a\u0007.\u0002\u0002\u0179\u0178\u0003\u0002\u0002\u0002",
    "\u0179\u017a\u0003\u0002\u0002\u0002\u017a5\u0003\u0002\u0002\u0002",
    "\u017b\u017c\u0007\u0014\u0002\u0002\u017c\u017d\u00058\u001d\u0002",
    "\u017d\u017e\u0007\u0015\u0002\u0002\u017e7\u0003\u0002\u0002\u0002",
    "\u017f\u0183\u0007\u0011\u0002\u0002\u0180\u0182\u0005:\u001e\u0002",
    "\u0181\u0180\u0003\u0002\u0002\u0002\u0182\u0185\u0003\u0002\u0002\u0002",
    "\u0183\u0181\u0003\u0002\u0002\u0002\u0183\u0184\u0003\u0002\u0002\u0002",
    "\u0184\u0186\u0003\u0002\u0002\u0002\u0185\u0183\u0003\u0002\u0002\u0002",
    "\u0186\u0187\u0007\u0013\u0002\u0002\u01879\u0003\u0002\u0002\u0002",
    "\u0188\u0189\u0007\u0016\u0002\u0002\u0189\u018a\u00070\u0002\u0002",
    "\u018a\u018b\u0007\u0017\u0002\u0002\u018b\u018c\u00070\u0002\u0002",
    "\u018c\u018e\u0007\u0006\u0002\u0002\u018d\u018f\u0007\u0012\u0002\u0002",
    "\u018e\u018d\u0003\u0002\u0002\u0002\u018e\u018f\u0003\u0002\u0002\u0002",
    "\u018f;\u0003\u0002\u0002\u0002\u0190\u0191\u0007%\u0002\u0002\u0191",
    "=\u0003\u0002\u0002\u0002\u0192\u0193\t\u0004\u0002\u0002\u0193?\u0003",
    "\u0002\u0002\u0002\u0194\u0196\u0007\u001c\u0002\u0002\u0195\u0194\u0003",
    "\u0002\u0002\u0002\u0195\u0196\u0003\u0002\u0002\u0002\u0196\u0197\u0003",
    "\u0002\u0002\u0002\u0197\u0198\t\u0005\u0002\u0002\u0198A\u0003\u0002",
    "\u0002\u0002\u0199\u019a\u0005T+\u0002\u019a\u019c\u00075\u0002\u0002",
    "\u019b\u019d\u00076\u0002\u0002\u019c\u019b\u0003\u0002\u0002\u0002",
    "\u019c\u019d\u0003\u0002\u0002\u0002\u019d\u01a0\u0003\u0002\u0002\u0002",
    "\u019e\u01a1\u0005$\u0013\u0002\u019f\u01a1\u0005D#\u0002\u01a0\u019e",
    "\u0003\u0002\u0002\u0002\u01a0\u019f\u0003\u0002\u0002\u0002\u01a1C",
    "\u0003\u0002\u0002\u0002\u01a2\u01a5\u0005$\u0013\u0002\u01a3\u01a4",
    "\u0007 \u0002\u0002\u01a4\u01a6\u0005$\u0013\u0002\u01a5\u01a3\u0003",
    "\u0002\u0002\u0002\u01a6\u01a7\u0003\u0002\u0002\u0002\u01a7\u01a5\u0003",
    "\u0002\u0002\u0002\u01a7\u01a8\u0003\u0002\u0002\u0002\u01a8E\u0003",
    "\u0002\u0002\u0002\u01a9\u01b1\u0005B\"\u0002\u01aa\u01ac\u0007\u0012",
    "\u0002\u0002\u01ab\u01ad\u00076\u0002\u0002\u01ac\u01ab\u0003\u0002",
    "\u0002\u0002\u01ac\u01ad\u0003\u0002\u0002\u0002\u01ad\u01ae\u0003\u0002",
    "\u0002\u0002\u01ae\u01b0\u0005B\"\u0002\u01af\u01aa\u0003\u0002\u0002",
    "\u0002\u01b0\u01b3\u0003\u0002\u0002\u0002\u01b1\u01af\u0003\u0002\u0002",
    "\u0002\u01b1\u01b2\u0003\u0002\u0002\u0002\u01b2G\u0003\u0002\u0002",
    "\u0002\u01b3\u01b1\u0003\u0002\u0002\u0002\u01b4\u01b5\u0005\\/\u0002",
    "\u01b5I\u0003\u0002\u0002\u0002\u01b6\u01bb\u0005H%\u0002\u01b7\u01b8",
    "\u0007\u0012\u0002\u0002\u01b8\u01ba\u0005H%\u0002\u01b9\u01b7\u0003",
    "\u0002\u0002\u0002\u01ba\u01bd\u0003\u0002\u0002\u0002\u01bb\u01b9\u0003",
    "\u0002\u0002\u0002\u01bb\u01bc\u0003\u0002\u0002\u0002\u01bcK\u0003",
    "\u0002\u0002\u0002\u01bd\u01bb\u0003\u0002\u0002\u0002\u01be\u01c0\u0007",
    "7\u0002\u0002\u01bf\u01be\u0003\u0002\u0002\u0002\u01bf\u01c0\u0003",
    "\u0002\u0002\u0002\u01c0\u01c4\u0003\u0002\u0002\u0002\u01c1\u01c3\u0007",
    "2\u0002\u0002\u01c2\u01c1\u0003\u0002\u0002\u0002\u01c3\u01c6\u0003",
    "\u0002\u0002\u0002\u01c4\u01c2\u0003\u0002\u0002\u0002\u01c4\u01c5\u0003",
    "\u0002\u0002\u0002\u01c5\u01c8\u0003\u0002\u0002\u0002\u01c6\u01c4\u0003",
    "\u0002\u0002\u0002\u01c7\u01c9\u00077\u0002\u0002\u01c8\u01c7\u0003",
    "\u0002\u0002\u0002\u01c8\u01c9\u0003\u0002\u0002\u0002\u01c9\u01cc\u0003",
    "\u0002\u0002\u0002\u01ca\u01cb\u0007,\u0002\u0002\u01cb\u01cd\u0005",
    "\"\u0012\u0002\u01cc\u01ca\u0003\u0002\u0002\u0002\u01cc\u01cd\u0003",
    "\u0002\u0002\u0002\u01cdM\u0003\u0002\u0002\u0002\u01ce\u01d0\u0007",
    "2\u0002\u0002\u01cf\u01ce\u0003\u0002\u0002\u0002\u01d0\u01d3\u0003",
    "\u0002\u0002\u0002\u01d1\u01cf\u0003\u0002\u0002\u0002\u01d1\u01d2\u0003",
    "\u0002\u0002\u0002\u01d2O\u0003\u0002\u0002\u0002\u01d3\u01d1\u0003",
    "\u0002\u0002\u0002\u01d4\u01d6\u00072\u0002\u0002\u01d5\u01d4\u0003",
    "\u0002\u0002\u0002\u01d6\u01d9\u0003\u0002\u0002\u0002\u01d7\u01d5\u0003",
    "\u0002\u0002\u0002\u01d7\u01d8\u0003\u0002\u0002\u0002\u01d8Q\u0003",
    "\u0002\u0002\u0002\u01d9\u01d7\u0003\u0002\u0002\u0002\u01da\u01dc\u0007",
    "2\u0002\u0002\u01db\u01da\u0003\u0002\u0002\u0002\u01dc\u01df\u0003",
    "\u0002\u0002\u0002\u01dd\u01db\u0003\u0002\u0002\u0002\u01dd\u01de\u0003",
    "\u0002\u0002\u0002\u01deS\u0003\u0002\u0002\u0002\u01df\u01dd\u0003",
    "\u0002\u0002\u0002\u01e0\u01e2\u00072\u0002\u0002\u01e1\u01e0\u0003",
    "\u0002\u0002\u0002\u01e2\u01e5\u0003\u0002\u0002\u0002\u01e3\u01e1\u0003",
    "\u0002\u0002\u0002\u01e3\u01e4\u0003\u0002\u0002\u0002\u01e4U\u0003",
    "\u0002\u0002\u0002\u01e5\u01e3\u0003\u0002\u0002\u0002\u01e6\u01f0\u0007",
    "2\u0002\u0002\u01e7\u01e8\u0007\u000e\u0002\u0002\u01e8\u01e9\u0007",
    "2\u0002\u0002\u01e9\u01eb\u0007\u0012\u0002\u0002\u01ea\u01ec\u0007",
    "6\u0002\u0002\u01eb\u01ea\u0003\u0002\u0002\u0002\u01eb\u01ec\u0003",
    "\u0002\u0002\u0002\u01ec\u01ed\u0003\u0002\u0002\u0002\u01ed\u01ee\u0007",
    "2\u0002\u0002\u01ee\u01f0\u0007\u000f\u0002\u0002\u01ef\u01e6\u0003",
    "\u0002\u0002\u0002\u01ef\u01e7\u0003\u0002\u0002\u0002\u01f0W\u0003",
    "\u0002\u0002\u0002\u01f1\u01f4\u0007!\u0002\u0002\u01f2\u01f4\u0007",
    "\u001c\u0002\u0002\u01f3\u01f1\u0003\u0002\u0002\u0002\u01f3\u01f2\u0003",
    "\u0002\u0002\u0002\u01f4Y\u0003\u0002\u0002\u0002\u01f5\u01f6\u0007",
    "7\u0002\u0002\u01f6\u01fb\u0005L\'\u0002\u01f7\u01f8\u0007\u000e\u0002",
    "\u0002\u01f8\u01f9\u0005L\'\u0002\u01f9\u01fa\u0007\u000f\u0002\u0002",
    "\u01fa\u01fc\u0003\u0002\u0002\u0002\u01fb\u01f7\u0003\u0002\u0002\u0002",
    "\u01fb\u01fc\u0003\u0002\u0002\u0002\u01fc\u01fe\u0003\u0002\u0002\u0002",
    "\u01fd\u01ff\u00075\u0002\u0002\u01fe\u01fd\u0003\u0002\u0002\u0002",
    "\u01fe\u01ff\u0003\u0002\u0002\u0002\u01ff\u0200\u0003\u0002\u0002\u0002",
    "\u0200\u0201\u00072\u0002\u0002\u0201\u0202\u00077\u0002\u0002\u0202",
    "[\u0003\u0002\u0002\u0002\u0203\u0204\u0005L\'\u0002\u0204\u0206\u0007",
    "\"\u0002\u0002\u0205\u0207\u0005J&\u0002\u0206\u0205\u0003\u0002\u0002",
    "\u0002\u0206\u0207\u0003\u0002\u0002\u0002\u0207\u0208\u0003\u0002\u0002",
    "\u0002\u0208\u0209\u0007#\u0002\u0002\u0209\u0210\u0003\u0002\u0002",
    "\u0002\u020a\u020b\u0005L\'\u0002\u020b\u020c\u0007\u0011\u0002\u0002",
    "\u020c\u020d\u0007\u0013\u0002\u0002\u020d\u0210\u0003\u0002\u0002\u0002",
    "\u020e\u0210\u0005L\'\u0002\u020f\u0203\u0003\u0002\u0002\u0002\u020f",
    "\u020a\u0003\u0002\u0002\u0002\u020f\u020e\u0003\u0002\u0002\u0002\u0210",
    "]\u0003\u0002\u0002\u0002\u0211\u0212\u0005L\'\u0002\u0212\u0213\u0007",
    ".\u0002\u0002\u0213\u0215\u0003\u0002\u0002\u0002\u0214\u0211\u0003",
    "\u0002\u0002\u0002\u0215\u0216\u0003\u0002\u0002\u0002\u0216\u0214\u0003",
    "\u0002\u0002\u0002\u0216\u0217\u0003\u0002\u0002\u0002\u0217_\u0003",
    "\u0002\u0002\u0002\u0218\u0219\u0007$\u0002\u0002\u0219\u0220\u0005",
    "L\'\u0002\u021a\u021b\u0007\u0005\u0002\u0002\u021b\u021d\u0007.\u0002",
    "\u0002\u021c\u021e\u0005^0\u0002\u021d\u021c\u0003\u0002\u0002\u0002",
    "\u021d\u021e\u0003\u0002\u0002\u0002\u021e\u021f\u0003\u0002\u0002\u0002",
    "\u021f\u0221\u0007\u0006\u0002\u0002\u0220\u021a\u0003\u0002\u0002\u0002",
    "\u0220\u0221\u0003\u0002\u0002\u0002\u0221a\u0003\u0002\u0002\u0002",
    "Xemotz\u0081\u0083\u0087\u008c\u008f\u0093\u0097\u009f\u00a1\u00a5\u00a9",
    "\u00ae\u00b1\u00b5\u00b9\u00be\u00c2\u00cd\u00db\u00de\u00e3\u00e7\u00ec",
    "\u00f2\u00f8\u00fb\u00fe\u0103\u0108\u010b\u010e\u0113\u0117\u011a\u011e",
    "\u0122\u0129\u012e\u0133\u013b\u0143\u0149\u014d\u0151\u0155\u0158\u015c",
    "\u015f\u0162\u0169\u016f\u0173\u0176\u0179\u0183\u018e\u0195\u019c\u01a0",
    "\u01a7\u01ac\u01b1\u01bb\u01bf\u01c4\u01c8\u01cc\u01d1\u01d7\u01dd\u01e3",
    "\u01eb\u01ef\u01f3\u01fb\u01fe\u0206\u020f\u0216\u021d\u0220"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'@startuml'", "'@enduml'", "'{'", "'}'", "'hide'", 
                     "'''", "';'", "'width'", "'hight'", "'x'", "'y'", "'('", 
                     "')'", "'='", "'['", "','", "']'", "''{\"points\": '", 
                     "'}''", "'{\"x\": '", "', \"y\": '", "'0..1'", "'0..*'", 
                     "'1..*'", "'1'", "'{abstract}'", "'+'", "'-'", "'#'", 
                     "'.'", "'{static}'", "'<'", "'>'", "'enum'", null, 
                     null, "'class'", "'interface'", "'abstract'", "'object'", 
                     "'package'", "'as'", "'newpage'", null, null, null, 
                     null, null, "'*[]'", "'*'", "':'", null, "'\"'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, "CONNECTOR", 
                      "DIRECTION", "CLASS", "INTERFACE", "ABSTRACT", "OBJECT", 
                      "PACKAGE", "AS", "NEWPAGE", "NEWLINE", "ARRAY", "INTEGER", 
                      "FLOAT", "WORD", "ANYARRAY", "ANY", "DOTDOT", "WHITESPACE", 
                      "QUOTATION", "COMMENT" ];

var ruleNames =  [ "diagram", "class_diagram", "package_section", "package_name", 
                   "class_declaration", "class_type", "class_description", 
                   "class_name", "class_dataType", "hide_declaration", "styling", 
                   "styling_expression", "styling_params", "styling_value", 
                   "attribute", "attribute_name", "attribute_type", "function_argument_attribute_type", 
                   "method", "mathode_name", "declaration", "declaration_name", 
                   "declaration_argument", "connection_left", "connection_right", 
                   "connection", "connection_points", "point_array", "points", 
                   "connection_symbol", "multiplicity", "visibility", "function_argument", 
                   "nested_argument_type", "function_argument_list", "template_argument", 
                   "template_argument_list", "ident", "methode_data_type", 
                   "attribute_data_type", "data_type", "variable_name", 
                   "connection_name", "modifiers", "stereotype", "type_declaration", 
                   "item_list", "enum_declaration" ];

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
PlantUMLParser.T__24 = 25;
PlantUMLParser.T__25 = 26;
PlantUMLParser.T__26 = 27;
PlantUMLParser.T__27 = 28;
PlantUMLParser.T__28 = 29;
PlantUMLParser.T__29 = 30;
PlantUMLParser.T__30 = 31;
PlantUMLParser.T__31 = 32;
PlantUMLParser.T__32 = 33;
PlantUMLParser.T__33 = 34;
PlantUMLParser.CONNECTOR = 35;
PlantUMLParser.DIRECTION = 36;
PlantUMLParser.CLASS = 37;
PlantUMLParser.INTERFACE = 38;
PlantUMLParser.ABSTRACT = 39;
PlantUMLParser.OBJECT = 40;
PlantUMLParser.PACKAGE = 41;
PlantUMLParser.AS = 42;
PlantUMLParser.NEWPAGE = 43;
PlantUMLParser.NEWLINE = 44;
PlantUMLParser.ARRAY = 45;
PlantUMLParser.INTEGER = 46;
PlantUMLParser.FLOAT = 47;
PlantUMLParser.WORD = 48;
PlantUMLParser.ANYARRAY = 49;
PlantUMLParser.ANY = 50;
PlantUMLParser.DOTDOT = 51;
PlantUMLParser.WHITESPACE = 52;
PlantUMLParser.QUOTATION = 53;
PlantUMLParser.COMMENT = 54;

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
PlantUMLParser.RULE_styling = 10;
PlantUMLParser.RULE_styling_expression = 11;
PlantUMLParser.RULE_styling_params = 12;
PlantUMLParser.RULE_styling_value = 13;
PlantUMLParser.RULE_attribute = 14;
PlantUMLParser.RULE_attribute_name = 15;
PlantUMLParser.RULE_attribute_type = 16;
PlantUMLParser.RULE_function_argument_attribute_type = 17;
PlantUMLParser.RULE_method = 18;
PlantUMLParser.RULE_mathode_name = 19;
PlantUMLParser.RULE_declaration = 20;
PlantUMLParser.RULE_declaration_name = 21;
PlantUMLParser.RULE_declaration_argument = 22;
PlantUMLParser.RULE_connection_left = 23;
PlantUMLParser.RULE_connection_right = 24;
PlantUMLParser.RULE_connection = 25;
PlantUMLParser.RULE_connection_points = 26;
PlantUMLParser.RULE_point_array = 27;
PlantUMLParser.RULE_points = 28;
PlantUMLParser.RULE_connection_symbol = 29;
PlantUMLParser.RULE_multiplicity = 30;
PlantUMLParser.RULE_visibility = 31;
PlantUMLParser.RULE_function_argument = 32;
PlantUMLParser.RULE_nested_argument_type = 33;
PlantUMLParser.RULE_function_argument_list = 34;
PlantUMLParser.RULE_template_argument = 35;
PlantUMLParser.RULE_template_argument_list = 36;
PlantUMLParser.RULE_ident = 37;
PlantUMLParser.RULE_methode_data_type = 38;
PlantUMLParser.RULE_attribute_data_type = 39;
PlantUMLParser.RULE_data_type = 40;
PlantUMLParser.RULE_variable_name = 41;
PlantUMLParser.RULE_connection_name = 42;
PlantUMLParser.RULE_modifiers = 43;
PlantUMLParser.RULE_stereotype = 44;
PlantUMLParser.RULE_type_declaration = 45;
PlantUMLParser.RULE_item_list = 46;
PlantUMLParser.RULE_enum_declaration = 47;


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
        this.state = 96;
        this.match(PlantUMLParser.T__0);
        this.state = 99;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
        switch(la_) {
        case 1:
            this.state = 97;
            this.match(PlantUMLParser.NEWLINE);
            break;

        case 2:
            this.state = 98;
            this.class_diagram();
            break;

        }
        this.state = 101;
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
        this.state = 109;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===PlantUMLParser.T__11 || _la===PlantUMLParser.T__17 || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (PlantUMLParser.CLASS - 37)) | (1 << (PlantUMLParser.INTERFACE - 37)) | (1 << (PlantUMLParser.ABSTRACT - 37)) | (1 << (PlantUMLParser.OBJECT - 37)) | (1 << (PlantUMLParser.PACKAGE - 37)) | (1 << (PlantUMLParser.NEWLINE - 37)) | (1 << (PlantUMLParser.WORD - 37)))) !== 0)) {
            this.state = 107;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case PlantUMLParser.CLASS:
            case PlantUMLParser.INTERFACE:
            case PlantUMLParser.ABSTRACT:
            case PlantUMLParser.OBJECT:
                this.state = 103;
                this.class_declaration();
                break;
            case PlantUMLParser.T__11:
            case PlantUMLParser.T__17:
            case PlantUMLParser.WORD:
                this.state = 104;
                this.connection();
                break;
            case PlantUMLParser.PACKAGE:
                this.state = 105;
                this.package_section();
                break;
            case PlantUMLParser.NEWLINE:
                this.state = 106;
                this.match(PlantUMLParser.NEWLINE);
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 111;
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

Package_sectionContext.prototype.styling = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StylingContext);
    } else {
        return this.getTypedRuleContext(StylingContext,i);
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
        this.state = 112;
        this.match(PlantUMLParser.PACKAGE);
        this.state = 114;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PlantUMLParser.WHITESPACE) {
            this.state = 113;
            this.match(PlantUMLParser.WHITESPACE);
        }

        this.state = 116;
        this.match(PlantUMLParser.QUOTATION);
        this.state = 117;
        this.package_name();
        this.state = 118;
        this.match(PlantUMLParser.QUOTATION);
        this.state = 120;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PlantUMLParser.WHITESPACE) {
            this.state = 119;
            this.match(PlantUMLParser.WHITESPACE);
        }

        this.state = 133;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PlantUMLParser.T__2) {
            this.state = 122;
            this.match(PlantUMLParser.T__2);
            this.state = 129;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << PlantUMLParser.T__5) | (1 << PlantUMLParser.T__11) | (1 << PlantUMLParser.T__17))) !== 0) || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (PlantUMLParser.CLASS - 37)) | (1 << (PlantUMLParser.INTERFACE - 37)) | (1 << (PlantUMLParser.ABSTRACT - 37)) | (1 << (PlantUMLParser.OBJECT - 37)) | (1 << (PlantUMLParser.NEWLINE - 37)) | (1 << (PlantUMLParser.WORD - 37)))) !== 0)) {
                this.state = 127;
                this._errHandler.sync(this);
                switch(this._input.LA(1)) {
                case PlantUMLParser.CLASS:
                case PlantUMLParser.INTERFACE:
                case PlantUMLParser.ABSTRACT:
                case PlantUMLParser.OBJECT:
                    this.state = 123;
                    this.class_declaration();
                    break;
                case PlantUMLParser.T__11:
                case PlantUMLParser.T__17:
                case PlantUMLParser.WORD:
                    this.state = 124;
                    this.connection();
                    break;
                case PlantUMLParser.T__5:
                    this.state = 125;
                    this.styling();
                    break;
                case PlantUMLParser.NEWLINE:
                    this.state = 126;
                    this.match(PlantUMLParser.NEWLINE);
                    break;
                default:
                    throw new antlr4.error.NoViableAltException(this);
                }
                this.state = 131;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 132;
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
        this.state = 135;
        this.match(PlantUMLParser.WORD);
        this.state = 141;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PlantUMLParser.DOTDOT) {
            this.state = 136;
            this.match(PlantUMLParser.DOTDOT);
            this.state = 138;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===PlantUMLParser.WHITESPACE) {
                this.state = 137;
                this.match(PlantUMLParser.WHITESPACE);
            }

            this.state = 140;
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

Class_declarationContext.prototype.styling = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StylingContext);
    } else {
        return this.getTypedRuleContext(StylingContext,i);
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
        this.state = 143;
        this.class_type();
        this.state = 145;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PlantUMLParser.WHITESPACE) {
            this.state = 144;
            this.match(PlantUMLParser.WHITESPACE);
        }

        this.state = 147;
        this.class_description();
        this.state = 149;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PlantUMLParser.WHITESPACE) {
            this.state = 148;
            this.match(PlantUMLParser.WHITESPACE);
        }

        this.state = 163;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PlantUMLParser.T__2) {
            this.state = 151;
            this.match(PlantUMLParser.T__2);
            this.state = 159;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << PlantUMLParser.T__5) | (1 << PlantUMLParser.T__11) | (1 << PlantUMLParser.T__25) | (1 << PlantUMLParser.T__26) | (1 << PlantUMLParser.T__27) | (1 << PlantUMLParser.T__28) | (1 << PlantUMLParser.T__30))) !== 0) || _la===PlantUMLParser.NEWLINE || _la===PlantUMLParser.WORD) {
                this.state = 157;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
                switch(la_) {
                case 1:
                    this.state = 152;
                    this.attribute();
                    break;

                case 2:
                    this.state = 153;
                    this.method();
                    break;

                case 3:
                    this.state = 154;
                    this.declaration();
                    break;

                case 4:
                    this.state = 155;
                    this.styling();
                    break;

                case 5:
                    this.state = 156;
                    this.match(PlantUMLParser.NEWLINE);
                    break;

                }
                this.state = 161;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 162;
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
        this.state = 172;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case PlantUMLParser.ABSTRACT:
            this.enterOuterAlt(localctx, 1);
            this.state = 165;
            this.match(PlantUMLParser.ABSTRACT);
            this.state = 167;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===PlantUMLParser.CLASS) {
                this.state = 166;
                this.match(PlantUMLParser.CLASS);
            }

            break;
        case PlantUMLParser.CLASS:
            this.enterOuterAlt(localctx, 2);
            this.state = 169;
            this.match(PlantUMLParser.CLASS);
            break;
        case PlantUMLParser.INTERFACE:
            this.enterOuterAlt(localctx, 3);
            this.state = 170;
            this.match(PlantUMLParser.INTERFACE);
            break;
        case PlantUMLParser.OBJECT:
            this.enterOuterAlt(localctx, 4);
            this.state = 171;
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
        this.state = 175;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PlantUMLParser.QUOTATION) {
            this.state = 174;
            this.match(PlantUMLParser.QUOTATION);
        }

        this.state = 177;
        this.class_name();
        this.state = 179;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PlantUMLParser.QUOTATION) {
            this.state = 178;
            this.match(PlantUMLParser.QUOTATION);
        }

        this.state = 183;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PlantUMLParser.AS) {
            this.state = 181;
            this.match(PlantUMLParser.AS);
            this.state = 182;
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
        this.state = 192;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 185;
            this.match(PlantUMLParser.WORD);
            this.state = 186;
            this.match(PlantUMLParser.DOTDOT);
            this.state = 188;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===PlantUMLParser.WHITESPACE) {
                this.state = 187;
                this.match(PlantUMLParser.WHITESPACE);
            }

            this.state = 190;
            this.match(PlantUMLParser.WORD);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 191;
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
        this.state = 194;
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
        this.state = 196;
        this.match(PlantUMLParser.T__4);
        this.state = 197;
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


function StylingContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlantUMLParser.RULE_styling;
    return this;
}

StylingContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StylingContext.prototype.constructor = StylingContext;

StylingContext.prototype.styling_expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Styling_expressionContext);
    } else {
        return this.getTypedRuleContext(Styling_expressionContext,i);
    }
};

StylingContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlantUMLListener ) {
        listener.enterStyling(this);
	}
};

StylingContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlantUMLListener ) {
        listener.exitStyling(this);
	}
};

StylingContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlantUMLVisitor ) {
        return visitor.visitStyling(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlantUMLParser.StylingContext = StylingContext;

PlantUMLParser.prototype.styling = function() {

    var localctx = new StylingContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, PlantUMLParser.RULE_styling);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 199;
        this.match(PlantUMLParser.T__5);
        this.state = 201; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 200;
            this.styling_expression();
            this.state = 203; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << PlantUMLParser.T__7) | (1 << PlantUMLParser.T__8) | (1 << PlantUMLParser.T__9) | (1 << PlantUMLParser.T__10))) !== 0));
        this.state = 205;
        this.match(PlantUMLParser.T__5);
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


function Styling_expressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlantUMLParser.RULE_styling_expression;
    this.styling_name = null; // Styling_paramsContext
    this.styling_val = null; // Styling_valueContext
    return this;
}

Styling_expressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Styling_expressionContext.prototype.constructor = Styling_expressionContext;

Styling_expressionContext.prototype.DOTDOT = function() {
    return this.getToken(PlantUMLParser.DOTDOT, 0);
};

Styling_expressionContext.prototype.styling_params = function() {
    return this.getTypedRuleContext(Styling_paramsContext,0);
};

Styling_expressionContext.prototype.styling_value = function() {
    return this.getTypedRuleContext(Styling_valueContext,0);
};

Styling_expressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlantUMLListener ) {
        listener.enterStyling_expression(this);
	}
};

Styling_expressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlantUMLListener ) {
        listener.exitStyling_expression(this);
	}
};

Styling_expressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlantUMLVisitor ) {
        return visitor.visitStyling_expression(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlantUMLParser.Styling_expressionContext = Styling_expressionContext;

PlantUMLParser.prototype.styling_expression = function() {

    var localctx = new Styling_expressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, PlantUMLParser.RULE_styling_expression);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 207;
        localctx.styling_name = this.styling_params();
        this.state = 208;
        this.match(PlantUMLParser.DOTDOT);
        this.state = 209;
        localctx.styling_val = this.styling_value();
        this.state = 210;
        this.match(PlantUMLParser.T__6);
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


function Styling_paramsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlantUMLParser.RULE_styling_params;
    return this;
}

Styling_paramsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Styling_paramsContext.prototype.constructor = Styling_paramsContext;


Styling_paramsContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlantUMLListener ) {
        listener.enterStyling_params(this);
	}
};

Styling_paramsContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlantUMLListener ) {
        listener.exitStyling_params(this);
	}
};

Styling_paramsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlantUMLVisitor ) {
        return visitor.visitStyling_params(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlantUMLParser.Styling_paramsContext = Styling_paramsContext;

PlantUMLParser.prototype.styling_params = function() {

    var localctx = new Styling_paramsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, PlantUMLParser.RULE_styling_params);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 212;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << PlantUMLParser.T__7) | (1 << PlantUMLParser.T__8) | (1 << PlantUMLParser.T__9) | (1 << PlantUMLParser.T__10))) !== 0))) {
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


function Styling_valueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlantUMLParser.RULE_styling_value;
    return this;
}

Styling_valueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Styling_valueContext.prototype.constructor = Styling_valueContext;

Styling_valueContext.prototype.FLOAT = function() {
    return this.getToken(PlantUMLParser.FLOAT, 0);
};

Styling_valueContext.prototype.INTEGER = function() {
    return this.getToken(PlantUMLParser.INTEGER, 0);
};

Styling_valueContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlantUMLListener ) {
        listener.enterStyling_value(this);
	}
};

Styling_valueContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlantUMLListener ) {
        listener.exitStyling_value(this);
	}
};

Styling_valueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlantUMLVisitor ) {
        return visitor.visitStyling_value(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlantUMLParser.Styling_valueContext = Styling_valueContext;

PlantUMLParser.prototype.styling_value = function() {

    var localctx = new Styling_valueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, PlantUMLParser.RULE_styling_value);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 214;
        _la = this._input.LA(1);
        if(!(_la===PlantUMLParser.INTEGER || _la===PlantUMLParser.FLOAT)) {
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
    this.enterRule(localctx, 28, PlantUMLParser.RULE_attribute);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 217;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
        if(la_===1) {
            this.state = 216;
            this.visibility();

        }
        this.state = 220;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PlantUMLParser.T__25 || _la===PlantUMLParser.T__30) {
            this.state = 219;
            this.modifiers();
        }

        this.state = 222;
        this.attribute_name();
        this.state = 223;
        this.match(PlantUMLParser.DOTDOT);
        this.state = 225;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PlantUMLParser.WHITESPACE) {
            this.state = 224;
            this.match(PlantUMLParser.WHITESPACE);
        }

        this.state = 227;
        this.attribute_type();
        this.state = 229;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,26,this._ctx);
        if(la_===1) {
            this.state = 228;
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
    this.enterRule(localctx, 30, PlantUMLParser.RULE_attribute_name);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 232; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 231;
            this.match(PlantUMLParser.WORD);
            this.state = 234; 
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
    this.enterRule(localctx, 32, PlantUMLParser.RULE_attribute_type);
    try {
        this.state = 240;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case PlantUMLParser.EOF:
        case PlantUMLParser.T__2:
        case PlantUMLParser.T__3:
        case PlantUMLParser.T__5:
        case PlantUMLParser.T__11:
        case PlantUMLParser.T__12:
        case PlantUMLParser.T__14:
        case PlantUMLParser.T__15:
        case PlantUMLParser.T__25:
        case PlantUMLParser.T__26:
        case PlantUMLParser.T__27:
        case PlantUMLParser.T__28:
        case PlantUMLParser.T__30:
        case PlantUMLParser.T__31:
        case PlantUMLParser.T__32:
        case PlantUMLParser.NEWLINE:
        case PlantUMLParser.WORD:
        case PlantUMLParser.DOTDOT:
            this.enterOuterAlt(localctx, 1);
            this.state = 236;
            this.attribute_data_type();
            break;
        case PlantUMLParser.ARRAY:
            this.enterOuterAlt(localctx, 2);
            this.state = 237;
            this.match(PlantUMLParser.ARRAY);
            break;
        case PlantUMLParser.ANY:
            this.enterOuterAlt(localctx, 3);
            this.state = 238;
            this.match(PlantUMLParser.ANY);
            break;
        case PlantUMLParser.ANYARRAY:
            this.enterOuterAlt(localctx, 4);
            this.state = 239;
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
    this.enterRule(localctx, 34, PlantUMLParser.RULE_function_argument_attribute_type);
    try {
        this.state = 246;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case PlantUMLParser.T__12:
        case PlantUMLParser.T__15:
        case PlantUMLParser.T__29:
        case PlantUMLParser.WORD:
            this.enterOuterAlt(localctx, 1);
            this.state = 242;
            this.attribute_data_type();
            break;
        case PlantUMLParser.ARRAY:
            this.enterOuterAlt(localctx, 2);
            this.state = 243;
            this.match(PlantUMLParser.ARRAY);
            break;
        case PlantUMLParser.ANY:
            this.enterOuterAlt(localctx, 3);
            this.state = 244;
            this.match(PlantUMLParser.ANY);
            break;
        case PlantUMLParser.ANYARRAY:
            this.enterOuterAlt(localctx, 4);
            this.state = 245;
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
    this.enterRule(localctx, 36, PlantUMLParser.RULE_method);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 249;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,30,this._ctx);
        if(la_===1) {
            this.state = 248;
            this.visibility();

        }
        this.state = 252;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PlantUMLParser.T__25 || _la===PlantUMLParser.T__30) {
            this.state = 251;
            this.modifiers();
        }

        this.state = 254;
        this.mathode_name();
        this.state = 255;
        this.match(PlantUMLParser.T__11);
        this.state = 257;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PlantUMLParser.WORD || _la===PlantUMLParser.DOTDOT) {
            this.state = 256;
            this.function_argument_list();
        }

        this.state = 259;
        this.match(PlantUMLParser.T__12);
        this.state = 265;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PlantUMLParser.DOTDOT) {
            this.state = 260;
            this.match(PlantUMLParser.DOTDOT);
            this.state = 262;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===PlantUMLParser.WHITESPACE) {
                this.state = 261;
                this.match(PlantUMLParser.WHITESPACE);
            }

            this.state = 264;
            this.methode_data_type();
        }

        this.state = 268;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,35,this._ctx);
        if(la_===1) {
            this.state = 267;
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
    this.enterRule(localctx, 38, PlantUMLParser.RULE_mathode_name);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 273;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===PlantUMLParser.WORD) {
            this.state = 270;
            this.match(PlantUMLParser.WORD);
            this.state = 275;
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
    this.enterRule(localctx, 40, PlantUMLParser.RULE_declaration);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 277;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,37,this._ctx);
        if(la_===1) {
            this.state = 276;
            this.visibility();

        }
        this.state = 280;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PlantUMLParser.T__25 || _la===PlantUMLParser.T__30) {
            this.state = 279;
            this.modifiers();
        }

        this.state = 282;
        this.declaration_name();
        this.state = 284;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PlantUMLParser.WHITESPACE) {
            this.state = 283;
            this.match(PlantUMLParser.WHITESPACE);
        }

        this.state = 286;
        this.match(PlantUMLParser.T__13);
        this.state = 288;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PlantUMLParser.WHITESPACE) {
            this.state = 287;
            this.match(PlantUMLParser.WHITESPACE);
        }

        this.state = 290;
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
    this.enterRule(localctx, 42, PlantUMLParser.RULE_declaration_name);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 293; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 292;
            this.match(PlantUMLParser.WORD);
            this.state = 295; 
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
    this.enterRule(localctx, 44, PlantUMLParser.RULE_declaration_argument);
    var _la = 0; // Token type
    try {
        this.state = 331;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,47,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 298; 
            this._errHandler.sync(this);
            var _alt = 1;
            do {
            	switch (_alt) {
            	case 1:
            		this.state = 297;
            		this.match(PlantUMLParser.WORD);
            		break;
            	default:
            		throw new antlr4.error.NoViableAltException(this);
            	}
            	this.state = 300; 
            	this._errHandler.sync(this);
            	_alt = this._interp.adaptivePredict(this._input,42, this._ctx);
            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 303; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 302;
                this.match(PlantUMLParser.INTEGER);
                this.state = 305; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while(_la===PlantUMLParser.INTEGER);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 307;
            this.match(PlantUMLParser.T__14);
            this.state = 308;
            this.match(PlantUMLParser.WORD);
            this.state = 313;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===PlantUMLParser.T__15) {
                this.state = 309;
                this.match(PlantUMLParser.T__15);
                this.state = 310;
                this.match(PlantUMLParser.WORD);
                this.state = 315;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 316;
            this.match(PlantUMLParser.T__16);
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 317;
            this.match(PlantUMLParser.T__14);
            this.state = 319; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 318;
                this.match(PlantUMLParser.INTEGER);
                this.state = 321; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while(_la===PlantUMLParser.INTEGER);
            this.state = 327;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===PlantUMLParser.T__15) {
                this.state = 323;
                this.match(PlantUMLParser.T__15);
                this.state = 324;
                this.match(PlantUMLParser.INTEGER);
                this.state = 329;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 330;
            this.match(PlantUMLParser.T__16);
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
    this.enterRule(localctx, 46, PlantUMLParser.RULE_connection_left);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 333;
        localctx.instance = this.connection_name();
        this.state = 335;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PlantUMLParser.WHITESPACE) {
            this.state = 334;
            this.match(PlantUMLParser.WHITESPACE);
        }

        this.state = 342;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PlantUMLParser.QUOTATION) {
            this.state = 337;
            this.match(PlantUMLParser.QUOTATION);
            this.state = 339;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(((((_la - 22)) & ~0x1f) == 0 && ((1 << (_la - 22)) & ((1 << (PlantUMLParser.T__21 - 22)) | (1 << (PlantUMLParser.T__22 - 22)) | (1 << (PlantUMLParser.T__23 - 22)) | (1 << (PlantUMLParser.T__24 - 22)) | (1 << (PlantUMLParser.ANY - 22)))) !== 0)) {
                this.state = 338;
                localctx.mult = this.multiplicity();
            }

            this.state = 341;
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
    this.enterRule(localctx, 48, PlantUMLParser.RULE_connection_right);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 349;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PlantUMLParser.QUOTATION) {
            this.state = 344;
            this.match(PlantUMLParser.QUOTATION);
            this.state = 346;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(((((_la - 22)) & ~0x1f) == 0 && ((1 << (_la - 22)) & ((1 << (PlantUMLParser.T__21 - 22)) | (1 << (PlantUMLParser.T__22 - 22)) | (1 << (PlantUMLParser.T__23 - 22)) | (1 << (PlantUMLParser.T__24 - 22)) | (1 << (PlantUMLParser.ANY - 22)))) !== 0)) {
                this.state = 345;
                localctx.mult = this.multiplicity();
            }

            this.state = 348;
            this.match(PlantUMLParser.QUOTATION);
        }

        this.state = 352;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PlantUMLParser.WHITESPACE) {
            this.state = 351;
            this.match(PlantUMLParser.WHITESPACE);
        }

        this.state = 354;
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

ConnectionContext.prototype.connection_points = function() {
    return this.getTypedRuleContext(Connection_pointsContext,0);
};

ConnectionContext.prototype.NEWLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PlantUMLParser.NEWLINE);
    } else {
        return this.getToken(PlantUMLParser.NEWLINE, i);
    }
};


ConnectionContext.prototype.DOTDOT = function() {
    return this.getToken(PlantUMLParser.DOTDOT, 0);
};

ConnectionContext.prototype.stereotype = function() {
    return this.getTypedRuleContext(StereotypeContext,0);
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
    this.enterRule(localctx, 50, PlantUMLParser.RULE_connection);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 359;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PlantUMLParser.T__17) {
            this.state = 356;
            this.connection_points();
            this.state = 357;
            this.match(PlantUMLParser.NEWLINE);
        }

        this.state = 361;
        localctx.left = this.connection_left();
        this.state = 362;
        this.connection_symbol();
        this.state = 363;
        localctx.right = this.connection_right();
        this.state = 372;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PlantUMLParser.DOTDOT || _la===PlantUMLParser.WHITESPACE) {
            this.state = 365;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===PlantUMLParser.WHITESPACE) {
                this.state = 364;
                this.match(PlantUMLParser.WHITESPACE);
            }

            this.state = 367;
            this.match(PlantUMLParser.DOTDOT);
            this.state = 369;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===PlantUMLParser.WHITESPACE) {
                this.state = 368;
                this.match(PlantUMLParser.WHITESPACE);
            }

            this.state = 371;
            this.stereotype();
        }

        this.state = 375;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,58,this._ctx);
        if(la_===1) {
            this.state = 374;
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


function Connection_pointsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlantUMLParser.RULE_connection_points;
    return this;
}

Connection_pointsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Connection_pointsContext.prototype.constructor = Connection_pointsContext;

Connection_pointsContext.prototype.point_array = function() {
    return this.getTypedRuleContext(Point_arrayContext,0);
};

Connection_pointsContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlantUMLListener ) {
        listener.enterConnection_points(this);
	}
};

Connection_pointsContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlantUMLListener ) {
        listener.exitConnection_points(this);
	}
};

Connection_pointsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlantUMLVisitor ) {
        return visitor.visitConnection_points(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlantUMLParser.Connection_pointsContext = Connection_pointsContext;

PlantUMLParser.prototype.connection_points = function() {

    var localctx = new Connection_pointsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, PlantUMLParser.RULE_connection_points);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 377;
        this.match(PlantUMLParser.T__17);
        this.state = 378;
        this.point_array();
        this.state = 379;
        this.match(PlantUMLParser.T__18);
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


function Point_arrayContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlantUMLParser.RULE_point_array;
    this.pts = null; // PointsContext
    return this;
}

Point_arrayContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Point_arrayContext.prototype.constructor = Point_arrayContext;

Point_arrayContext.prototype.points = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(PointsContext);
    } else {
        return this.getTypedRuleContext(PointsContext,i);
    }
};

Point_arrayContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlantUMLListener ) {
        listener.enterPoint_array(this);
	}
};

Point_arrayContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlantUMLListener ) {
        listener.exitPoint_array(this);
	}
};

Point_arrayContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlantUMLVisitor ) {
        return visitor.visitPoint_array(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlantUMLParser.Point_arrayContext = Point_arrayContext;

PlantUMLParser.prototype.point_array = function() {

    var localctx = new Point_arrayContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, PlantUMLParser.RULE_point_array);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 381;
        this.match(PlantUMLParser.T__14);
        this.state = 385;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===PlantUMLParser.T__19) {
            this.state = 382;
            localctx.pts = this.points();
            this.state = 387;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 388;
        this.match(PlantUMLParser.T__16);
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


function PointsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlantUMLParser.RULE_points;
    this.x = null; // Token
    this.y = null; // Token
    return this;
}

PointsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PointsContext.prototype.constructor = PointsContext;

PointsContext.prototype.INTEGER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PlantUMLParser.INTEGER);
    } else {
        return this.getToken(PlantUMLParser.INTEGER, i);
    }
};


PointsContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlantUMLListener ) {
        listener.enterPoints(this);
	}
};

PointsContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlantUMLListener ) {
        listener.exitPoints(this);
	}
};

PointsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PlantUMLVisitor ) {
        return visitor.visitPoints(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PlantUMLParser.PointsContext = PointsContext;

PlantUMLParser.prototype.points = function() {

    var localctx = new PointsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, PlantUMLParser.RULE_points);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 390;
        this.match(PlantUMLParser.T__19);
        this.state = 391;
        localctx.x = this.match(PlantUMLParser.INTEGER);
        this.state = 392;
        this.match(PlantUMLParser.T__20);
        this.state = 393;
        localctx.y = this.match(PlantUMLParser.INTEGER);
        this.state = 394;
        this.match(PlantUMLParser.T__3);
        this.state = 396;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PlantUMLParser.T__15) {
            this.state = 395;
            this.match(PlantUMLParser.T__15);
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
    this.enterRule(localctx, 58, PlantUMLParser.RULE_connection_symbol);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 398;
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
    this.enterRule(localctx, 60, PlantUMLParser.RULE_multiplicity);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 400;
        _la = this._input.LA(1);
        if(!(((((_la - 22)) & ~0x1f) == 0 && ((1 << (_la - 22)) & ((1 << (PlantUMLParser.T__21 - 22)) | (1 << (PlantUMLParser.T__22 - 22)) | (1 << (PlantUMLParser.T__23 - 22)) | (1 << (PlantUMLParser.T__24 - 22)) | (1 << (PlantUMLParser.ANY - 22)))) !== 0))) {
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
    this.enterRule(localctx, 62, PlantUMLParser.RULE_visibility);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 403;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PlantUMLParser.T__25) {
            this.state = 402;
            this.match(PlantUMLParser.T__25);
        }

        this.state = 405;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << PlantUMLParser.T__26) | (1 << PlantUMLParser.T__27) | (1 << PlantUMLParser.T__28))) !== 0))) {
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
    this.enterRule(localctx, 64, PlantUMLParser.RULE_function_argument);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 407;
        this.variable_name();
        this.state = 408;
        this.match(PlantUMLParser.DOTDOT);
        this.state = 410;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PlantUMLParser.WHITESPACE) {
            this.state = 409;
            this.match(PlantUMLParser.WHITESPACE);
        }

        this.state = 414;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,63,this._ctx);
        switch(la_) {
        case 1:
            this.state = 412;
            this.function_argument_attribute_type();
            break;

        case 2:
            this.state = 413;
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
    this.enterRule(localctx, 66, PlantUMLParser.RULE_nested_argument_type);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 416;
        this.function_argument_attribute_type();
        this.state = 419; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 417;
            this.match(PlantUMLParser.T__29);
            this.state = 418;
            this.function_argument_attribute_type();
            this.state = 421; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===PlantUMLParser.T__29);
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
    this.enterRule(localctx, 68, PlantUMLParser.RULE_function_argument_list);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 423;
        this.function_argument();
        this.state = 431;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===PlantUMLParser.T__15) {
            this.state = 424;
            this.match(PlantUMLParser.T__15);
            this.state = 426;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===PlantUMLParser.WHITESPACE) {
                this.state = 425;
                this.match(PlantUMLParser.WHITESPACE);
            }

            this.state = 428;
            this.function_argument();
            this.state = 433;
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
    this.enterRule(localctx, 70, PlantUMLParser.RULE_template_argument);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 434;
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
    this.enterRule(localctx, 72, PlantUMLParser.RULE_template_argument_list);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 436;
        this.template_argument();
        this.state = 441;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===PlantUMLParser.T__15) {
            this.state = 437;
            this.match(PlantUMLParser.T__15);
            this.state = 438;
            this.template_argument();
            this.state = 443;
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
    this.enterRule(localctx, 74, PlantUMLParser.RULE_ident);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 445;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,68,this._ctx);
        if(la_===1) {
            this.state = 444;
            this.match(PlantUMLParser.QUOTATION);

        }
        this.state = 450;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,69,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 447;
                this.match(PlantUMLParser.WORD); 
            }
            this.state = 452;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,69,this._ctx);
        }

        this.state = 454;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PlantUMLParser.QUOTATION) {
            this.state = 453;
            this.match(PlantUMLParser.QUOTATION);
        }

        this.state = 458;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PlantUMLParser.AS) {
            this.state = 456;
            this.match(PlantUMLParser.AS);
            this.state = 457;
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
    this.enterRule(localctx, 76, PlantUMLParser.RULE_methode_data_type);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 463;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,72,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 460;
                this.match(PlantUMLParser.WORD); 
            }
            this.state = 465;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,72,this._ctx);
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
    this.enterRule(localctx, 78, PlantUMLParser.RULE_attribute_data_type);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 469;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,73,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 466;
                this.match(PlantUMLParser.WORD); 
            }
            this.state = 471;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,73,this._ctx);
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
    this.enterRule(localctx, 80, PlantUMLParser.RULE_data_type);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 475;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===PlantUMLParser.WORD) {
            this.state = 472;
            this.match(PlantUMLParser.WORD);
            this.state = 477;
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
    this.enterRule(localctx, 82, PlantUMLParser.RULE_variable_name);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 481;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===PlantUMLParser.WORD) {
            this.state = 478;
            this.match(PlantUMLParser.WORD);
            this.state = 483;
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

Connection_nameContext.prototype.WORD = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PlantUMLParser.WORD);
    } else {
        return this.getToken(PlantUMLParser.WORD, i);
    }
};


Connection_nameContext.prototype.WHITESPACE = function() {
    return this.getToken(PlantUMLParser.WHITESPACE, 0);
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
    this.enterRule(localctx, 84, PlantUMLParser.RULE_connection_name);
    var _la = 0; // Token type
    try {
        this.state = 493;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case PlantUMLParser.WORD:
            this.enterOuterAlt(localctx, 1);
            this.state = 484;
            this.match(PlantUMLParser.WORD);
            break;
        case PlantUMLParser.T__11:
            this.enterOuterAlt(localctx, 2);
            this.state = 485;
            this.match(PlantUMLParser.T__11);
            this.state = 486;
            this.match(PlantUMLParser.WORD);
            this.state = 487;
            this.match(PlantUMLParser.T__15);
            this.state = 489;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===PlantUMLParser.WHITESPACE) {
                this.state = 488;
                this.match(PlantUMLParser.WHITESPACE);
            }

            this.state = 491;
            this.match(PlantUMLParser.WORD);
            this.state = 492;
            this.match(PlantUMLParser.T__12);
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
    this.enterRule(localctx, 86, PlantUMLParser.RULE_modifiers);
    try {
        this.state = 497;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case PlantUMLParser.T__30:
            this.enterOuterAlt(localctx, 1);
            this.state = 495;
            localctx.static_mod = this.match(PlantUMLParser.T__30);
            break;
        case PlantUMLParser.T__25:
            this.enterOuterAlt(localctx, 2);
            this.state = 496;
            localctx.abstract_mod = this.match(PlantUMLParser.T__25);
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
    this.enterRule(localctx, 88, PlantUMLParser.RULE_stereotype);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 499;
        this.match(PlantUMLParser.QUOTATION);
        this.state = 500;
        this.ident();
        this.state = 505;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PlantUMLParser.T__11) {
            this.state = 501;
            this.match(PlantUMLParser.T__11);
            this.state = 502;
            localctx._ident = this.ident();
            localctx.args.push(localctx._ident);
            this.state = 503;
            this.match(PlantUMLParser.T__12);
        }

        this.state = 508;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PlantUMLParser.DOTDOT) {
            this.state = 507;
            this.match(PlantUMLParser.DOTDOT);
        }

        this.state = 510;
        this.match(PlantUMLParser.WORD);
        this.state = 511;
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
    this.enterRule(localctx, 90, PlantUMLParser.RULE_type_declaration);
    try {
        this.state = 525;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,82,this._ctx);
        switch(la_) {
        case 1:
            localctx = new Template_typeContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 513;
            this.ident();
            this.state = 514;
            this.match(PlantUMLParser.T__31);
            this.state = 516;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,81,this._ctx);
            if(la_===1) {
                this.state = 515;
                this.template_argument_list();

            }
            this.state = 518;
            this.match(PlantUMLParser.T__32);
            break;

        case 2:
            localctx = new List_typeContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 520;
            this.ident();
            this.state = 521;
            this.match(PlantUMLParser.T__14);
            this.state = 522;
            this.match(PlantUMLParser.T__16);
            break;

        case 3:
            localctx = new Simple_typeContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 524;
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
    this.enterRule(localctx, 92, PlantUMLParser.RULE_item_list);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 530; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 527;
            this.ident();
            this.state = 528;
            this.match(PlantUMLParser.NEWLINE);
            this.state = 532; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(((((_la - 42)) & ~0x1f) == 0 && ((1 << (_la - 42)) & ((1 << (PlantUMLParser.AS - 42)) | (1 << (PlantUMLParser.NEWLINE - 42)) | (1 << (PlantUMLParser.WORD - 42)) | (1 << (PlantUMLParser.QUOTATION - 42)))) !== 0));
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
    this.enterRule(localctx, 94, PlantUMLParser.RULE_enum_declaration);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 534;
        this.match(PlantUMLParser.T__33);
        this.state = 535;
        this.ident();
        this.state = 542;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PlantUMLParser.T__2) {
            this.state = 536;
            this.match(PlantUMLParser.T__2);
            this.state = 537;
            this.match(PlantUMLParser.NEWLINE);
            this.state = 539;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(((((_la - 42)) & ~0x1f) == 0 && ((1 << (_la - 42)) & ((1 << (PlantUMLParser.AS - 42)) | (1 << (PlantUMLParser.NEWLINE - 42)) | (1 << (PlantUMLParser.WORD - 42)) | (1 << (PlantUMLParser.QUOTATION - 42)))) !== 0)) {
                this.state = 538;
                this.item_list();
            }

            this.state = 541;
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

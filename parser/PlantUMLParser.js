// Generated from PlantUML.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var PlantUMLListener = require('./PlantUMLListener').PlantUMLListener;
var PlantUMLVisitor = require('./PlantUMLVisitor').PlantUMLVisitor;

var grammarFileName = "PlantUML.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u00033\u0202\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004",
    "\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0004$\t$\u0004",
    "%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004*\t*\u0004+\t+\u0004",
    ",\t,\u0004-\t-\u0004.\t.\u0003\u0002\u0003\u0002\u0003\u0002\u0005\u0002",
    "`\n\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0007\u0003h\n\u0003\f\u0003\u000e\u0003k\u000b\u0003\u0003",
    "\u0004\u0003\u0004\u0005\u0004o\n\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0005\u0004u\n\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0007\u0004{\n\u0004\f\u0004\u000e\u0004~\u000b\u0004",
    "\u0003\u0004\u0005\u0004\u0081\n\u0004\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0005\u0005\u0086\n\u0005\u0003\u0005\u0005\u0005\u0089\n\u0005",
    "\u0003\u0006\u0003\u0006\u0005\u0006\u008d\n\u0006\u0003\u0006\u0003",
    "\u0006\u0005\u0006\u0091\n\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0007\u0006\u0099\n\u0006\f\u0006",
    "\u000e\u0006\u009c\u000b\u0006\u0003\u0006\u0005\u0006\u009f\n\u0006",
    "\u0003\u0007\u0003\u0007\u0005\u0007\u00a3\n\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0005\u0007\u00a8\n\u0007\u0003\b\u0005\b\u00ab\n",
    "\b\u0003\b\u0003\b\u0005\b\u00af\n\b\u0003\b\u0003\b\u0005\b\u00b3\n",
    "\b\u0003\t\u0003\t\u0003\t\u0005\t\u00b8\n\t\u0003\t\u0003\t\u0005\t",
    "\u00bc\n\t\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\f\u0003\f\u0006\f\u00c5\n\f\r\f\u000e\f\u00c6\u0003\f\u0003\f\u0003",
    "\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000f",
    "\u0003\u000f\u0003\u0010\u0005\u0010\u00d5\n\u0010\u0003\u0010\u0005",
    "\u0010\u00d8\n\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0005\u0010",
    "\u00dd\n\u0010\u0003\u0010\u0003\u0010\u0005\u0010\u00e1\n\u0010\u0003",
    "\u0011\u0006\u0011\u00e4\n\u0011\r\u0011\u000e\u0011\u00e5\u0003\u0012",
    "\u0003\u0012\u0003\u0012\u0003\u0012\u0005\u0012\u00ec\n\u0012\u0003",
    "\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0005\u0013\u00f2\n\u0013",
    "\u0003\u0014\u0005\u0014\u00f5\n\u0014\u0003\u0014\u0005\u0014\u00f8",
    "\n\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0005\u0014\u00fd\n\u0014",
    "\u0003\u0014\u0003\u0014\u0003\u0014\u0005\u0014\u0102\n\u0014\u0003",
    "\u0014\u0005\u0014\u0105\n\u0014\u0003\u0014\u0005\u0014\u0108\n\u0014",
    "\u0003\u0015\u0007\u0015\u010b\n\u0015\f\u0015\u000e\u0015\u010e\u000b",
    "\u0015\u0003\u0016\u0005\u0016\u0111\n\u0016\u0003\u0016\u0005\u0016",
    "\u0114\n\u0016\u0003\u0016\u0003\u0016\u0005\u0016\u0118\n\u0016\u0003",
    "\u0016\u0003\u0016\u0005\u0016\u011c\n\u0016\u0003\u0016\u0003\u0016",
    "\u0003\u0017\u0006\u0017\u0121\n\u0017\r\u0017\u000e\u0017\u0122\u0003",
    "\u0018\u0006\u0018\u0126\n\u0018\r\u0018\u000e\u0018\u0127\u0003\u0018",
    "\u0006\u0018\u012b\n\u0018\r\u0018\u000e\u0018\u012c\u0003\u0018\u0003",
    "\u0018\u0003\u0018\u0003\u0018\u0007\u0018\u0133\n\u0018\f\u0018\u000e",
    "\u0018\u0136\u000b\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0006\u0018",
    "\u013b\n\u0018\r\u0018\u000e\u0018\u013c\u0003\u0018\u0003\u0018\u0007",
    "\u0018\u0141\n\u0018\f\u0018\u000e\u0018\u0144\u000b\u0018\u0003\u0018",
    "\u0005\u0018\u0147\n\u0018\u0003\u0019\u0003\u0019\u0005\u0019\u014b",
    "\n\u0019\u0003\u0019\u0003\u0019\u0005\u0019\u014f\n\u0019\u0003\u0019",
    "\u0005\u0019\u0152\n\u0019\u0003\u001a\u0003\u001a\u0005\u001a\u0156",
    "\n\u001a\u0003\u001a\u0005\u001a\u0159\n\u001a\u0003\u001a\u0005\u001a",
    "\u015c\n\u001a\u0003\u001a\u0003\u001a\u0003\u001b\u0003\u001b\u0003",
    "\u001b\u0003\u001b\u0005\u001b\u0164\n\u001b\u0003\u001b\u0003\u001b",
    "\u0005\u001b\u0168\n\u001b\u0003\u001b\u0005\u001b\u016b\n\u001b\u0003",
    "\u001b\u0005\u001b\u016e\n\u001b\u0003\u001c\u0003\u001c\u0003\u001d",
    "\u0003\u001d\u0003\u001e\u0005\u001e\u0175\n\u001e\u0003\u001e\u0003",
    "\u001e\u0003\u001f\u0003\u001f\u0003\u001f\u0005\u001f\u017c\n\u001f",
    "\u0003\u001f\u0003\u001f\u0005\u001f\u0180\n\u001f\u0003 \u0003 \u0003",
    " \u0006 \u0185\n \r \u000e \u0186\u0003!\u0003!\u0003!\u0005!\u018c",
    "\n!\u0003!\u0007!\u018f\n!\f!\u000e!\u0192\u000b!\u0003\"\u0003\"\u0003",
    "#\u0003#\u0003#\u0007#\u0199\n#\f#\u000e#\u019c\u000b#\u0003$\u0005",
    "$\u019f\n$\u0003$\u0007$\u01a2\n$\f$\u000e$\u01a5\u000b$\u0003$\u0005",
    "$\u01a8\n$\u0003$\u0003$\u0005$\u01ac\n$\u0003%\u0007%\u01af\n%\f%\u000e",
    "%\u01b2\u000b%\u0003&\u0007&\u01b5\n&\f&\u000e&\u01b8\u000b&\u0003\'",
    "\u0007\'\u01bb\n\'\f\'\u000e\'\u01be\u000b\'\u0003(\u0007(\u01c1\n(",
    "\f(\u000e(\u01c4\u000b(\u0003)\u0003)\u0003)\u0003)\u0003)\u0005)\u01cb",
    "\n)\u0003)\u0003)\u0005)\u01cf\n)\u0003*\u0003*\u0005*\u01d3\n*\u0003",
    "+\u0003+\u0003+\u0003+\u0003+\u0003+\u0005+\u01db\n+\u0003+\u0005+\u01de",
    "\n+\u0003+\u0003+\u0003+\u0003,\u0003,\u0003,\u0005,\u01e6\n,\u0003",
    ",\u0003,\u0003,\u0003,\u0003,\u0003,\u0003,\u0005,\u01ef\n,\u0003-\u0003",
    "-\u0003-\u0006-\u01f4\n-\r-\u000e-\u01f5\u0003.\u0003.\u0003.\u0003",
    ".\u0003.\u0005.\u01fd\n.\u0003.\u0005.\u0200\n.\u0003.\u0002\u0002/",
    "\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c",
    "\u001e \"$&(*,.02468:<>@BDFHJLNPRTVXZ\u0002\u0006\u0003\u0002\n\r\u0003",
    "\u0002+,\u0005\u0002\u0014\u0016--//\u0003\u0002\u0018\u001a\u0002\u0236",
    "\u0002\\\u0003\u0002\u0002\u0002\u0004i\u0003\u0002\u0002\u0002\u0006",
    "l\u0003\u0002\u0002\u0002\b\u0082\u0003\u0002\u0002\u0002\n\u008a\u0003",
    "\u0002\u0002\u0002\f\u00a7\u0003\u0002\u0002\u0002\u000e\u00aa\u0003",
    "\u0002\u0002\u0002\u0010\u00bb\u0003\u0002\u0002\u0002\u0012\u00bd\u0003",
    "\u0002\u0002\u0002\u0014\u00bf\u0003\u0002\u0002\u0002\u0016\u00c2\u0003",
    "\u0002\u0002\u0002\u0018\u00ca\u0003\u0002\u0002\u0002\u001a\u00cf\u0003",
    "\u0002\u0002\u0002\u001c\u00d1\u0003\u0002\u0002\u0002\u001e\u00d4\u0003",
    "\u0002\u0002\u0002 \u00e3\u0003\u0002\u0002\u0002\"\u00eb\u0003\u0002",
    "\u0002\u0002$\u00f1\u0003\u0002\u0002\u0002&\u00f4\u0003\u0002\u0002",
    "\u0002(\u010c\u0003\u0002\u0002\u0002*\u0110\u0003\u0002\u0002\u0002",
    ",\u0120\u0003\u0002\u0002\u0002.\u0146\u0003\u0002\u0002\u00020\u0148",
    "\u0003\u0002\u0002\u00022\u0158\u0003\u0002\u0002\u00024\u015f\u0003",
    "\u0002\u0002\u00026\u016f\u0003\u0002\u0002\u00028\u0171\u0003\u0002",
    "\u0002\u0002:\u0174\u0003\u0002\u0002\u0002<\u0178\u0003\u0002\u0002",
    "\u0002>\u0181\u0003\u0002\u0002\u0002@\u0188\u0003\u0002\u0002\u0002",
    "B\u0193\u0003\u0002\u0002\u0002D\u0195\u0003\u0002\u0002\u0002F\u019e",
    "\u0003\u0002\u0002\u0002H\u01b0\u0003\u0002\u0002\u0002J\u01b6\u0003",
    "\u0002\u0002\u0002L\u01bc\u0003\u0002\u0002\u0002N\u01c2\u0003\u0002",
    "\u0002\u0002P\u01ce\u0003\u0002\u0002\u0002R\u01d2\u0003\u0002\u0002",
    "\u0002T\u01d4\u0003\u0002\u0002\u0002V\u01ee\u0003\u0002\u0002\u0002",
    "X\u01f3\u0003\u0002\u0002\u0002Z\u01f7\u0003\u0002\u0002\u0002\\_\u0007",
    "\u0003\u0002\u0002]`\u0007)\u0002\u0002^`\u0005\u0004\u0003\u0002_]",
    "\u0003\u0002\u0002\u0002_^\u0003\u0002\u0002\u0002`a\u0003\u0002\u0002",
    "\u0002ab\u0007\u0004\u0002\u0002b\u0003\u0003\u0002\u0002\u0002ch\u0005",
    "\n\u0006\u0002dh\u00054\u001b\u0002eh\u0005\u0006\u0004\u0002fh\u0007",
    ")\u0002\u0002gc\u0003\u0002\u0002\u0002gd\u0003\u0002\u0002\u0002ge",
    "\u0003\u0002\u0002\u0002gf\u0003\u0002\u0002\u0002hk\u0003\u0002\u0002",
    "\u0002ig\u0003\u0002\u0002\u0002ij\u0003\u0002\u0002\u0002j\u0005\u0003",
    "\u0002\u0002\u0002ki\u0003\u0002\u0002\u0002ln\u0007&\u0002\u0002mo",
    "\u00071\u0002\u0002nm\u0003\u0002\u0002\u0002no\u0003\u0002\u0002\u0002",
    "op\u0003\u0002\u0002\u0002pq\u00072\u0002\u0002qr\u0005\b\u0005\u0002",
    "rt\u00072\u0002\u0002su\u00071\u0002\u0002ts\u0003\u0002\u0002\u0002",
    "tu\u0003\u0002\u0002\u0002u\u0080\u0003\u0002\u0002\u0002v|\u0007\u0005",
    "\u0002\u0002w{\u0005\n\u0006\u0002x{\u00054\u001b\u0002y{\u0007)\u0002",
    "\u0002zw\u0003\u0002\u0002\u0002zx\u0003\u0002\u0002\u0002zy\u0003\u0002",
    "\u0002\u0002{~\u0003\u0002\u0002\u0002|z\u0003\u0002\u0002\u0002|}\u0003",
    "\u0002\u0002\u0002}\u007f\u0003\u0002\u0002\u0002~|\u0003\u0002\u0002",
    "\u0002\u007f\u0081\u0007\u0006\u0002\u0002\u0080v\u0003\u0002\u0002",
    "\u0002\u0080\u0081\u0003\u0002\u0002\u0002\u0081\u0007\u0003\u0002\u0002",
    "\u0002\u0082\u0088\u0007-\u0002\u0002\u0083\u0085\u00070\u0002\u0002",
    "\u0084\u0086\u00071\u0002\u0002\u0085\u0084\u0003\u0002\u0002\u0002",
    "\u0085\u0086\u0003\u0002\u0002\u0002\u0086\u0087\u0003\u0002\u0002\u0002",
    "\u0087\u0089\u0007-\u0002\u0002\u0088\u0083\u0003\u0002\u0002\u0002",
    "\u0088\u0089\u0003\u0002\u0002\u0002\u0089\t\u0003\u0002\u0002\u0002",
    "\u008a\u008c\u0005\f\u0007\u0002\u008b\u008d\u00071\u0002\u0002\u008c",
    "\u008b\u0003\u0002\u0002\u0002\u008c\u008d\u0003\u0002\u0002\u0002\u008d",
    "\u008e\u0003\u0002\u0002\u0002\u008e\u0090\u0005\u000e\b\u0002\u008f",
    "\u0091\u00071\u0002\u0002\u0090\u008f\u0003\u0002\u0002\u0002\u0090",
    "\u0091\u0003\u0002\u0002\u0002\u0091\u009e\u0003\u0002\u0002\u0002\u0092",
    "\u009a\u0007\u0005\u0002\u0002\u0093\u0099\u0005\u001e\u0010\u0002\u0094",
    "\u0099\u0005&\u0014\u0002\u0095\u0099\u0005*\u0016\u0002\u0096\u0099",
    "\u0005\u0016\f\u0002\u0097\u0099\u0007)\u0002\u0002\u0098\u0093\u0003",
    "\u0002\u0002\u0002\u0098\u0094\u0003\u0002\u0002\u0002\u0098\u0095\u0003",
    "\u0002\u0002\u0002\u0098\u0096\u0003\u0002\u0002\u0002\u0098\u0097\u0003",
    "\u0002\u0002\u0002\u0099\u009c\u0003\u0002\u0002\u0002\u009a\u0098\u0003",
    "\u0002\u0002\u0002\u009a\u009b\u0003\u0002\u0002\u0002\u009b\u009d\u0003",
    "\u0002\u0002\u0002\u009c\u009a\u0003\u0002\u0002\u0002\u009d\u009f\u0007",
    "\u0006\u0002\u0002\u009e\u0092\u0003\u0002\u0002\u0002\u009e\u009f\u0003",
    "\u0002\u0002\u0002\u009f\u000b\u0003\u0002\u0002\u0002\u00a0\u00a2\u0007",
    "$\u0002\u0002\u00a1\u00a3\u0007\"\u0002\u0002\u00a2\u00a1\u0003\u0002",
    "\u0002\u0002\u00a2\u00a3\u0003\u0002\u0002\u0002\u00a3\u00a8\u0003\u0002",
    "\u0002\u0002\u00a4\u00a8\u0007\"\u0002\u0002\u00a5\u00a8\u0007#\u0002",
    "\u0002\u00a6\u00a8\u0007%\u0002\u0002\u00a7\u00a0\u0003\u0002\u0002",
    "\u0002\u00a7\u00a4\u0003\u0002\u0002\u0002\u00a7\u00a5\u0003\u0002\u0002",
    "\u0002\u00a7\u00a6\u0003\u0002\u0002\u0002\u00a8\r\u0003\u0002\u0002",
    "\u0002\u00a9\u00ab\u00072\u0002\u0002\u00aa\u00a9\u0003\u0002\u0002",
    "\u0002\u00aa\u00ab\u0003\u0002\u0002\u0002\u00ab\u00ac\u0003\u0002\u0002",
    "\u0002\u00ac\u00ae\u0005\u0010\t\u0002\u00ad\u00af\u00072\u0002\u0002",
    "\u00ae\u00ad\u0003\u0002\u0002\u0002\u00ae\u00af\u0003\u0002\u0002\u0002",
    "\u00af\u00b2\u0003\u0002\u0002\u0002\u00b0\u00b1\u0007\'\u0002\u0002",
    "\u00b1\u00b3\u0005\u0012\n\u0002\u00b2\u00b0\u0003\u0002\u0002\u0002",
    "\u00b2\u00b3\u0003\u0002\u0002\u0002\u00b3\u000f\u0003\u0002\u0002\u0002",
    "\u00b4\u00b5\u0007-\u0002\u0002\u00b5\u00b7\u00070\u0002\u0002\u00b6",
    "\u00b8\u00071\u0002\u0002\u00b7\u00b6\u0003\u0002\u0002\u0002\u00b7",
    "\u00b8\u0003\u0002\u0002\u0002\u00b8\u00b9\u0003\u0002\u0002\u0002\u00b9",
    "\u00bc\u0007-\u0002\u0002\u00ba\u00bc\u0007-\u0002\u0002\u00bb\u00b4",
    "\u0003\u0002\u0002\u0002\u00bb\u00ba\u0003\u0002\u0002\u0002\u00bc\u0011",
    "\u0003\u0002\u0002\u0002\u00bd\u00be\u0007-\u0002\u0002\u00be\u0013",
    "\u0003\u0002\u0002\u0002\u00bf\u00c0\u0007\u0007\u0002\u0002\u00c0\u00c1",
    "\u0005F$\u0002\u00c1\u0015\u0003\u0002\u0002\u0002\u00c2\u00c4\u0007",
    "\b\u0002\u0002\u00c3\u00c5\u0005\u0018\r\u0002\u00c4\u00c3\u0003\u0002",
    "\u0002\u0002\u00c5\u00c6\u0003\u0002\u0002\u0002\u00c6\u00c4\u0003\u0002",
    "\u0002\u0002\u00c6\u00c7\u0003\u0002\u0002\u0002\u00c7\u00c8\u0003\u0002",
    "\u0002\u0002\u00c8\u00c9\u0007\b\u0002\u0002\u00c9\u0017\u0003\u0002",
    "\u0002\u0002\u00ca\u00cb\u0005\u001a\u000e\u0002\u00cb\u00cc\u00070",
    "\u0002\u0002\u00cc\u00cd\u0005\u001c\u000f\u0002\u00cd\u00ce\u0007\t",
    "\u0002\u0002\u00ce\u0019\u0003\u0002\u0002\u0002\u00cf\u00d0\t\u0002",
    "\u0002\u0002\u00d0\u001b\u0003\u0002\u0002\u0002\u00d1\u00d2\t\u0003",
    "\u0002\u0002\u00d2\u001d\u0003\u0002\u0002\u0002\u00d3\u00d5\u0005:",
    "\u001e\u0002\u00d4\u00d3\u0003\u0002\u0002\u0002\u00d4\u00d5\u0003\u0002",
    "\u0002\u0002\u00d5\u00d7\u0003\u0002\u0002\u0002\u00d6\u00d8\u0005R",
    "*\u0002\u00d7\u00d6\u0003\u0002\u0002\u0002\u00d7\u00d8\u0003\u0002",
    "\u0002\u0002\u00d8\u00d9\u0003\u0002\u0002\u0002\u00d9\u00da\u0005 ",
    "\u0011\u0002\u00da\u00dc\u00070\u0002\u0002\u00db\u00dd\u00071\u0002",
    "\u0002\u00dc\u00db\u0003\u0002\u0002\u0002\u00dc\u00dd\u0003\u0002\u0002",
    "\u0002\u00dd\u00de\u0003\u0002\u0002\u0002\u00de\u00e0\u0005\"\u0012",
    "\u0002\u00df\u00e1\u0007)\u0002\u0002\u00e0\u00df\u0003\u0002\u0002",
    "\u0002\u00e0\u00e1\u0003\u0002\u0002\u0002\u00e1\u001f\u0003\u0002\u0002",
    "\u0002\u00e2\u00e4\u0007-\u0002\u0002\u00e3\u00e2\u0003\u0002\u0002",
    "\u0002\u00e4\u00e5\u0003\u0002\u0002\u0002\u00e5\u00e3\u0003\u0002\u0002",
    "\u0002\u00e5\u00e6\u0003\u0002\u0002\u0002\u00e6!\u0003\u0002\u0002",
    "\u0002\u00e7\u00ec\u0005J&\u0002\u00e8\u00ec\u0007*\u0002\u0002\u00e9",
    "\u00ec\u0007/\u0002\u0002\u00ea\u00ec\u0007.\u0002\u0002\u00eb\u00e7",
    "\u0003\u0002\u0002\u0002\u00eb\u00e8\u0003\u0002\u0002\u0002\u00eb\u00e9",
    "\u0003\u0002\u0002\u0002\u00eb\u00ea\u0003\u0002\u0002\u0002\u00ec#",
    "\u0003\u0002\u0002\u0002\u00ed\u00f2\u0005J&\u0002\u00ee\u00f2\u0007",
    "*\u0002\u0002\u00ef\u00f2\u0007/\u0002\u0002\u00f0\u00f2\u0007.\u0002",
    "\u0002\u00f1\u00ed\u0003\u0002\u0002\u0002\u00f1\u00ee\u0003\u0002\u0002",
    "\u0002\u00f1\u00ef\u0003\u0002\u0002\u0002\u00f1\u00f0\u0003\u0002\u0002",
    "\u0002\u00f2%\u0003\u0002\u0002\u0002\u00f3\u00f5\u0005:\u001e\u0002",
    "\u00f4\u00f3\u0003\u0002\u0002\u0002\u00f4\u00f5\u0003\u0002\u0002\u0002",
    "\u00f5\u00f7\u0003\u0002\u0002\u0002\u00f6\u00f8\u0005R*\u0002\u00f7",
    "\u00f6\u0003\u0002\u0002\u0002\u00f7\u00f8\u0003\u0002\u0002\u0002\u00f8",
    "\u00f9\u0003\u0002\u0002\u0002\u00f9\u00fa\u0005(\u0015\u0002\u00fa",
    "\u00fc\u0007\u000e\u0002\u0002\u00fb\u00fd\u0005@!\u0002\u00fc\u00fb",
    "\u0003\u0002\u0002\u0002\u00fc\u00fd\u0003\u0002\u0002\u0002\u00fd\u00fe",
    "\u0003\u0002\u0002\u0002\u00fe\u0104\u0007\u000f\u0002\u0002\u00ff\u0101",
    "\u00070\u0002\u0002\u0100\u0102\u00071\u0002\u0002\u0101\u0100\u0003",
    "\u0002\u0002\u0002\u0101\u0102\u0003\u0002\u0002\u0002\u0102\u0103\u0003",
    "\u0002\u0002\u0002\u0103\u0105\u0005H%\u0002\u0104\u00ff\u0003\u0002",
    "\u0002\u0002\u0104\u0105\u0003\u0002\u0002\u0002\u0105\u0107\u0003\u0002",
    "\u0002\u0002\u0106\u0108\u0007)\u0002\u0002\u0107\u0106\u0003\u0002",
    "\u0002\u0002\u0107\u0108\u0003\u0002\u0002\u0002\u0108\'\u0003\u0002",
    "\u0002\u0002\u0109\u010b\u0007-\u0002\u0002\u010a\u0109\u0003\u0002",
    "\u0002\u0002\u010b\u010e\u0003\u0002\u0002\u0002\u010c\u010a\u0003\u0002",
    "\u0002\u0002\u010c\u010d\u0003\u0002\u0002\u0002\u010d)\u0003\u0002",
    "\u0002\u0002\u010e\u010c\u0003\u0002\u0002\u0002\u010f\u0111\u0005:",
    "\u001e\u0002\u0110\u010f\u0003\u0002\u0002\u0002\u0110\u0111\u0003\u0002",
    "\u0002\u0002\u0111\u0113\u0003\u0002\u0002\u0002\u0112\u0114\u0005R",
    "*\u0002\u0113\u0112\u0003\u0002\u0002\u0002\u0113\u0114\u0003\u0002",
    "\u0002\u0002\u0114\u0115\u0003\u0002\u0002\u0002\u0115\u0117\u0005,",
    "\u0017\u0002\u0116\u0118\u00071\u0002\u0002\u0117\u0116\u0003\u0002",
    "\u0002\u0002\u0117\u0118\u0003\u0002\u0002\u0002\u0118\u0119\u0003\u0002",
    "\u0002\u0002\u0119\u011b\u0007\u0010\u0002\u0002\u011a\u011c\u00071",
    "\u0002\u0002\u011b\u011a\u0003\u0002\u0002\u0002\u011b\u011c\u0003\u0002",
    "\u0002\u0002\u011c\u011d\u0003\u0002\u0002\u0002\u011d\u011e\u0005.",
    "\u0018\u0002\u011e+\u0003\u0002\u0002\u0002\u011f\u0121\u0007-\u0002",
    "\u0002\u0120\u011f\u0003\u0002\u0002\u0002\u0121\u0122\u0003\u0002\u0002",
    "\u0002\u0122\u0120\u0003\u0002\u0002\u0002\u0122\u0123\u0003\u0002\u0002",
    "\u0002\u0123-\u0003\u0002\u0002\u0002\u0124\u0126\u0007-\u0002\u0002",
    "\u0125\u0124\u0003\u0002\u0002\u0002\u0126\u0127\u0003\u0002\u0002\u0002",
    "\u0127\u0125\u0003\u0002\u0002\u0002\u0127\u0128\u0003\u0002\u0002\u0002",
    "\u0128\u0147\u0003\u0002\u0002\u0002\u0129\u012b\u0007+\u0002\u0002",
    "\u012a\u0129\u0003\u0002\u0002\u0002\u012b\u012c\u0003\u0002\u0002\u0002",
    "\u012c\u012a\u0003\u0002\u0002\u0002\u012c\u012d\u0003\u0002\u0002\u0002",
    "\u012d\u0147\u0003\u0002\u0002\u0002\u012e\u012f\u0007\u0011\u0002\u0002",
    "\u012f\u0134\u0007-\u0002\u0002\u0130\u0131\u0007\u0012\u0002\u0002",
    "\u0131\u0133\u0007-\u0002\u0002\u0132\u0130\u0003\u0002\u0002\u0002",
    "\u0133\u0136\u0003\u0002\u0002\u0002\u0134\u0132\u0003\u0002\u0002\u0002",
    "\u0134\u0135\u0003\u0002\u0002\u0002\u0135\u0137\u0003\u0002\u0002\u0002",
    "\u0136\u0134\u0003\u0002\u0002\u0002\u0137\u0147\u0007\u0013\u0002\u0002",
    "\u0138\u013a\u0007\u0011\u0002\u0002\u0139\u013b\u0007+\u0002\u0002",
    "\u013a\u0139\u0003\u0002\u0002\u0002\u013b\u013c\u0003\u0002\u0002\u0002",
    "\u013c\u013a\u0003\u0002\u0002\u0002\u013c\u013d\u0003\u0002\u0002\u0002",
    "\u013d\u0142\u0003\u0002\u0002\u0002\u013e\u013f\u0007\u0012\u0002\u0002",
    "\u013f\u0141\u0007+\u0002\u0002\u0140\u013e\u0003\u0002\u0002\u0002",
    "\u0141\u0144\u0003\u0002\u0002\u0002\u0142\u0140\u0003\u0002\u0002\u0002",
    "\u0142\u0143\u0003\u0002\u0002\u0002\u0143\u0145\u0003\u0002\u0002\u0002",
    "\u0144\u0142\u0003\u0002\u0002\u0002\u0145\u0147\u0007\u0013\u0002\u0002",
    "\u0146\u0125\u0003\u0002\u0002\u0002\u0146\u012a\u0003\u0002\u0002\u0002",
    "\u0146\u012e\u0003\u0002\u0002\u0002\u0146\u0138\u0003\u0002\u0002\u0002",
    "\u0147/\u0003\u0002\u0002\u0002\u0148\u014a\u0005P)\u0002\u0149\u014b",
    "\u00071\u0002\u0002\u014a\u0149\u0003\u0002\u0002\u0002\u014a\u014b",
    "\u0003\u0002\u0002\u0002\u014b\u0151\u0003\u0002\u0002\u0002\u014c\u014e",
    "\u00072\u0002\u0002\u014d\u014f\u00058\u001d\u0002\u014e\u014d\u0003",
    "\u0002\u0002\u0002\u014e\u014f\u0003\u0002\u0002\u0002\u014f\u0150\u0003",
    "\u0002\u0002\u0002\u0150\u0152\u00072\u0002\u0002\u0151\u014c\u0003",
    "\u0002\u0002\u0002\u0151\u0152\u0003\u0002\u0002\u0002\u01521\u0003",
    "\u0002\u0002\u0002\u0153\u0155\u00072\u0002\u0002\u0154\u0156\u0005",
    "8\u001d\u0002\u0155\u0154\u0003\u0002\u0002\u0002\u0155\u0156\u0003",
    "\u0002\u0002\u0002\u0156\u0157\u0003\u0002\u0002\u0002\u0157\u0159\u0007",
    "2\u0002\u0002\u0158\u0153\u0003\u0002\u0002\u0002\u0158\u0159\u0003",
    "\u0002\u0002\u0002\u0159\u015b\u0003\u0002\u0002\u0002\u015a\u015c\u0007",
    "1\u0002\u0002\u015b\u015a\u0003\u0002\u0002\u0002\u015b\u015c\u0003",
    "\u0002\u0002\u0002\u015c\u015d\u0003\u0002\u0002\u0002\u015d\u015e\u0005",
    "P)\u0002\u015e3\u0003\u0002\u0002\u0002\u015f\u0160\u00050\u0019\u0002",
    "\u0160\u0161\u00056\u001c\u0002\u0161\u016a\u00052\u001a\u0002\u0162",
    "\u0164\u00071\u0002\u0002\u0163\u0162\u0003\u0002\u0002\u0002\u0163",
    "\u0164\u0003\u0002\u0002\u0002\u0164\u0165\u0003\u0002\u0002\u0002\u0165",
    "\u0167\u00070\u0002\u0002\u0166\u0168\u00071\u0002\u0002\u0167\u0166",
    "\u0003\u0002\u0002\u0002\u0167\u0168\u0003\u0002\u0002\u0002\u0168\u0169",
    "\u0003\u0002\u0002\u0002\u0169\u016b\u0005T+\u0002\u016a\u0163\u0003",
    "\u0002\u0002\u0002\u016a\u016b\u0003\u0002\u0002\u0002\u016b\u016d\u0003",
    "\u0002\u0002\u0002\u016c\u016e\u0007)\u0002\u0002\u016d\u016c\u0003",
    "\u0002\u0002\u0002\u016d\u016e\u0003\u0002\u0002\u0002\u016e5\u0003",
    "\u0002\u0002\u0002\u016f\u0170\u0007 \u0002\u0002\u01707\u0003\u0002",
    "\u0002\u0002\u0171\u0172\t\u0004\u0002\u0002\u01729\u0003\u0002\u0002",
    "\u0002\u0173\u0175\u0007\u0017\u0002\u0002\u0174\u0173\u0003\u0002\u0002",
    "\u0002\u0174\u0175\u0003\u0002\u0002\u0002\u0175\u0176\u0003\u0002\u0002",
    "\u0002\u0176\u0177\t\u0005\u0002\u0002\u0177;\u0003\u0002\u0002\u0002",
    "\u0178\u0179\u0005N(\u0002\u0179\u017b\u00070\u0002\u0002\u017a\u017c",
    "\u00071\u0002\u0002\u017b\u017a\u0003\u0002\u0002\u0002\u017b\u017c",
    "\u0003\u0002\u0002\u0002\u017c\u017f\u0003\u0002\u0002\u0002\u017d\u0180",
    "\u0005$\u0013\u0002\u017e\u0180\u0005> \u0002\u017f\u017d\u0003\u0002",
    "\u0002\u0002\u017f\u017e\u0003\u0002\u0002\u0002\u0180=\u0003\u0002",
    "\u0002\u0002\u0181\u0184\u0005$\u0013\u0002\u0182\u0183\u0007\u001b",
    "\u0002\u0002\u0183\u0185\u0005$\u0013\u0002\u0184\u0182\u0003\u0002",
    "\u0002\u0002\u0185\u0186\u0003\u0002\u0002\u0002\u0186\u0184\u0003\u0002",
    "\u0002\u0002\u0186\u0187\u0003\u0002\u0002\u0002\u0187?\u0003\u0002",
    "\u0002\u0002\u0188\u0190\u0005<\u001f\u0002\u0189\u018b\u0007\u0012",
    "\u0002\u0002\u018a\u018c\u00071\u0002\u0002\u018b\u018a\u0003\u0002",
    "\u0002\u0002\u018b\u018c\u0003\u0002\u0002\u0002\u018c\u018d\u0003\u0002",
    "\u0002\u0002\u018d\u018f\u0005<\u001f\u0002\u018e\u0189\u0003\u0002",
    "\u0002\u0002\u018f\u0192\u0003\u0002\u0002\u0002\u0190\u018e\u0003\u0002",
    "\u0002\u0002\u0190\u0191\u0003\u0002\u0002\u0002\u0191A\u0003\u0002",
    "\u0002\u0002\u0192\u0190\u0003\u0002\u0002\u0002\u0193\u0194\u0005V",
    ",\u0002\u0194C\u0003\u0002\u0002\u0002\u0195\u019a\u0005B\"\u0002\u0196",
    "\u0197\u0007\u0012\u0002\u0002\u0197\u0199\u0005B\"\u0002\u0198\u0196",
    "\u0003\u0002\u0002\u0002\u0199\u019c\u0003\u0002\u0002\u0002\u019a\u0198",
    "\u0003\u0002\u0002\u0002\u019a\u019b\u0003\u0002\u0002\u0002\u019bE",
    "\u0003\u0002\u0002\u0002\u019c\u019a\u0003\u0002\u0002\u0002\u019d\u019f",
    "\u00072\u0002\u0002\u019e\u019d\u0003\u0002\u0002\u0002\u019e\u019f",
    "\u0003\u0002\u0002\u0002\u019f\u01a3\u0003\u0002\u0002\u0002\u01a0\u01a2",
    "\u0007-\u0002\u0002\u01a1\u01a0\u0003\u0002\u0002\u0002\u01a2\u01a5",
    "\u0003\u0002\u0002\u0002\u01a3\u01a1\u0003\u0002\u0002\u0002\u01a3\u01a4",
    "\u0003\u0002\u0002\u0002\u01a4\u01a7\u0003\u0002\u0002\u0002\u01a5\u01a3",
    "\u0003\u0002\u0002\u0002\u01a6\u01a8\u00072\u0002\u0002\u01a7\u01a6",
    "\u0003\u0002\u0002\u0002\u01a7\u01a8\u0003\u0002\u0002\u0002\u01a8\u01ab",
    "\u0003\u0002\u0002\u0002\u01a9\u01aa\u0007\'\u0002\u0002\u01aa\u01ac",
    "\u0005\"\u0012\u0002\u01ab\u01a9\u0003\u0002\u0002\u0002\u01ab\u01ac",
    "\u0003\u0002\u0002\u0002\u01acG\u0003\u0002\u0002\u0002\u01ad\u01af",
    "\u0007-\u0002\u0002\u01ae\u01ad\u0003\u0002\u0002\u0002\u01af\u01b2",
    "\u0003\u0002\u0002\u0002\u01b0\u01ae\u0003\u0002\u0002\u0002\u01b0\u01b1",
    "\u0003\u0002\u0002\u0002\u01b1I\u0003\u0002\u0002\u0002\u01b2\u01b0",
    "\u0003\u0002\u0002\u0002\u01b3\u01b5\u0007-\u0002\u0002\u01b4\u01b3",
    "\u0003\u0002\u0002\u0002\u01b5\u01b8\u0003\u0002\u0002\u0002\u01b6\u01b4",
    "\u0003\u0002\u0002\u0002\u01b6\u01b7\u0003\u0002\u0002\u0002\u01b7K",
    "\u0003\u0002\u0002\u0002\u01b8\u01b6\u0003\u0002\u0002\u0002\u01b9\u01bb",
    "\u0007-\u0002\u0002\u01ba\u01b9\u0003\u0002\u0002\u0002\u01bb\u01be",
    "\u0003\u0002\u0002\u0002\u01bc\u01ba\u0003\u0002\u0002\u0002\u01bc\u01bd",
    "\u0003\u0002\u0002\u0002\u01bdM\u0003\u0002\u0002\u0002\u01be\u01bc",
    "\u0003\u0002\u0002\u0002\u01bf\u01c1\u0007-\u0002\u0002\u01c0\u01bf",
    "\u0003\u0002\u0002\u0002\u01c1\u01c4\u0003\u0002\u0002\u0002\u01c2\u01c0",
    "\u0003\u0002\u0002\u0002\u01c2\u01c3\u0003\u0002\u0002\u0002\u01c3O",
    "\u0003\u0002\u0002\u0002\u01c4\u01c2\u0003\u0002\u0002\u0002\u01c5\u01cf",
    "\u0007-\u0002\u0002\u01c6\u01c7\u0007\u000e\u0002\u0002\u01c7\u01c8",
    "\u0007-\u0002\u0002\u01c8\u01ca\u0007\u0012\u0002\u0002\u01c9\u01cb",
    "\u00071\u0002\u0002\u01ca\u01c9\u0003\u0002\u0002\u0002\u01ca\u01cb",
    "\u0003\u0002\u0002\u0002\u01cb\u01cc\u0003\u0002\u0002\u0002\u01cc\u01cd",
    "\u0007-\u0002\u0002\u01cd\u01cf\u0007\u000f\u0002\u0002\u01ce\u01c5",
    "\u0003\u0002\u0002\u0002\u01ce\u01c6\u0003\u0002\u0002\u0002\u01cfQ",
    "\u0003\u0002\u0002\u0002\u01d0\u01d3\u0007\u001c\u0002\u0002\u01d1\u01d3",
    "\u0007\u0017\u0002\u0002\u01d2\u01d0\u0003\u0002\u0002\u0002\u01d2\u01d1",
    "\u0003\u0002\u0002\u0002\u01d3S\u0003\u0002\u0002\u0002\u01d4\u01d5",
    "\u00072\u0002\u0002\u01d5\u01da\u0005F$\u0002\u01d6\u01d7\u0007\u000e",
    "\u0002\u0002\u01d7\u01d8\u0005F$\u0002\u01d8\u01d9\u0007\u000f\u0002",
    "\u0002\u01d9\u01db\u0003\u0002\u0002\u0002\u01da\u01d6\u0003\u0002\u0002",
    "\u0002\u01da\u01db\u0003\u0002\u0002\u0002\u01db\u01dd\u0003\u0002\u0002",
    "\u0002\u01dc\u01de\u00070\u0002\u0002\u01dd\u01dc\u0003\u0002\u0002",
    "\u0002\u01dd\u01de\u0003\u0002\u0002\u0002\u01de\u01df\u0003\u0002\u0002",
    "\u0002\u01df\u01e0\u0007-\u0002\u0002\u01e0\u01e1\u00072\u0002\u0002",
    "\u01e1U\u0003\u0002\u0002\u0002\u01e2\u01e3\u0005F$\u0002\u01e3\u01e5",
    "\u0007\u001d\u0002\u0002\u01e4\u01e6\u0005D#\u0002\u01e5\u01e4\u0003",
    "\u0002\u0002\u0002\u01e5\u01e6\u0003\u0002\u0002\u0002\u01e6\u01e7\u0003",
    "\u0002\u0002\u0002\u01e7\u01e8\u0007\u001e\u0002\u0002\u01e8\u01ef\u0003",
    "\u0002\u0002\u0002\u01e9\u01ea\u0005F$\u0002\u01ea\u01eb\u0007\u0011",
    "\u0002\u0002\u01eb\u01ec\u0007\u0013\u0002\u0002\u01ec\u01ef\u0003\u0002",
    "\u0002\u0002\u01ed\u01ef\u0005F$\u0002\u01ee\u01e2\u0003\u0002\u0002",
    "\u0002\u01ee\u01e9\u0003\u0002\u0002\u0002\u01ee\u01ed\u0003\u0002\u0002",
    "\u0002\u01efW\u0003\u0002\u0002\u0002\u01f0\u01f1\u0005F$\u0002\u01f1",
    "\u01f2\u0007)\u0002\u0002\u01f2\u01f4\u0003\u0002\u0002\u0002\u01f3",
    "\u01f0\u0003\u0002\u0002\u0002\u01f4\u01f5\u0003\u0002\u0002\u0002\u01f5",
    "\u01f3\u0003\u0002\u0002\u0002\u01f5\u01f6\u0003\u0002\u0002\u0002\u01f6",
    "Y\u0003\u0002\u0002\u0002\u01f7\u01f8\u0007\u001f\u0002\u0002\u01f8",
    "\u01ff\u0005F$\u0002\u01f9\u01fa\u0007\u0005\u0002\u0002\u01fa\u01fc",
    "\u0007)\u0002\u0002\u01fb\u01fd\u0005X-\u0002\u01fc\u01fb\u0003\u0002",
    "\u0002\u0002\u01fc\u01fd\u0003\u0002\u0002\u0002\u01fd\u01fe\u0003\u0002",
    "\u0002\u0002\u01fe\u0200\u0007\u0006\u0002\u0002\u01ff\u01f9\u0003\u0002",
    "\u0002\u0002\u01ff\u0200\u0003\u0002\u0002\u0002\u0200[\u0003\u0002",
    "\u0002\u0002U_gintz|\u0080\u0085\u0088\u008c\u0090\u0098\u009a\u009e",
    "\u00a2\u00a7\u00aa\u00ae\u00b2\u00b7\u00bb\u00c6\u00d4\u00d7\u00dc\u00e0",
    "\u00e5\u00eb\u00f1\u00f4\u00f7\u00fc\u0101\u0104\u0107\u010c\u0110\u0113",
    "\u0117\u011b\u0122\u0127\u012c\u0134\u013c\u0142\u0146\u014a\u014e\u0151",
    "\u0155\u0158\u015b\u0163\u0167\u016a\u016d\u0174\u017b\u017f\u0186\u018b",
    "\u0190\u019a\u019e\u01a3\u01a7\u01ab\u01b0\u01b6\u01bc\u01c2\u01ca\u01ce",
    "\u01d2\u01da\u01dd\u01e5\u01ee\u01f5\u01fc\u01ff"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'@startuml'", "'@enduml'", "'{'", "'}'", "'hide'", 
                     "'''", "';'", "'width'", "'hight'", "'x'", "'y'", "'('", 
                     "')'", "'='", "'['", "','", "']'", "'0..1'", "'0..*'", 
                     "'1..*'", "'{abstract}'", "'+'", "'-'", "'#'", "'.'", 
                     "'{static}'", "'<'", "'>'", "'enum'", null, null, "'class'", 
                     "'interface'", "'abstract'", "'object'", "'package'", 
                     "'as'", "'newpage'", null, null, null, null, null, 
                     "'*[]'", "'*'", "':'", null, "'\"'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, "CONNECTOR", "DIRECTION", "CLASS", 
                      "INTERFACE", "ABSTRACT", "OBJECT", "PACKAGE", "AS", 
                      "NEWPAGE", "NEWLINE", "ARRAY", "INTEGER", "FLOAT", 
                      "WORD", "ANYARRAY", "ANY", "DOTDOT", "WHITESPACE", 
                      "QUOTATION", "COMMENT" ];

var ruleNames =  [ "diagram", "class_diagram", "package_section", "package_name", 
                   "class_declaration", "class_type", "class_description", 
                   "class_name", "class_dataType", "hide_declaration", "styling", 
                   "styling_expression", "styling_params", "styling_value", 
                   "attribute", "attribute_name", "attribute_type", "function_argument_attribute_type", 
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
PlantUMLParser.T__24 = 25;
PlantUMLParser.T__25 = 26;
PlantUMLParser.T__26 = 27;
PlantUMLParser.T__27 = 28;
PlantUMLParser.T__28 = 29;
PlantUMLParser.CONNECTOR = 30;
PlantUMLParser.DIRECTION = 31;
PlantUMLParser.CLASS = 32;
PlantUMLParser.INTERFACE = 33;
PlantUMLParser.ABSTRACT = 34;
PlantUMLParser.OBJECT = 35;
PlantUMLParser.PACKAGE = 36;
PlantUMLParser.AS = 37;
PlantUMLParser.NEWPAGE = 38;
PlantUMLParser.NEWLINE = 39;
PlantUMLParser.ARRAY = 40;
PlantUMLParser.INTEGER = 41;
PlantUMLParser.FLOAT = 42;
PlantUMLParser.WORD = 43;
PlantUMLParser.ANYARRAY = 44;
PlantUMLParser.ANY = 45;
PlantUMLParser.DOTDOT = 46;
PlantUMLParser.WHITESPACE = 47;
PlantUMLParser.QUOTATION = 48;
PlantUMLParser.COMMENT = 49;

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
PlantUMLParser.RULE_connection_symbol = 26;
PlantUMLParser.RULE_multiplicity = 27;
PlantUMLParser.RULE_visibility = 28;
PlantUMLParser.RULE_function_argument = 29;
PlantUMLParser.RULE_nested_argument_type = 30;
PlantUMLParser.RULE_function_argument_list = 31;
PlantUMLParser.RULE_template_argument = 32;
PlantUMLParser.RULE_template_argument_list = 33;
PlantUMLParser.RULE_ident = 34;
PlantUMLParser.RULE_methode_data_type = 35;
PlantUMLParser.RULE_attribute_data_type = 36;
PlantUMLParser.RULE_data_type = 37;
PlantUMLParser.RULE_variable_name = 38;
PlantUMLParser.RULE_connection_name = 39;
PlantUMLParser.RULE_modifiers = 40;
PlantUMLParser.RULE_stereotype = 41;
PlantUMLParser.RULE_type_declaration = 42;
PlantUMLParser.RULE_item_list = 43;
PlantUMLParser.RULE_enum_declaration = 44;


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
        this.state = 90;
        this.match(PlantUMLParser.T__0);
        this.state = 93;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
        switch(la_) {
        case 1:
            this.state = 91;
            this.match(PlantUMLParser.NEWLINE);
            break;

        case 2:
            this.state = 92;
            this.class_diagram();
            break;

        }
        this.state = 95;
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
        this.state = 103;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 12)) & ~0x1f) == 0 && ((1 << (_la - 12)) & ((1 << (PlantUMLParser.T__11 - 12)) | (1 << (PlantUMLParser.CLASS - 12)) | (1 << (PlantUMLParser.INTERFACE - 12)) | (1 << (PlantUMLParser.ABSTRACT - 12)) | (1 << (PlantUMLParser.OBJECT - 12)) | (1 << (PlantUMLParser.PACKAGE - 12)) | (1 << (PlantUMLParser.NEWLINE - 12)) | (1 << (PlantUMLParser.WORD - 12)))) !== 0)) {
            this.state = 101;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case PlantUMLParser.CLASS:
            case PlantUMLParser.INTERFACE:
            case PlantUMLParser.ABSTRACT:
            case PlantUMLParser.OBJECT:
                this.state = 97;
                this.class_declaration();
                break;
            case PlantUMLParser.T__11:
            case PlantUMLParser.WORD:
                this.state = 98;
                this.connection();
                break;
            case PlantUMLParser.PACKAGE:
                this.state = 99;
                this.package_section();
                break;
            case PlantUMLParser.NEWLINE:
                this.state = 100;
                this.match(PlantUMLParser.NEWLINE);
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 105;
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
        this.state = 106;
        this.match(PlantUMLParser.PACKAGE);
        this.state = 108;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PlantUMLParser.WHITESPACE) {
            this.state = 107;
            this.match(PlantUMLParser.WHITESPACE);
        }

        this.state = 110;
        this.match(PlantUMLParser.QUOTATION);
        this.state = 111;
        this.package_name();
        this.state = 112;
        this.match(PlantUMLParser.QUOTATION);
        this.state = 114;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PlantUMLParser.WHITESPACE) {
            this.state = 113;
            this.match(PlantUMLParser.WHITESPACE);
        }

        this.state = 126;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PlantUMLParser.T__2) {
            this.state = 116;
            this.match(PlantUMLParser.T__2);
            this.state = 122;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(((((_la - 12)) & ~0x1f) == 0 && ((1 << (_la - 12)) & ((1 << (PlantUMLParser.T__11 - 12)) | (1 << (PlantUMLParser.CLASS - 12)) | (1 << (PlantUMLParser.INTERFACE - 12)) | (1 << (PlantUMLParser.ABSTRACT - 12)) | (1 << (PlantUMLParser.OBJECT - 12)) | (1 << (PlantUMLParser.NEWLINE - 12)) | (1 << (PlantUMLParser.WORD - 12)))) !== 0)) {
                this.state = 120;
                this._errHandler.sync(this);
                switch(this._input.LA(1)) {
                case PlantUMLParser.CLASS:
                case PlantUMLParser.INTERFACE:
                case PlantUMLParser.ABSTRACT:
                case PlantUMLParser.OBJECT:
                    this.state = 117;
                    this.class_declaration();
                    break;
                case PlantUMLParser.T__11:
                case PlantUMLParser.WORD:
                    this.state = 118;
                    this.connection();
                    break;
                case PlantUMLParser.NEWLINE:
                    this.state = 119;
                    this.match(PlantUMLParser.NEWLINE);
                    break;
                default:
                    throw new antlr4.error.NoViableAltException(this);
                }
                this.state = 124;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 125;
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
        this.state = 128;
        this.match(PlantUMLParser.WORD);
        this.state = 134;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PlantUMLParser.DOTDOT) {
            this.state = 129;
            this.match(PlantUMLParser.DOTDOT);
            this.state = 131;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===PlantUMLParser.WHITESPACE) {
                this.state = 130;
                this.match(PlantUMLParser.WHITESPACE);
            }

            this.state = 133;
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
        this.state = 136;
        this.class_type();
        this.state = 138;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PlantUMLParser.WHITESPACE) {
            this.state = 137;
            this.match(PlantUMLParser.WHITESPACE);
        }

        this.state = 140;
        this.class_description();
        this.state = 142;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PlantUMLParser.WHITESPACE) {
            this.state = 141;
            this.match(PlantUMLParser.WHITESPACE);
        }

        this.state = 156;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PlantUMLParser.T__2) {
            this.state = 144;
            this.match(PlantUMLParser.T__2);
            this.state = 152;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << PlantUMLParser.T__5) | (1 << PlantUMLParser.T__11) | (1 << PlantUMLParser.T__20) | (1 << PlantUMLParser.T__21) | (1 << PlantUMLParser.T__22) | (1 << PlantUMLParser.T__23) | (1 << PlantUMLParser.T__25))) !== 0) || _la===PlantUMLParser.NEWLINE || _la===PlantUMLParser.WORD) {
                this.state = 150;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
                switch(la_) {
                case 1:
                    this.state = 145;
                    this.attribute();
                    break;

                case 2:
                    this.state = 146;
                    this.method();
                    break;

                case 3:
                    this.state = 147;
                    this.declaration();
                    break;

                case 4:
                    this.state = 148;
                    this.styling();
                    break;

                case 5:
                    this.state = 149;
                    this.match(PlantUMLParser.NEWLINE);
                    break;

                }
                this.state = 154;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 155;
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
        this.state = 165;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case PlantUMLParser.ABSTRACT:
            this.enterOuterAlt(localctx, 1);
            this.state = 158;
            this.match(PlantUMLParser.ABSTRACT);
            this.state = 160;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===PlantUMLParser.CLASS) {
                this.state = 159;
                this.match(PlantUMLParser.CLASS);
            }

            break;
        case PlantUMLParser.CLASS:
            this.enterOuterAlt(localctx, 2);
            this.state = 162;
            this.match(PlantUMLParser.CLASS);
            break;
        case PlantUMLParser.INTERFACE:
            this.enterOuterAlt(localctx, 3);
            this.state = 163;
            this.match(PlantUMLParser.INTERFACE);
            break;
        case PlantUMLParser.OBJECT:
            this.enterOuterAlt(localctx, 4);
            this.state = 164;
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
        this.state = 168;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PlantUMLParser.QUOTATION) {
            this.state = 167;
            this.match(PlantUMLParser.QUOTATION);
        }

        this.state = 170;
        this.class_name();
        this.state = 172;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PlantUMLParser.QUOTATION) {
            this.state = 171;
            this.match(PlantUMLParser.QUOTATION);
        }

        this.state = 176;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PlantUMLParser.AS) {
            this.state = 174;
            this.match(PlantUMLParser.AS);
            this.state = 175;
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
        this.state = 185;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 178;
            this.match(PlantUMLParser.WORD);
            this.state = 179;
            this.match(PlantUMLParser.DOTDOT);
            this.state = 181;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===PlantUMLParser.WHITESPACE) {
                this.state = 180;
                this.match(PlantUMLParser.WHITESPACE);
            }

            this.state = 183;
            this.match(PlantUMLParser.WORD);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 184;
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
        this.state = 187;
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
        this.state = 189;
        this.match(PlantUMLParser.T__4);
        this.state = 190;
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
        this.state = 192;
        this.match(PlantUMLParser.T__5);
        this.state = 194; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 193;
            this.styling_expression();
            this.state = 196; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << PlantUMLParser.T__7) | (1 << PlantUMLParser.T__8) | (1 << PlantUMLParser.T__9) | (1 << PlantUMLParser.T__10))) !== 0));
        this.state = 198;
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
        this.state = 200;
        localctx.styling_name = this.styling_params();
        this.state = 201;
        this.match(PlantUMLParser.DOTDOT);
        this.state = 202;
        localctx.styling_val = this.styling_value();
        this.state = 203;
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
        this.state = 205;
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
        this.state = 207;
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
        this.state = 210;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
        if(la_===1) {
            this.state = 209;
            this.visibility();

        }
        this.state = 213;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PlantUMLParser.T__20 || _la===PlantUMLParser.T__25) {
            this.state = 212;
            this.modifiers();
        }

        this.state = 215;
        this.attribute_name();
        this.state = 216;
        this.match(PlantUMLParser.DOTDOT);
        this.state = 218;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PlantUMLParser.WHITESPACE) {
            this.state = 217;
            this.match(PlantUMLParser.WHITESPACE);
        }

        this.state = 220;
        this.attribute_type();
        this.state = 222;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,26,this._ctx);
        if(la_===1) {
            this.state = 221;
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
        this.state = 225; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 224;
            this.match(PlantUMLParser.WORD);
            this.state = 227; 
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
        this.state = 233;
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
        case PlantUMLParser.T__20:
        case PlantUMLParser.T__21:
        case PlantUMLParser.T__22:
        case PlantUMLParser.T__23:
        case PlantUMLParser.T__25:
        case PlantUMLParser.T__26:
        case PlantUMLParser.T__27:
        case PlantUMLParser.NEWLINE:
        case PlantUMLParser.WORD:
        case PlantUMLParser.DOTDOT:
            this.enterOuterAlt(localctx, 1);
            this.state = 229;
            this.attribute_data_type();
            break;
        case PlantUMLParser.ARRAY:
            this.enterOuterAlt(localctx, 2);
            this.state = 230;
            this.match(PlantUMLParser.ARRAY);
            break;
        case PlantUMLParser.ANY:
            this.enterOuterAlt(localctx, 3);
            this.state = 231;
            this.match(PlantUMLParser.ANY);
            break;
        case PlantUMLParser.ANYARRAY:
            this.enterOuterAlt(localctx, 4);
            this.state = 232;
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
        this.state = 239;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case PlantUMLParser.T__12:
        case PlantUMLParser.T__15:
        case PlantUMLParser.T__24:
        case PlantUMLParser.WORD:
            this.enterOuterAlt(localctx, 1);
            this.state = 235;
            this.attribute_data_type();
            break;
        case PlantUMLParser.ARRAY:
            this.enterOuterAlt(localctx, 2);
            this.state = 236;
            this.match(PlantUMLParser.ARRAY);
            break;
        case PlantUMLParser.ANY:
            this.enterOuterAlt(localctx, 3);
            this.state = 237;
            this.match(PlantUMLParser.ANY);
            break;
        case PlantUMLParser.ANYARRAY:
            this.enterOuterAlt(localctx, 4);
            this.state = 238;
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
        this.state = 242;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,30,this._ctx);
        if(la_===1) {
            this.state = 241;
            this.visibility();

        }
        this.state = 245;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PlantUMLParser.T__20 || _la===PlantUMLParser.T__25) {
            this.state = 244;
            this.modifiers();
        }

        this.state = 247;
        this.mathode_name();
        this.state = 248;
        this.match(PlantUMLParser.T__11);
        this.state = 250;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PlantUMLParser.WORD || _la===PlantUMLParser.DOTDOT) {
            this.state = 249;
            this.function_argument_list();
        }

        this.state = 252;
        this.match(PlantUMLParser.T__12);
        this.state = 258;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PlantUMLParser.DOTDOT) {
            this.state = 253;
            this.match(PlantUMLParser.DOTDOT);
            this.state = 255;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===PlantUMLParser.WHITESPACE) {
                this.state = 254;
                this.match(PlantUMLParser.WHITESPACE);
            }

            this.state = 257;
            this.methode_data_type();
        }

        this.state = 261;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,35,this._ctx);
        if(la_===1) {
            this.state = 260;
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
        this.state = 266;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===PlantUMLParser.WORD) {
            this.state = 263;
            this.match(PlantUMLParser.WORD);
            this.state = 268;
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
        this.state = 270;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,37,this._ctx);
        if(la_===1) {
            this.state = 269;
            this.visibility();

        }
        this.state = 273;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PlantUMLParser.T__20 || _la===PlantUMLParser.T__25) {
            this.state = 272;
            this.modifiers();
        }

        this.state = 275;
        this.declaration_name();
        this.state = 277;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PlantUMLParser.WHITESPACE) {
            this.state = 276;
            this.match(PlantUMLParser.WHITESPACE);
        }

        this.state = 279;
        this.match(PlantUMLParser.T__13);
        this.state = 281;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PlantUMLParser.WHITESPACE) {
            this.state = 280;
            this.match(PlantUMLParser.WHITESPACE);
        }

        this.state = 283;
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
        this.state = 286; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 285;
            this.match(PlantUMLParser.WORD);
            this.state = 288; 
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
        this.state = 324;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,47,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 291; 
            this._errHandler.sync(this);
            var _alt = 1;
            do {
            	switch (_alt) {
            	case 1:
            		this.state = 290;
            		this.match(PlantUMLParser.WORD);
            		break;
            	default:
            		throw new antlr4.error.NoViableAltException(this);
            	}
            	this.state = 293; 
            	this._errHandler.sync(this);
            	_alt = this._interp.adaptivePredict(this._input,42, this._ctx);
            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 296; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 295;
                this.match(PlantUMLParser.INTEGER);
                this.state = 298; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while(_la===PlantUMLParser.INTEGER);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 300;
            this.match(PlantUMLParser.T__14);
            this.state = 301;
            this.match(PlantUMLParser.WORD);
            this.state = 306;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===PlantUMLParser.T__15) {
                this.state = 302;
                this.match(PlantUMLParser.T__15);
                this.state = 303;
                this.match(PlantUMLParser.WORD);
                this.state = 308;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 309;
            this.match(PlantUMLParser.T__16);
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 310;
            this.match(PlantUMLParser.T__14);
            this.state = 312; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 311;
                this.match(PlantUMLParser.INTEGER);
                this.state = 314; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while(_la===PlantUMLParser.INTEGER);
            this.state = 320;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===PlantUMLParser.T__15) {
                this.state = 316;
                this.match(PlantUMLParser.T__15);
                this.state = 317;
                this.match(PlantUMLParser.INTEGER);
                this.state = 322;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 323;
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
        this.state = 326;
        localctx.instance = this.connection_name();
        this.state = 328;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PlantUMLParser.WHITESPACE) {
            this.state = 327;
            this.match(PlantUMLParser.WHITESPACE);
        }

        this.state = 335;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PlantUMLParser.QUOTATION) {
            this.state = 330;
            this.match(PlantUMLParser.QUOTATION);
            this.state = 332;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(((((_la - 18)) & ~0x1f) == 0 && ((1 << (_la - 18)) & ((1 << (PlantUMLParser.T__17 - 18)) | (1 << (PlantUMLParser.T__18 - 18)) | (1 << (PlantUMLParser.T__19 - 18)) | (1 << (PlantUMLParser.WORD - 18)) | (1 << (PlantUMLParser.ANY - 18)))) !== 0)) {
                this.state = 331;
                localctx.mult = this.multiplicity();
            }

            this.state = 334;
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
        this.state = 342;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PlantUMLParser.QUOTATION) {
            this.state = 337;
            this.match(PlantUMLParser.QUOTATION);
            this.state = 339;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(((((_la - 18)) & ~0x1f) == 0 && ((1 << (_la - 18)) & ((1 << (PlantUMLParser.T__17 - 18)) | (1 << (PlantUMLParser.T__18 - 18)) | (1 << (PlantUMLParser.T__19 - 18)) | (1 << (PlantUMLParser.WORD - 18)) | (1 << (PlantUMLParser.ANY - 18)))) !== 0)) {
                this.state = 338;
                localctx.mult = this.multiplicity();
            }

            this.state = 341;
            this.match(PlantUMLParser.QUOTATION);
        }

        this.state = 345;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PlantUMLParser.WHITESPACE) {
            this.state = 344;
            this.match(PlantUMLParser.WHITESPACE);
        }

        this.state = 347;
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

ConnectionContext.prototype.DOTDOT = function() {
    return this.getToken(PlantUMLParser.DOTDOT, 0);
};

ConnectionContext.prototype.stereotype = function() {
    return this.getTypedRuleContext(StereotypeContext,0);
};

ConnectionContext.prototype.NEWLINE = function() {
    return this.getToken(PlantUMLParser.NEWLINE, 0);
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
        this.state = 349;
        localctx.left = this.connection_left();
        this.state = 350;
        this.connection_symbol();
        this.state = 351;
        localctx.right = this.connection_right();
        this.state = 360;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PlantUMLParser.DOTDOT || _la===PlantUMLParser.WHITESPACE) {
            this.state = 353;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===PlantUMLParser.WHITESPACE) {
                this.state = 352;
                this.match(PlantUMLParser.WHITESPACE);
            }

            this.state = 355;
            this.match(PlantUMLParser.DOTDOT);
            this.state = 357;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===PlantUMLParser.WHITESPACE) {
                this.state = 356;
                this.match(PlantUMLParser.WHITESPACE);
            }

            this.state = 359;
            this.stereotype();
        }

        this.state = 363;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,57,this._ctx);
        if(la_===1) {
            this.state = 362;
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
    this.enterRule(localctx, 52, PlantUMLParser.RULE_connection_symbol);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 365;
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

MultiplicityContext.prototype.WORD = function() {
    return this.getToken(PlantUMLParser.WORD, 0);
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
    this.enterRule(localctx, 54, PlantUMLParser.RULE_multiplicity);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 367;
        _la = this._input.LA(1);
        if(!(((((_la - 18)) & ~0x1f) == 0 && ((1 << (_la - 18)) & ((1 << (PlantUMLParser.T__17 - 18)) | (1 << (PlantUMLParser.T__18 - 18)) | (1 << (PlantUMLParser.T__19 - 18)) | (1 << (PlantUMLParser.WORD - 18)) | (1 << (PlantUMLParser.ANY - 18)))) !== 0))) {
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
    this.enterRule(localctx, 56, PlantUMLParser.RULE_visibility);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 370;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PlantUMLParser.T__20) {
            this.state = 369;
            this.match(PlantUMLParser.T__20);
        }

        this.state = 372;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << PlantUMLParser.T__21) | (1 << PlantUMLParser.T__22) | (1 << PlantUMLParser.T__23))) !== 0))) {
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
    this.enterRule(localctx, 58, PlantUMLParser.RULE_function_argument);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 374;
        this.variable_name();
        this.state = 375;
        this.match(PlantUMLParser.DOTDOT);
        this.state = 377;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PlantUMLParser.WHITESPACE) {
            this.state = 376;
            this.match(PlantUMLParser.WHITESPACE);
        }

        this.state = 381;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,60,this._ctx);
        switch(la_) {
        case 1:
            this.state = 379;
            this.function_argument_attribute_type();
            break;

        case 2:
            this.state = 380;
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
    this.enterRule(localctx, 60, PlantUMLParser.RULE_nested_argument_type);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 383;
        this.function_argument_attribute_type();
        this.state = 386; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 384;
            this.match(PlantUMLParser.T__24);
            this.state = 385;
            this.function_argument_attribute_type();
            this.state = 388; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===PlantUMLParser.T__24);
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
    this.enterRule(localctx, 62, PlantUMLParser.RULE_function_argument_list);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 390;
        this.function_argument();
        this.state = 398;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===PlantUMLParser.T__15) {
            this.state = 391;
            this.match(PlantUMLParser.T__15);
            this.state = 393;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===PlantUMLParser.WHITESPACE) {
                this.state = 392;
                this.match(PlantUMLParser.WHITESPACE);
            }

            this.state = 395;
            this.function_argument();
            this.state = 400;
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
    this.enterRule(localctx, 64, PlantUMLParser.RULE_template_argument);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 401;
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
    this.enterRule(localctx, 66, PlantUMLParser.RULE_template_argument_list);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 403;
        this.template_argument();
        this.state = 408;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===PlantUMLParser.T__15) {
            this.state = 404;
            this.match(PlantUMLParser.T__15);
            this.state = 405;
            this.template_argument();
            this.state = 410;
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
    this.enterRule(localctx, 68, PlantUMLParser.RULE_ident);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 412;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,65,this._ctx);
        if(la_===1) {
            this.state = 411;
            this.match(PlantUMLParser.QUOTATION);

        }
        this.state = 417;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,66,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 414;
                this.match(PlantUMLParser.WORD); 
            }
            this.state = 419;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,66,this._ctx);
        }

        this.state = 421;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PlantUMLParser.QUOTATION) {
            this.state = 420;
            this.match(PlantUMLParser.QUOTATION);
        }

        this.state = 425;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PlantUMLParser.AS) {
            this.state = 423;
            this.match(PlantUMLParser.AS);
            this.state = 424;
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
    this.enterRule(localctx, 70, PlantUMLParser.RULE_methode_data_type);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 430;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,69,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 427;
                this.match(PlantUMLParser.WORD); 
            }
            this.state = 432;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,69,this._ctx);
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
    this.enterRule(localctx, 72, PlantUMLParser.RULE_attribute_data_type);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 436;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,70,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 433;
                this.match(PlantUMLParser.WORD); 
            }
            this.state = 438;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,70,this._ctx);
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
    this.enterRule(localctx, 74, PlantUMLParser.RULE_data_type);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 442;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===PlantUMLParser.WORD) {
            this.state = 439;
            this.match(PlantUMLParser.WORD);
            this.state = 444;
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
    this.enterRule(localctx, 76, PlantUMLParser.RULE_variable_name);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 448;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===PlantUMLParser.WORD) {
            this.state = 445;
            this.match(PlantUMLParser.WORD);
            this.state = 450;
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
    this.enterRule(localctx, 78, PlantUMLParser.RULE_connection_name);
    var _la = 0; // Token type
    try {
        this.state = 460;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case PlantUMLParser.WORD:
            this.enterOuterAlt(localctx, 1);
            this.state = 451;
            this.match(PlantUMLParser.WORD);
            break;
        case PlantUMLParser.T__11:
            this.enterOuterAlt(localctx, 2);
            this.state = 452;
            this.match(PlantUMLParser.T__11);
            this.state = 453;
            this.match(PlantUMLParser.WORD);
            this.state = 454;
            this.match(PlantUMLParser.T__15);
            this.state = 456;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===PlantUMLParser.WHITESPACE) {
                this.state = 455;
                this.match(PlantUMLParser.WHITESPACE);
            }

            this.state = 458;
            this.match(PlantUMLParser.WORD);
            this.state = 459;
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
    this.enterRule(localctx, 80, PlantUMLParser.RULE_modifiers);
    try {
        this.state = 464;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case PlantUMLParser.T__25:
            this.enterOuterAlt(localctx, 1);
            this.state = 462;
            localctx.static_mod = this.match(PlantUMLParser.T__25);
            break;
        case PlantUMLParser.T__20:
            this.enterOuterAlt(localctx, 2);
            this.state = 463;
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
    this.enterRule(localctx, 82, PlantUMLParser.RULE_stereotype);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 466;
        this.match(PlantUMLParser.QUOTATION);
        this.state = 467;
        this.ident();
        this.state = 472;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PlantUMLParser.T__11) {
            this.state = 468;
            this.match(PlantUMLParser.T__11);
            this.state = 469;
            localctx._ident = this.ident();
            localctx.args.push(localctx._ident);
            this.state = 470;
            this.match(PlantUMLParser.T__12);
        }

        this.state = 475;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PlantUMLParser.DOTDOT) {
            this.state = 474;
            this.match(PlantUMLParser.DOTDOT);
        }

        this.state = 477;
        this.match(PlantUMLParser.WORD);
        this.state = 478;
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
    this.enterRule(localctx, 84, PlantUMLParser.RULE_type_declaration);
    try {
        this.state = 492;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,79,this._ctx);
        switch(la_) {
        case 1:
            localctx = new Template_typeContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 480;
            this.ident();
            this.state = 481;
            this.match(PlantUMLParser.T__26);
            this.state = 483;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,78,this._ctx);
            if(la_===1) {
                this.state = 482;
                this.template_argument_list();

            }
            this.state = 485;
            this.match(PlantUMLParser.T__27);
            break;

        case 2:
            localctx = new List_typeContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 487;
            this.ident();
            this.state = 488;
            this.match(PlantUMLParser.T__14);
            this.state = 489;
            this.match(PlantUMLParser.T__16);
            break;

        case 3:
            localctx = new Simple_typeContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 491;
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
    this.enterRule(localctx, 86, PlantUMLParser.RULE_item_list);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 497; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 494;
            this.ident();
            this.state = 495;
            this.match(PlantUMLParser.NEWLINE);
            this.state = 499; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (PlantUMLParser.AS - 37)) | (1 << (PlantUMLParser.NEWLINE - 37)) | (1 << (PlantUMLParser.WORD - 37)) | (1 << (PlantUMLParser.QUOTATION - 37)))) !== 0));
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
    this.enterRule(localctx, 88, PlantUMLParser.RULE_enum_declaration);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 501;
        this.match(PlantUMLParser.T__28);
        this.state = 502;
        this.ident();
        this.state = 509;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PlantUMLParser.T__2) {
            this.state = 503;
            this.match(PlantUMLParser.T__2);
            this.state = 504;
            this.match(PlantUMLParser.NEWLINE);
            this.state = 506;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (PlantUMLParser.AS - 37)) | (1 << (PlantUMLParser.NEWLINE - 37)) | (1 << (PlantUMLParser.WORD - 37)) | (1 << (PlantUMLParser.QUOTATION - 37)))) !== 0)) {
                this.state = 505;
                this.item_list();
            }

            this.state = 508;
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

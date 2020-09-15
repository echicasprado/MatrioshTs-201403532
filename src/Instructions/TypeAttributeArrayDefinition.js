class TypeAttributeArrayDefinition extends Instruction {
    
    constructor(linea,column,identify,type,dimentions){
        super(linea,column);

        this.identify = identify;
        this.type = type;
        this.dimentions = dimentions;

        this.nodeName = TreeGraph.getNumberNode();
        this.graphcsCode = TreeGraph;
        this.translatedCode = "";
    }

    getTranslated(){
        return this.translatedCode;
    }

    getGraphsCode(){
        return this.graphcsCode;
    }

    translatedSymbolsTable(e){
        TableReport.addTranslated(
            new nodeTableSymbols(
              this.linea,
              this.column,
              this.identify,
              e.enviromentType,
              null
            )
        );
        this.attributes.translatedSymbolsTable(e);
    }

    executeSymbolsTable(e){
        return "implementar";
    }

    execute(e) {
        throw new Error("Method not implemented.");
    }

}
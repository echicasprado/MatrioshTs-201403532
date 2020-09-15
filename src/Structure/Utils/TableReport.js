class nodeTableSymbols{
    /**
     * 
     * @param {*} line 
     * @param {*} column 
     * @param {*} name 
     * @param {*} typeEnviroment 
     */
    constructor(line,column,name,typeEnviroment,value){
        this.line = line;
        this.column = column;
        this.name = name;
        this.typeEnviroment = typeEnviroment;
        this.value = value;
    }
}


class TableReport {
  static nodesTranslated = [];
  static nodesExecuse = [];

  static cleanTranslated() {
    TableReport.nodesTranslated = [];
  }

  static cleanExecuse(){
    TableReport.nodesExecuse = [];
  }

  static addTranslated(node) {
    if(node.typeEnviroment == EnumEnvironmentType.FUNCTION){
      node.typeEnviroment = node.typeEnviroment.name;
    }
    TableReport.nodesTranslated.push(node);
  }

  static getNodesTranslated() {
    return TableReport.nodesTranslated;
  }

  static addExecuse(node){
    TableReport.nodesExecuse.push(node);
  }

  static getNodesExecuse(){
    return TableReport.nodesExecuse;
  }

}

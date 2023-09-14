class GridView{

    constructor(){

    this._header='';
    this._headerClass='';
    this._tabletClass=[];
    this._element='body';
    this._attribute=[];
    
    }


    set header(header){
        if (typeof header === 'string'&&header.trim()!==''){
            this._header=header.trim();
            return true;
        }
        return false;
    }

    set headerClass (headerClass){
        if(typeof headerClass === 'object'){
            this._headerClass=headerClass
            return true;
        }
            return false;
    }
    

    render(){

    }
}
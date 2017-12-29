import React from 'react';
import {render} from 'react-dom'

class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {searchString :"",results:[],open:false,currentLi:0,currentValue:""};
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.bodyClicked =this.bodyClicked.bind(this);
    this.makeHit = this.makeHit.bind(this);
    this.timer;
  }

  bodyClicked(event){
    if(event.target.className =="rootMain" || event.target.className =="root"){
      this.setState({"open":false});
    }
  };
  onKeyDown (event) {
    clearTimeout(this.timer);
    if(this.state.open ){
     
    switch(event.which){
      case 40 : 
        var nextLi= ((this.state.currentLi+1) == this.state.results.length) ? 0 :this.state.currentLi+1 ;
        this.setState({currentLi:nextLi});
      break;
      case 13 :
        this.setState({currentValue:this.state.results[this.state.currentLi].name});
      case 38 : 
        nextLi= ((this.state.currentLi-1) == 0) ? this.state.results.length :this.state.currentLi-1;
        this.setState({currentLi:nextLi});

    }
  }
  };
  onKeyUp(event){
    if(event.which !== 40){
      this.timer && clearTimeout(this.timer);
      let value = event.target.value;
      this.timer = setTimeout(this.makeHit.bind(this),100);
      // this.setState({currentValue:value});
    }
  };
  inputChanged(event){
    var value=event && event.target && event.target.value;
    this.setState({currentValue:value});
  };
  makeHit(){
    var _this= this;
   
    var url = "https://swapi.co/api/planets/";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(res) {
      if(this.readyState == 4 && this.status == 200)
      {
        _this.filterData(_this.state.currentValue,JSON.parse(this.responseText));
      }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
  };
  filterData(searchString,data){
    var results =[];
          results = data.results.filter(function(value){
              return (value.name.toLowerCase()).match(searchString.toLowerCase());  
        });
      
    // console.log(results);
    this.setState({searchString :searchString,results:results,open:true});
  };
 
  render() {
    var _this = this;
      return (
        <div className="rootMain" ref="root" onClick={this.bodyClicked}>
          <input type="text"   value={this.state.currentValue} name="search" ref="search" onKeyDown={this.onKeyDown} onKeyUp={this.onKeyUp} onChange={this.inputChanged.bind(this)}/>
          <div className={"container " + _this.state.open? "":"displayNone" }>
          {_this.state.open && <ul className="results">
            {_this.state.results.map(function(value,index){
              return(
                <li key={index} className={"test "+(_this.state.currentLi == index ?"focused":"")} >
                 {value.name} 
                </li>
              )
            })}
          </ul>}
          </div>
        </div>
      );
    }

}

export default Search;
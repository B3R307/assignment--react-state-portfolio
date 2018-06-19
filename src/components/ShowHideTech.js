import React, { Component } from 'react';

/*  Note:
   if you find a add/remove 'techlist--hidden' from the div element's class,
   the techlist box will appear/disappear

*/

class ShowHideTech extends Component {
    constructor(){
    super()

    this.state ={
      showTech : true
    }
 }

   _handleButtonclick(clickedType){
     // console.log(clickedType);

      if(this.state.showTech === true ){
        // NO NO BAD this.setState.showTech = true
        this.setState({showTech: false})

      }else{
        this.setState({showTech: true})
      }
   }



  render() {

    let techlistClassVal
    let btnText

    if(this.state.showTech === true){
       techlistClassVal = `techlist--hidden`
       btnText = '+ SHOW TECH'

    } else {
       techlistClassVal = `techlist`
       btnText = '- HIDE TECH'
    }


    return (
      <section>
        <h4>Technologies</h4>
        <button
          className="toggle-techlist"
          onClick={ ()=>{this._handleButtonclick() } }>{btnText}</button>

        <div className={`techlist ${techlistClassVal}`}>
          <span className="techlist__icon devicons devicons-git"/>
          <span className="techlist__icon devicons devicons-html5"/>
          <span className="techlist__icon devicons devicons devicons-css3"/>
          <span className="techlist__icon devicons devicons-sass"/>
          <span className="techlist__icon devicons devicons-linux"/>
          <span className="techlist__icon devicons devicons devicons-nodejs"/>
          <span className="techlist__icon devicons devicons devicons-react"/>
          <span className="techlist__icon devicons devicons devicons-illustrator"/>
        </div>
      </section>
    );
  }
}

export default ShowHideTech

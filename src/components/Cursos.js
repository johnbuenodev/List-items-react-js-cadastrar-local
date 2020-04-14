import React , {Component} from  'react';
import { render } from '@testing-library/react';


class Cursos extends Component{
      
    //variavel declarar vazia {} se não passarem nada no objeto ou der falha na rede dados
    //função declarar vazia assim onFuncao:() => {}
    static defaultProps ={

        curso: {},
        onRemove:() =>{}
    }
    constructor(props){
      super(props);
      this.remove = this.remove.bind(this);

    }

    remove(){

      this.props.onRemove(this.props.curso.id);

    }
/* 6:57 parei */
    render(){
        
       const {props} = this,
          {curso} = props;   
   
        return(
           <>
           <li className="course">
            <div>id-{curso.id}-{curso.categoria}</div>
            <button onClick={this.remove}>X</button>
            <img src={curso.img}/>    
           <div>{curso.nome}</div>
           </li>
           </>
        )
      }
}

export default Cursos;
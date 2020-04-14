import React, {Component} from 'react';


class NewCurso extends Component{
    
    //passando static defaultProps que se não for passado a função
    //vai evitar erro na aplicação
    static defaultProps = {

        onSubmit:() =>{}
    }


    constructor(props){
     super(props)
      this.state ={
          nome:'',
          categoria:'',
          img:'',
      }
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event){
     event.preventDefault();
     const novoCurso = this.state;

     if(novoCurso.nome && novoCurso.categoria && novoCurso.img){
       this.props.onSubmit(novoCurso);
       this.setState({
         nome:'',
         img:''
       });
     }
    }
    
    /*  Pega o evento extrai o target, pega o target extrai o name e o value. Passa para o setState o name + value*/
    handleChange(event){
      const { target } = event,
         { name, value } = target;
      this.setState({
         [name]: value

      })

    }

    render(){
      const {props,state} = this;
      return(
        <form className="course-form" onSubmit={this.handleSubmit}>
          <label>
            <span>Nome:</span>
            <input name="nome" onChange={this.handleChange} value={state.nome}></input>
          </label>
          <label>
            <span>Imagem:</span>
            <input name="img" onChange={this.handleChange} value={state.img}></input>
          </label>
          <label>
            <span>Categoria:</span>
            <select name="categoria" onChange={this.handleChange} value={state.categoria}>
               <option value=''>Selecionar</option>
               <option value="javascript">Javascript</option>
               <option value="python">Python</option>
               <option value="c++">C++</option>
               <option value="c#">C#</option>
               <option value="Java">Java</option>
            </select>
          </label>
          <button type="submit">Criar Curso</button>
        </form>
      );
    }

}


export default NewCurso;


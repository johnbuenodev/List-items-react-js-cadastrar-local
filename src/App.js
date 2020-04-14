import React, { Component } from 'react';
import './App.css';
import Cursos from './components/Cursos';
import NewCurso from './components/NewCurso';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      cursos: [
        {
          id:1,
          nome: 'React',
          categoria: 'javascript',
          img:'' 
        },
        {
          id:2,
          nome: 'Ionic',
          categoria: 'javascript',
          img:'',

        },
        {
          id:3,
          nome: 'React',
          categoria: 'javascript',
          img:'' 
        },
        {
          id:4,
          nome: 'Ionic',
          categoria: 'javascript',
          img:'',

        },
        {
          id:5,
          nome: 'React',
          categoria: 'javascript',
          img:'' 
        },
        {
          id:6,
          nome: 'Ionic',
          categoria: 'javascript',
          img:'',

        },
        {
          id:7,
          nome: 'React',
          categoria: 'javascript',
          img:'' 
        },
        {
          id:8,
          nome: 'Ionic',
          categoria: 'javascript',
          img:'',

        },
        {
          id:9,
          nome: 'React',
          categoria: 'javascript',
          img:'' 
        },
        {
          id:10,
          nome: 'Ionic',
          categoria: 'javascript',
          img:'',

        }
      ]
     //5:20
    }
    this.adicionar = this.adicionar.bind(this);
    this.remove = this.remove.bind(this);
  }

  //passa o curso por parametro função, pega através do state os cursos
  //adiciona o curso atraves do push para dentro da constante cursos
  //passa para o setState a nova instancia de cursos.
  adicionar(curso){
    //const cursos = this.state.cursos,
    const {cursos} = this.state,
     novoCurso = Object.assign({}, curso, {id:(Date.now())});
   cursos.push(novoCurso);
   this.setState({cursos});

  }
 
  remove(cursoId){
    //pega o e filtra procurando pelo cursoId, retira com splice da lista e atualiza a array de cursos com setState
    const {cursos} = this.state,
      cursoIndex = cursos.findIndex(curso => curso.id == cursoId);
      cursos.splice(cursoIndex,1);
      //passa para o setstate os cursos para atualizar a lista de curso
      this.setState({cursos});

  }
 
  render(){
    const {state} = this;
  return (
    <div className="App">
      <NewCurso onSubmit={this.adicionar}/>
      <ul className="courses-list">
      {
       state.cursos.map(curso =>  <Cursos curso={curso} onRemove={this.remove}/>)
      }
      </ul>
    </div>
  );
 }
}

export default App;

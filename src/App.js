import './App.css';
import Table from './Table'
import React,{Component} from 'react'
import Form from './form'

class App extends Component {
  state = {
    alunos : [
      /*{nome: 'Dudu',
      turma: 'Programação Web'
    },
    {
      nome: 'Paty',
      turma: 'Analise de Algorimos'
    },
    {
      nome: 'Joãozinho',
      turma: 'Programação 00'
    },
    {
      nome:'Ju',
      turma: 'Engenharia de Requisitos'
    },*/

    ]

  }

  handleSubmit = (alunoDisc) => {
      this.setState(
        {
          alunos: [...this.state.alunos,alunoDisc]
        }
      )
  }

  removerAluno =(index) => {
    const{alunos} = this.state
    this.setState(
      {
        alunos: alunos.filter((aluno, i)=>{
          return i !== index
        })
      }
    )
  }



  render(){
    const {alunos} = this.state

    return(
        <div className="container">
          <Table alunos = {alunos}
                 removerAluno={this.removerAluno}/>
          <Form handleSubmit={this.handleSubmit}/>
        </div>
    );
  }
} 
export default App
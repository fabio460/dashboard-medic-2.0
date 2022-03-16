import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import './TabelaDePacientes.css'
import {useHistory} from 'react-router-dom'



export default function TabelaDePacientes({rows}) {
  const h = useHistory()
  const pacientes = []
  rows.map(elem=>{
      return pacientes.push({
          id:elem._id,
          nome:elem.nome,
          email:elem.email,
          idade:elem.idade,
          cpf:elem.cpf
        })
  })  

  const getCpf = (cpf)=>{
     localStorage.setItem('cpf',cpf)
     h.push('/dados')
  }

  const columns = [

    { field: 'nome', headerName: 'nome', width: 230,renderCell: (params)=>{
         return <div className='renderCell' onClick={()=>getCpf(params.row.cpf)}>{params.row.nome}</div>
       }
    },
    { field: 'idade', headerName: 'idade', width: 90,renderCell: (params)=>{
      return <div className='renderCell' onClick={()=>getCpf(params.row.cpf)}>{params.row.idade}</div>
      }
    },
    { field: 'email', headerName: 'email', width: 530,renderCell: (params)=>{
      return <div className='renderCell' onClick={()=>getCpf(params.row.cpf)}>{params.row.email}</div>
      }
    },
  
  ];

  return (
    <div className='TabelaDePacientes' style={{ height: 665, width: '100%' }}>
      <DataGrid
        rows={pacientes}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  );
}

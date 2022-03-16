const link = 'https://api-pacientes-2.vercel.app/'
const api = {
    getList: ()=>{
      const p = fetch(link+'pacientes').then(res=>res.json())
      
      return p
    },
    getPacientePorCpf: (cpf)=>{
        const formdata = new FormData()
        formdata.append('cpf',cpf)
        const p = fetch(link+'getpaciente',{method:"POST",body:formdata}).then(res=>res.json())
        
        return p
      },
      getIndicePulmonar: (cpf)=>{
        const formdata = new FormData()
        formdata.append('CPF',cpf)
        const p = fetch(link+'indicepulm',{method:"POST",body:formdata}).then(res=>res.json())
        return p
      },
      getIndiceCardiaco: (cpf)=>{
        const formdata = new FormData()
        formdata.append('CPF',cpf)
        const p = fetch(link+'indicecard',{method:"POST",body:formdata}).then(res=>res.json())
        return p
      },
}

export default api
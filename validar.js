const usuarios = [
    {
        login: 'admin',
        pass: 'admin'
    }
]

let botao = document.getElementById('btn-entrar')

botao.addEventListener('click', function logar(){
    let pegaUsuario = document.getElementById('usuario').value
    let pegaSenha = document.getElementById('senha').value
    let validaLogin = false

    for(let i in usuarios){
        
        if(pegaUsuario == usuarios[i].login && pegaSenha == usuarios[i].pass){
            validaLogin = true
            break
        }else{
            validaLogin = false
            
        }
    }

    if(validaLogin == true){
        alert('Logado com sucesso')
    }else{
        alert('usuario ou senha incorretos')
    }
})
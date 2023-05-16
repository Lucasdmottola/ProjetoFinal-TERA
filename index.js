let catalogo_usuarios = ['sandy', 'jneto', 'chico', 'bento'];
		let lista_senhas = ['brasil', 'Brasil', 'braSil', 'Br@sil'];
		let ctrl_login = 0;
		let ctrl_senha = 0;
		
		function verifica_usuario(){
			let xItem = document.getElementById("usuario").value;
			let xBusca = catalogo_usuarios.find(item => item === xItem);
			let xResposta = "";

			if(xBusca){
				xResposta = "Login Ok";
				ctrl_login = 1;
			} else {
				xResposta = "Erro! Login n�o encontrado";
				ctrl_login = 0;
			}
			
			console.log(xResposta);
		}
		
		function verifica_senha(){
			let xItem = document.getElementById("senha").value;
			let xBusca = lista_senhas.find(item => item === xItem);
			let xResposta = "";

			if(xBusca){
				xResposta = "Senha Ok";
				ctrl_senha = 1;
			} else {
				xResposta = "Erro! Senha n�o encontrada";
				ctrl_senha = 0;
			}
			
			console.log(xResposta);			
		}
		
		function acesso_ok(){
			if (ctrl_login + ctrl_senha > 1)
				console.log("formul�rio enviado");
			else 
				console.log("erro - reveja os dados de entrada");
		}

		// -------------- edição de cadastro de usuário ---------------- 

		function editar_dados() {
			if (ctrl_login && ctrl_senha) { // Verifica se o login e senha foram validados
				let index = catalogo_usuarios.indexOf(document.getElementById("usuario").value.trim());
				if (????) { // Verifica se o usuário existe no sistema
					
				
				//console.log("Erro: Usuário não encontrado.");
			
				//console.log("Erro: Realize a validação de login e senha antes de editar seus dados.");
			
				}
		}

		function cancelar_edicao() {
			
			console.log("Edição de campos cancelada.");
		}
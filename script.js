
    function boasVindas() {

        alert("Bem-vindo à YG Burguer!");

    }




    function pesquisar() {

        var campo = document.getElementById("pesquisa");

        if (campo == null) {
            return;
        }

        var nome = campo.value.toLowerCase().trim();

        if (nome == "") {
            alert("Digite o nome de um hambúrguer!");
            return;
        }

        var lanches = document.querySelectorAll(".lanche");


        if (lanches.length == 0) {

            window.location.href = "cardápio.html?busca=" +
                encodeURIComponent(nome);

            return;
        }

        var encontrou = false;

        for (var i = 0; i < lanches.length; i++) {

            var titulo = lanches[i].querySelector("h2");

            var nomeLanche = titulo.innerText.toLowerCase();

            if (nomeLanche.includes(nome)) {

                lanches[i].style.display = "flex";
                encontrou = true;

            } else {

                lanches[i].style.display = "none";

            }
        }

        if (encontrou == false) {
            alert("Nenhum hambúrguer encontrado!");
        }
    }



    function adicionarSacola(nome, preco) {

        var sacola = JSON.parse(localStorage.getItem("sacola")) || [];

        var produto = {
            nome: nome,
            preco: preco
        };

        sacola.push(produto);

        localStorage.setItem("sacola", JSON.stringify(sacola));

        alert(nome + " foi adicionado à sacola!");

        atualizarContador();
    }




    function atualizarContador() {

        var sacola = JSON.parse(localStorage.getItem("sacola")) || [];

        var contador = document.getElementById("contador-sacola");

        if (contador != null) {

            contador.innerHTML = sacola.length;

        }
    }




    function mascara_telefone() {

        var tel = document.getElementById("telefone").value;


        tel = tel.replace(/\D/g, "");


        tel = tel.slice(0, 11);


        if (tel.length > 2) {

            tel = "(" + tel.slice(0, 2) + ")" + tel.slice(2);

        } else if (tel.length > 0) {

            tel = "(" + tel;

        }


        if (tel.length > 9) {

            tel = tel.slice(0, 9) + "-" + tel.slice(9);

        }

        document.getElementById("telefone").value = tel;

    }




    function mostrarSenha(id) {

        var campo = document.getElementById(id);

        if (campo.type == "password") {

            campo.type = "text";

        } else {

            campo.type = "password";

        }
    }




    function cadastrar() {

        var nome = document.getElementById("nome").value;
        var email = document.getElementById("email").value;
        var telefone = document.getElementById("telefone").value;
        var senha = document.getElementById("senha").value;
        var confirmar = document.getElementById("confirmarSenha").value;
        var termos = document.getElementById("termos").checked;



        if (nome == "" || email == "" || telefone == "" ||
            senha == "" || confirmar == "") {

            alert("Preencha todos os campos!");
            return;

        }



        if (telefone.length != 14) {

            alert("Digite um telefone válido com DDD!");
            return;

        }



        if (senha.length < 6) {

            alert("A senha deve ter pelo menos 6 caracteres!");
            return;

        }



        if (senha != confirmar) {

            alert("As senhas não são iguais!");
            return;

        }



        if (termos == false) {

            alert("Você precisa aceitar os termos de uso!");
            return;

        }



        localStorage.setItem("nomeUsuario", nome);
        localStorage.setItem("emailUsuario", email);
        localStorage.setItem("telefoneUsuario", telefone);

        alert("Cadastro realizado com sucesso! Bem-vindo à YG Burguer!");

        window.location.href = "perfil.html";

    }




    function cadastroGoogle() {

        alert("Cadastro com Google ainda não está disponível!");

    }




    function confirmarPedido() {

        var sacola = JSON.parse(localStorage.getItem("sacola")) || [];

        if (sacola.length == 0) {

            alert("Sua sacola está vazia!");
            return;

        }

        alert("Pedido confirmado! Obrigado por escolher a YG Burguer!");

        localStorage.removeItem("sacola");

        atualizarContador();

    }




    atualizarContador();


    var parametros = new URLSearchParams(window.location.search);

    var busca = parametros.get("busca");

    if (busca != null) {

        var campoPesquisa = document.getElementById("pesquisa");

        if (campoPesquisa != null) {

            campoPesquisa.value = busca;

            pesquisar();

        }
    }
    function fazerLogin() {

        var email = document.getElementById("emailLogin").value;
        var senha = document.getElementById("senhaLogin").value;
        var lembrar = document.getElementById("lembrar").checked;

        if (email == "" || senha == "") {

            alert("Preencha o e-mail e a senha!");
            return;

        }


        var emailCadastrado = localStorage.getItem("emailUsuario");

        if (emailCadastrado == null) {

            alert("Nenhuma conta encontrada! Faça seu cadastro primeiro.");
            return;

        }

        if (email != emailCadastrado) {

            alert("E-mail não encontrado!");
            return;

        }


        if (lembrar == true) {

            localStorage.setItem("emailLembrado", email);

        } else {

            localStorage.removeItem("emailLembrado");

        }

        localStorage.setItem("usuarioLogado", "sim");

        alert("Bem-vindo de volta à YG Burguer!");

        window.location.href = "perfil.html";

    }




    function esqueciSenha() {

        alert("A recuperação de senha ainda não está disponível!");

    }




    function carregarEmailLembrado() {

        var campoEmail = document.getElementById("emailLogin");

        if (campoEmail == null) {
            return;
        }

        var emailSalvo = localStorage.getItem("emailLembrado");

        if (emailSalvo != null) {

            campoEmail.value = emailSalvo;

            var lembrar = document.getElementById("lembrar");

            lembrar.checked = true;

        }
    }




    carregarEmailLembrado();

    var produtosCardapio = [
        {
            nome: "YG Especial",
            imagem: "imagens/yg-especial.png",
            descricao: "Pao brioche, burger 170g, cheddar, bacon, alface e tomate."
        },
        {
            nome: "Double YG",
            imagem: "imagens/double-yg.png",
            descricao: "Pao brioche, 2 burgers 170g, cheddar, bacon e molho especial."
        },
        {
            nome: "Spicy YG",
            imagem: "imagens/spicy-yg.png",
            descricao: "Pao brioche, burger 170g, cheddar, bacon e jalapeno."
        },
        {
            nome: "BBQ Bacon",
            imagem: "imagens/bbq-bacon.png",
            descricao: "Pao brioche, burger 170g, cheddar, bacon e barbecue."
        },
        {
            nome: "Funchi YG",
            imagem: "imagens/funchi-yg.png",
            descricao: "Pao brioche, burger 170g, queijo prato, funghi e rucula."
        }
    ];

    var descontoSacola = 0;

    function formatarPreco(valor) {
        return "R$ " + valor.toFixed(2).replace(".", ",");
    }

    function mostrarSacola() {

        var area = document.getElementById("itens-sacola");

        if (area == null) {
            return;
        }

        var sacola = JSON.parse(localStorage.getItem("sacola")) || [];

        area.innerHTML = "";

        if (sacola.length == 0) {

            area.innerHTML =
                '<div class="sacola-vazia">' +
                '<h2>Sua sacola está vazia! 🍔</h2>' +
                '<p>Escolha seu hambúrguer favorito no cardápio.</p>' +
                '</div>';

        } else {

            var nomes = [];

            for (var i = 0; i < sacola.length; i++) {

                if (!nomes.includes(sacola[i].nome)) {
                    nomes.push(sacola[i].nome);
                }
            }

            for (var i = 0; i < nomes.length; i++) {

                var nome = nomes[i];
                var quantidade = 0;
                var preco = 0;
                var imagem = "";
                var descricao = "";

                for (var j = 0; j < sacola.length; j++) {

                    if (sacola[j].nome == nome) {
                        quantidade++;
                        preco = sacola[j].preco;
                    }
                }


                for (var k = 0; k < produtosCardapio.length; k++) {

                    if (produtosCardapio[k].nome == nome) {
                        imagem = produtosCardapio[k].imagem;
                        descricao = produtosCardapio[k].descricao;
                    }
                }

                var precoTotal = preco * quantidade;

                area.innerHTML +=
                    '<div class="item-sacola">' +

                    '<img src="' + imagem + '">' +

                    '<div class="info-item">' +
                    '<h3>' + nome + '</h3>' +
                    '<p>' + descricao + '</p>' +
                    '</div>' +

                    '<div class="controles-item">' +
                    '<button onclick="diminuirQuantidade(' + i + ')">−</button>' +
                    '<span>' + quantidade + '</span>' +
                    '<button onclick="aumentarQuantidade(' + i + ')">+</button>' +
                    '</div>' +

                    '<span class="preco-item">' +
                    formatarPreco(precoTotal) +
                    '</span>' +

                    '<button class="botao-excluir" onclick="removerProduto(' + i + ')">🗑</button>' +

                    '</div>';
            }
        }

        atualizarResumo();
        atualizarContador();
    }



    function pegarNomes() {

        var sacola = JSON.parse(localStorage.getItem("sacola")) || [];

        var nomes = [];

        for (var i = 0; i < sacola.length; i++) {

            if (!nomes.includes(sacola[i].nome)) {
                nomes.push(sacola[i].nome);
            }
        }

        return nomes;
    }



    function aumentarQuantidade(indice) {

        var sacola = JSON.parse(localStorage.getItem("sacola")) || [];

        var nomes = pegarNomes();
        var nome = nomes[indice];

        for (var i = 0; i < sacola.length; i++) {

            if (sacola[i].nome == nome) {

                sacola.push({
                    nome: sacola[i].nome,
                    preco: sacola[i].preco
                });

                break;
            }
        }

        localStorage.setItem("sacola", JSON.stringify(sacola));

        mostrarSacola();
    }



    function diminuirQuantidade(indice) {

        var sacola = JSON.parse(localStorage.getItem("sacola")) || [];

        var nomes = pegarNomes();
        var nome = nomes[indice];

        for (var i = 0; i < sacola.length; i++) {

            if (sacola[i].nome == nome) {

                sacola.splice(i, 1);
                break;
            }
        }

        localStorage.setItem("sacola", JSON.stringify(sacola));

        mostrarSacola();
    }



    function removerProduto(indice) {

        var sacola = JSON.parse(localStorage.getItem("sacola")) || [];

        var nomes = pegarNomes();
        var nome = nomes[indice];

        var novaSacola = [];

        for (var i = 0; i < sacola.length; i++) {

            if (sacola[i].nome != nome) {
                novaSacola.push(sacola[i]);
            }
        }

        localStorage.setItem("sacola", JSON.stringify(novaSacola));

        mostrarSacola();
    }



    function atualizarResumo() {

        var sacola = JSON.parse(localStorage.getItem("sacola")) || [];

        var subtotal = 0;

        for (var i = 0; i < sacola.length; i++) {
            subtotal += sacola[i].preco;
        }

        var taxa = 0;

        if (sacola.length > 0) {
            taxa = 8;
        }

        var desconto = subtotal * descontoSacola;

        var total = subtotal + taxa - desconto;

        document.getElementById("quantidade-itens").innerHTML = sacola.length;
        document.getElementById("subtotal").innerHTML = formatarPreco(subtotal);
        document.getElementById("taxa-entrega").innerHTML = formatarPreco(taxa);
        document.getElementById("valor-desconto").innerHTML = "- " + formatarPreco(desconto);
        document.getElementById("total").innerHTML = formatarPreco(total);
    }



    function aplicarCupom() {

        var cupom = document.getElementById("cupom").value.toUpperCase().trim();

        if (cupom == "YG10") {

            descontoSacola = 0.10;

            alert("Cupom aplicado! Você ganhou 10% de desconto.");

        } else {

            descontoSacola = 0;

            alert("Cupom inválido!");

        }

        atualizarResumo();
    }



    function finalizarPedido() {

        var sacola = JSON.parse(localStorage.getItem("sacola")) || [];

        if (sacola.length == 0) {

            alert("Sua sacola está vazia!");
            return;
        }

        alert("Pedido realizado com sucesso! Obrigado por escolher a YG Burguer!");

        localStorage.removeItem("sacola");

        descontoSacola = 0;

        mostrarSacola();
    }



    mostrarSacola();
    function mascara_cpf() {

        var campo = document.getElementById("perfilCpf");
        
        var cpf = campo.value.replace(/\D/g, "");
        
        cpf = cpf.slice(0, 11);
        
        if (cpf.length > 9) {
        
        cpf = cpf.slice(0, 3) + "." +
        cpf.slice(3, 6) + "." +
        cpf.slice(6, 9) + "-" +
        cpf.slice(9);
        
        } else if (cpf.length > 6) {
        
        cpf = cpf.slice(0, 3) + "." +
        cpf.slice(3, 6) + "." +
        cpf.slice(6);
        
        } else if (cpf.length > 3) {
        
        cpf = cpf.slice(0, 3) + "." + cpf.slice(3);
        
        }
        
        campo.value = cpf;
        }
        
        

        function mascara_cep() {
        
        var campo = document.getElementById("cepPerfil");
        
        var cep = campo.value.replace(/\D/g, "");
        
        cep = cep.slice(0, 8);
        
        if (cep.length > 5) {
        
        cep = cep.slice(0, 5) + "-" + cep.slice(5);
        
        }
        
        campo.value = cep;
        }
        
        

        function carregarPerfil() {
        
        var campoNome = document.getElementById("perfilNome");
        
        if (campoNome == null) {
        return;
        }
        
        var nome = localStorage.getItem("nomeUsuario") || "";
        var email = localStorage.getItem("emailUsuario") || "";
        var telefone = localStorage.getItem("telefoneUsuario") || "";
        var cpf = localStorage.getItem("cpfUsuario") || "";
        var nascimento = localStorage.getItem("nascimentoUsuario") || "";
        var genero = localStorage.getItem("generoUsuario") || "";
        
        campoNome.value = nome;
        
        document.getElementById("perfilEmail").value = email;
        document.getElementById("telefone").value = telefone;
        document.getElementById("perfilCpf").value = cpf;
        document.getElementById("perfilNascimento").value = nascimento;
        document.getElementById("perfilGenero").value = genero;
        
        document.getElementById("nome-lateral").innerText =
        nome || "Meu Perfil";
        
        document.getElementById("email-lateral").innerText =
        email || "Meu e-mail";
        
        document.getElementById("pontosUsuario").innerText =
        localStorage.getItem("pontosUsuario") || "0";
        
        mostrarEndereco();
        }
        

        function salvarPerfil() {
        
        var nome = document.getElementById("perfilNome").value.trim();
        var email = document.getElementById("perfilEmail").value.trim();
        var telefone = document.getElementById("telefone").value;
        var cpf = document.getElementById("perfilCpf").value;
        var nascimento = document.getElementById("perfilNascimento").value;
        var genero = document.getElementById("perfilGenero").value;
        
        if (nome == "" || email == "" || telefone == "" ||
        cpf == "" || nascimento == "") {
        
        alert("Preencha todos os campos obrigatórios!");
        return;
        }
        
        if (telefone.length != 14) {
        
        alert("Digite um telefone válido!");
        return;
        }
        
        if (cpf.length != 14) {
        
        alert("Digite um CPF com 11 números!");
        return;
        }
        
        localStorage.setItem("nomeUsuario", nome);
        localStorage.setItem("emailUsuario", email);
        localStorage.setItem("telefoneUsuario", telefone);
        localStorage.setItem("cpfUsuario", cpf);
        localStorage.setItem("nascimentoUsuario", nascimento);
        localStorage.setItem("generoUsuario", genero);
        
        document.getElementById("nome-lateral").innerText = nome;
        document.getElementById("email-lateral").innerText = email;
        
        alert("Seus dados foram atualizados com sucesso!");
        }

        function editarEndereco() {
        
        var formulario = document.getElementById("formulario-endereco");
        
        if (formulario.style.display == "none") {
        
        formulario.style.display = "block";
        
        } else {
        
        formulario.style.display = "none";
        
        }
        }
        

        function salvarEndereco() {
        
        var rua = document.getElementById("ruaPerfil").value.trim();
        var bairro = document.getElementById("bairroPerfil").value.trim();
        var cidade = document.getElementById("cidadePerfil").value.trim();
        var cep = document.getElementById("cepPerfil").value.trim();
        
        if (rua == "" || bairro == "" || cidade == "" || cep == "") {
        
        alert("Preencha todos os campos do endereço!");
        return;
        }
        
        if (cep.length != 9) {
        
        alert("Digite um CEP válido!");
        return;
        }
        
        localStorage.setItem("ruaUsuario", rua);
        localStorage.setItem("bairroUsuario", bairro);
        localStorage.setItem("cidadeUsuario", cidade);
        localStorage.setItem("cepUsuario", cep);
        
        mostrarEndereco();
        
        document.getElementById("formulario-endereco").style.display = "none";
        
        alert("Endereço salvo com sucesso!");
        }
        

        function mostrarEndereco() {
        
        var area = document.getElementById("endereco-salvo");
        
        if (area == null) {
        return;
        }
        
        var rua = localStorage.getItem("ruaUsuario") || "";
        var bairro = localStorage.getItem("bairroUsuario") || "";
        var cidade = localStorage.getItem("cidadeUsuario") || "";
        var cep = localStorage.getItem("cepUsuario") || "";
        
        if (rua == "") {
        
        area.innerText = "Nenhum endereço cadastrado.";
        return;
        }
        
        area.innerText = rua + "\n" +
        bairro + " - " + cidade + "\n" +
        "CEP: " + cep;
        
        document.getElementById("ruaPerfil").value = rua;
        document.getElementById("bairroPerfil").value = bairro;
        document.getElementById("cidadePerfil").value = cidade;
        document.getElementById("cepPerfil").value = cep;
        }

        function irParaPerfil(secao) {
        
        var area = document.getElementById(secao);
        
        if (area != null) {
        
        area.scrollIntoView({
        behavior: "smooth"
        });
        
        }
        }
        
        

        function avisoPerfil() {
        
        alert("Essa função estará disponível em breve!");
        
        }

        function verPedidos() {
        
        alert("Você ainda não possui pedidos no histórico!");
        
        }
        

        carregarPerfil();
    
    var hamburgueresBusca = [
        {
        nome: "YG Especial",
        imagem: "imagens/yg-especial.png",
        descricao: "Pao brioche, burger 170g, cheddar, bacon, alface, tomate e molho especial."
        },
        {
        nome: "Double YG",
        imagem: "imagens/double-yg.png",
        descricao: "Pao brioche, 2 burgers 170g, cheddar, bacon e molho especial."
        },
        {
        nome: "Spicy YG",
        imagem: "imagens/spicy-yg.png",
        descricao: "Pao brioche, burger 170g, cheddar, bacon, pimenta jalapeno, alface e tomate."
        },
        {
        nome: "BBQ Bacon",
        imagem: "imagens/bbq-bacon.png",
        descricao: "Pao brioche, burger 170g, cheddar, bacon crocante e molho barbecue."
        },
        {
        nome: "Funchi YG",
        imagem: "imagens/funchi-yg.png",
        descricao: "Pao brioche, burger 170g, queijo prato, funghi, rucula e molho especial."
        }
        ];
        

        function limparTexto(texto) {
        
        return texto.toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
        
        }

        function buscarHamburguer() {
        
        var campo = document.getElementById("campoBusca");
        
        var pesquisa = limparTexto(campo.value.trim());
        
        if (pesquisa == "") {
        
        alert("Digite o nome de um hambúrguer ou ingrediente!");
        return;
        }
        
        mostrarResultados(pesquisa);
        }
        
        

        function buscarIngrediente(ingrediente) {
        
        document.getElementById("campoBusca").value = ingrediente;
        
        mostrarResultados(limparTexto(ingrediente));
        
        }
        
        
        function buscarCategoria(categoria) {
        
        if (categoria == "Hambúrgueres") {
        
        mostrarResultados("");
        
        } else {
        
        alert("Ainda não temos produtos nessa categoria!");
        
        }
        }
        

        function mostrarResultados(pesquisa) {
        
        var area = document.getElementById("lista-resultados");
        
        var mensagem = document.getElementById("mensagem-busca");
        
        area.innerHTML = "";
        
        var encontrados = 0;
        
        for (var i = 0; i < hamburgueresBusca.length; i++) {
        
        var produto = hamburgueresBusca[i];
        
        var nome = limparTexto(produto.nome);
        
        var descricao = limparTexto(produto.descricao);
        
        if (nome.includes(pesquisa) ||
        descricao.includes(pesquisa)) {
        
        encontrados++;
        
        area.innerHTML +=
        '<div class="resultado-produto">' +
        '<img src="' + produto.imagem + '" alt="' + produto.nome + '">' +
        '<h3>' + produto.nome + '</h3>' +
        '<p>' + produto.descricao + '</p>' +
        '<a href="cardápio.html">VER NO CARDÁPIO ↗</a>' +
        '</div>';
        }
        }
        
        if (encontrados == 0) {
        
        mensagem.innerText =
        "Nenhum hambúrguer encontrado. Tente outra busca!";
        
        } else {
        
        mensagem.innerText =
        encontrados + " hambúrguer(es) encontrado(s).";
        
        }
        
        document.getElementById("resultados-busca").scrollIntoView({
        behavior: "smooth"
        });
        }
        
          function carregarBusca() {
        
        var campo = document.getElementById("campoBusca");
        
        if (campo == null) {
        return;
        }
        
        var parametros = new URLSearchParams(window.location.search);
        
        var pesquisa = parametros.get("busca");
        
        if (pesquisa != null && pesquisa != "") {
        
        campo.value = pesquisa;
        
        mostrarResultados(limparTexto(pesquisa));
        
        }
        }
        
        

        carregarBusca();

        document.addEventListener("DOMContentLoaded", function () {
            const botao = document.getElementById("alternar-tema");
            const temaSalvo = localStorage.getItem("temaYG");
            
            function aplicarTema(escuro) {
            document.body.classList.toggle("modo-escuro", escuro);
            
            if (botao) {
            botao.textContent = escuro
            ? "Modo claro"
            : "Modo escuro";
            }
            }
            
            aplicarTema(temaSalvo === "escuro");
            
            if (botao) {
            botao.addEventListener("click", function () {
            const escuro = !document.body.classList.contains("modo-escuro");
            
            aplicarTema(escuro);
            
            localStorage.setItem(
            "temaYG",
            escuro ? "escuro" : "claro"
            );
            });
            }
            });
            
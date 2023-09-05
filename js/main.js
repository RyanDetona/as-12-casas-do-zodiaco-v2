function descobrirCDZ(){
    const texto = document.querySelector("h1");
    const imagem = document.querySelector("img");
    const data = document.querySelector('#data').value;
    const biogra = document.querySelector("p");
    
    if(data >='2023/05/21' && data <='2023/06/20'){
        texto.innerHTML = "Gêmeos";
        imagem.setAttribute("src","img/gemeos.png");
        imagem.setAttribute("width","300px");
        biogra.innerHTML = "Gêmeos Saga - Representando Gêmeos, Saga personifica a dualidade. Ele tem uma personalidade dupla, alternando entre o bem e o mal. Isso reflete a natureza versátil e adaptável dos geminianos.";
    }

    else if(data >='2023/10/23' && data <='2023/11/21'){
        texto.innerHTML = "Escorpião";
        imagem.setAttribute("src","img/escorpiao.png");
        imagem.setAttribute("width","300px");
        biogra.innerHTML = "Escorpião Milo - Como Escorpião, Milo é intenso e apaixonado. Ele é ferozmente protetor de seus amigos e luta com determinação, refletindo a natureza poderosa e misteriosa dos escorpianos.";
    }
    
    else if(data >='2023/02/19' && data <='2023/03/20'){
        texto.innerHTML = "Peixes";
        imagem.setAttribute("src","img/peixes.png");
        imagem.setAttribute("width","300px");
        biogra.innerHTML = "Peixes Afrodite - Afrodite personifica Peixes com sua beleza e compaixão. Ele é gentil, compassivo e sensível, como os piscianos, e valoriza a paz e a harmonia acima de tudo.";
    }
    else if(data >='2023/03/21' && data <='2023/04/20'){
        texto.innerHTML = "Áries";
        imagem.setAttribute("src","img/aries.png");
        imagem.setAttribute("width","300px");
        biogra.innerHTML = "Aries Mu - Representando o signo de Áries, Mu é conhecido por sua coragem e determinação. Assim como um típico ariano, ele é impulsivo e está disposto a enfrentar desafios de frente, defendendo a justiça com todo o seu";
    }
    else if(data >='2023/04/21' && data <='2023/05/20'){
        texto.innerHTML = "Touro";
        imagem.setAttribute("src","img/touro.png");
        imagem.setAttribute("width","300px");
        biogra.innerHTML = "Touro Aldebaran - Touro é o signo de Aldebaran, e Aldebaran personifica a força bruta e a resistência de um típico taurino. Ele é paciente, mas quando provocado, sua fúria é incontrolável, protegendo seus ideais e amigos com determinação.";
    }
    else if(data >='2023/08/23' && data <='2023/09/22'){
        texto.innerHTML = "Virgem";
        imagem.setAttribute("src","img/virgem.png");
        imagem.setAttribute("width","300px");
        biogra.innerHTML = "Virgem Shaka - Representando Virgem, Shaka é altamente analítico e perfeccionista. Ele é dotado de sabedoria e habilidades críticas, refletindo a natureza cuidadosa e meticulosa dos virginianos.";
    }
    else if(data >='2023/01/21' && data <='2023/02/18'){
        texto.innerHTML = "Aquario";
        imagem.setAttribute("src","img/aquario.jpg");
        imagem.setAttribute("width","300px");
        biogra.innerHTML = "Aquário Camus - Representando Aquário, Camus é intelectual e progressista. Ele valoriza a amizade e a inovação, refletindo a natureza humanitária e criativa dos aquarianos.";
    }
    else if(data >='2023/11/22' && data <='2023/12/21'){
        texto.innerHTML = "Sagitario";
        imagem.setAttribute("src","img/sargitario.png");
        imagem.setAttribute("width","300px");
        biogra.innerHTML = "Sagitário Aiolos - Sagitário é o signo de Aiolos, e ele representa a liberdade e a aventura. Ele é otimista, corajoso e busca constantemente expandir seus horizontes, características típicas dos sagitarianos.";
    }
    else if(data >='2023/12/22' && data <='2023/01/20'){
        texto.innerHTML = "Capricornio";
        imagem.setAttribute("src","img/capricornio.png");
        imagem.setAttribute("width","300px");
        biogra.innerHTML = "Capricórnio Shura - Shura, como Capricórnio, é disciplinado e ambicioso. Ele é determinado a alcançar seus objetivos e não se deixa distrair facilmente, refletindo a natureza trabalhadora dos capricornianos.";
    }
    else if(data >='2023/07/23' && data <='2023/08/22'){
        texto.innerHTML = "Leão";
        imagem.setAttribute("src","img/leao.png");
        imagem.setAttribute("width","300px");
        biogra.innerHTML = "Leão Aiolia - Leão é o signo de Aiolia, e ele brilha com um poder majestoso. Ele é leal, generoso e tem uma personalidade carismática, semelhante à dos leoninos.";
    }
    else if(data >='2023/09/23' && data <='2023/10/22'){
        texto.innerHTML = "Libra";
        imagem.setAttribute("src","img/libra.png");
        imagem.setAttribute("width","300px");
        biogra.innerHTML = "Libra Dohko - Libra é o signo de Dohko, e ele busca constantemente o equilíbrio e a justiça. Assim como os librianos, ele valoriza a harmonia e a paz, fazendo o possível para mantê-las.";
    }
    else if(data >='2023/06/21' && data <='2023/07/22'){
        texto.innerHTML = "Cancer";
        imagem.setAttribute("src","img/cancer.png");
        imagem.setAttribute("width","300px");
        biogra.innerHTML = "Câncer Deathmask - Como Câncer, Deathmask é misterioso e emocional. Ele esconde seus sentimentos sob uma máscara, revelando sua sensibilidade apenas quando necessário, característica dos cancerianos.";
    }
    else{
        texto.innerHTML = "Cavaleiro não encontrado... =(";
        imagem.setAttribute("src","img/x.webp");
        imagem.setAttribute("width","250px");
    }
}
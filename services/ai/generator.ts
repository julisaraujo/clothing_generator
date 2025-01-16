const Groq = require('groq-sdk');

const groq = new Groq({ apiKey: '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' });

export async function geradorRoupa(roupas: string) {
    try {
        const chatCompletion = await groq.chat.completions.create({
            "messages": [
                {
                    "role": "user",
                    "content": "Estou fazendo um app onde o usuário entrará com um evento e quero responder com sugestões de combinações de roupas que sejam estilosas e adequadas para a ocasião."
                },
                {
                    
                    "role": "assistant",
                    "content": "Ótima ideia! Vou sugerir combinações de roupas estilosas e adequadas para o evento que você mencionar. Envie o evento e eu responderei com uma combinação perfeita!"
                },
                {
                    "role": "user",
                    "content": "Ir para uma festa de casamento"
                },
                {
                    "role": "assistant",
                    "content": "\"Para uma festa de casamento, recomendo: \n- Um terno cinza claro com camisa branca e gravata azul-marinho.\n- Sapatos de couro preto com um cinto combinando.\n- Para um toque extra, um lenço de bolso estampado e um relógio clássico.\""
                },
                {
                    "role": "user",
                    "content": "Ir a um churrasco com amigos"
                },
                {
                    "role": "assistant",
                    "content": "\"Para um churrasco com amigos: \n- Uma camisa polo ou camiseta básica em tons neutros ou pastel.\n- Shorts de sarja ou jeans em um corte confortável.\n- Tênis casual ou sandálias de couro para um visual descontraído.\n- Óculos de sol e um boné para proteger do sol.\""
                },
                {
                    "role": "user",
                    "content": "Ir a uma reunião de negócios"
                },
                {
                    "role": "assistant",
                    "content": "\"Para uma reunião de negócios: \n- Um blazer preto ou azul-marinho com uma camisa social branca.\n- Calças de alfaiataria combinando com sapatos sociais.\n- Uma gravata discreta para complementar o look formal.\n- Leve uma pasta ou bolsa executiva para documentos.\""
                }
            ],
            "model": "llama-3.1-70b-versatile",
            "temperature": 1,
            "max_tokens": 100,
        });

        return chatCompletion.choices[0]?.message.content;
    } catch (error) {
        console.log(error);
        const roupas = [
            "Camiseta branca básica, calça jeans e tênis branco.",
            "Blusa de tricô bege, saia midi e botas pretas.",
            "Camisa social azul clara, calça de alfaiataria cinza e sapatos marrons.",
            "Jaqueta jeans, camiseta preta, calça skinny preta e tênis esportivo.",
            "Vestido floral leve, sandálias de tiras e uma bolsa pequena.",
            "Blusa de manga longa listrada, calça preta e sapatos oxford.",
            "Camisa xadrez, camiseta branca por baixo, calça cargo e botas.",
            "Casaco oversized bege, leggings pretas e tênis casual.",
            "T-shirt gráfica, shorts jeans e chinelos confortáveis.",
            "Regata cinza, bermuda de sarja e mocassim.",
            "Blazer preto, camiseta básica branca, calça jeans escura e tênis casual.",
            "Sweater verde, saia plissada preta e sapatilhas.",
            "Camiseta tie-dye, calça de moletom cinza e chinelos de pelúcia.",
            "Camisa estampada tropical, shorts de linho branco e sandálias.",
            "Blusa de gola alta preta, jardineira jeans e tênis branco.",
            "Camiseta de algodão pastel, calça jogger e tênis esportivo.",
            "Jaqueta de couro preta, camiseta cinza, calça preta e botas de cano curto.",
            "Blusa rendada, calça pantalona e sandálias de salto bloco.",
            "Cardigan longo, regata branca, calça legging e botas de montaria.",
            "Moletom com capuz, calça de moletom e tênis slip-on."
        ];

        return roupas[Math.floor(Math.random() * roupas.length)]
    }
}





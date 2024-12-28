from dotenv import load_dotenv # puxar api do arquivo oculto
import os # executar comandos 
import time
import google.generativeai as genai
import json

# aplica a API_KEY para buscar com a IA
load_dotenv()

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))
model = genai.GenerativeModel("gemini-1.5-flash-002")



with open('./flask/sistema/documentos.txt', 'r', encoding='utf-8') as arquivo:
    conteudo = arquivo.read()

print(conteudo)


prompt = f"Me explica tudo sobre o seguinte conteúdo: {conteudo}"
print("Carregando... Isso pode levar alguns segundos.")
response = model.generate_content(prompt)
resultado = response.text


# Dicionário que vai virar o dados.json
treino = {
    "treino": resultado
}


# Cria o dados.json com a resposta da IA
with open('dados.json', 'w', encoding='utf-8') as arquivo:
    json.dump(treino, arquivo, indent=4, ensure_ascii=False)
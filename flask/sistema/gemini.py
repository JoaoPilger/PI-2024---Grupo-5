from dotenv import load_dotenv # puxar api do arquivo oculto
from langchain.utilities import GoogleSearchAPIWrapper as google # buscar direto do Google
from langchain_community.document_loaders import PyPDFLoader # carregar PDFs
from langchain.text_splitter import RecursiveCharacterTextSplitter as splitter # quebrar o texto em várias partes
import os # executar comandos 
import time
import google.generativeai as genai

a = time.time() # marcador de tempo
# aplica a API_KEY para buscar com a IA
load_dotenv()

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

model = genai.GenerativeModel("gemini-1.5-flash-002")

prompt = f"Crie uma rotina de exercícios físicos com no máximo 2 linhas"
print("carregando")
response = model.generate_content(prompt)

artigos = ["./flask/sistema/artigos/atividade_fisica_saude_mental_e_reabilitacao_psicossocial.pdf",
    "./flask/sistema/artigos/beneficios_da_atividade_fisica_e_do_exercicio_fisico_na_depressao.pdf",
    "./flask/sistema/artigos/conhecimento_de_adolescentes_acerca_dos_beneficios_do_exercicio_fisico_para_a_saude_mental.pdf",
    "./flask/sistema/artigos/efeito_da_atividade_fisica_associada_a_orientacao_alimentar_em_adolescentes_obesos_comparacao_entre_o_exercicio_aerobio_e_anaerobio.pdf",
    "./flask/sistema/artigos/efeitos_dos_exercicios_fisicos_em_criancas_e_adolescentes.pdf",
    "./flask/sistema/artigos/efeitos_psicofisiologicos_do_exercicio_fisico_em_pacientes_com_transtornos_de_ansiedade_e_depressao.pdf",
    "./flask/sistema/artigos/exercicio_comportamento_alimentar_e_obesidade_revisao_dos_efeitos_sobre_a_composicao_corpoera_e_parametros_metabolicos.pdf",
    "./flask/sistema/artigos/exercicio_fisico_e_obesidade_morbida_uma_revisao_sistematica.pdf",
    "./flask/sistema/artigos/exercicio_fisico_e_sindrome_metabolica.pdf",
    "./flask/sistema/artigos/influencia_da_educacao_fisica_na_saude_mental_de_estudantes_universitarios.pdf",
    "./flask/sistema/artigos/o_efeito_antidepressivo_do_exercicio_fisico.pdf",
    "./flask/sistema/artigos/o_exercicio_fisico_e_os_aspectos_psicobiologicos.pdf",
    "./flask/sistema/artigos/obesidade_em_adolescentes_e_as_politicas_publicas_de_nutricao.pdf", 
    "./flask/sistema/artigos/prescricao_de_exercicios_fisicos_por_inteligencia_artificial_a_educacao_fisica_vai_acabar.pdf"]

all_docs = [] # conhecimento dos artigos acima

blocos__texto = 0 # debug

for pdf in artigos:
    carregados = PyPDFLoader(pdf) # puxa um pdf
    docs = carregados.load() # carrega o pdf
    all_docs.extend(docs) # adiciona o conteúdo em all_docs
    blocos__texto += 1
    
# divide o texto dos artigos em partes menores, pra acelerar o processamento
cortado = splitter(chunk_size=1000, chunk_overlap=50)
all_docs = cortado.split_documents(all_docs)

print(all_docs)

b = time.time() # marcador de tempo

print(f'{b - a}, segundos') # debug
print("Blocos de texto: ",blocos__texto) #debug
from dotenv import load_dotenv # Puxar api do arquivo oculto
import google.generativeai as genai # GEMINI
from langchain.llms.base import LLM # base de IA
from langchain.utilities import GoogleSearchAPIWrapper as google # buscar direto do Google
from langchain_community.document_loaders import PyPDFLoader # carregar PDFs
from langchain.text_splitter import RecursiveCharacterTextSplitter as splitter # quebrar o texto em várias partes
import os # executar comandos 
import time

a = time.time()

 # aplica a API_KEY para buscar com a IA
load_dotenv() 
genai.configure(api_key=os.getenv("API_KEY"))


artigos = ["./sistema/artigos/atividade_fisica_saude_mental_e_reabilitacao_psicossocial.pdf",
           "./sistema/artigos/beneficios_da_atividade_fisica_e_do_exercicio_fisico_na_depressao.pdf",
           "./sistema/artigos/conhecimento_de_adolescentes_acerca_dos_beneficios_do_exercicio_fisico_para_a_saude_mental.pdf",
           "./sistema/artigos/efeito_da_atividade_fisica_associada_a_orientacao_alimentar_em_adolescentes_obesos_comparacao_entre_o_exercicio_aerobio_e_anaerobio.pdf",
           "./sistema/artigos/efeitos_dos_exercicios_fisicos_em_criancas_e_adolescentes.pdf",
           "./sistema/artigos/efeitos_psicofisiologicos_do_exercicio_fisico_em_pacientes_com_transtornos_de_ansiedade_e_depressao.pdf",
           "./sistema/artigos/exercicio_comportamento_alimentar_e_obesidade_revisao_dos_efeitos_sobre_a_composicao_corpoera_e_parametros_metabolicos.pdf",
           "./sistema/artigos/exercicio_fisico_e_obesidade_morbida_uma_revisao_sistematica.pdf",
           "./sistema/artigos/exercicio_fisico_e_sindrome_metabolica.pdf",
           "./sistema/artigos/influencia_da_educacao_fisica_na_saude_mental_de_estudantes_universitarios.pdf",
           "./sistema/artigos/o_efeito_antidepressivo_do_exercicio_fisico.pdf",
           "./sistema/artigos/o_exercicio_fisico_e_os_aspectos_psicobiologicos.pdf",
           "./sistema/artigos/obesidade_em_adolescentes_e_as_politicas_publicas_de_nutricao.pdf",
           "./sistema/artigos/prescricao_de_exercicios_fisicos_por_inteligencia_artificial_a_educacao_fisica_vai_acabar.pdf"]

all_docs = [] # conhecimento dos artigos acima


for pdf in artigos:
    carregados = PyPDFLoader(pdf) # puxa um pdf
    docs = carregados.load() # carrega o pdf
    all_docs.extend(docs) # adiciona o conteúdo em all_docs
    
# divide o texto dos artigos em partes menores, pra acelerar o processamento
cortado = splitter(chunk_size=1000, chunk_overlap=50)
all_docs = cortado.split_documents(all_docs)

print(all_docs)

b = time.time()

print(f'{b - a}, segundos')
    
    

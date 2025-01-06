from flask import Flask, render_template, request, jsonify, send_from_directory
import os
import json
import subprocess

def rgb_text(r, g, b, text):
    return f"\033[38;2;{r};{g};{b}m{text}\033[0m"

# Cria a aplicação Flask
app = Flask(__name__)

print(rgb_text(171, 248, 202,'''                                                                                                                        
                                lkkkkkkkkkkx,                                okkkkkkkkkkko                              
                               :X0.       cXK                                       .oXX:                               
                               cXO               ,dkkkkkkx;    xk,dkkkkko.          lX0                                 
                               cXO     ......    0X,    'XK.   KX'    .xXo        .OX:                                  
                               cXO    dKKKKXK    KXc;;;;:XX.   KX.     dXo       cX0                                    
                               cXO        'XK    KXo.......    KX.     dXo     .kXc                                     
                               cXO........;XK    KX.           KX.     dXo    :KX:........                              
                                dKKKKKKKKKK0'    ,0KKKKKKK0.   0K.     oKl   dKKKKKKKKKKK0                              ''')),
print(rgb_text(255, 255, 255,'''                                                                                                                        
                                                                                                                        
                                                                                                                        
                                                                                                                        
                                                                                        .'.                             
         0NNNNNNNNNXx'                                                                  cxc                             
         XM,        OMx                                                                                                 
         XM,        .MW   WW      NM.  0MKXMMMMMNd    kMMMMMMMNo   ,MMXWMMMW0oNMMMWX.   lMd   .XMMMMMMMN;   cNMMMMMMMl  
         XM,        .MW   .MN    WM'   0M;     .MN           .MN   ,M0     NM.    OMc   lMd   oMx     lMk   KM,         
         XM,        .MW    .M0  KM,    0M'     .MN    xXXXXXXWMN   ,M0     NM.    OMc   lMd   oMx           lMXkkkkkk'  
         XM,        lMX     :MOkM:     0M'     .MN   .MK     'MN   ,M0     NM.    OMc   lMd   oMx     ...          .MN  
         XMX,,,,,,lOMK       cMMc      0M'     .MN   .MMc,,,,kMN   ,M0     NM.    OMc   lMd   lMM,,,,,NMk   .,,,,,,OMX  
                             oMd                                                                                        
                            'Mx                                                                                         
                           .MK                                                                                          
                                                                                                                        
'''))

# Define a rota para a página inicial
@app.route('/')
def home():
    return render_template('index.html')


#Rota onde o formulário é carregado
@app.route('/avaliacao')
def avaliacao():
    return render_template('formulario/formulario.html')

#Rota onde a resposta da IA é armazenada
@app.route('/dados')
def dados():
    base_dir = 'flask/sistema'
    caminho_json = os.path.join(base_dir, 'respostaIA.json')

    with open(caminho_json, 'r', encoding='utf-8') as f:
        dados = json.load(f)  # Carrega os dados do JSON
    return jsonify(dados)

#Rota com a página de resultados formatados
@app.route('/resultado')
def resultado():
    gemini = "flask/sistema/gemini.py"
    subprocess.Popen(["python", gemini])

    return render_template('resultado/resultado.html')

json_path = os.path.join(os.getcwd(), 'flask', 'sistema', 'data.json')


@app.route('/save_data', methods=['POST'])
def save_data():
    try:
        # Pega os dados do formulário em formato de JSON
        data = request.get_json()

        # Confere se o arquivo JSON já existe
        if not os.path.exists(json_path):
            # Se não, cria um novo arquivo com um objeto vazio
            with open(json_path, 'w') as f:
                json.dump({}, f)

        # Salva os dados atualizados no arquivo JSON, sobrescrevendo qualquer uso anterior
        with open(json_path, 'w') as f:
            json.dump(data, f, indent=2)

        # Retorna uma resposta JSON
        return jsonify({'status': 'success', 'message': 'Dados salvos com sucesso!'})

    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)})
    


# Inicia o servidor Flask
if __name__ == '__main__':
    app.run(debug=True, use_reloader=False)
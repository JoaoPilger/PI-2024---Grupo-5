from flask import Flask, render_template

# Cria a aplicação Flask
app = Flask(__name__)

# Define a rota para a página inicial
@app.route('/')
def home():
    return render_template('index.html')

@app.route('/avaliacao')
def avaliacao():
    return render_template('formulario/formulario.html')

# Inicia o servidor Flask se este arquivo for executado diretamente
if __name__ == '__main__':
    app.run(debug=True)
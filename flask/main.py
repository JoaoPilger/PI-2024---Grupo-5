from flask import Flask, render_template

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

@app.route('/avaliacao')
def avaliacao():
    return render_template('formulario/formulario.html')

# Inicia o servidor Flask se este arquivo for executado diretamente
if __name__ == '__main__':
    app.run(debug=True, use_reloader=False)
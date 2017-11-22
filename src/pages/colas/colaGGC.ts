import { ResultadosColas } from './ResultadosColas';
import calcularMMC from './colaMMC';

export default function calcularGGC(
    lambda:number, 
    miu: number,
    servidores: number,
    tiempoEsperadoArribos: number,
    tiempoEsperadoServicio: number,
    desviacionArribos: number,
    desviacionServicio: number
): ResultadosColas {
    let resultados =  new ResultadosColas();
    let ro = lambda/miu;
    let coefVarArribos = desviacionArribos/tiempoEsperadoArribos;
    let coefVarSerivicio = desviacionServicio/tiempoEsperadoServicio;
    resultados.L = lambda/(miu-lambda);
    resultados.W = 1/(miu-lambda);
    resultados.Ls = lambda/miu;
    resultados.Ws = 1/miu;
    // Aproximación de Kingman ↓
    resultados.Lq = (Math.pow(coefVarArribos,2)+Math.pow(coefVarSerivicio,2))/2;
    resultados.Lq = resultados.Lq*Math.pow(ro,2)/(1-ro);
    if(servidores == 1){
        resultados.Wq = (Math.pow(coefVarArribos,2)+Math.pow(coefVarSerivicio,2))/2;
        resultados.Wq = resultados.Wq*ro/(miu-miu*ro);
    }
    else{
        // TODO: implementar con Lq de MMC
        //calcularMMC(lambda,miu,servidores);
    }
    return resultados;
}
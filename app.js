function onLoad(generarexcusa) {

    let quien = ('la conexión a internet','mi mamá','el tiempo','el trafico');
    let que = ('no me dejó entrar a','interrumpió','canceló','entorpeció');
    let aque = ('mi clase','la reunión','la junta','la llamada');

    let sujeto = quien(Math.floor(Math.random() * quien.length));
    let accion = que(Math.floor(Math.random() * que.length));
    let complemento = aque(Math.floor(Math.random() * cuando.length));

    return `${sujeto} ${accion} ${complemento}`
}
console.log(onLoad(generarexcusa));
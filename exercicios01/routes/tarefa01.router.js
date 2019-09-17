module.exports = app => {
    app.post('/tarefa01', (req, res) => {
        var custoFab = req.body.custoFabricacao;
        var percDistrib = req.body.percentualDistrib;
        var percImp = req.body.percentualImpostos;
        var custoFinal = custoFab + (((custoFab / 100) * percDistrib) + ((custoFab / 100) * percImp));

        console.log(custoFab);
        console.log(req.body);
        console.log('---------------------')
        res.send({
            custoFabricacao: custoFab,
            percentualDistrib: percDistrib,
            percentualImpostos: percImp,
            custoFinal: custoFinal
        });

    });
}